<script context="module" lang="ts">
	import RecentPosts from '../components/RecentPosts.svelte';
</script>

<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import DannyPhoto from '$lib/photos/danny_photo.jpg?w=400&h=400&webp&imagetools';
</script>

<section class="bg-zinc-50 dark:bg-gray-900">
	<div class="mx-auto flex max-w-5xl p-6">
		<div class="m-1 h-1/5 text-zinc-800 dark:text-zinc-200">
			<h1 class="text-6xl font-bold"># Hi, I'm Danny.</h1>
			<p class="pt-4">
				I'm an engineer by day, gamer, developer, writer, poet, and Stoic by night. I like thinking
				and growing my thoughts continuosly. This site serves as my place where I 📚 <a
					class="font-semibold hover:underline"
					href="https://www.swyx.io/learn-in-public/">learn in public</a
				>
				and grow my 💻🌱
				<a class="font-semibold hover:underline" href="https://maggieappleton.com/garden-history"
					>digital garden</a
				>.
			</p>
		</div>
		<div class="flex h-1/2 w-1/2 justify-center pl-2" id="photo">
			<img
				class="rounded-full shadow-[0_0_0_0.4rem_rgba(0,0,0,0.3)] shadow-slate-700 dark:shadow-slate-100"
				src={DannyPhoto}
				alt="Danny"
				width="400"
				height="400"
			/>
		</div>
	</div>
</section>

<RecentPosts posts={data.posts} />
