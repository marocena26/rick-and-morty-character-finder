import CharacterCard from "./CharacterCard";

const CharacterList = ({ eachCharacter }) => {
  const renderCharacterCards = eachCharacter.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return (
    <section className="section">
      <ul className="section__ul">{renderCharacterCards}</ul>
    </section>
  );
};

export default CharacterList;
