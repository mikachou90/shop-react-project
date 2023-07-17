import React from "react";
import "../src/App.css";
import StepProgress from "../src/components/Main/Step/StepProgress/StepProgress";
import Form1 from "../src/components/Main/Form/FormPayment";
import Buttons from "../src/components/Main/ControlButton/Buttons";

function App() {
  return (
    <div>
      <div className="leftZone">
        <StepProgress />
        <Form1 />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
