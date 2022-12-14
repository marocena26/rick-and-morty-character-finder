//react libraries
import PropTypes from "prop-types";
//styles
import "../../styles/components/FilterByName.scss";

function FilterByName(props) {
  const handleByName = (ev) => {
    props.handleFilterByName(ev.target.value);
  };

  return (
    //Filtro que nos devolverá el personaje cuyo valor corresponda a lo que la usuaria haya escrito en el input.
    <>
      <fieldset className="form__filter">
        <label htmlFor="name" className="form__filter--name">
          By Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__filter--input"
          placeholder="Ex: Morty Smith"
          value={props.filterByName}
          onChange={handleByName}
        />
      </fieldset>
    </>
  );
}

FilterByName.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterByName: PropTypes.string,
};

export default FilterByName;
