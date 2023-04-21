<script lang="ts">
	import '../tailwind.css';
	import Icon from '../components/Icon.svelte';
	import Nav from '../components/Nav.svelte';
	import { mdiMastodon, mdiLinkedin, mdiGithub } from '@mdi/js';

	let year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Solivan.dev</title>
	<link rel="canonical" href="http://solivan.dev" />
	<link rel="me" href="https://mastodon.social/@nightconcept">
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
			<Icon
				path={mdiMastodon}
				link="https://mastodon.social/@nightconcept"
				alt="Mastodon Profile"
				rel="me"
			/>
			<Icon path={mdiGithub} link="https://github.com/nightconcept" alt="Github Profile" />
			<Icon
				path={mdiLinkedin}
				link="https://linkedin.com/in/daniel-solivan-82289912/"
				alt="LinkedIn Profile"
			/>
		</div>
	</footer>
</div>
