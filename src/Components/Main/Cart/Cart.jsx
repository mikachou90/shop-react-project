import "./Cart.css";
import CartProductData from "./CartProductData";
import CartRenderItem from "./CartRenderItem";
import { useState } from "react";
import { getFormattedPrice } from "Utils/pricing";

function Cart() {
  const [currentItems, setCurrentItems] = useState(CartProductData);

  function changeItemsValues(productId, newQty) {
    const newCurrentItems = currentItems.map((item) => {
      if (item.id === productId && newQty > 0) {
        item.quantity = newQty;
      }
      return item;
    });
    setCurrentItems(newCurrentItems);
  }

  const totalValuesItems = currentItems.reduce((acc, val) => {
    return acc.quantity * acc.price + val.quantity * val.price;
  });
  const formattedTotalValuesItems = getFormattedPrice(totalValuesItems);

  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">
          {currentItems.map((product) => (
            <CartRenderItem
              key={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              quantity={product.quantity}
              handleQtyChange={(newQty) => {
                changeItemsValues(product.id, newQty);
              }}
            />
          ))}
        </div>

        <div className="shipFee">
          <h5>運費</h5>
          <h5>免費</h5>
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
