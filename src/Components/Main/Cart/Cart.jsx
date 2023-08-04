import "./Cart.css";
import CartRenderItem from "./CartRenderItem";
import { useContext } from "react";
import { getFormattedPrice } from "Utils/pricing";
import CartContext from "./CartContext";
import FormContext from "../Form/FormContext";

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
