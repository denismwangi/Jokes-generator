
import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://api.icndb.com/jokes/random';



function App() {
  const [joke, setjoke] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setjoke(data.value.joke));

  }
  useEffect(() => {
    generateJoke();
  }, [])
  return (
    <div className="box">
      <h1>chuck norris jokes generator</h1>
      <p dangerouslySetInnerHTML={{ __html: joke }} />

      <button onClick={generateJoke}>get new jokes<span role="img" aria-label="laugh emoji"> 😀</span></button>

    </div>
  );
}

export default App;
