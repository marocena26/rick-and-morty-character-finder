//react libraries
import PropTypes from "prop-types";
//components
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import ResetBtn from "./ResetBtn";
//style
import "../../styles/components/Filters.scss";

function Filters(props) {
  //Función handle para que no se nos envie el formulario automáticamente.
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <FilterByName
          handleFilterByName={props.handleFilterByName}
          filterByName={props.filterByName}
        />
        <FilterBySpecies
          handleFilterBySpecies={props.handleFilterBySpecies}
          filterBySpecies={props.filterBySpecies}
        ></FilterBySpecies>
        <FilterByStatus
          handleFilterByStatus={props.handleFilterByStatus}
          filterByStatus={props.filterByStatus}
        ></FilterByStatus>
      </form>
      <ResetBtn handleResetBtn={props.handleResetBtn} />
    </>
  );
}

Filters.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
  filterByName: PropTypes.string,
  handleFilterBySpecies: PropTypes.func.isRequired,
  filterBySpecies: PropTypes.string,
  handleFilterByStatus: PropTypes.func.isRequired,
  filterByStatus: PropTypes.string,
  handleResetBtn: PropTypes.func,
};

export default Filters;
