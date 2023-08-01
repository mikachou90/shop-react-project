import FormDelivery from "./FormDelivery/FormDelivery";
import FormPayment from "./FormPayment/FormPayment";
import FormAddress from "./FormAddress/FormAddress";

function Form({ formStep }) {
  return (
    <div>
      {formStep === 1 && <FormAddress />}
      {formStep === 2 && <FormDelivery />}
      {formStep === 3 && <FormPayment />}
    </div>
  );
}

export default Form;
