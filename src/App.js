import React from "react";
import "../src/App.css";
import StepProgress from "./components/Step/StepProgress/StepProgress";
import Form1 from "./components/Form/FormPayment";
import Buttons from "./components/ControlButton/Buttons";

function App() {
  return (
    <>
      <div className="header">
        <h1>Alpha Shop</h1>
      </div>
      <div className="leftZone">
        <StepProgress />
        <Form1 />
        <Buttons />
      </div>
    </>
  );
}

export default App;
