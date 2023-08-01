import React, { useState } from "react";
import "../src/App.css";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import StepProgress from "Components/Main/Step/StepProgress/StepProgress";
import Form from "Components/Main/Form/Form";
import ControlButton from "Components/Main/ControlButton/ControlButton";
import Cart from "Components/Main/Cart/Cart";

function App() {
  const [formStep, setFormStep] = useState(1);

  function setStep(newStep) {
    if (newStep > 0 && newStep < 4) {
      setFormStep(newStep);
    }
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="leftZone">
          <StepProgress formStep={formStep} />
          <Form formStep={formStep} />
          <ControlButton formStep={formStep} setFormStep={setStep} />
        </div>
        <div className="rightZone">
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
