import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx'
import appContent from './utils/app-structure.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom';

render(
  <BrowserRouter>
    <div>
      <App exact path='/about.jsx' content={[
        <Header />,
        <Single id='16'/>,
        <Footer />]}
      />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);