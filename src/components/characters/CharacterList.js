import CharacterCard from "./CharacterCard";
import "../../styles/components/CharacterList.scss";

const CharacterList = ({
  dataCharacters,
  filterByName = "",
  filterBySpecies = "",
  filterByStatus = "",
}) => {
  //Fución para pintar en el HTML la lista de personajes.
  const renderCharacterCards = dataCharacters
    //filter: recibe por parametro cada elemento, retornará los personajes que cumplan con la condición.
    .filter((characters) => {
      return characters.name.toLowerCase().includes(filterByName.toLowerCase());
    })
    .filter((characters) =>
      filterBySpecies === ""
        ? true
        : characters.species.toLowerCase() === filterBySpecies.toLowerCase()
    )
    .filter((characters) =>
      filterByStatus === "all"
        ? true
        : characters.status.toLowerCase() === filterByStatus.toLowerCase()
    )

    //map: por cada elemento del array,retornaré un LI con los valores variables de cada personaje.
    .map((characters) => {
      return (
        <li key={characters.id} className="list">
          <CharacterCard character={characters} />
        </li>
      );
    });

  return (
    <section className="section">
      <ul className="section__ul">
        {renderCharacterCards.length > 0 ? (
          renderCharacterCards
        ) : (
          <p className="section__ul--text ">
            Oops, We couldn't find any character named{" "}
            <span className="section__ul--text--details">{filterByName}.</span>
            Try again with another one!
          </p>
        )}
      </ul>
    </section>
  );
};

export default CharacterList;
