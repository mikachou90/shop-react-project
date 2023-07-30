import "./Cart.css";
import cartProductData from "./cartProductData";
import CartRenderItem from "./CartRenderItem";
import { useState } from "react";

function Cart() {
  const [currentItems, setCurrentItems] = useState(cartProductData);

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
          <h5>{totalValuesItems}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
