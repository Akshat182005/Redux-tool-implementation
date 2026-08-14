import React from "react";

const PostCard = React.memo(function PostCard({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Scheduled: {post.date}</p>
    </div>
  );
});

export default PostCard;