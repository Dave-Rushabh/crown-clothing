import "./ProductCard.scss";
import Butoon from "./../button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
        </div>
        <Butoon buttonType="inverted">
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
