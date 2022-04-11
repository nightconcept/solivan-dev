import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				garden: './src/routes/garden/_post.svelte',
				_: './src/mdsvexlayout.svelte'
			}
		})
	],

	extensions: ['.svelte', '.md', '.svx'],
};

export default config;
