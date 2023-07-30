import "./FormPayment.css";

function FormPayment() {
  return (
    <div className="formPaymentWrapper">
      <h3>付款資訊</h3>
      <form>
        <div className="nameBox">
          <label htmlFor="name">持卡人姓名</label>
          <input name="name" id="name" type="text" className="inputName" />
        </div>

        <div className="creditCardBox">
          <label htmlFor="creditCard">信用卡號</label>
          <input
            className="inputCreditCard"
            name="creditCard"
            id="creditCard"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </div>

        <div className="cardInfoBox">
          <div className="ExpiryBox">
            <label htmlFor="expiry">有效期限</label>
            <div>
              <input
                className="expiryNumber"
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxlength="4"
                size="2"
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
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPayment;
