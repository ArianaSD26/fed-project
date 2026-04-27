import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';
import { APIError } from 'better-auth/api';

export const load = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
};

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		const name = formData.get('name')?.toString() ?? '';
		const category = formData.get('category')?.toString() ?? '';
		
		let balance = 0;
		
		if (category == "Premium") {
			balance = 30;
		}
		else if (category == "Plus") {
			balance = 15;
		}
		else {
			balance = 10;
		}

		try {
			await auth.api.signUpEmail({
				body: { name, email, password, balance, category }
			});
		} catch (error) {
			if (error instanceof APIError) {
				return fail(400, { message: error.message || 'Registration failed' });
			}
			return fail(500, { message: 'Unexpected error' });
		}

		return redirect(302, '/');
	}
};