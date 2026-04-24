<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<svelte:head>
	<title>Login | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
	<div class="flex flex-col justify-center items-center p-20 text-[#4a2f28]">
		<h2 class="text-3xl text-center">Login</h2>
		<div class="w-100 p-5">
			<form method="post" use:enhance>
				<label>Email</label>
				<input type="email" name="email" required class="w-full border rounded-sm my-1 p-2" /><br>
				<label>Password</label>
				<input type="password" name="password" required class="w-full border rounded-sm my-1 p-2" /><br>
				<button class="block w-full border rounded-sm my-5 p-2 hover:underline">Login</button>
			</form> 
			{#if form?.message}
				<p style="color: red">{form.message}</p>
			{/if}
			<p>Don't have an account? <a href="/register" class="hover:underline">Register</a></p>
		</div>
	</div>
</main>
