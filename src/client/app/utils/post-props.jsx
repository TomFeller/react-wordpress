var postProps = (post) => {
  return ({
      index: post.index,
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      format: post.format,
      date: post.date,
      dateGmt: post.dateGmt,
      modified: post.modified,
      modifiedGmt: post.modifiedGmt,
      featuredImage: post.featuredImage,
      tags: post.tags,
      slug: post.slug,
      image: post.image,
      price: post.price
    }
  )
}

export default postProps;