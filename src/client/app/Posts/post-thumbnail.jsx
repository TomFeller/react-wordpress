import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';

class PostThumbnail extends React.Component {
  render() {
    const {id, name, image, price} = this.props.post;
    return (
      <article id={'post-id-' + id}
               className={classNames(
                 'post',
                 'post-id-' + id,
                 'post-cat-' + this.props.category,
                 'post--thumbnail')}
               key={name}>
        <h2 className='post__title'>{name}</h2>
        <img src={image}/>
        <p className='post__price'>{price}</p>
      </article>
    )
  }
}

export default PostThumbnail;