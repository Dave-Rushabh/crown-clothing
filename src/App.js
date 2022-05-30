import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/HomePage";
import NavigationBar from "./routes/navigation/NavigationBar";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";
import ScrollToTop from "./routes/scroll-to-top/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<HomePage />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/check-out" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
