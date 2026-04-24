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
        <img src="{food.image}" alt="{food.name}" class="w-[35vw] h-[45vh] object-cover" />
        <div class="flex justify-center">
            <ul class="p-7">
                <li class="text-xl">Price: €{food.price}</li>
                <li>Description: {food.description}</li>
            </ul>
        </div>
    </div>
</main>
