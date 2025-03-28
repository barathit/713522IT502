import React from "react";
import "./NavigationTabs.css";

function NavigationTabs({ activeTab, setActiveTab }) {
  return (
    <nav className="dashboard-nav">
      <button
        className={`nav-button ${activeTab === "topUsers" ? "active" : ""}`}
        onClick={() => setActiveTab("topUsers")}
      >
        Top Users
      </button>
      <button
        className={`nav-button ${activeTab === "trending" ? "active" : ""}`}
        onClick={() => setActiveTab("trending")}
      >
        Trending
      </button>
      <button
        className={`nav-button ${activeTab === "feed" ? "active" : ""}`}
        onClick={() => setActiveTab("feed")}
      >
        Feed
      </button>
    </nav>
  );
}

export default NavigationTabs;