//components
import FilterByName from "./FilterByName";
// import FilterBySpecies from "./FilterBySpecies";
//styles

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleFilterByName={props.handleFilterByName}
        filterByName={props.filterByName}
      />
    </form>
  );
}

export default Filters;
