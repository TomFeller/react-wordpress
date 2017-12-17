var postMap = (post, index) => {
  return (
  {
    index: index,
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    format: post.format,
    date: post.date,
    dateGmt: post.date_gmt,
    modified: post.modified,
    modifiedGmt: post.modified_gmt,
    featuredImage: post.better_featured_image ? post.better_featured_image.source_url : post.image,
    tags: post.tags,
    price: post.price,
    image: post.image,
    slug: post.slug
  }
  )
}

export default postMap;