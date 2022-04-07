// returns posts in descending order
// probably need to update this to not return so many files as this gets too big

export const get = async () => {
  let posts = await Promise.all(
    Object.entries(import.meta.glob('../garden/*.md'))
    .map(async ([path, page]) => {
      const { metadata } = await page();
      const slug = path.split('/').pop().split('.').shift()
      return {...metadata, slug };
    })
  );
  
  return {
    status: 200,
    body : { posts: posts.sort((a, b) => new Date(b.date).setHours(0, 0, 0, 0) - new Date(a.date).setHours(0, 0, 0, 0)) },
  };
};