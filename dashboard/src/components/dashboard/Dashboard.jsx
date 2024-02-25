import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Dashboard.css";
import logo from "../../assets/logo.png";
import netflix from "../../assets/netflix.png";
import spotify from "../../assets/spotify.png";
import amazon from "../../assets/amazon.png";
import onlyf from "../../assets/of.png";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const options = {
  responsive: true,
  scales: {
    y: {
      display: false,
    },
  },
};

const labels = ["", "", "", "", "", "", ""];

const data = {
  labels,
  datasets: [
    {
      data: [100, 1200, 900, 1600, 2000, 1500, 2500],
      borderColor: "#59FCAA",
      backgroundColor: "transparent",
    },
  ],
};
const data2 = {
  labels,
  datasets: [
    {
      data: [0, 1900, 1800, 2400, 1800, 2000, 1700],
      borderColor: "#FF614B",
      backgroundColor: "transparent",
    },
  ],
};

const data3 = {
  labels,
  datasets: [
    {
      data: [200, 1700, 1400, 2400, 1700, 2000, 1700],
      borderColor: "#FFE956",
      backgroundColor: "transparent",
    },
  ],
};
const Dashboard = () => {
  const [selectedBalance, setSelectedBalance] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);

  const cardData = [
    { currency: "USD", balance: "$16,890.01" },
    { currency: "INR", balance: "₹1,18,230.25" },
    { currency: "EUR", balance: "€15,554.07" },
    { currency: "TRY", balance: "₺4,57,729.43" },
  ];
  const statData = ["1 week", "1 month", "6 months", "1 year"];

  const handleCardClick = (index) => {
    setSelectedBalance(index);
  };
  const handleStateClick = (duration) => {
    setSelectedStat(duration);
  };
  useEffect(() => {
    const defaultCurrencyIndex = cardData.findIndex(
      (card) => card.currency === "USD"
    );
    setSelectedBalance(defaultCurrencyIndex);

    const defaultStatIndex = statData[1];
    setSelectedStat(defaultStatIndex);
  }, []);
  console.log(selectedBalance)
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dash-body">
        <div className="search">
          <div className="bar">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search..."></input>
          </div>
          <div className="search-btns">
            <select title="language">
              <option>Eng</option>
              <option>Eng</option>
              <option>Eng</option>
            </select>
            <button>
              <i className="fa-solid fa-bell"></i>
            </button>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
            <button title="Profile">
              <img
                src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                alt="avt"
              />
            </button>
          </div>
        </div>
        <div className="accounts">
          <div className="header">
            <h2>Account</h2>
          </div>
          <div className="acc-btns">
            <button>
              Send <i className="fa-solid fa-turn-up"></i>
            </button>
            <button>
              Receive <i className="fa-solid fa-turn-down"></i>
            </button>
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="balance">
         {cardData.map((card,ind)=>(
          <div
          key={ind}
          onClick={()=>handleCardClick(ind)}
          className={`card${selectedBalance===ind?" selected":""}`}
          >
            <div className="curr">
            <h6>{card.currency}</h6>
                <i className="fa-solid fa-circle-check"></i>
            </div>
            <div className="bal">
            <h5>Balance</h5>
                <h1>{card.balance}</h1>
            </div>

          </div>

         ))}
        </div>
        <div className="stats">
          <div className="header">
            <h2>Statistics</h2>
          </div>
          <div className="days">
            {statData.map((duration, index) => (
              <button
                key={index}
                className={selectedStat === duration ? "selected" : ""}
                onClick={() => handleStateClick(duration)}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
        <div className="stat-graph">  
          <div className="card">
            <div className="header">
              <i className="fa-solid fa-arrow-trend-up"></i>
              <h6>
                +5.27%<i className="fa-solid fa-up-long"></i>
              </h6>
            </div>
            <div className="graph-body">
              <div className="amount">
                <h5>Incomes</h5>
                <h2>$5,620.06</h2>
              </div>
              <div className="graph">
                <Line
                  options={options}
                  data={data}
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <i
                className="fa-solid fa-arrow-trend-down"
                style={{ color: "#FF614B", backgroundColor: "#754a46" }}
              ></i>
              <h6 style={{ color: "#FF614B" }}>
                -1.07%
                <i
                  className="fa-solid fa-down-long"
                  style={{ color: "#FF614B" }}
                ></i>
              </h6>
            </div>
            <div className="graph-body">
              <div className="amount">
                <h5>Expenses</h5>
                <h2>$1,093.12</h2>
              </div>
              <div className="graph">
                <Line
                  options={options}
                  data={data2}
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <i
                className="fa-solid fa-database"
                style={{ color: "#FFE956" }}
              ></i>
              <h6 style={{ color: "#FFE956" }}>
                -3.97%
                <i
                  className="fa-solid fa-down-long"
                  style={{ color: "#FFE956" }}
                ></i>
              </h6>
            </div>
            <div className="graph-body">
              <div className="amount">
                <h5>Savings</h5>
                <h2>$4,236.52</h2>
              </div>
              <div className="graph">
                <Line
                  options={options}
                  data={data3}
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
          </div>
        <div className="bar-graph">bar-graph</div>
      </div>
    </div>
  );
};

export default Dashboard;
