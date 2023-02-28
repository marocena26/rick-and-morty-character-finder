//react libraries
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//components
import error from "../../images/error-removebg-preview (2).png";
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
        <section className="detail">
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
            <p className="detail__back--button">We'd better go back, Morty.</p>
          </Link>
        </section>
      ) : (
        <div className="error">
          <h3 className="error__title">Wubba Lubba Dub Dub!</h3>
          <p className="error__text">
            ERROR: The character you are looking for doesn't exist.
          </p>
          <img src={error} alt="Logo Rick and Morty" className="error__img" />
          <Link to="/" className="error__back">
            <i className="fa-solid fa-chevron-left"></i> Go back
          </Link>
        </div>
      )}
    </>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharacterDetail;
