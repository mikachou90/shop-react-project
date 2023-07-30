import FormDelivery from "./FormDelivery/FormDelivery";
import FormPayment from "./FormPayment/FormPayment";

function Form() {
  return (
    <div>
      <FormPayment />
      <FormDelivery />
    </div>
  );
}

export default Form;
