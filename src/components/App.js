//react libraries
import { useEffect, useState } from "react";

//services
import callToApi from "../services/api";
import ls from "../services/localstorage";

//components
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

//styles
import "../styles/App.scss";

//FUNCTION APP

function App() {
  //STATES
  //Data: Mi lista de personajes filtrada por los elementos que yo quiero.
  const [dataCharacters, setDataCharacters] = useState([]);
  //Filters:
  //FilterByName input
  const [filterByName, setFilterByName] = useState("");

  //Effects
  useEffect(() => {
    callToApi().then((characters) => {
      setDataCharacters(characters);
    });
  }, []);

  //Handlers
  const handleFilterByName = (value) => {
    setFilterByName(value);
  };
  return (
    <>
      {/* <Header></Header> */}
      <main>
        <Filters
          handleFilterByName={handleFilterByName}
          filterByName={filterByName}
        ></Filters>
        <CharacterList
          eachCharacter={dataCharacters}
          filterByName={filterByName}
        ></CharacterList>
      </main>
    </>
  );
}

export default App;
