import React, { useState } from "react";
import './App.css';
import Character from "src/components/Character/Character";

function App(props) {
  const [characters, setCharacters] = useState(props.characters)

  // Create an instance of the Character component for each element in the characters array
  const characterList = characters.map((char) => <Character name={ char.name } quotes={ char.quotes } />)
  
  return (
    <div className="App">
      <div class="container">
        { characterList }
      </div>
    </div>
  );
}

export default App;
