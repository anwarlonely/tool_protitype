import React from "react";

function Home({
  activeMenu,
  setActiveMenu,
  isMarketMonitorOpen,
  handleMarketMonitorClick,
  activeSubTab,
  setActiveSubTab,
  activeTab,
}) {
  return (
    <div>
      {activeTab === "Home" && (
        <div className="sub-navbar">
          <ul className="sub-nav-links">
            <li
              className={activeSubTab === "Products" ? "active" : ""}
              onClick={() => setActiveSubTab("Products")}
            >
              Products
            </li>
            <li
              className={activeSubTab === "Services" ? "active" : ""}
              onClick={() => setActiveSubTab("Services")}
            >
              Services
            </li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <aside className="sidebar">
          <ul className="menu">
            <li className="menu-heading">{activeSubTab}</li>
            <li
              className={activeMenu === "Overview" ? "active" : ""}
              onClick={() => setActiveMenu("Overview")}
            >
              Overview
            </li>
            <li
              className={activeMenu === "Data" ? "active" : ""}
              onClick={() => setActiveMenu("Data")}
            >
              Data
            </li>
            <li
              className={activeMenu === "Data Analysis" ? "active" : ""}
              onClick={() => setActiveMenu("Data Analysis")}
            >
              Data Analysis
            </li>
            <li
              className={activeMenu === "Market Monitor" ? "active" : ""}
              onClick={handleMarketMonitorClick}
            >
              Market Monitor{" "}
              <span className="arrow">{isMarketMonitorOpen ? "▼" : "▶"}</span>
            </li>
            {isMarketMonitorOpen && (
              <ul className="dropdown">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </ul>
        </aside>

        <section className="content">
          <h1>{activeMenu}</h1>
          <p>
            This is the {activeMenu} section under {activeSubTab}.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
