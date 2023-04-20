<script lang="ts">
	import '../tailwind.css';
	import Icon from '../components/Icon.svelte';
	import Nav from '../components/Nav.svelte';
	import { mdiLinkedin, mdiGithub } from '@mdi/js';

	let year = new Date().getFullYear();
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
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous on the blog."
	/>
	<meta
		property="og:description"
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous on the blog."
	/>
	<!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@nightconcept" />
	<meta name="twitter:title" content="Solivan.dev" />
	<meta
		name="twitter:description"
		content="Danny Solivan's personal website. Read about development, writing, and miscellaneous on the blog."
	/>
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>

<div>
	<Nav />
</div>

<slot />

<div class="bg-zinc-50 p-6 dark:bg-gray-900">
	<footer class="container mx-auto flex w-full max-w-5xl justify-between p-6">
		<div class="text-zinc-800 dark:text-zinc-50">
			(c) Danny Solivan 2007-{year}
		</div>
		<div class="flex">
			<!-- <Icon path={mdiTwitter} link="https://twitter.com/nightconcept" /> -->
			<Icon path={mdiGithub} link="https://github.com/nightconcept" alt="Github Profile"/>
			<Icon path={mdiLinkedin} link="https://linkedin.com/in/daniel-solivan-82289912/" alt="LinkedIn Profile"/>
		</div>
	</footer>
</div>
