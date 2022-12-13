function FilterBySpecies(props) {
  const handleBySpecies = (ev) => {
    props.handleFilterBySpecies(ev.target.value);
  };

  return (
    <div className="form__select">
      <label className="form__select--label">Species</label>
      <select
        name="species"
        id="species"
        className="form__select--item"
        value={props.filterBySpecies}
        onChange={handleBySpecies}
      >
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </div>
  );
}

export default FilterBySpecies;
