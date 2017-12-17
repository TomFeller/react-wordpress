import React from 'react';
import {render} from 'react-dom';
import Archive from './archive.jsx';
import Single from './single.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.content.map((element, index) =>
          element
        )}
      </div>
    )
  }
}

render(
  <App content={[
    <Single id='16' key='1' />
  ]} />,
  document.getElementById('app')
);