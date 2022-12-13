import CharacterCard from "./CharacterCard";

const CharacterList = ({ eachCharacter }) => {
  const renderCharacterCards = eachCharacter.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return (
    <section>
      <ul>{renderCharacterCards}</ul>
    </section>
  );
};

export default CharacterList;
