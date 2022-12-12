const getDataFromAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const dataEachCharacter = data.results.map((character) => {
        //map para obtener los datos que hay en results de la API.

        return {
          //de aqui obtengo los datos que a mi me interesan.
          name: character.name,
          species: character.species,
          image: character.image,
          id: character.id,
        };
      });
      return dataEachCharacter; //Este es mi nuevo objeto creado con los datos que me interesan. Lo tengo que retornar para que no se quede guardado en el fetch, de esta manera puedo utilizarlo ahora en App.
    });
};
export default getDataFromAPI;
