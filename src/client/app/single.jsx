/*
 The <Single/> component renders posts inside <div class="single"></div> based on the 'apiRoot' prop.
 If not provide root through props it will render posts by the 'category' prop.
 If not provide 'category', and only call <Single/> without any props it will render all app posts.

 Single Components Props:
 apiRoot - The root api for the relevant posts. Not require.
 category - The category of the relevant posts. Not require.
 */

import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import postMap from './utils/post-mapping.jsx';
import routes from './data/dataRoutes.jsx';
import PostSingle from './posts/post-single.jsx';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.buildPosts = this.buildSingleDOM.bind(this);

    const allPostsRoot = routes.posts;
    const {apiRoot, id} =  this.props
    let root = apiRoot ? apiRoot : id ? (allPostsRoot + '/' + id) : (allPostsRoot + '/16');

    this.state = {
      post: [],
      dataRoute: root
    }
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(post => this.setState((prevState, props) => {
        return {post: postMap(post)};
      }));
  }

  buildSingleDOM() {
    let dom = [];
    const post = this.state.post,
      postCategory = post.category;
    dom.push(
      <PostSingle category={postCategory}
                  post={post}
                  key={post.id}/>
    );
    return {dom, postCategory};
  }

  render() {
    let renderDOM = this.buildSingleDOM();
    return (
      <div key={renderDOM.postCategory}
           className={classNames(
             'single',
             'single-cat-' + renderDOM.postCategory)}>
        {renderDOM.dom}
      </div>
    )
  }
}
export default Single;