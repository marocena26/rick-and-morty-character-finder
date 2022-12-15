//react libraries
//import PropTypes from "prop-types";
//styles

function FilterByEpisodes(props) {
  const handleByEpisodes = (ev) => {
    props.handleFilterByEpisodes(ev.target.value);
  };

  return (
    //Filtro que nos devolverá el personaje cuyo valor corresponda a lo que la usuaria haya escrito en el input.
    <>
      <fieldset className="form__filter">
        <label htmlFor="name" className="form__filter--name">
          By Episodes:
        </label>
        <input
          type="number"
          name="number"
          id="number"
          className="form__filter--input"
          placeholder="Ex: 1"
          value={props.filterByEpisodes}
          onChange={handleByEpisodes}
        />
      </fieldset>
    </>
  );
}

export default FilterByEpisodes;
