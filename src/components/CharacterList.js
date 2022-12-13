import CharacterCard from "./CharacterCard";

const CharacterList = ({ eachCharacter, filterByName = "" }) => {
  const renderCharacterCards = eachCharacter

    .filter((character) => {
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    })

    .map((character) => {
      return <CharacterCard character={character} key={character.id} />;
    });

  return (
    <section className="section">
      <ul className="section__ul">{renderCharacterCards}</ul>
    </section>
  );
};

export default CharacterList;
