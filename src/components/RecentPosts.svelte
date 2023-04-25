<script context="module" lang="ts">
	import PostType from './PostType.svelte';
</script>

<script lang="ts">
	export let posts;
	import { dateConvert } from '$lib/functions';
</script>

<section class="bg-zinc-50 pt-4 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6">
		<h2 class="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Recent Posts</h2>
		<ul class="mx-auto mt-2">
			{#each posts as post}
				{#if post.status === 'published'}
					<li class="rounded-lg py-3 px-2 hover:bg-slate-300 dark:hover:bg-slate-500">
						<PostType type={post.type} />
						<a class="px-2 text-lg hover:underline dark:text-gray-300" href="/blog/{post.slug}"
							>{post.title}</a
						>
						<span class="text-sm font-light italic dark:text-gray-300"
							>{dateConvert(post.date)}</span
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>
