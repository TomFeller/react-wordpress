import React from 'react';
import {render} from 'react-dom';
import appContent from './data/app-structure.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.content.appContent.map((element, index) =>
          <div className='container'>
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