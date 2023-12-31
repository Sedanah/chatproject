import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './containers/header/Header';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
   
  </div>
);

export default App;