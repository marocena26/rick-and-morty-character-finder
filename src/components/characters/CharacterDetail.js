//react libraries
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//styles
import "../../styles/components/CharacterDetail.scss";

function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const characterDetail = findCharacter(params.id);

  //Icon for dead or alive
  const renderIconSpecies = () => {
    if (characterDetail.species === "Alien") {
      return (
        <span>
          Alien <i className="fa-brands fa-reddit-alien"></i>
        </span>
      );
    } else if (characterDetail.species === "Human") {
      return (
        <span>
          Human <i className="fa-solid fa-user"></i>
        </span>
      );
    } else {
      return null;
    }
  };
  //Icon for alien or human
  const renderIconStatus = () => {
    if (characterDetail.status === "Alive") {
      return (
        <span>
          Alive <i className="fa-solid fa-heart"></i>
        </span>
      );
    } else if (characterDetail.status === "Dead") {
      return (
        <span>
          Dead <i className="fa-solid fa-skull"></i>
        </span>
      );
    } else {
      return (
        <span>
          Unknown <i class="fa-sharp fa-solid fa-question"></i>
        </span>
      );
    }
  };

  return (
    <>
      {characterDetail ? (
        <main className="detail">
          <article className="detail__article">
            <img
              className="detail__article--image"
              src={characterDetail.image}
              alt={`Foto de ${characterDetail.name}`}
            />
            <div>
              <h2 className="detail__article--title">{characterDetail.name}</h2>
              <ul className="list">
                <li className="list__item">
                  <span className="list__item--detail">Status:</span>
                  <span>{renderIconStatus()}</span>
                </li>
                <li className="list__item">
                  <span className="list__item--detail">Species:</span>
                  <span>{renderIconSpecies()}</span>
                </li>
                <li className="list__item">
                  <span className="list__item--detail">Origin:</span>
                  <span>{characterDetail.origin}</span>
                </li>
                <li className="list__item">
                  <span className="list__item--detail">Episodes:</span>
                  <span>{characterDetail.episodes}</span>
                </li>
              </ul>
            </div>
          </article>
          <Link to="/" className="detail__back">
            <button className="detail__back--button">Go back</button>
          </Link>
        </main>
      ) : (
        <>
          <p className="text__error">
            ERROR: The character you are looking for doesn't exist.
          </p>
          <Link to="/" className="detail__back">
            <button className="detail__back--button">Go back</button>
          </Link>
        </>
      )}
    </>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharacterDetail;
