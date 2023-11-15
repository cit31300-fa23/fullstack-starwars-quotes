import React, { useState, useEffect } from "react";
import './App.css';
import Character from "src/components/Character/Character";
import axios from 'axios';
import { nanoid } from 'nanoid';

function App(props) {
  const [characters, setCharacters] = useState([]);

  // Add hook to load a list of characters when the component renders
  useEffect(() => {
    // Define a function that loads characters from the API
    const loadCharacters = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/characters`)
        console.log(response.data);
        setCharacters(() => [...response.data]);
      }
      catch (error) {
        console.log('Error!');
      }
    };

    // Call the function to actually connect to the API and load data
    loadCharacters();

  }, []);

  // Create an instance of the Character component for each element in the characters array
  const characterList = characters.map((char) => <Character 
    name={ char.name } 
    id={ `char-${nanoid()}` }
    key={ `char-${nanoid()}` }
    //quotes={ char.quotes } 
  />)
  
  return (
    <div className="App">
      <div className="container">
        { characterList }
      </div>
    </div>
  );
}

export default App;
