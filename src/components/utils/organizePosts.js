export default function organizePosts(filter, posts) {
  const filteredPosts = posts.filter(posts => {
    return (
      posts.title.rendered.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  });
  const sortedPosts = filteredPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const limitPosts = sortedPosts.slice(0, 20);

  return limitPosts;
}
