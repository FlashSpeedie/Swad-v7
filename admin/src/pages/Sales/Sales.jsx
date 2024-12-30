import React from "react";
import "./Sales.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
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
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Sales = () => {
  // Monthly Revenue (Line Chart)
  const revenueTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [500, 800, 600, 1200, 1500, 2000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  // Top Dishes (Bar Chart)
  const popularDishesData = {
    labels: ["Vegetable Curry", "Grilled Tofu", "Quinoa Salad", "Vegan Burger"],
    datasets: [
      {
        label: "Units Sold",
        data: [50, 70, 40, 90],
        backgroundColor: ["#66bb6a", "#ffa726", "#26c6da", "#ab47bc"],
        hoverBackgroundColor: ["#81c784", "#ffb74d", "#4dd0e1", "#ba68c8"],
      },
    ],
  };

  // Revenue Distribution by Meal Type (Pie Chart)
  const mealTypeData = {
    labels: ["Lunch", "Dinner", "Desserts", "Beverages"],
    datasets: [
      {
        data: [40, 35, 15, 10],
        backgroundColor: ["#8bc34a", "#ff9800", "#e91e63", "#00bcd4"],
        hoverBackgroundColor: ["#aed581", "#ffc947", "#f06292", "#4dd0e1"],
      },
    ],
  };

  return (
    <div className="sales-dashboard">
      {/* <h1 className="sales-title">Vegetarian Restaurant Sales</h1> */}

      {/* Summary Cards */}
      <div className="sales-summary">
        <div className="summary-card">
          <h3>Total Revenue</h3>
          <p>$25,000</p>
          <span>+15% from last month</span>
        </div>
        <div className="summary-card">
          <h3>Total Orders</h3>
          <p>1,200</p>
          <span>+8% from last month</span>
        </div>
        <div className="summary-card">
          <h3>New Customers</h3>
          <p>350</p>
          <span>+12% from last month</span>
        </div>
        <div className="summary-card">
          <h3>Meals Served</h3>
          <p>5,000</p>
          <span>+10% from last month</span>
        </div>
      </div>

      {/* Detailed Charts */}
      <div className="sales-charts">
        <div className="chart-container">
          <h3>Monthly Revenue Trend</h3>
          <Line data={revenueTrendData} options={{ responsive: true }} />
        </div>
        <div className="chart-container">
          <h3>Popular Dishes</h3>
          <Bar data={popularDishesData} options={{ responsive: true }} />
        </div>
        <div className="chart-container">
          <h3>Revenue by Meal Type</h3>
          <Pie data={mealTypeData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Sales Insights */}
      <div className="sales-insights">
        <h2>Key Sales Insights</h2>
        <ul>
          <li>
            <strong>Vegetable Curry</strong> remains the top-selling dish, with
            90 units sold this month.
          </li>
          <li>
            Revenue has increased by <strong>15%</strong> due to higher dinner
            sales and beverage additions.
          </li>
          <li>
            <strong>350 new customers</strong> joined this month, showing
            improved customer loyalty.
          </li>
          <li>
            <strong>Beverages</strong> and <strong>Desserts</strong> show the
            most potential for growth in upcoming months.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sales;
