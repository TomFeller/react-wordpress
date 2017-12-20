import {customFields} from '../functions.jsx';

var postMap = (post, index) => {
  return ({
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
    slug: post.slug,
    customFields: mapCustomFields(customFields, post)
  });
}

function mapCustomFields(fields, post) {
  var obj = {}
  for (var i = 0; i < fields.length; i++) {
    obj[fields[i]] = post[fields[i]]
  }
  return obj;
}

export default postMap;