import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostStats from "./components/PostStats";

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Redux Post Manager</h1>

        <p>
          Centralized State Management with Redux Toolkit
        </p>
      </header>

      <PostStats />

      <PostForm />

      <PostList />
    </div>
  );
}

export default App;