import "./ProductCard.scss";
import Butoon, { BUTTON_TYPES_CLASSES } from "./../button/Button";
import { useContext } from "react";
import { Cart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(Cart);

  const addProductToCart = () => addItemToCart(product);

  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
        </div>
        <Butoon
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          onClick={addProductToCart}
        >
          ADD TO CART
          <span className="price">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`${price}$`}
          </span>
        </Butoon>
      </div>
    </>
  );
};

export default ProductCard;
