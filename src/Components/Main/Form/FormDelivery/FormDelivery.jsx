import "./FormDelivery.css";
import { useContext } from "react";
import FormContext from "../FormContext";

function FormDelivery({ isDisplay }) {
  const { infoUpdateHandler } = useContext(FormContext);
  return (
    <div
      className="formDeliveryWrapper"
      style={{ display: isDisplay ? "block" : "none" }}
    >
      <h3>運送方式</h3>
      <div action="">
        <div className="option">
          <input
            type="radio"
            value="0"
            name="deliveryFee"
            onChange={infoUpdateHandler}
          />
          <div className="description">
            <p>標準運送</p>
            <p>約3~7個工作天</p>
          </div>
          <p className="fee">免費</p>
        </div>

        <div className="option">
          <input
            type="radio"
            value="500"
            name="deliveryFee"
            onChange={infoUpdateHandler}
          />
          <div className="description">
            <p>DHL貨運</p>
            <p>48小時內送達</p>
          </div>
          <p className="fee">$500</p>
        </div>
      </div>
    </div>
  );
}

export default FormDelivery;
