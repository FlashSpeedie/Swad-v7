import { createContext, useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://swad-v7-backend.onrender.com";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  // Max quantity per item in the cart
  const MAX_QUANTITY = 20;

  // Add item to cart with quantity restriction
  const addToCart = async (itemId, quantity = 1) => {
    // Ensure the quantity doesn't exceed the max limit
    const updatedQuantity = Math.min(quantity, MAX_QUANTITY);

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: updatedQuantity }));
    } else {
      const newQuantity = Math.min(cartItems[itemId] + updatedQuantity, MAX_QUANTITY);
      setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
    }

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId, quantity: updatedQuantity }, { headers: { token } });
    }
  };

  // Remove one item from the cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const newQuantity = prev[itemId] - 1;
      if (newQuantity <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });

    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  // Update the quantity of an item in the cart
  const updateCartItem = async (itemId, quantity) => {
    const updatedQuantity = Math.max(0, Math.min(MAX_QUANTITY, quantity));
    setCartItems((prev) => ({
      ...prev,
      [itemId]: updatedQuantity,
    }));

    if (token) {
      await axios.post(url + "/api/cart/update", { itemId, quantity: updatedQuantity }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
