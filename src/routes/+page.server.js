/** @type {import('./$types').Actions} */
import { END_POINT } from "$env/static/private"
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');

		const response = await fetch(END_POINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body:  JSON.stringify ({ email, name })
		});

		if (response.status === 200) {
			return { success: true }
		} else {
			// something went wrong
			return { error : true }
		}
	}
};