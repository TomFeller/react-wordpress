import React from 'react';
import {render} from 'react-dom';
import {getPostClasses} from '../../functions.jsx';

class PostSingle extends React.Component {
  render() {
    const post = this.props.post;
    !post.customFields ? post.customFields = [] : post.customFields;

    return (
      <article id={'post-id-' + post.id}
               className={getPostClasses(post)}
               key={post.id}>
        <h5 className='post__title'>{post.customFields.price}</h5>
        <img src={post.featuredImage}/>
      </article>
    )
  }
}

export default PostSingle;