/*
 The <Archive/> component renders posts inside <div class="archive"></div> based on the 'apiRoot' prop.
 If not provide root through props it will render posts by the 'category' prop.
 If not provide 'category', and only call <Archive/> without any props it will render all app posts.

 Archive Components Props:
 apiRoot - The root api for the relevant posts. Not require.
 category - The category of the relevant posts. Not require.
 */

import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import postMap from './utils/post-mapping.jsx';
import routes from './data/dataRoutes.jsx';
import PostThumbnail from './posts/post-thumbnail.jsx';

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.buildPosts = this.buildPosts.bind(this);
    this.getCategoryName = this.getCategoryName.bind(this);

    let archiveCategory = this.props.category ? this.props.category : null;
    let root = this.props.apiRoot ? this.props.apiRoot :
      archiveCategory ? (routes.posts + '/?categories=' + archiveCategory) : (routes.posts);


    this.state = {
      posts: [],
      dataRoute: root,
      categoryName: this.getCategoryName(root)
    }
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(posts => this.setState((prevState, props) => {
          return {
            posts: posts.map((post, index) => {
              return (
                postMap(post, index)
              );
            })
          };
        })
      );
  }

  getCategoryName() {

  }

  buildPosts() {
    let dom = [];
    const posts = this.state.posts,
      postCategory = this.props.category ? this.props.category : 'all';

    posts.forEach((post) => {
      dom.push(
        <PostThumbnail post={post}
                       category={postCategory}
                       key={post.index}/>
      );
    });

    return {dom, postCategory};
  }

  render() {
    let renderDOM = this.buildPosts();

    return (
      <div key={renderDOM.postCategory}
           className={classNames(
             'archive',
             'archive-cat-' + renderDOM.postCategory)}>
        <h1 className='archive__title'>Archive: {renderDOM.postCategory}</h1>
        {renderDOM.dom}
      </div>
    )
  }
}
export default Archive;