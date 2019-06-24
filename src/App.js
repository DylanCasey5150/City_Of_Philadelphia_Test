import React from "react";

import "./App.css";
import Post from "./components/Post/Post.js";
import PostData from "./components/Data-Container/PostData.js";

function App() {
  const PostsWithData = PostData(Post);
  return (
    <div className="App">
      <PostsWithData />
    </div>
  );
}

export default App;
