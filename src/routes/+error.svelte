<script>
	import { page } from '$app/stores';
	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
	let message = offline ? 'Find the internet and try again' : $page.error?.message;
	let title = offline ? 'Offline' : $page.status;
	if ($page.status === 404) {
		title = 'Page not found :(';
		message = 'Sorry! If you think this URL is broken, please let me know!';
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<section class="container prose mx-auto py-12 dark:prose-invert">
	<h1>{$page.status}: {title}</h1>
	{#if $page.status === 404}
		<p class="">There is no post at the slug <code>{$page.url.pathname}</code>.</p>
		<p class="">If you believe this was a bug, please let me know!</p>
	{:else}
		<p class="font-mono">{message}</p>
	{/if}
</section>
