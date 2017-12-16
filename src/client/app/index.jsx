import React from 'react';
import {render} from 'react-dom';
import Archive from './archive.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      posts: [<Archive apiRoot='http://127.0.0.1:8083/wordpress/wp-json/wp/v2/posts/?categories=4'/>]
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.posts.map((posts) =>
          posts
        )}
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));