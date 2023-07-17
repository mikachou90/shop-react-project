import React from "react";
import StepProgress from "./Step/StepProgress/StepProgress";
import FormPayment from "./Form/FormPayment";
import Buttons from "./ControlButton/Buttons";

function Main() {
  return (
    <div>
      <div className="leftZone">
        <StepProgress />
        <FormPayment />
        <Buttons />
      </div>
    </div>
  );
}

export default Main;
