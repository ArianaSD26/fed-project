const endpoint = "http://localhost:3000/menu";

export const load = async () => {
    const response = await fetch(endpoint);
    const menu = await response.json();

    return { menu };
};