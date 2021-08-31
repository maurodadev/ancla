import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  return (
        <Router>
          <Header />
          <Body />
        </Router>
  );
}

export default App;
