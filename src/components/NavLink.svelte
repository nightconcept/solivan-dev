<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	sveltekit:prefetch
	{href}
	class="px-2 py-1 text-sm font-medium text-zinc-800 decoration-4 underline-offset-4 transition hover:text-pink-500 dark:text-zinc-50 dark:hover:text-pink-500"
	class:font-semibold={isActive}
	class:underline={isActive}><span class="capsize"><slot /></span></a
>
