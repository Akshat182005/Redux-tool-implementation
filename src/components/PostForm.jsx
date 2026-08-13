import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) {
      return;
    }

    dispatch(addPost(content, platform));

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Create Post</h2>

      <textarea
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="form-row">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram">Instagram</option>
        </select>

        <button type="submit">
          Save Draft
        </button>
      </div>
    </form>
  );
}

export default PostForm;