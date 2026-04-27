import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';
import { APIError } from 'better-auth/api';

const endpoint = "http://localhost:3000/menu";

export const load = async (event) => {
    if (event.locals.user) {
		const response = await fetch(endpoint);
		const menu = await response.json();
		
        return {
            isLoggedIn: true,
            user: event.locals.user,
			menu
        };
    }

    return {
        isLoggedIn: false,
        user: undefined
    };
};

export const actions = {
    default: async ({ request, cookies, locals }) => {
        const data = await request.formData();
        
        const response = await fetch(endpoint);
        const menu = await response.json();
        
        const items = [];
        
        let subtotal = 0;
        
        menu.forEach((food) => {
            const quantity = parseInt(data.get(food.id + '_quantity'));
            subtotal += food.price * quantity;
        });
        
        const user = locals.user;
        
        if (subtotal > user.balance) {
            return fail(400, { message: `Order exceeds your balance. (€${user.balance})` });
        }
        
        menu.forEach((food) => {
            const quantity = parseInt(data.get(food.id + '_quantity'));
            
            if (quantity && quantity > 0) {
                items.push({
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    quantity: quantity
                });
            }
        });
        
        if (items.length === 0) {
            return fail(400, { message: "Please select at least one item."});
        }
        
        let filter;

        if (data.get("comment")) {
            filter = data.get("comment");
        } else {
            filter = data.getAll("check");
        }
            
        cookies.set('order', JSON.stringify({items, filter}), { path: '/' });
        
        return redirect(302, '/checkout');
    }
};