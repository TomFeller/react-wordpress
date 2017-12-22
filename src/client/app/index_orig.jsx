import React from 'react';
import {render} from 'react-dom';
import appContent from './utils/app-structure.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.content.appContent.map((element, index) =>
          <div className='container' key={index}>
            {element}
          </div>
        )}
      </div>
    )
  }
}

render(
  <App content={appContent}/>,
  document.getElementById('app')
);