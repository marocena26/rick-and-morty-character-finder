import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Header from "./Header";

function App() {
  //STATE VARIABLES
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((characters) => {
      setDataCharacters(characters);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <h1>Hola mundo</h1>
      <CharacterList eachCharacter={dataCharacters}></CharacterList>
    </>
  );
}

export default App;
