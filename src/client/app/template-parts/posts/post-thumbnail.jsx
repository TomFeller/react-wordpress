import React from 'react';
import {render} from 'react-dom';
import {getPostClasses} from '../../functions.jsx';

class PostThumbnail extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <article id={'post-id-' + post.id}
               className={getPostClasses(post)}
               key={post.index}>
        <h2 className='post__title'>{post.title}</h2>
        <h5 className='post__title'>{post.customFields.price}</h5>
        <img src={post.featuredImage}/>
      </article>
    )
  }
}

export default PostThumbnail;