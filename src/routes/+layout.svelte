<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={"/images/logo.png"} />
</svelte:head>

<header>
	<nav>
		<ul class="list-none m-0 p-2 truncate bg-[#e5dcca]">
			<Header />
			{#if data.isLoggedIn}
				{#if data.user?.role === "ROLE_ADMIN"}
    				<li class="float-left"><a href="/resetdatabase" class="block text-[#4a2f28] text-center px-4.5 py-9 no-underline hover:underline">RESET DATABASE</a></li>
				{/if}
				<li class="float-right block text-[#4a2f28] text-center px-4.5 py-6"><img src={data.user.image} alt="Profile Picture" class="max-w-12.5"/></li>
				<li class="float-right block text-[#4a2f28] text-center px-4.5 py-9"><strong>{data.user.name}</strong></li>
				<form method="post" action="/logout">
					<li class="float-right">
						<button type="submit" class="block text-[#4a2f28] text-center px-4.5 py-9 no-underline hover:underline">LOGOUT</button>
					</li>
				</form>
				
			{:else}
				<li class="float-right block text-[#4a2f28] text-center px-4.5 py-6"><img src="/images/default.svg" alt="Profile Picture" class="max-w-12.5"/></li>
				<li class="float-right"><a href="/login" class="block text-[#4a2f28] text-center px-4.5 py-9 no-underline hover:underline">LOGIN</a></li>
			{/if}
		</ul>
	</nav>
</header>

{@render children()}

<Footer />

<style>
	#profile_image {
		width: 50px;
	}
</style>