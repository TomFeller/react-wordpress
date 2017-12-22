import React from 'react';
import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Archive from '../archive.jsx';
import Single from '../single.jsx';

const appContent = [
  <Header />,
  <Archive category='4'/>,
  <Archive category='3'/>,
  <Footer />
];

export default {appContent};