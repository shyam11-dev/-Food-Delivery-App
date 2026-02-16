import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import { StoreContext } from "../../Components/context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cardItem, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p className="mb-0">Item</p>
          <p className="mb-0">Title</p>
          <p className="mb-0">Price</p>
          <p className="mb-0">Quality</p>
          <p className="mb-0">Total</p>
          <p className="mb-0">Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-item  cart-items-title ">
                  {/* <p>{item.name}</p> */}
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cardItem[item._id]}</p>
                  <p>
                    ${" "}
                    {parseFloat(item.price.replace("$", "")) *
                      (cardItem[item._id] || 0)}
                  </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCESS TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
