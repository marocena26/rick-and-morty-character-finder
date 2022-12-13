function CharacterCard({ character }) {
  return (
    <li className="card">
      <img
        className="card__img"
        src={character.image}
        alt={`Foto de ${character.name}`}
        title={`Foto de ${character.name}`}
      />

      <h4 className="card__title">{character.name}</h4>
      <p className="card__description">{character.species}</p>
    </li>
  );
}
export default CharacterCard;
