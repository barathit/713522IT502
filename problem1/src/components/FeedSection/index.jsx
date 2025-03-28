import React from "react";

const FeedSection = ({ posts }) => {
  return (
    <div className="section">
      <h2>Feed</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>Post #{post.id}</h3>
            <p>{post.content}</p>
            <span className="post-meta">User ID: {post.userid}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedSection;
