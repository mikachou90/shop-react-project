import { useState, createContext } from "react";

const StepProgressContext = createContext();

export function StepContextProvider({ children }) {
  const [formStep, setFormStep] = useState(1);

  function setStep(newStep) {
    if (newStep > 0 && newStep < 4) {
      setFormStep(newStep);
    }
  }

  const value = { formStep, setFormStep, setStep };

  return (
    <StepProgressContext.Provider value={value}>
      {children}
    </StepProgressContext.Provider>
  );
}

export default StepProgressContext;
