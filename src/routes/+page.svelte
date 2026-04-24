<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Home | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
	<img src="/images/banner.jpg" alt="Home Banner" class="w-full h-[40vh] object-cover" />
	<div class="flex m-7 bg-[#8bb393] shadow-md">
		<div>
			<img src="/images/home.png" alt="Home Image" class="max-w-160" />
		</div>
		<div class="flex flex-col justify-center items-center m-10">
			<h2 class="text-3xl text-center text-[#28382b]">Welcome To Our Website!</h2>
			<p class="text-xl text-center text-[#28382b]">Workplace Lunch Deliveries is a quick way to order food for your workplace.</p>
			<p class="text-center text-[#28382b]">You can find our <a href="/menu" class="underline hover:text-[#4d6952]">menu</a> and <a href="/subscriptions" class="underline hover:text-[#4d6952]">subscriptions</a> here.</p>
		</div>
	</div>
</main>
