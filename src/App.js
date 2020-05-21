import React, {useState}from 'react';
import './App.css';

function App() {
  const [page, setPage] =useState('home')

  function swapPages(newPage) {
    setPage(prevPage => newPage)
  }
  return (
    <div>
        <nav>
          <button onClick={() => swapPages('home')}>Home</button>
          <button onClick={() => swapPages('about')}>About</button>
        </nav>
    </div>
  )
}

export default App;
