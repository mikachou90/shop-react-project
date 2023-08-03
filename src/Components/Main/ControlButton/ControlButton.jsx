import "./ControlButton.css";

function ControlButton({ formStep, setFormStep }) {
  return (
    <div className="buttonWrapper">
      <hr />
      <div className="buttons">
        {formStep > 1 && (
          <button className="backBtn" onClick={() => setFormStep(formStep - 1)}>
            <img className="leftArrow" src="/icons/arrow-left.svg" alt="" />
            <p className="goBack">上一步</p>
          </button>
        )}

        {formStep === 3 ? (
          <button
            className="confirm"
            onClick={() => console.log(" finish ")}
            type="submit"
          >
            確認下單
          </button>
        ) : (
          <button className="nextBtn" onClick={() => setFormStep(formStep + 1)}>
            <p className="goBack">下一步</p>
            <img
              src="/icons/arrow-right-white.svg"
              alt=""
              className="rightArrow"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default ControlButton;
