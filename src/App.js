import React from 'react';
import {Link, Switch,  Route} from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default App;
