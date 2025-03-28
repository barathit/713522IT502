import { useState, useEffect } from "react";
import axios from "axios";
import "./SocialMediaDashboard.css";
import TopUsersSection from "../TopUsersSection";
import TrendingPostsSection from "../TrendingPostsSection";
import FeedSection from "../FeedSection";
import NavigationTabs from "../NavigationTabs";

function SocialMediaDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("topUsers");

  const API_URL = "http://20.244.56.244/test";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data.users);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="dashboard-content">
        {activeTab === "topUsers" && <TopUsersSection users={users} />}
      </main>
    </div>
  );
}

export default SocialMediaDashboard;
