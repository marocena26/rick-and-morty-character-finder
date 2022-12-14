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

export default ResetBtn;
