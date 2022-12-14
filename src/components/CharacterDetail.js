import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  // console.log(params);

  const characterDetail = findCharacter(params.id);
  console.log(characterDetail);

  return (
    <>
      <Link to="/">Go home</Link>
      <li className="card">
        <img
          className="card__image"
          src={characterDetail.image}
          alt={`Foto de ${characterDetail.name}`}
        />
        <h4 className="card__title">{characterDetail.name}</h4>
        <p className="card__species">{characterDetail.species}</p>
      </li>
    </>
  );
}
export default CharacterDetail;
