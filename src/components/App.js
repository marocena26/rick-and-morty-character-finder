import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    callToApi().then((characters) => {
      setDataUser(characters);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
