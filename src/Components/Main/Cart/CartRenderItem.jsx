import { getFormattedPrice } from "Utils/pricing";
import "./CartRenderItem.css";

const CartRenderItem = ({ product, handleQtyChange }) => {
  return (
    <div className="item">
      <img className="itemPic" src={product.img} alt={product.name} />
      <div className="itemRright">
        <div className="itemInfo">
          <h5>{product.name}</h5>
          <h5>單價: NTD {product.price}</h5>
        </div>
        <div className="addItem">
          <div className="btnItems">
            <img
              src="/icons/minus.svg"
              alt=""
              onClick={() => handleQtyChange(product.quantity - 1)}
            />
            <p className="qtyRender">{product.quantity}</p>
            <img
              src="/icons/plus.svg"
              alt=""
              onClick={() => handleQtyChange(product.quantity + 1)}
            />
          </div>
          <h5 className="currentPrice">
            {getFormattedPrice(product.price * product.quantity)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartRenderItem;
