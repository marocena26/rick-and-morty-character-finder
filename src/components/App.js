import { useEffect, useState } from "react";
import getDataFromAPI from "../services/api.js";
import "../styles/App.scss";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]); //VARIABLE ESTADO para guardar los datos de la API

  //En el ejecutare api.js
  useEffect(() => {
    getDataFromAPI().then((dataEachCharacter) => {
      setDataCharacter(dataEachCharacter);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
