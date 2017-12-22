import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx'
import Main from './Main.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main/>
      </div>
    )
  }
}

export default App;

/*
 {this.props.content.appContent.map((element, index) =>
 <div className='container' key={index}>
 {element}
 </div>
 )}
* */