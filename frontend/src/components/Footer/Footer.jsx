// Footer.js
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='footer' id='footer'>
            <div className="footer-top">
                <div className="footer-logo-container" onClick={() => navigate('/')}>
                    <img src={assets.logo} alt="Logo" className="footer-logo" />
                    <p className="footer-logo-text">Swad</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li onClick={() => navigate('/contact')}>Contact Us</li>
                        <li onClick={() => navigate('/about')}>About Us</li>
                        <li onClick={() => navigate('/donate')}>Donations</li>
                        <li onClick={() => navigate('/blog')}>Blog</li>
                        <li onClick={() => navigate('/careers')}>Careers</li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-copyright-container">
                    <div className="footer-copyright">
                        &copy; 2025 Swad - All Rights Reserved.
                    </div>
                    <div className="footer-policy">
                        <p onClick={() => navigate('/terms')}>Terms and Conditions</p>
                        <span className="footer-policy-divider" style={{ marginTop: '-20px' }}>|</span>
                        <p onClick={() => navigate('/privacy')}>Privacy Policy</p>
                    </div>
                </div>
                <div className="footer-social-icons">
                    <div className="px-5">
                        <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.facebook.com/OklahomaTSA/">
                            <span className="sr-only"></span>
                            <svg width="15" height="27" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="px-5">
                        <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/oktsa78?lang=en">
                            <span className="sr-only"></span>
                            <svg width="28" height="24" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="px-5">
                        <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.instagram.com/oktsa78/?hl=en">
                            <span className="sr-only"></span>
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
