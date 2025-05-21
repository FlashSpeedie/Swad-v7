import { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [showStatusIndex, setShowStatusIndex] = useState(null);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      setData(response.data.data);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const handleTrackOrder = (index) => {
    setLoadingIndex(index);
    setShowStatusIndex(null);

    setTimeout(async () => {
      await fetchOrders(); // re-fetch all orders
      setLoadingIndex(null);
      setShowStatusIndex(index);
    }, 1500); // show loading for 1.5s
  };


  return (
    <div className="my-order">
      <h2>Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          const taxAmount = order.amount * 0.045;
          const totalAmount = order.amount + taxAmount;
          const totalQuantity = order.items.reduce((acc, item) => acc + item.quantity, 0);

          return (
            <div key={index} className="my-order-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, idx) => {
                  if (idx === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + ",";
                  }
                })}
              </p>
              <p>${totalAmount.toFixed(2)}</p>
              <p>Items: {order.items.length}</p>
              <p>Total Quantity: {totalQuantity}</p>
              <p style={{ minHeight: "24px", position: "relative" }}>
                {loadingIndex === index ? (
                  <span className="loading-circle"></span>
                ) : showStatusIndex === index ? (
                  <span className="slide-in-status">
                    <span>&#x25cf;</span>
                    <b> {order.status}</b>
                  </span>
                ) : (
                  <>
                    <span>&#x25cf;</span>
                    <b> {order.status}</b>
                  </>
                )}
              </p>
              <div className="track-order-btn-wrapper">
                <button onClick={() => handleTrackOrder(index)}>Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .loading-circle {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid #ccc;
          border-top: 3px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          vertical-align: middle;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .slide-in-status {
          display: inline-block;
          animation: slideInStatus 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideInStatus {
          from { opacity: 0; transform: translateX(30px);}
          to { opacity: 1; transform: translateX(0);}
        }
        .track-order-btn-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default MyOrders;
