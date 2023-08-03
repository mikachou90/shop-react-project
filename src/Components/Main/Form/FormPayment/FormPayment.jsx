import "./FormPayment.css";
import FormContext from "../FormContext";
import { useContext } from "react";

function FormPayment() {
  const { info, setInfo } = useContext(FormContext);

  function hanlderInpuChange(e) {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  return (
    <div className="formPaymentWrapper">
      <h3>付款資訊</h3>
      <form onSubmit={console.log}>
        <div className="nameBox">
          <label htmlFor="name">持卡人姓名</label>
          <input
            name="cardName"
            id="cardName"
            type="text"
            className="inputName"
            onChange={hanlderInpuChange}
          />
        </div>

        <div className="creditCardBox">
          <label htmlFor="creditCard">信用卡號</label>
          <input
            className="inputCreditCard"
            name="cardNumber"
            id="cardNumber"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={hanlderInpuChange}
          />
        </div>

        <div className="cardInfoBox">
          <div className="ExpiryBox">
            <label htmlFor="expiry">有效期限</label>
            <div>
              <input
                className="expiryNumber"
                type="text"
                name="cardExpDate"
                placeholder="MM/YY"
                maxlength="4"
                size="2"
                onChange={hanlderInpuChange}
              />
            </div>
          </div>

          <div className="cvcBox">
            <label htmlFor="cvc">CVC/CCV</label>
            <input
              className="cvcNumber"
              type="number"
              maxLength="3"
              placeholder="123"
              onChange={hanlderInpuChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPayment;
