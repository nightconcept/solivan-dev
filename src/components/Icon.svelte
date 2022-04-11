<script lang="ts">
	export let path: string;
	export let link: string;
	export let size: number = 24;
</script>

<a
class="fill-zinc-600 hover:fill-zinc-800 dark:fill-zinc-300 dark:hover:fill-zinc-100 px-2"
href={link}
rel="noopener noreferrer"
target="_blank"
>
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d={path} />
	</svg>
</a>
