<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Register | Workplace Lunch Deliveries</title>
</svelte:head>

<header>
	<h1>Workplace Lunch Deliveries</h1>
</header>

<main>
	<hr>
	<h2>Register</h2>
	<form method="post" use:enhance>
		<label>
			Name
			<input type="text" name="name" required />
		</label><br>
		<label>
			Email
			<input type="email" name="email" required />
		</label><br>
		<label>
			Password
			<input type="password" name="password" required />
		</label><br>
		<button>Register</button>
	</form>
	{#if form?.message}
		<p style="color: red">{form.message}</p>
	{/if}
	<p>Already have an account? <a href="/login">Login</a></p>
	<hr>
</main>

<footer>
	Workplace Lunch Deliveries &copy; 2026
</footer>