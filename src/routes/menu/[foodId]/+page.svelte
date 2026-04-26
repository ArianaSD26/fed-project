<script>
    let { data } = $props();
    let food = data.food;
</script>

<svelte:head>
	<title>{food.name} | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
    <h2 class="text-3xl text-center p-5">{food.name}</h2>
    <div class="flex flex-col items-center justify-center truncate rounded-md shadow-md">
        <img src="{food.image}" alt="{food.name}" class="w-[30vw] h-[45vh] object-cover pb-3" />
            <ul class="pb-7">
                <li class="text-xl">Price: €{food.price}</li>
                <li>{food.description}</li>
                <li>Allergens: {food.allergens}</li>
                <li>Calories: {food.calories} kcal</li>
            </ul>
    </div>
</main>
