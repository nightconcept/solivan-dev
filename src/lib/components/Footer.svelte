<script lang="ts">
	import { mdiLinkedin, mdiGithub } from '@mdi/js';
	import Icon from './Icon.svelte';

	let size = 30;
</script>

<footer>
	<div class="social-links">
		<a
			href="https://github.com/nightconcept"
			rel="noopener external"
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

<style lang="scss">
	footer {
		padding: 1rem;
		display: flex;
		font-size: 1rem;
	}
	.social-links {
		display: flex;
		align-items: center;
	}

	.social-links a {
		fill: var(--app-color-dark);

		display: flex;
		align-items: center;

		transition: fill 120ms ease-out;

		margin: 0 4px;

		transition: transform 200ms ease-in;

		&:hover,
		&:focus-visible {
			transform: scale(1.2);
		}
	}
</style>
