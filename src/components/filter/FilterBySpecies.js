import PropTypes from "prop-types";
import "../../styles/components/FilterBySpecies.scss";
function FilterBySpecies(props) {
  const handleBySpecies = (ev) => {
    props.handleFilterBySpecies(ev.target.value);
  };

  return (
    <fieldset className="form__select">
      <label className="form__select--name">By Species:</label>
      <select
        name="species"
        id="species"
        className="form__select--input"
        value={props.filterBySpecies}
        onChange={handleBySpecies}
      >
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </fieldset>
  );
}

FilterBySpecies.propTypes = {
  handleFilterBySpecies: PropTypes.func.isRequired,
  filterBySpecies: PropTypes.string,
};

export default FilterBySpecies;
