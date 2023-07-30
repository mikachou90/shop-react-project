import "./FormDelivery.css";

function FormDelivery() {
  return (
    <div className="deliveryWrapper">
      <div className="formWrapper">
        <h3>運送方式</h3>
        <form action="">
          <div className="option">
            <input type="radio" />
            <div className="description">
              <p>標準運送</p>
              <p>約3~7個工作天</p>
            </div>
            <p className="fee">免費</p>
          </div>
          <div className="option">
            <input type="radio" />
            <div className="description">
              <p>DHL貨運</p>
              <p>48小時內送達</p>
            </div>
            <p className="fee">$500</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDelivery;
