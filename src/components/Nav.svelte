<script>
	import NavLink from './NavLink.svelte';
	import DarkToggle from './DarkToggle.svelte'
</script>

<nav class="bg-zinc-200 dark:bg-zinc-900">
	<div class="mx-auto max-w-5xl px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex space-x-4">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/garden">Garden</NavLink>
				<NavLink href="/about">About</NavLink>
			</div>
			<div>
				<DarkToggle />
			</div>
		</div>
	</div>
</nav>
