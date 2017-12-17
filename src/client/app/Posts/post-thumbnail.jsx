import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import postProps from '../utils/post-props.jsx'

class PostThumbnail extends React.Component {
  render() {
    const post = postProps(this.props.post);

    return (
      <article id={'post-id-' + post.id}
               className={classNames(
                 'post',
                 'post-id-' + post.id,
                 'post-cat-' + this.props.category,
                 'post--thumbnail')}
               key={post.index}>
        <h2 className='post__title'>{post.title}</h2>
        <img src={post.featuredImage}/>
      </article>
    )
  }
}

export default PostThumbnail;