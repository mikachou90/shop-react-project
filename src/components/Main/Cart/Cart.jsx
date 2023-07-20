import "./Cart.css";
import { Products } from "./Products";

function Cart() {
  const listItems = Products.map((product) => (
    <div className="item">
      <img className="itemPic" src={product.img} alt={product.name} />
      <div className="itemRright">
        <div className="itemInfo">
          <h5>{product.name}</h5>
          <h5>${product.price}</h5>
        </div>
        <div className="addItem">
          <img src="/icons/minus.svg" alt="" />
          <p>{product.quantity}</p>
          <img src="/icons/plus.svg" alt="" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">{listItems}</div>

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
