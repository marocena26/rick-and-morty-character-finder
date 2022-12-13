import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  //Pinto cada personaje, aquí escribo el HTML con los datos variables.
  return (
    <Link to={`/character/${character.id}`}>
      <article className="card">
        <img
          className="card__image"
          src={character.image}
          alt={`Foto de ${character.name}`}
        />
        <h2 className="card__title">{character.name}</h2>
        <h3 className="card__species">{character.species}</h3>
      </article>
    </Link>
  );
}
export default CharacterCard;
