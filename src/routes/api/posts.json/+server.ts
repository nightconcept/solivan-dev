// returns posts in descending order
// probably need to update this to not return so many files as this gets too big

// export const get = async () => {
// 	let posts = await Promise.all(
// 		Object.entries(import.meta.glob('../garden/*.md')).map(async ([path, page]) => {
// 			const { metadata } = await page();
// 			const slug = path.split('/').pop().split('.').shift();
// 			return { ...metadata, slug };
// 		})
// 	);

// 	return {
// 		status: 200,
// 		body: {
// 			posts: posts.sort(
// 				(a, b) => new Date(b.date).setHours(0, 0, 0, 0) - new Date(a.date).setHours(0, 0, 0, 0)
// 			)
// 		}
// 	};
// };

import { parse } from 'path';

type GlobEntry = {
	metadata: Post;
	default: unknown;
};

export interface Post {
	title: string;
	description: string;
	date: string;
}

export async function GET() {
	const posts = Object.entries<GlobEntry>(
		import.meta.glob('/src/data/posts/*.md', { eager: true })
	);
	const mapped = posts.map(([path, page]) => {
		return { ...page.metadata, slug: parse(path).name };
	});

	mapped.sort(
		(a, b) => new Date(b.date).setHours(0, 0, 0, 0) - new Date(a.date).setHours(0, 0, 0, 0)
	);
	return new Response(JSON.stringify(mapped), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
