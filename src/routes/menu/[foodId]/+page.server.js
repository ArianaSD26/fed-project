import { error } from '@sveltejs/kit';
const endpoint = "http://localhost:3000/menu";

export const load = async ({ params }) => {
    let foodId = params.foodId;

    // add food ID to end of API GET URL
    const response = await fetch(endpoint + "/" + foodId);
    const food = await response.json();

    // check if we got a food object back or not
    const name = food.name;

    // if food object undefined, we didn't find one,
    // so generate a 404 NOT FOUND redirect
    if (!name) error(404);

    return {
        food
    };
};