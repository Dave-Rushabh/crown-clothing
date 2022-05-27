import "./CheckOutItem.scss";
import { useContext } from "react";
import { Cart } from "../contexts/CartContext";
import Button from "./../button/Button";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(Cart);

  const handleClearItem = () => clearItemFromCart(item);
  const handleAddItem = () => addItemToCart(item);
  const handleRemoveItem = () => removeItemFromCart(item);
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <span onClick={handleRemoveItem}>
            <Button className="btn-remove">-</Button>
          </span>
          {quantity}
          <span onClick={handleAddItem}>
            <Button className="btn-add">+</Button>
          </span>
        </span>
        <span className="price">{price}$</span>
        <div className="remove-button" onClick={handleClearItem}>
          <Button className="btn-remove">&#10005;</Button>
        </div>
      </div>
    </>
  );
};

export default CheckOutItem;
