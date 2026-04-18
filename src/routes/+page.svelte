<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Home | Workplace Lunch Deliveries</title>
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
	<img src="/images/banner.jpg" alt="Home Banner" />
	<img src="/images/home.png" alt="Home Image" />
	<h2>Welcome To Our Website!</h2>
	<p>Workplace Lunch Deliveries is a quick way to order food for your workplace.</p>
	<p>You can find our <a href="/menu">menu</a> and <a href="/subscriptions">subscriptions</a> here.</p>
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
