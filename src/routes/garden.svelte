<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import PostType from '../components/PostType.svelte'
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');
		const { posts } = await res.json();
		return { props: { posts } };
	};
</script>

<script>
	export let posts;
	let date;
	for (let i = 0; i < posts.length; i++) {
		date = new Date(posts[i].date);
		date =
			date.toLocaleDateString('en-us', { month: 'short' }) +
			' ' +
			date.getDate() +
			', ' +
			date.getFullYear();
		posts[i].date = date;
	}
</script>

<svelte:head>
	<title>Danny's Garden</title>
</svelte:head>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6 text-zinc-800 dark:text-zinc-200">
		<h1 class="text-6xl font-bold"># Garden</h1>
		<p class="pt-2 text-lg">
			The garden. A place where I plant new ideas, cultivate old ones, and let some wither.
		</p>
		<h2 class="text-2xl font-semibold mt-8">Latest Posts</h2>
		<ul class="mt-2 mx-auto">
			{#each posts as post}
				{#if post.status === 'published'}
					<li class="py-3 hover:bg-slate-300 dark:hover:bg-slate-600 px-2 rounded-lg">
						<!-- <span class="font-light text-sm rounded bg-gray-600 p-1 uppercase text-gray-200"
							>{post.type}</span
						> -->
						<PostType type={post.type} />
						<a class="px-2 text-lg hover:underline dark:text-gray-300" href="/garden/{post.slug}"
							>{post.title}</a
						>
						<span class="font-light text-sm italic dark:text-gray-300">{post.date}</span>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>
