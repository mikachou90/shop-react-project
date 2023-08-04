import "./FormPayment.css";
import FormContext from "../FormContext";
import { useContext } from "react";

function FormPayment({ isDisplay }) {
  const { infoUpdateHandler } = useContext(FormContext);

  return (
    <div
      className="formPaymentWrapper"
      style={{ display: isDisplay ? "block" : "none" }}
    >
      <h3>付款資訊</h3>
      <div>
        <div className="nameBox">
          <label htmlFor="name">持卡人姓名</label>
          <input
            name="cardName"
            id="cardName"
            type="text"
            className="inputName"
            onChange={infoUpdateHandler}
          />
        </div>

        <div className="creditCardBox">
          <label htmlFor="creditCard">信用卡號</label>
          <input
            className="inputCreditCard"
            name="cardNumber"
            id="cardNumber"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={infoUpdateHandler}
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
                maxLength="4"
                size="2"
                onChange={infoUpdateHandler}
              />
            </div>
          </div>

          <div className="cvcBox">
            <label htmlFor="cvc">CVC/CCV</label>
            <input
              name="cvcNumber"
              className="cvcNumber"
              type="number"
              maxLength="3"
              placeholder="123"
              onChange={infoUpdateHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPayment;
