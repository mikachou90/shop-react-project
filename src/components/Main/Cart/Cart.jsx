import "./Cart.css";
import { ProductData } from "./ProductData";
import RenderItem from "./RenderItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">
          {ProductData.map((product) => (
            <RenderItem
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
