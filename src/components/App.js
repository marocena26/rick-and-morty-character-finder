//react libraries
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//services
import callToApi from "../services/api";
import ls from "../services/localstorage";

//components
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import CharacterDetail from "./characters/CharacterDetail";
import Filters from "./filter/Filters";
import Footer from "./Footer";

//styles
import "../styles/App.scss";

function App() {
  //STATES
  //Data: Mi lista de personajes filtrada por los elementos que yo quiero.
  const [dataCharacters, setDataCharacters] = useState([]);

  //Filters:
  //FilterByName input - filtramos por nombre
  const [filterByName, setFilterByName] = useState(ls.get("filterByName", ""));
  //FilterBySpecies input - filtramos por especie
  const [filterBySpecies, setFilterBySpecies] = useState(
    ls.get("filterBySpecies", "")
  );
  //FilterByStatus input
  const [filterByStatus, setFilterByStatus] = useState(
    ls.get("filterByStatus", "all")
  );

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

  //función handle para filtrar en el buscador por especie
  const handleFilterBySpecies = (value) => {
    ls.set("filterBySpecies", value);
    setFilterBySpecies(value);
  };

  //función handle para filtrar en el buscador por estatus
  const handleFilterByStatus = (value) => {
    ls.set("filterByStatus", value);
    setFilterByStatus(value);
  };

  //Reset button
  const handleResetBtn = () => {
    //Limpiamos todos los datos al hacer click, incluidos los datos del LS.
    setFilterByName("");
    setFilterBySpecies("");
    setFilterByStatus("all");
    ls.remove("filterByName");
    ls.remove("filterBySpecies");
    ls.remove("filterByStatus");
  };

  //Router
  const findCharacter = (id) => {
    return dataCharacters.find(
      (oneCharacter) => oneCharacter.id === parseInt(id)
    );
  };

  return (
    <>
      <Header />
      <div className="stars"></div>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterByName={handleFilterByName}
                  filterByName={filterByName}
                  handleFilterBySpecies={handleFilterBySpecies}
                  filterBySpecies={filterBySpecies}
                  handleFilterByStatus={handleFilterByStatus}
                  filterByStatus={filterByStatus}
                  handleResetBtn={handleResetBtn}
                />
                <CharacterList
                  dataCharacters={dataCharacters}
                  filterByName={filterByName}
                  filterBySpecies={filterBySpecies}
                  filterByStatus={filterByStatus}
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
      <Footer />
    </>
  );
}

export default App;
