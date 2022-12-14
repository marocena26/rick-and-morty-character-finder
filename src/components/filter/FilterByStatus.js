function FilterByStatus(props) {
  const handleByStatus = (ev) => {
    props.handleFilterByStatus(ev.target.value);
  };

  return (
    <fieldset className="form__radio">
      <legend className="form__radio--legend">Dead or alive?</legend>
      <div className="form__radio--container">
        <label htmlFor="all" className="form__radio--label">
          <input
            type="radio"
            id="all"
            name="status"
            value="all"
            className="form__radio--input"
            checked={props.filterByStatus === "all"}
            onChange={handleByStatus}
          />
          <span className="form__radio--icon">
            <i class="fa-solid fa-thumbtack"></i>
          </span>
        </label>
        <label htmlFor="alive" className="form__radio--label">
          <input
            type="radio"
            id="alive"
            name="status"
            value="alive"
            className="form__radio--input"
            checked={props.filterByStatus === "alive"}
            onChange={handleByStatus}
          />
          <i className="form__radio--icon fa-solid fa-heart"></i>
        </label>
        <label htmlFor="dead" className="form__radio--label">
          <input
            type="radio"
            id="dead"
            name="status"
            value="dead"
            className="form__radio--input"
            checked={props.filterByStatus === "dead"}
            onChange={handleByStatus}
          />
          <i className="form__radio--icon fa-solid fa-skull"></i>
        </label>
      </div>
    </fieldset>
  );
}

export default FilterByStatus;
