import { getFormattedPrice } from "Utils/pricing";
import "./CartRenderItem.css";

const CartRenderItem = ({ handleQtyChange, img, name, price, quantity }) => {
  return (
    <div className="item">
      <img className="itemPic" src={img} alt={name} />
      <div className="itemRright">
        <div className="itemInfo">
          <h5>{name}</h5>
          <h5>單價: NTD {price}</h5>
        </div>
        <div className="addItem">
          <div className="btnItems">
            <img
              className="minusIcon"
              src="/icons/minus.svg"
              alt=""
              onClick={() => handleQtyChange(quantity - 1)}
            />
            <p className="qtyRender">{quantity}</p>
            <img
              className="plusIcon"
              src="/icons/plus.svg"
              alt=""
              onClick={() => handleQtyChange(quantity + 1)}
            />
          </div>
          <h5 className="currentPrice">
            {getFormattedPrice(price * quantity)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartRenderItem;
