<script lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home // Solivan.dev</title>
	<link rel="canonical" href="http://solivan.dev" />
	<link rel="alternate" type="application/rss+xml" href="http://solivan.dev/api/rss.xml" />
	<meta property="og:url" content="http://solivan.dev" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Solivan.dev" />
	<meta
		name="Description"
		content="Danny Solivan's personal website. Read about development, writing, and politics on the blog."
	/>
	<meta
		property="og:description"
		content="Danny Solivan's personal website. Read about development, writing, and politics on the blog."
	/>
	<!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@nightconcept" />
	<meta name="twitter:title" content="Solivan.dev" />
	<meta
		name="twitter:description"
		content="Danny Solivan's personal website. Read about development, writing, and politics on the blog."
	/>
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto flex max-w-5xl p-6">
		<div class="m-1 h-12 text-zinc-800 dark:text-zinc-200">
			<h1 class="text-4xl font-bold">Hi, I'm Danny.</h1>
			<p class="pt-4">
				I'm an engineer by day, gamer, developer, writer, poet, and Stoic by night. I like thinking
				and making my thoughts a reality.
			</p>
		</div>
		<div class="flex h-1/3 w-1/3 justify-center rounded-lg" id="photo">
			<img class="rounded" src="/danny_photo.jpg" alt="Danny" />
		</div>
	</div>
</section>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto flex max-w-5xl p-6">
		<h1 class="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Recent Blog Posts</h1>
		<p />
	</div>
</section>
