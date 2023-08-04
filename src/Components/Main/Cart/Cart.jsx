import "./Cart.css";
import { useContext } from "react";
import { getFormattedPrice } from "Utils/pricing";
import CartContext from "./CartContext";
import FormContext from "../Form/FormContext";

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

function Cart() {
  const { currentItems, setCurrentItems, totalValuesItems } =
    useContext(CartContext);

  const { info } = useContext(FormContext);

  function changeItemsValues(productId, newQty) {
    const newCurrentItems = currentItems.map((item) => {
      if (item.id === productId && newQty > 0) {
        item.quantity = newQty;
      }
      return item;
    });
    setCurrentItems(newCurrentItems);
  }

  console.log({ deliveryFee: info.deliveryFee, totalValuesItems });

  const totalPrice = Number(info.deliveryFee)
    ? Number(info.deliveryFee) + totalValuesItems
    : totalValuesItems;
  const formattedTotalValuesItems = getFormattedPrice(totalPrice);

  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">
          {currentItems.map((product) => (
            <CartRenderItem
              key={product.id}
              product={product}
              handleQtyChange={(newQty) => {
                changeItemsValues(product.id, newQty);
              }}
            />
          ))}
        </div>

        <div className="shipFee">
          <h5>運費</h5>
          <h5>{getFormattedPrice(Number(info.deliveryFee))}</h5>
        </div>

        <div className="totalPrice">
          <h5>小計</h5>
          <h5>{formattedTotalValuesItems}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
