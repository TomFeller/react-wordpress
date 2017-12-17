import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import routes from './data/dataRoutes.jsx';
import PostThumbnail from './posts/post-thumbnail.jsx';

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.buildPosts = this.buildPosts.bind(this);

    let root = this.props.category ? routes.posts + '/?categories=' + this.props.category : routes.posts;
    // let root = this.props.root;
    this.state = {
      posts: [],
      dataRoute: root
    }
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(posts => this.setState((prevState, props) => {
        return {posts: posts.map(this.mapPosts)};
      }));
  }

  mapPosts(post) {
    return {
      id: post.id,
      price: post.price,
      image: post.image,
      name: post.title.rendered,
      category: post.slug
    }
  }

  buildPosts() {
    const posts = this.state.posts;
    const postCategory = this.props.category ? this.props.category : 'all';
    let dom = [];
    posts.forEach((post) => {
      dom.push(
        <PostThumbnail category={postCategory}
                       post={post}
                       key={post.id}/>
      );
    });
    return {dom, postCategory};
  }

  render() {
    let renderDOM = this.buildPosts();
    return (
      <div className={classNames('posts', 'posts-cat-' + renderDOM.postCategory)}>
        {renderDOM.dom}
      </div>
    )
  }
}

export default Archive;