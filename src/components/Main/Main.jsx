import React from "react";
import "./Main.css";
import StepProgress from "./Step/StepProgress/StepProgress";
import FormPayment from "./Form/FormPayment";
import Buttons from "./ControlButton/Buttons";

function Main() {
  return (
    <div className="main">
      <div className="leftZone">
        <StepProgress />
        <FormPayment />
        <Buttons />
      </div>
    </div>
  );
}

export default Main;
