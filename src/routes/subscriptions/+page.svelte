<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>Subscription Options | Workplace Lunch Deliveries</title>
</svelte:head>

<Header />

<main>
	<img src="/images/banner5.jpg" alt="Subscription Options Banner" class="w-full h-[40vh] object-cover" />
	<div class="p-5 text-[#4a2f28]">
		<h2 class="text-3xl text-center pb-5">Subscription Options</h2>
		<div class="flex gap-5 justify-center">
			<div class="truncate rounded-md shadow-md">
				<img src="/images/basic.jpg" alt="Basic Image" class="w-[30vw] h-[40vh] object-cover" />
				<h3 class="text-center text-2xl p-3">Basic</h3>
				<div class="flex justify-center">
					<ul class="list-disc pb-7">
						<li>Price: €10 per person</li>
						<li>Standard menu selection</li>
						<li>Basic dietary filtering</li>
						<li>Monthly billing</li>
					</ul>
				</div>
			</div>
			<div class="truncate rounded-md shadow-md">
				<img src="/images/plus.jpg" alt="Plus Image" class="w-[30vw] h-[40vh] object-cover" />
				<h3 class="text-center text-2xl p-3">Plus</h3>
				<div class="flex justify-center">
					<ul class="list-disc pb-7">
						<li>Price: €15 per person</li>
						<li>Wider menu selection</li>
						<li>Basic dietary filtering</li>
						<li>Monthly billing</li>
					</ul>
				</div>
			</div>
			<div class="truncate rounded-md shadow-md">
				<img src="/images/premium.jpg" alt="Premium Image" class="w-[30vw] h-[40vh] object-cover" />
				<h3 class="text-center text-2xl p-3">Premium</h3>
				<div class="flex justify-center">
					<ul class="list-disc pb-7">
						<li>Price: Custom amount per person</li>
						<li>Full menu selection</li>
						<li>Custom dietary filtering</li>
						<li>Monthly billing</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>

<Footer />
