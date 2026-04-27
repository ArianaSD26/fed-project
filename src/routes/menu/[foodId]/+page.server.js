import { error } from '@sveltejs/kit';
const endpoint = "http://localhost:3000/menu";

export const load = async ({ params }) => {
    let foodId = params.foodId;

    const response = await fetch(endpoint + "/" + foodId);
    const food = await response.json();
    
    const name = food.name;
    if (!name) error(404);

    return {
        food
    };
};