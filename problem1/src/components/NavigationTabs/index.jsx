import React from "react";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="dashboard-nav">
      <button
        className={activeTab === "topUsers" ? "active" : ""}
        onClick={() => setActiveTab("topUsers")}
      >
        Top Users
      </button>
      <button
        className={activeTab === "trending" ? "active" : ""}
        onClick={() => setActiveTab("trending")}
      >
        Trending Posts
      </button>
      <button
        className={activeTab === "feed" ? "active" : ""}
        onClick={() => setActiveTab("feed")}
      >
        Feed
      </button>
    </nav>
  );
};

export default NavigationTabs;
