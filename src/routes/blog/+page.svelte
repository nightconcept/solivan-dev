<script context="module" lang="ts">
	import RecentPosts from '../../components/RecentPosts.svelte';
</script>

<script type="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Danny's Blog</title>
</svelte:head>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6 text-zinc-800 dark:text-zinc-200">
		<h1 class="text-6xl font-bold"># Blog</h1>
		<p class="pt-2 text-lg">The Blog. Where essays and ideas sort of come together.</p>
		<RecentPosts posts={data.posts} />
	</div>
</section>
