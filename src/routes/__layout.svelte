<script lang="ts">
	import Icon from '../lib/components/Icon.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import '../global.css';
	import { mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';
</script>

<div class="bg-zinc-50 dark:bg-gray-900">
	<Nav />
</div>

<main class="bg-zinc-50 dark:bg-gray-900">
	<slot />
</main>

<div class="bg-zinc-50 p-6 dark:bg-gray-900">
	<footer class="container mx-auto flex w-full max-w-5xl justify-between p-6">
		<div class="text-zinc-800 dark:text-zinc-50">
			<a
				class="transition hover:text-pink-500"
				href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a
			> 2007-2022 © Danny Solivan
		</div>
		<div class="flex">
			<a
				class="fill-zinc-600 hover:fill-zinc-800 dark:fill-zinc-300 dark:hover:fill-zinc-100"
				href="https://twitter.com/nightconcept"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Icon path={mdiTwitter} />
			</a>
			<a
				class="fill-zinc-600 hover:fill-zinc-800 dark:fill-zinc-300 dark:hover:fill-zinc-100"
				href="https://github.com/nightconcept"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Icon path={mdiGithub} />
			</a>
			<a
				class="fill-zinc-600 hover:fill-zinc-800 dark:fill-zinc-300 dark:hover:fill-zinc-100"
				href="https://linkedin.com/in/daniel-solivan-82289912/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Icon path={mdiLinkedin} />
			</a>
		</div>
	</footer>
</div>
