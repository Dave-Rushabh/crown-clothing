import { useContext } from "react";
import CheckOutItem from "../../components/chechout-item/CheckOutItem";
import { Cart } from "../../components/contexts/CartContext";
import "./CheckOut.scss";

const CheckOut = () => {
  const { cartItems, total } = useContext(Cart);

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((item) => {
          return (
            <>
              <CheckOutItem key={item.id} item={item} />
            </>
          );
        })}
        <span className="total">{`Total : ${total}$`}</span>
      </div>
    </>
  );
};

export default CheckOut;
