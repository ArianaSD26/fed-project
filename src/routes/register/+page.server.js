import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';
import { APIError } from 'better-auth/api';
import fs from 'fs';
import path from 'path';

export const load = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
};

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();

		const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');

        const fileData = fs.readFileSync('src/lib/data/users.json', 'utf-8');
        const users = JSON.parse(fileData);
        const id = users.length + 1;
		const image = '/images/default.svg';

        users.push({
            id,
			name,
            email,
            password,
			image
        });

        fs.writeFileSync('src/lib/data/users.json', JSON.stringify(users, null, 2));

        return redirect(302, '/login');
    }
};
