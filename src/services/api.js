const callToApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((eachCharacter) => {
        //map para obtener los datos que hay en results de la API.

        return {
          //de aqui obtengo los datos que a mi me interesan.
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          origin: eachCharacter.origin.name,
          episodes: eachCharacter.episode.length,
          status: eachCharacter.status,
        };
      });
      characters.sort((x, y) => x.name.localeCompare(y.name));
      return characters; //Este es mi nuevo objeto creado con los datos que me interesan. Lo tengo que retornar para que no se quede guardado en el fetch, de esta manera puedo utilizarlo ahora en App.
    });
};
export default callToApi;
