function FilterByName(props) {
  const handleByName = (ev) => {
    props.handleFilterByName(ev.target.value);
  };

  return (
    //Filtro que nos devolverá el personaje cuyo valor corresponda a lo que la usuaria haya escrito en el input.
    <>
      <label htmlFor="name"></label>
      <input
        type="text"
        name="name"
        id="name"
        className="name__input"
        value={props.filterByName}
        onChange={handleByName}
      />
    </>
  );
}

export default FilterByName;
