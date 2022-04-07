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

<article class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6 m-1 prose lg:prose-xl dark:prose-invert">
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
