<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Login | Workplace Lunch Deliveries</title>
</svelte:head>

<header>
	<img src="/images/logo.png" alt="Workplace Lunch Deliveries Logo" />
</header>

<main>
	<hr>
	<img src="/images/banner2.jpg" alt="Login Banner" />
	<h2>Login</h2>
	<form method="post" use:enhance>
		<label>
			Email
			<input type="email" name="email" required />
		</label><br>
		<label>
			Password
			<input type="password" name="password" required />
		</label><br>
		<button>Login</button>
	</form>
	{#if form?.message}
		<p style="color: red">{form.message}</p>
	{/if}
	<p>Don't have an account? <a href="/register">Register</a></p>
	<hr>
</main>

<footer>
	Workplace Lunch Deliveries &copy; 2026
</footer>