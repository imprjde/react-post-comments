import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Header from "./components/Header";
import Comments from "./components/Comments";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [commentIsLoading, setCommentIsLoading] = useState(false);
  const [postId, setPostId] = useState(1);
  const [search, setSearch] = useState("");
  const [apiError, setApiError] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    try {
      if (!response.ok) {
        console.log("Failed to fetch the Data!! Please Retry");
        setLoading(false);
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    setCommentIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    try {
      if (!response.ok) {
        console.log("Something went wrong");
        setCommentIsLoading(false);
      }
      const data = await response.json();
      setComments(data);
      setCommentIsLoading(false);
    } catch (error) {
      console.log(error);
      setCommentIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSearch = async (e) => {
    if (!search) {
      return;
    }
    if (search) {
      e.preventDefault();
      setIsLoading(true);
      console.log("HandleSearch Ran");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${search}`
      );
      try {
        if (!response.ok) {
          setIsLoading(false);
          setApiError(true);
        } else {
          const data = await response.json();
          setSearchData(data);
          setIsLoading(false);
          setApiError(false);
        }
      } catch (error) {
        setIsLoading(false);
        setApiError(true);
      }
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          setSearch={setSearch}
          handleSearch={handleSearch}
          search={search}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Posts
                posts={posts}
                loading={loading}
                setPostId={setPostId}
                postId={postId}
                setPage={setPage}
                page={page}
              />
            }
          />
          <Route
            path="/:id/comment"
            element={
              <Comments
                comments={comments}
                commentIsLoading={commentIsLoading}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                searchData={searchData}
                isLoading={isLoading}
                search={search}
                apiError={apiError}
                setPostId={setPostId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
