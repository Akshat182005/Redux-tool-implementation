import { useSelector } from "react-redux";

import {
  selectPostCount,
  selectDraftCount,
  selectPublishedCount,
} from "../features/posts/postsSelectors";

function PostStats() {
  const total = useSelector(selectPostCount);
  const drafts = useSelector(selectDraftCount);
  const published = useSelector(selectPublishedCount);

  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Posts</h3>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <h3>Drafts</h3>
        <strong>{drafts}</strong>
      </div>

      <div className="stat-card">
        <h3>Published</h3>
        <strong>{published}</strong>
      </div>
    </div>
  );
}

export default PostStats;