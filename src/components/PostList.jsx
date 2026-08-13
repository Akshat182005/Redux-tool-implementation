import { useDispatch, useSelector } from "react-redux";

import {
  deletePost,
  publishPost,
  setSelectedPlatform,
} from "../features/posts/postsSlice";

import {
  selectPostsByPlatform,
  selectSelectedPlatform,
} from "../features/posts/postsSelectors";

function PostList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectPostsByPlatform);
  const selectedPlatform = useSelector(selectSelectedPlatform);

  const platforms = [
    "All",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <section className="post-section">
      <h2>Your Posts</h2>

      <div className="filters">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={
              selectedPlatform === platform
                ? "active"
                : ""
            }
            onClick={() =>
              dispatch(setSelectedPlatform(platform))
            }
          >
            {platform}
          </button>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="empty">
          No posts found. Create your first post!
        </p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <article
              className="post-card"
              key={post.id}
            >
              <div className="post-header">
                <strong>{post.platform}</strong>

                <span
                  className={`status ${post.status}`}
                >
                  {post.status}
                </span>
              </div>

              <p>{post.content}</p>

              <div className="post-actions">
                {post.status === "draft" && (
                  <button
                    onClick={() =>
                      dispatch(publishPost(post.id))
                    }
                  >
                    Publish
                  </button>
                )}

                <button
                  onClick={() =>
                    dispatch(deletePost(post.id))
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;