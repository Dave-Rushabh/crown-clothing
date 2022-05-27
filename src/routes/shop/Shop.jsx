import { Routes, Route } from "react-router-dom";
import Category from "../category/Category";
import CategoriesPreview from "./../categories-preview/CategoriesPreview";

import "./Shop.scss";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
