import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [characters, setCharacters] = useState([])
  // const [data, setData] = useState()
  
 useEffect(() => {
  axios.get(' https://swapi.dev/api/people')
  .then(res => {
    setCharacters(res.data)
    console.log(res.data)
    console.log(characters)
  })
  .catch(err => {
    console.log('this is an errooooor', err)
  })

 }, [])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='characters'>
        {characters.map(item => (
        <Characters character={item.name}/>)
          
          )}
      </div>
  
    </div>

  
  );
}

export default App;
