import React from "react";
import "./Main.css";
import StepProgress from "./Step/StepProgress/StepProgress";
import Form from "./Form/Form";
import ControlButton from "./ControlButton/ControlButton";

function Main() {
  return (
    <div className="main">
      <div className="leftZone">
        <StepProgress />
        <Form />
        <ControlButton />
      </div>
    </div>
  );
}

export default Main;
