import React, { useState } from "react";
import "../src/App.css";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import StepProgress from "Components/Main/Step/StepProgress/StepProgress";
import Form from "Components/Main/Form/Form";
import Cart from "Components/Main/Cart/Cart";
import { CartProvider } from "Components/Main/Cart/CartContext";
import { FormContextProvider } from "Components/Main/Form/FormContext";
import { StepContextProvider } from "Components/Main/Step/StepProgress/StepProgressContext";

function App() {
  return (
    <>
      <Header />
      <FormContextProvider>
        <CartProvider>
          <div className="main">
            <div className="leftZone">
              <StepContextProvider>
                <StepProgress />
                <Form />
              </StepContextProvider>
            </div>
            <div className="rightZone">
              <Cart />
            </div>
          </div>
        </CartProvider>
      </FormContextProvider>
      <Footer />
    </>
  );
}

export default App;
