import "./Cart.css";

const products = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function Cart() {
  return (
    <div className="cart">
      <div className="cartWrapper">
        <h3>購物籃</h3>
        <div className="cartItems">
          <div className="item">
            <img
              className="itemPic"
              src="https://picsum.photos/300/300?text=1"
              alt="itemPic"
            />
            <div className="itemRright">
              <div className="itemInfo">
                <h5>Product Name</h5>
                <h5>$3,000</h5>
              </div>
              <div className="addItem">
                <img src="/icons/minus.svg" alt="" />
                <p>1</p>
                <img src="/icons/plus.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="shipFee">
          <h5>運費</h5>
          <h5>免費</h5>
        </div>
        <hr />
        <div className="totalPrice">
          <h5>小計</h5>
          <h5>$100,000</h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
