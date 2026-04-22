<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>Menu | Workplace Lunch Deliveries</title>
</svelte:head>

<Header />

<main>
	<img src="/images/banner4.jpg" alt="Menu Banner" class="w-full h-[40vh] object-cover" />
	<div class="p-5 text-[#4a2f28]">
		<h2 class="text-3xl text-center pb-5">Menu</h2>
		<h3 class="text-xl">Main</h3>
		<h3 class="text-xl">Sides</h3>
		<h3 class="text-xl">Drinks</h3>
		<h3 class="text-xl">Desserts</h3>
	</div>
</main>

<Footer />
