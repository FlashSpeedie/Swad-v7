import React from "react";
import "./Dashboard.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for Line Chart
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [500, 800, 600, 1200, 1500, 2000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Chart area background color
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Khana", "Khaka", "Jana", "Bye"],
    datasets: [
      {
        label: "Units Sold",
        data: [50, 70, 40, 90],
        backgroundColor: ["#3f51b5", "#ff9800", "#e91e63", "#00bcd4"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* <h1 className="dashboard-title">Dashboard</h1> */}

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p>$25,000</p>
          <span>+15% from last month</span>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>1,200</p>
          <span>+8% from last month</span>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>350</p>
          <span>+12% from last month</span>
        </div>
        <div className="card">
          <h3>Products Sold</h3>
          <p>5,000</p>
          <span>+10% from last month</span>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Monthly Sales</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
        <div className="chart-container">
          <h3>Top Products</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
