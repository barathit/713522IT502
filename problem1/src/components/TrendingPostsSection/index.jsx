import React, { useState } from "react";

const TrendingPostsSection = ({ posts, comments }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const trendingPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <div className="section">
      <h2>Trending Posts</h2>
      <div className="posts-grid">
        {trendingPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>Post #{post.id}</h3>
            <p>{post.content}</p>
            <span className="post-meta">User ID: {post.userid}</span>

            <div className="post-actions">
              <button
                onClick={() =>
                  setExpandedPost(expandedPost === post.id ? null : post.id)
                }
                className="comments-toggle"
              >
                {expandedPost === post.id ? "Hide Comments" : "Show Comments"}
              </button>
            </div>

            {expandedPost === post.id && comments[post.id] && (
              <div className="comments-section">
                <h4>Comments</h4>
                {comments[post.id].map((comment) => (
                  <div key={comment.id} className="comment">
                    <p>{comment.content}</p>
                    <span className="comment-meta">
                      Comment ID: {comment.id}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPostsSection;
