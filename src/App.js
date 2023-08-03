import React, { useState } from "react";
import "../src/App.css";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import StepProgress from "Components/Main/Step/StepProgress/StepProgress";
import Form from "Components/Main/Form/Form";
import ControlButton from "Components/Main/ControlButton/ControlButton";
import Cart from "Components/Main/Cart/Cart";
import { CartProvider } from "Components/Main/Cart/CartContext";
import { FormContextProvider } from "Components/Main/Form/FormContext";

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
      <CartProvider>
        <div className="main">
          <div className="leftZone">
            <StepProgress formStep={formStep} />
            <FormContextProvider>
              <Form formStep={formStep} />
              <ControlButton formStep={formStep} setFormStep={setStep} />
            </FormContextProvider>
          </div>
          <div className="rightZone">
            <Cart />
          </div>
        </div>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
