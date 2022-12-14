import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <main className="main__detail">
        <article className="article">
          <Link to="/">Go home</Link>
          <div className="article__detail">
            <img
              className="card__image"
              src={characterDetail.image}
              alt={`Foto de ${characterDetail.name}`}
            />
            <div className="detail__info">
              <h2 className="card__title">{characterDetail.name}</h2>
              <ul className="detail__info--list">
                <li className="detail__info--list--item">
                  <span>Status</span> <span>{renderIconStatus()}</span>
                </li>
                <li className="detail__info--list--item">
                  <span>Species</span> <span>{renderIconSpecies()}</span>
                </li>
                <li className="detail__info--list--item">
                  <span>Origin</span> <span>{characterDetail.origin}</span>
                </li>
                <li className="detail__info--list--item">
                  <span>Episodes</span> <span>{characterDetail.episodes}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
export default CharacterDetail;
