import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx'
import appContent from './utils/app-structure.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom';

render(
  <BrowserRouter>
    <div>
      <Link to="/about">
      <App exact path='/' content={appContent} />
        </Link>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);