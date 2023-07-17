import React from "react";
import "../src/App.css";
import StepProgress from "./components/Step/StepProgress/StepProgress";
import Form1 from "./components/Form/FormPayment";
import Buttons from "./components/ControlButton/Buttons";

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
