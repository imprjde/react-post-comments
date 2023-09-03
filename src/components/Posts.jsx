import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import {
  BsFillCaretLeftSquareFill,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";
const Posts = ({ posts, loading, postId, setPostId, page, setPage }) => {
  return (
    <div className="m-auto">
      {loading && <Shimmer />}
      {!loading &&
        posts &&
        posts.map((data) => (
          <div
            key={data.id}
            className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white m-auto mt-2 py-4 w-[300px] md:w-[350px]  items-center justify-center rounded-lg"
          >
            <div>
              <div className="text-left text-black bg-pink-500 w-fit ml-4 px-2  rounded-md font-bold">
                Post No: <span>{data.id < 10 ? "0" + data.id : data.id}</span>
              </div>
              <div className=" hidden md:flex text-left px-4 text-lg font-bold py-2 mt-2 ">
                Title:
                <span> {data.title.slice(0, 25)} ...</span>
              </div>
              <div className="text-left px-4 text-lg font-bold py-2 mt-2 md:hidden">
                Title:
                <span> {data.title.slice(0, 18)} ...</span>
              </div>
              <div className=" hidden md:flex text-left px-4 py-2  text-lg font-serif ">
                Detail:<span>{data.body.slice(0, 26)} ...</span>
              </div>
              <div className="text-left px-4 py-2  text-lg font-serif md:hidden ">
                Detail:<span> {data.body.slice(0, 18)} ...</span>
              </div>
            </div>
            <Link to={`/${postId}/comment`}>
              {" "}
              <div className="mt-5 font-semibold bg-gradient-to-r from-purple-500 to-gray-800 w-32 m-auto py-[3px] rounded-md">
                <button onClick={() => setPostId(data.id)}>View Comment</button>
              </div>
            </Link>
          </div>
        ))}

      {!loading && (
        <div className=" m-auto w-[200px] mt-10 flex justify-between items-center ">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="text-white cursor-pointer"
          >
            <BsFillCaretLeftSquareFill size={30} />
          </button>
          <span className="text-white font-bold">{page}/10</span>
          <button
            disabled={page === 10}
            onClick={() => setPage((prev) => prev + 1)}
            className="text-white cursor-pointer"
          >
            <BsFillCaretRightSquareFill size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
