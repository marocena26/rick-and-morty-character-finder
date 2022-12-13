//react libraries
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//services
import callToApi from "../services/api";
import ls from "../services/localstorage";

//components
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

//styles
import "../styles/App.scss";

function App() {
  //STATES
  //Data: Mi lista de personajes filtrada por los elementos que yo quiero.
  const [dataCharacters, setDataCharacters] = useState([]);

  //Filters:
  //FilterByName input - filtramos por nombre
  const [filterByName, setFilterByName] = useState(ls.get("filterByName", ""));

  //Effects
  useEffect(() => {
    callToApi().then((characters) => {
      setDataCharacters(characters);
    });
  }, []);

  //Handlers
  //función handle para filtrar en el buscador por nombre
  const handleFilterByName = (value) => {
    ls.set("filterByName", value);
    setFilterByName(value);
  };

  //Router
  const findCharacter = (id) => {
    return dataCharacters.find((oneCharacter) => oneCharacter.id === id);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterByName={handleFilterByName}
                  filterByName={filterByName}
                />
                <CharacterList
                  dataCharacters={dataCharacters}
                  filterByName={filterByName}
                />
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
