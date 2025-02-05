import React, { useEffect, useContext } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            if (!orderId) {
                console.error("No orderId provided for verification.");
                navigate("/");
                return;
            }

            try {
                console.log("Verifying payment for order:", orderId);

                const response = await axios.post(`${url}/api/order/verify`, {
                    success: success === "true", 
                    orderId
                });


                console.log("API Response:", response.data);

                if (response.data.success) {
                    navigate("/myorders");
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.error("Payment verification failed:", error.response?.data || error);
                navigate("/");
            }
        };

        verifyPayment();
    }, [success, orderId, url, navigate]);

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;
