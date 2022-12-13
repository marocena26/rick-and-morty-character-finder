function FilterByName(props) {
  const handleByName = (ev) => {
    props.handleFilterByName(ev.target.value);
  };

  return (
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
