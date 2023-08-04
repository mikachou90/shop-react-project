import FormDelivery from "./FormDelivery/FormDelivery";
import FormPayment from "./FormPayment/FormPayment";
import FormAddress from "./FormAddress/FormAddress";
import ControlButton from "../ControlButton/ControlButton";
import { useContext } from "react";
import FormContext from "./FormContext";
import CartContext from "../Cart/CartContext";
import StepProgressContext from "../Step/StepProgress/StepProgressContext";
import { getFormattedPrice } from "Utils/pricing";

function Form() {
  const { info } = useContext(FormContext);
  const { totalValuesItems } = useContext(CartContext);
  const { formStep } = useContext(StepProgressContext);

  console.log({ formStep });
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("您輸入的資料:", info);
          console.log("總金額:", getFormattedPrice(totalValuesItems));
        }}
      >
        <FormAddress isDisplay={formStep === 1} />
        <FormDelivery isDisplay={formStep === 2} />
        <FormPayment isDisplay={formStep === 3} />
        <ControlButton />
      </form>
    </>
  );
}

export default Form;
