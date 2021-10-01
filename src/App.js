import './App.css';
import Timer from './components/Timer';
import React, {useState, useEffect} from 'react'


function App() {
  
  return (
    <div className="App">
        <h1>Stopwatch</h1>
        <Timer/>
  
    </div>

  );
}

export default App;
