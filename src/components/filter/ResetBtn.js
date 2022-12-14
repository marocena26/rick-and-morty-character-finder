function ResetBtn({ handleResetBtn }) {
  const handleReset = (ev) => {
    ev.preventDefault();
    handleResetBtn();
  };
  return (
    <button type="reset" className="form__reset" onClick={handleReset}>
      Reset
    </button>
  );
}

export default ResetBtn;
