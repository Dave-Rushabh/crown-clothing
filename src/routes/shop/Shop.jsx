import { useContext } from "react";
import { ProductsContext } from "../../components/contexts/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss";

import SHOP_DATA from "./../../shop-data.json";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Shop;
