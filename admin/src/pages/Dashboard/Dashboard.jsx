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
        data: [50000, 80000, 90000, 110000, 114750, 135000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Chart area background color
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Spaghetti Aglio e Olio", "Vegan Sushi Rolls", "Penne Arrabbiata", "Raspberry Almond Tart"],
    datasets: [
      {
        label: "Food Items Delivered",
        data: [5000, 7000, 4000, 9000],
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
          <p>$135,000</p>
          <span>+15% from last month</span>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>12,000</p>
          <span>+8% from last month</span>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>3,500</p>
          <span>+12% from last month</span>
        </div>
        <div className="card">
          <h3>Food Items Delivered</h3>
          <p>18,500</p>
          <span>+10% from last month</span>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Monthly Sales</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
        <div className="chart-container">
          <h3>Popular Food Delivered</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
