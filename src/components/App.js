//react libraries
import { useEffect, useState } from "react";

//services
import callToApi from "../services/api";

//components
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

//styles
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  //Data
  //Character list to fill with returned data from API call
  const [dataCharacters, setDataCharacters] = useState([]);

  //Filters
  //FilterByName input

  useEffect(() => {
    callToApi().then((characters) => {
      setDataCharacters(characters);
    });
  }, []);

  return (
    <>
      {/* <Header></Header> */}
      <main>
        <Filters></Filters>
        <CharacterList eachCharacter={dataCharacters}></CharacterList>
      </main>
    </>
  );
}

export default App;
