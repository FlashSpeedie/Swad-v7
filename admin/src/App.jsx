import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';  // Ensure Route is correctly imported
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';  // Updated import to reflect new file name
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sales from "./pages/Sales/Sales";
import Dashboard from "./pages/Dashboard/Dashboard"; // Added Dashboard import
import Messages from "./pages/Messages/Messages";

const App = () => {

  const url = "https://swad-v7-backend.onrender.com/"; // API base URL
  // const url = "http://localhost:4000"; // API base URL

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
            <Route path="/sales" element={<Sales url={url} />} />
            <Route path="/message" element={<Messages url={url} />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
