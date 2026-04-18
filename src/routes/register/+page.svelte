<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Register | Workplace Lunch Deliveries</title>
</svelte:head>

<header>
	<a href="/"><img src="/images/logo.png" alt="Workplace Lunch Deliveries Logo" /></a>
	<hr>
</header>

<nav>
	<ul>
		<li><a href="/">HOME</a></li>
		<li><a href="/login">LOGIN</a></li>
		<li><a href="/register">REGISTER</a></li>
		<li><a href="/menu">MENU</a></li>
		<li><a href="/subscriptions">SUBSCRIPTIONS</a></li>
	</ul>
</nav>

<main>
	<hr>
	<img src="/images/banner3.jpg" alt="Register Banner" />
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
	<a href="/"><img src="/images/logo2.png" alt="Workplace Lunch Deliveries Logo" /></a>
	<ul>
		<li><a href="/">HOME</a></li>
		<li><a href="/login">LOGIN</a></li>
		<li><a href="/register">REGISTER</a></li>
		<li><a href="/menu">MENU</a></li>
		<li><a href="/subscriptions">SUBSCRIPTIONS</a></li>
	</ul>
	Workplace Lunch Deliveries &copy; 2026
</footer>
