<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="mx-auto max-w-5xl p-6 text-zinc-800 dark:text-zinc-200">
	<h1 class="text-4xl font-bold">About</h1>
	<p class="pt-4">Hi,</p>
	<p class="pt-4">
		I am Danny Solivan. I am a wannabe novel/short story writer, <a
			href="https://www.lulu.com/search?adult_audience_rating=00&contributor=Danny+Solivan&page=1&pageSize=10"
			>self-published poet</a
		>, and game developer. By education, I am an electrical engineer with a soon-to-be masters in
		business administration.
	</p>

	<p class="pt-4">
		I started blogging back in the early days of Xanga as a teenager, moved over to WordPress for a
		bit, took a 10 year break, and am now back on Ghost as a 30-something adult. I re-started
		blogging as a means to practice and improve writing as the required writing for my MBA tapers
		off. Despite it being required and sometimes the topics being dry (labor mobiilty anyone?), I
		still enjoyed it. I also have always had this dream of being a writer when I retire only to
		realize that I am going to be a crappy writer if I don't start sooner. This blog is part of that
		effort to not be a crappy retired writer.
	</p>

	<p class="pt-4">
		I will cover a wide variety of topics which include: politics, video games, writing, economics,
		technology, food, Stoicism, and non-fiction books.
	</p>

	<p class="pt-4">
		I can't say that everything I write about will be interesting to you, but you hopefully will not
		find any of the topics too repetitive and maybe even learn something new.
	</p>

	<p class="pt-4">
		Cheers,<br />
		Danny
	</p>
</div>
