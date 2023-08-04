import "../StepProgress/StepProgress.css";
import { useContext } from "react";
import StepProgressContext from "./StepProgressContext";

function StepProgress() {
  const { formStep } = useContext(StepProgressContext);
  return (
    <div className="stepWrapper">
      <h2 className="progressName">結帳</h2>

      <div className="progressLines">
        <div className="progressBox">
          {formStep > 1 ? (
            <img className="icon" src="/icons/pg-complete.svg" alt="" />
          ) : (
            <div className="fake3 icon">
              <span>1</span>
            </div>
          )}
          <h4>寄送地址</h4>
        </div>

        <span className="arrowLine"></span>

        <div className="progressBox">
          {formStep > 2 ? (
            <img className="icon" src="/icons/pg-complete.svg" alt="" />
          ) : (
            <div className="fake3 icon">
              <span>2</span>
            </div>
          )}
          <h4>運送方式</h4>
        </div>

        <span className="arrowLine"></span>

        <div className="progressBox">
          <div className="fake3 icon">
            <span>3</span>
          </div>
          <h4>付費資訊</h4>
        </div>
      </div>
    </div>
  );
}

export default StepProgress;
