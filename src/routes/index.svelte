<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');
		const { posts } = await res.json();
		return { props: { posts } };
	};

	export const prerender = true;
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
	<title>Solivan.dev</title>
	<link rel="canonical" href="http://solivan.dev" />
	<link rel="alternate" type="application/rss+xml" href="http://solivan.dev/api/rss.xml" />
	<meta property="og:url" content="http://solivan.dev" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Solivan.dev" />
	<meta
		name="Description"
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous in his digital garden."
	/>
	<meta
		property="og:description"
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous in his digital garden."
	/>
	<!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@nightconcept" />
	<meta name="twitter:title" content="Solivan.dev" />
	<meta
		name="twitter:description"
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous in his digital garden."
	/>
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto flex max-w-5xl p-6">
		<div class="m-1 h-12 text-zinc-800 dark:text-zinc-200">
			<h1 class="text-6xl font-bold"># Hi, I'm Danny.</h1>
			<p class="pt-4">
				I'm an engineer by day, gamer, developer, writer, poet, and Stoic by night. I like thinking
				and growing my thoughts continuosly. This site serves as my place where I 📚 <a
					class="font-semibold hover:underline"
					href="https://www.swyx.io/learn-in-public/">learn in public</a
				>
				and grow my 💻🌱
				<a class="font-semibold hover:underline" href="https://maggieappleton.com/garden-history"
					>digital garden</a
				>.
			</p>
		</div>
		<div class="flex h-1/2 w-1/2 justify-center pl-2" id="photo">
			<img
				class="rounded-full shadow-[0_0_0_0.4rem_rgba(0,0,0,0.3)] shadow-slate-700 dark:shadow-slate-100"
				src="/photos/danny_photo.jpg"
				alt="Danny"
			/>
		</div>
	</div>
</section>

<section class="bg-zinc-50 pt-4 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl p-6">
		<h1 class="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Recent Posts</h1>
		<ul class="mx-auto mt-2">
			{#each posts as post}
				{#if post.status === 'published'}
					<li class="rounded-lg py-3 px-2 hover:bg-slate-300 dark:hover:bg-slate-500">
						<span class="rounded bg-gray-600 p-1 text-sm font-light uppercase text-gray-200"
							>{post.type}</span
						>
						<a class="px-2 text-lg hover:underline dark:text-gray-300" href="/garden/{post.slug}"
							>{post.title}</a
						>
						<span class="text-sm font-light italic dark:text-gray-300">{post.date}</span>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</section>
