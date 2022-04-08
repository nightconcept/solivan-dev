<script>
	export let title;
	export let date;
	export let updated;
	export let readTime;

	date = new Date(date);
	date =
		date.toLocaleDateString('en-us', { month: 'short' }) +
		' ' +
		date.getDate() +
		', ' +
		date.getFullYear();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="bg-zinc-50 dark:bg-gray-900">
	<div class="prose m-1 mx-auto max-w-5xl p-6 dark:prose-invert lg:prose-lg">
		<h1># {title}</h1>
		<h2>
			{date}
			{#if readTime}
				<span>•</span> {readTime} min read
			{/if}
		</h2>
		{#if updated}
			<h2>Last Updated: {updated}</h2>
		{/if}
		<div class="mt-4">
			<slot />
		</div>
	</div>
</article>
