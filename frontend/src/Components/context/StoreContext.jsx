import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

// Create the context
export const StoreContext = createContext(null);

// Provider function
const StoreContextProvider = (props) => {
  const [cardItem, setCartItem] = useState({});
  const addToCart = (itemId) => {
    if (!cardItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItem) {
      if (cardItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          let price = parseFloat(itemInfo.price.replace("$", ""));
          totalAmount += price * cardItem[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cardItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  useEffect(() => {
    console.log("card item" + cardItem);
  }, [cardItem]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
