import React from "react";

const TopUsersSection = ({ users }) => {
  const topUsers = [...users]
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  return (
    <div className="section">
      <h2>Top Users</h2>
      <div className="users-grid">
        {topUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                alt="avatar"
              />
            </div>
            <h3>{user.name}</h3>
            <p>Posts: {user.postCount}</p>
            <p>Company: {user.company?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersSection;
