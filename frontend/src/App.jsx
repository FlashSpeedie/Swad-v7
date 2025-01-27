import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';
import TermsConditions from './pages/TermsConditions/TermsConditions';  
import PrivacyPolicy from './pages/PrivacyPolicy/Policy';
import ReserveTable from './pages/ReserveTable/ReserveTable';  
import ContactUs from './pages/ContactUs/ContactUs';
import Menu from './pages/Menu/Menu';
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Blog from './pages/Blog/Blog'
import GiftCard from './pages/GiftCard/GiftCard'
import Reference_Page from './pages/Reference_Page/Reference_Page';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/reserve" element={<ReserveTable />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/gift-cards' element={<GiftCard/>}/>
          <Route path='/reference' element={<Reference_Page/>}/>

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
