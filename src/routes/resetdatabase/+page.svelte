<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Reset Database | Workplace Lunch Deliveries</title>
</svelte:head>

<div class="p-7 text-[#4a2f28]">
	<h1 class="text-3xl text-center pb-5">Database Reset</h1>
	<p class="text-center">The database has been reset with the following users:</p>
	<div class="flex justify-center">
		<ul class="list-disc">
			{#each data.users as email}
				<li>{email} (password: <code>password</code>)</li>
			{/each}
		</ul>
	</div>
	<p class="text-center pb-3"><a href="/login" class="hover:underline">Go to login</a></p>
</div>
