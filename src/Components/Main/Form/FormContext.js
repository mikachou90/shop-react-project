import { createContext, useState } from "react";

const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [info, setInfo] = useState({
    cardName: "",
    cardNumber: "",
    cardExpDate: "",
    cvcNumber: "",
  });

  const value = { info, setInfo };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormContext;
