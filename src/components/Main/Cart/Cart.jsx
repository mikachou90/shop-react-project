import "./Cart.css";
import { CartProductData } from "./CartProductData";
import CartRenderItem from "./CartRenderItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">
          {CartProductData.map((product) => (
            <CartRenderItem
              name={product.name}
              img={product.img}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>

        <div className="shipFee">
          <h5>運費</h5>
          <h5>免費</h5>
        </div>

        <div className="totalPrice">
          <h5>小計</h5>
          <h5>$100,000</h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
