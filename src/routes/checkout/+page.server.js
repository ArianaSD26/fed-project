import { redirect } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export function load({ cookies }) {
    let cookie = cookies.get('order');
    if (!cookie) {
        return { items: [], filter: null };
    }

    let { items, filter } = JSON.parse(cookie);
    return { items, filter };
}

export const actions = {
    default: async ({ request, cookies, locals }) => {
        const data = await request.formData();

        const name = locals.user.name;
        const address = data.get('address');
        const payment = data.get('payment');

        const cookie = cookies.get('order');

        const { items, filter } = JSON.parse(cookie);

        const fileData = fs.readFileSync('src/lib/data/orders.json', 'utf-8');
        const orders = JSON.parse(fileData);
        const id = orders.length + 1;

        orders.push({
            id,
            name,
            items,
            filter,
            address,
            payment
        });

        fs.writeFileSync('src/lib/data/orders.json', JSON.stringify(orders, null, 2));

        cookies.delete('order', { path: '/' });

        return redirect(303, '/confirmation');
    }
};