import React from "react";
import "../ControlButton/Buttons.css";

function Buttons() {
  return (
    <>
      <div className="buttonWrapper">
        <a className="backBtn" href="/">
          <img className="leftArrow" src="/icons/arrow-left.svg" alt="" />
          <p className="goBack">上一步</p>
        </a>

        <button className="confirm" type="submit">
          確認下單
        </button>
      </div>
    </>
  );
}

export default Buttons;
