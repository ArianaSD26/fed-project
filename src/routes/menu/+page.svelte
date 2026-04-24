<script>
	let { data } = $props();
	let menu = data.menu;
</script>

<svelte:head>
	<title>Menu | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
	<img src="/images/banner2.jpg" alt="Menu Banner" class="w-full h-[40vh] object-cover" />
	<div class="p-5 text-[#4a2f28]">
		<h2 class="text-3xl text-center pb-7">Menu</h2>
		<div class="grid grid-cols-3 gap-10 mx-5">
			{#each menu as food}
				<div class="truncate rounded-md shadow-md">
					<img src="{food.image}" alt="{food.name}" class="w-[30vw] h-[40vh] object-cover" />
					<h3 class="text-center text-2xl pt-3"><a href="/menu/{food.id}" class="hover:underline">{food.name}</a></h3>
					<p class="text-center text-xl pb-3">€{food.price}</p>
				</div>
				{:else}
					<p>ERROR - no food found to list here!</p>
			{/each}
		</div>
	</div>
</main>
