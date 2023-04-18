<script context="module" lang="ts">
	import PostType from '../../components/PostType.svelte';
</script>

<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let date;
	for (let i = 0; i < data.posts.length; i++) {
		date = new Date(data.posts[i].date);
		date =
			date.toLocaleDateString('en-us', { month: 'short' }) +
			' ' +
			date.getDate() +
			', ' +
			date.getFullYear();
		data.posts[i].date = date;
	}
</script>

<svelte:head>
	<title>Danny's Blog</title>
</svelte:head>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6 text-zinc-800 dark:text-zinc-200">
		<h1 class="text-6xl font-bold"># Blog</h1>
		<p class="pt-2 text-lg">The Blog. Where essays and ideas sort of come together.</p>
		<h2 class="mt-8 text-2xl font-semibold">Latest Posts</h2>
		<ul class="mx-auto mt-2">
			{#each data.posts as post}
				{#if post.status === 'published'}
					<li class="rounded-lg py-3 px-2 hover:bg-slate-300 dark:hover:bg-slate-600">
						<!-- <span class="font-light text-sm rounded bg-gray-600 p-1 uppercase text-gray-200"
							>{post.type}</span
						> -->
						<PostType type={post.type} />
						<a class="px-2 text-lg hover:underline dark:text-gray-300" href="/blog/{post.slug}"
							>{post.title}</a
						>
						<span class="text-sm font-light italic dark:text-gray-300">{post.date}</span>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>
