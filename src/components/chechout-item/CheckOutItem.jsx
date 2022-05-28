import {
  CheckOutItemContainer,
  ImageContainer,
  Tags,
  Qunatity,
  ButtonLeft,
  ButtonRight,
  RemoveButton,
} from "./CheckOutItemStyle";
import { useContext } from "react";
import { Cart } from "../contexts/CartContext";

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(Cart);

  const handleClearItem = () => clearItemFromCart(item);
  const handleAddItem = () => addItemToCart(item);
  const handleRemoveItem = () => removeItemFromCart(item);
  return (
    <>
      <CheckOutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Tags className="name">{name}</Tags>
        <Qunatity>
          <span onClick={handleRemoveItem}>
            <ButtonLeft>-</ButtonLeft>
          </span>
          {quantity}
          <span onClick={handleAddItem}>
            <ButtonRight>+</ButtonRight>
          </span>
        </Qunatity>
        <Tags className="price">{price}$</Tags>
        <RemoveButton onClick={handleClearItem}>
          <ButtonLeft>&#10005;</ButtonLeft>
        </RemoveButton>
      </CheckOutItemContainer>
    </>
  );
};

export default CheckOutItem;
