<script lang="ts">
	import { mdiLinkedin, mdiGithub } from '@mdi/js';
	import Icon from './Icon.svelte';

	let size = 30;
</script>

<footer class="p-6 max-w-6xl mx-auto flex justify-between">
	<div>
		<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2007-2022 © Danny Solivan

	</div>
	<div class="flex" id="social-links">
		<a
			href="https://github.com/nightconcept"
			rel="noopener external "
			target="_blank"
			id="github"
			aria-label="Danny Solivan's Github Profile"
		>
			<Icon {size} path={mdiGithub} />
		</a>
		<a
			href="https://linkedin.com/in/daniel-solivan-82289912/"
			rel="noopener external"
			target="_blank"
			id="linkedin"
			aria-label="Danny Solivan's LinkedIn Profile"
		>
			<Icon {size} path={mdiLinkedin} />
		</a>
	</div>

</footer>