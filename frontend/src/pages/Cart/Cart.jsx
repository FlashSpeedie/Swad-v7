import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, updateCartItem } =
    useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const taxRate = 0.045;
  const taxes = (subtotal) * taxRate + (subtotal > 0 ? 0.09 : 0);
  const total = subtotal + taxes + deliveryFee;

  const navigate = useNavigate();

  // Handle quantity change
  const handleQuantityChange = (itemId, value) => {
    const quantity = Math.max(0, Math.min(20, value)); // Ensure quantity is between 0 and 20
    updateCartItem(itemId, quantity); // Update the cart with new quantity
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Cart Total</h2>
        <hr />
        {subtotal === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items-title">
              <p>Item Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr />
            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className="cart-items-title cart-items-items">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <input
                        type="number"
                        className="quantity-input"
                        value={cartItems[item._id]}
                        onChange={(e) =>
                          handleQuantityChange(item._id, parseInt(e.target.value) || 0)
                        }
                        min="0"
                        max="20"
                      />
                      <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                      <p onClick={() => removeFromCart(item._id)} className="cross">
                        X
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-summary">
            <span className="label">Subtotal</span>
            <span className="value">${subtotal > 0 ? subtotal.toFixed(2) : "-"}</span>
          </div>
          <hr />
          <div className="cart-total-summary">
            <span className="label">Delivery Fee</span>
            <span className="value">${subtotal > 0 ? deliveryFee.toFixed(2) : "-"}</span>
          </div>
          <hr />
          <div className="cart-total-summary">
            <span className="label">Taxes (4.5%)</span>
            <span className="value">${subtotal > 0 ? taxes.toFixed(2) : "-"}</span>
          </div>
          <hr />
          <div className="cart-total-summary total">
            <b>Total</b>
            <b>${subtotal > 0 ? total.toFixed(2) : "-"}</b>
          </div>
          {subtotal > 0 && (
            <button className="checkout" onClick={() => navigate("/order", { state: { total } })}>
              PROCEED TO CHECKOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
