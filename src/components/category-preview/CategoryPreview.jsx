import ProductCard from "../product-card/ProductCard";
import { useNavigate } from "react-router-dom";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`${title}`);
  return (
    <>
      <div className="category-preview-container">
        <h2 onClick={handleNavigate} style={{ cursor: "pointer" }}>
          {title.toUpperCase()}
        </h2>
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
