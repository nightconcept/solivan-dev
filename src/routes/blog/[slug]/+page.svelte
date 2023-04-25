<script lang="ts">
	import type { PageData } from './$types';
	import { dateConvert } from '$lib/functions';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="bg-zinc-50 dark:bg-gray-900">
	<div class="prose m-0.5 mx-auto max-w-5xl p-6 dark:prose-invert lg:prose-lg">
		<h1># {data.post.title}</h1>
		<h2>
			{#if data.post.ogpublished}
				Originally Published {dateConvert(data.post.ogpublished)}
			{:else}
				Published {dateConvert(data.post.date)}
			{/if}

			{#if data.post.readTime}
				<span>•</span> {data.post.readTime} min read
			{/if}
		</h2>
		{#if data.post.updated}
			<h2>
				Last updated {dateConvert(data.post.updated)}
			</h2>
		{/if}
		<div class="mt-4">
			<svelte:component this={data.component} />
		</div>
	</div>
</article>
