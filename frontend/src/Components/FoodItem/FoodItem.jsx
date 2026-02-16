import "./FoodItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, name, description, price, img }) => {
  const { cardItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={img} alt=""></img>
        {!cardItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          ></img>
        ) : (
          <div className="food-Item-Counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            ></img>
            <p className="mb-0">{cardItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            ></img>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="mb-0">{name}</p>
          <img src={assets.rating_starts} alt=""></img>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
