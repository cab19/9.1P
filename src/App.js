import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar';
import Image from './Image';
import Header from './Header';
import Footer from './Footer';

import RequesterList from './RequesterList';

import faker from 'faker'

function App() {
  return (
    <div>
      <NavBar />
      <Image />
      <Header text="Featured Requesters"/>
      <RequesterList />
      <Footer />
    </div>
  );
}

export default App;