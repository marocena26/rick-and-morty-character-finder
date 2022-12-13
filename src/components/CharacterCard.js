function CharacterCard({ character }) {
  return (
    <li className="card">
      <a href={character.id}></a>
      <img
        className="card__image"
        src={character.image}
        alt={`Foto de ${character.name}`}
        title={`Foto de ${character.name}`}
      />
      <h4 className="card__title">{character.name}</h4>
      <p className="card__species">{character.species}</p>
    </li>
  );
}
export default CharacterCard;
