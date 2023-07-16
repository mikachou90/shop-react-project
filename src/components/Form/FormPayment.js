import React from "react";
import "../Form/FormPayment.css";

function Form() {
  return (
    <>
      <div className="formWrapper">
        <h3>付款資訊</h3>
        <form>
          <div className="nameBox">
            <label htmlFor="name">持卡人姓名</label>
            <input name="name" id="name" type="text" />
          </div>

          <div className="creditCardBox">
            <label htmlFor="creditCard">信用卡號</label>
            <input
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
                  name="month"
                  placeholder="MM"
                  maxlength="2"
                  size="2"
                />
                <span>/</span>
                <input
                  className="expiryNumber"
                  type="text"
                  name="year"
                  placeholder="YY"
                  maxlength="2"
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
    </>
  );
}

export default Form;
