import React from "react";
import "./TopUsersSection.css";

function TopUsersSection({ users }) {
  return (
    <div className="users-section">
      <h2>Top Users</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img 
              src={user.avatar} 
              alt={user.username} 
              className="user-avatar"
            />
            <h3>{user.username}</h3>
            <div className="user-stats">
              <div className="stat">
                <span className="stat-value">{user.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.posts}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-value">{user.engagement}%</span>
                <span className="stat-label">Engagement</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopUsersSection;