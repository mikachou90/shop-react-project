import "./ControlButton.css";

function ControlButton({ formStep, setFormStep }) {
  return (
    <div className="buttonWrapper">
      <hr />
      <div className="buttons">
        {formStep > 1 && (
          <button className="backBtn" onClick={() => setFormStep(formStep - 1)}>
            <img className="leftArrow" src="/icons/arrow-left.svg" alt="" />
            <p className="goBack">Back</p>
          </button>
        )}

        {formStep === 3 ? (
          <button className="confirm" onClick={() => console.log(" finish ")}>
            Confirm
          </button>
        ) : (
          <button className="confirm" onClick={() => setFormStep(formStep + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ControlButton;
