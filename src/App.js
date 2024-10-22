import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Transactions from "./Transactions";
import FX from "./Fx";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeSubTab, setActiveSubTab] = useState("Products");
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [isMarketMonitorOpen, setIsMarketMonitorOpen] = useState(false);

  const handleMarketMonitorClick = () => {
    setIsMarketMonitorOpen(!isMarketMonitorOpen);
    setActiveMenu("Market Monitor");
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="logo">J.P. Morgan</div>
          <div className="app-title">App Title</div>
          <ul className="nav-links">
            <li className={activeTab === "Home" ? "active" : ""}>
              <Link
                to="/"
                onClick={() => setActiveTab("Home")}
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </Link>
            </li>
            <li className={activeTab === "Transactions" ? "active" : ""}>
              <Link
                to="/transactions"
                onClick={() => setActiveTab("Transactions")}
                style={{ textDecoration: "none", color: "black" }}
              >
                Transactions
              </Link>
            </li>
            <li className={activeTab === "FX" ? "active" : ""}>
              <Link
                to="/fx"
                onClick={() => setActiveTab("FX")}
                style={{ textDecoration: "none", color: "black" }}
              >
                FX
              </Link>
            </li>
          </ul>
          <div className="settings-icon">⚙️</div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeMenu={activeMenu}
                isMarketMonitorOpen={isMarketMonitorOpen}
                handleMarketMonitorClick={handleMarketMonitorClick}
                setActiveMenu={setActiveMenu}
                activeSubTab={activeSubTab}
                setActiveSubTab={setActiveSubTab}
                activeTab={activeTab}
              />
            }
          />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/fx" element={<FX />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
