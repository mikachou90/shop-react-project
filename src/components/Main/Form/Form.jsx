import FormDelivery from "./FormDelivery/FormDelivery";
import FormPayment from "./FormPayment/FormPayment";
import FormAddress from "./FormAddress/FormAddress";

function Form() {
  return (
    <div>
      <FormPayment />
      <FormDelivery />
      <FormAddress />
    </div>
  );
}

export default Form;
