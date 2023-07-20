const RenderItem = ({ img, name, price, quantity }) => {
  return (
    <div className="item">
      <img className="itemPic" src={img} alt={name} />
      <div className="itemRright">
        <div className="itemInfo">
          <h5>{name}</h5>
          <h5>${price}</h5>
        </div>
        <div className="addItem">
          <img src="/icons/minus.svg" alt="" />
          <p>{quantity}</p>
          <img src="/icons/plus.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RenderItem;
