<script lang="ts">
	import Icon from '../components/Icon.svelte';
	import Nav from '../components/Nav.svelte';
	import '../global.css';
	import { mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';

	let year = new Date().getFullYear();
</script>

<div>
	<Nav />
</div>

<main class="bg-zinc-50 dark:bg-gray-900">
	<slot />
</main>

<div class="bg-zinc-50 p-6 dark:bg-gray-900">
	<footer class="container mx-auto flex w-full max-w-5xl justify-between p-6">
		<div class="text-zinc-800 dark:text-zinc-50">
			(c) Danny Solivan 2007-{year}
		</div>
		<div class="flex">
			<Icon path={mdiTwitter} link="https://twitter.com/nightconcept" />
			<Icon path={mdiGithub} link="https://github.com/nightconcept" />
			<Icon path={mdiLinkedin} link="https://linkedin.com/in/daniel-solivan-82289912/" />
		</div>
	</footer>
</div>

<div class="flex flex-grow bg-zinc-50 dark:bg-gray-900" />
