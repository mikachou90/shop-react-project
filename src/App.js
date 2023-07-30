import React, { useState } from "react";
import "../src/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StepProgress from "./components/Main/Step/StepProgress/StepProgress";
import Form from "./components/Main/Form/Form";
import ControlButton from "./components/Main/ControlButton/ControlButton";
import Cart from "./components/Main/Cart/Cart";

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
