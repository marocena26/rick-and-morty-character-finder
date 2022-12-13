import { useEffect } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

function App() {
  useEffect(() => {
    callToApi().then((characters) => {
      //llamo al fetch que he creado en api.js, por parámetro le paso el nuevo objeto que he creado (le llamamos cleanData para conservar el mismo nombre, pero se puede llamar de cualquier manera.)
      console.log(characters);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
