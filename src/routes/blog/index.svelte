<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');
		const { posts } = await res.json();
		return { props: { posts } };
	};

</script>

<script>
	export let posts;
	let date;
	for(let i = 0; i < posts.length; i++) {
		date = new Date(posts[i].date);
		date =
		date.toLocaleDateString('en-us', { month: 'short' }) +
		' ' +
		date.getDate() +
		', ' +
		date.getFullYear();
		posts[i].date = date;
		console.log("Post: " + posts[i].title + " " + posts[i].date)
	}
</script>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto flex max-w-5xl p-6">
		<div class="text-zinc-800 dark:text-zinc-200">
			<h1 class="text-4xl font-bold">Blog</h1>
			<div>
				<h2 class="text-2xl font-semibold mt-8">Latest Posts</h2>
				<ul class="mt-2">
					{#each posts as post}
						{#if post.status === 'published'}
						<li class="">
							<a class="hover:underline" href="/blog/{post.slug}">{post.title}</a>
							<span class="font-light text-sm italic text-gray-300">{post.date}</span>
						</li>
						{/if}
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
