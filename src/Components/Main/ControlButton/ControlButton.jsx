import "./ControlButton.css";
import { useContext } from "react";
import StepProgressContext from "../Step/StepProgress/StepProgressContext";

function ControlButton() {
  const { formStep, setStep } = useContext(StepProgressContext);

  return (
    <div className="buttonWrapper">
      <hr />
      <div className="buttons">
        {formStep > 1 && (
          <button
            type="button"
            className="backBtn"
            onClick={() => setStep(formStep - 1)}
          >
            <img className="leftArrow" src="/icons/arrow-left.svg" alt="" />
            <p className="goBack">上一步</p>
          </button>
        )}

        {formStep === 3 ? (
          <button className="confirm" type="submit">
            確認下單
          </button>
        ) : (
          <button
            type="button"
            className="nextBtn"
            onClick={() => setStep(formStep + 1)}
          >
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
