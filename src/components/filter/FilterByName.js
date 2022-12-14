import "../../styles/components/FilterByName.scss";

function FilterByName(props) {
  const handleByName = (ev) => {
    props.handleFilterByName(ev.target.value);
  };

  return (
    //Filtro que nos devolverá el personaje cuyo valor corresponda a lo que la usuaria haya escrito en el input.
    <>
      <fieldset className="filter">
        <label htmlFor="name" className="filter__name">
          Search
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="filter__input"
          placeholder="Morty Smith"
          value={props.filterByName}
          onChange={handleByName}
        />
      </fieldset>
    </>
  );
}

export default FilterByName;
