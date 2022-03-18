<script lang="ts">
</script>

<nav class="bg-zinc-900">
	<div class="max-w-6xl mx-auto px-8">
		<div class="relative flex items-center justify-between h-12">
			<div class="flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex space-x-4">
					<a
						sveltekit:prefetch
						href="/"
						class="text-lime-400 hover:underline underline-offset-8 decoration-4 py-1 rounded-md text-sm font-medium"
						>solivan.dev</a
					>
					<a
						sveltekit:prefetch
						href="/"
						class="bg-gray-900 text-white px-2 py-1 rounded-md text-sm font-medium"
						aria-current="page">Home</a
					>
					<a
						sveltekit:prefetch
						href="/blog"
						class="text-gray-300 hover:underline hover:text-white underline-offset-8 decoration-4 px-2 py-1 rounded-md text-sm font-medium"
						>Blog</a
					>
					<a
						sveltekit:prefetch
						href="/writing"
						class="text-gray-300 hover:underline hover:text-white underline-offset-8 decoration-4 px-2 py-1 rounded-md text-sm font-medium"
						>Writing</a
					>
					<a
						sveltekit:prefetch
						href="/about"
						class="text-gray-300 hover:underline hover:text-white underline-offset-8 decoration-4 px-2 py-1 rounded-md text-sm font-medium"
						>About</a
					>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span class="sr-only">Dark Mode Toggle</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 750 850"
					>
						<path
							fill="currentColor"
							d="M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114t-122 74t-147 23q-71-4-133-33t-109-77t-77-109T1 397q-4-78 23-147t74-122t114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71t71 51t85 25q56 7 106-8t90-46z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
