//components
import FilterByName from "../FilterByName";

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
    </form>
  );
}

export default Filters;
