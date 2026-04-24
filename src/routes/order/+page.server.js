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
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        
        const response = await fetch(endpoint);
        const menu = await response.json();
        
        const orderItems = [];
        
        menu.forEach((food) => {
            const quantity = data.get(food.id + '_quantity');
            
            if (quantity && quantity > 0) {
                orderItems.push({
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    quantity: quantity
                });
            }
        });
        
        if (orderItems.length === 0) {
            return fail(400, { message: "Please select at least one item."});
        }
            
        cookies.set('order', JSON.stringify(orderItems), { path: '/' });
        
        return redirect(302, '/checkout');
    }
};