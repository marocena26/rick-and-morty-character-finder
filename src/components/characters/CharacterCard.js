//react libraries
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//styles
import "../../styles/components/CharacterCard.scss";

function CharacterCard({ character }) {
  //Pinto cada personaje, aquí escribo el HTML con los datos variables.
  return (
    <Link to={`/character/${character.id}`} className="character">
      <article className="character__card">
        <img
          className="character__card--image"
          src={character.image}
          alt={`Foto de ${character.name}`}
        />
        <h2 className="character__card--title">{character.name}</h2>
        <h3 className="character__card--species">{character.species}</h3>
      </article>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
