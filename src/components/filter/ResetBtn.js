import PropTypes from "prop-types";
import "../../styles/components/ResetBtn.scss";

function ResetBtn({ handleResetBtn }) {
  const handleReset = (ev) => {
    ev.preventDefault();
    handleResetBtn();
  };
  return (
    <button type="reset" className="reset" onClick={handleReset}>
      Reset filters
    </button>
  );
}

ResetBtn.propTypes = {
  handleReset: PropTypes.func,
};

export default ResetBtn;
