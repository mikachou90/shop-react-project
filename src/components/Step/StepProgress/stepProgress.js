import React from "react";
import "./StepProgress.css";

function StepProgress() {
  return (
    <>
      <div className="stepWrapper">
        <h2 className="progressName">結帳</h2>

        <div className="progressLines">
          <div className="progressBox">
            <img src="/icons/pg-complete.svg" alt="" />
            <h5>寄送地址</h5>
          </div>
          <span className="arrowLine"></span>
          <div className="progressBox">
            <img src="/icons/pg-complete.svg" alt="" />
            <h5>運送方式</h5>
          </div>
          <span className="arrowLine"></span>
          <div className="progressBox">
            <div className="fake3">3</div>
            <h5>付費資訊</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepProgress;
