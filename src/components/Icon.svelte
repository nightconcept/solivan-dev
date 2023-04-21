<script lang="ts">
	export let path: string;
	export let link: string;
	export let size = 24;
	export let alt: string;
	export let rel = '';
</script>

<a
	class="fill-zinc-600 px-2 hover:fill-zinc-800 dark:fill-zinc-300 dark:hover:fill-zinc-100"
	href={link}
	rel="noopener noreferrer {rel}"
	target="_blank"
>
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<title>{alt}</title>
		<path d={path} />
	</svg>
</a>
