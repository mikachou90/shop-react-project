import { createContext, useState } from "react";

const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [info, setInfo] = useState({});

  const infoUpdateHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const value = { info, infoUpdateHandler };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormContext;
