//components
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  //Función handle para que no se nos envie el formulario automáticamente.
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleFilterByName={props.handleFilterByName}
        filterByName={props.filterByName}
      />
      <FilterBySpecies
        handleFilterBySpecies={props.handleFilterBySpecies}
        filterBySpecies={props.filterBySpecies}
      ></FilterBySpecies>
    </form>
  );
}

export default Filters;
