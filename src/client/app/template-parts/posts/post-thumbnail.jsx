import React from 'react';
import {render} from 'react-dom';
import {getPostClasses} from '../../functions.jsx';

class PostThumbnail extends React.Component {
  render() {
    const post = this.props.post;
    const category = this.props.category;

    return (
      <article id={'post-id-' + post.id}
               className={getPostClasses(post, category)}
               key={post.index}>
        <h2 className='post__title'>{post.title}</h2>
        <h3>{post.customFields.price}</h3>
        <h3>{post.customFields.description}</h3>
        <img src={post.featuredImage}/>
      </article>
    )
  }
}

export default PostThumbnail;