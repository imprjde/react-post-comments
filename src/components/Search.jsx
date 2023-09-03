import React from "react";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";

const Search = ({ searchData, postId, isLoading, apiError, setPostId }) => {
  return (
    <>
      {apiError && (
        <div className="mt-32 font-bold text-2xl text-white">
          Opps!! <br /> These was no Post Found
        </div>
      )}
      {isLoading && <SearchShimmer />}
      {!isLoading && !apiError && searchData && (
        <div
          key={searchData?.id}
          className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white m-auto mt-2 py-4 w-[300px] md:w-[350px]  items-center justify-center rounded-lg"
        >
          <div>
            <div className="text-left text-black bg-pink-500 w-fit ml-4 px-2  rounded-md font-bold">
              Post No:{" "}
              <span>
                {searchData?.id < 10 ? "0" + searchData?.id : searchData?.id}
              </span>
            </div>
            <div className=" hidden md:flex text-left px-4 text-lg font-bold py-2 mt-2 ">
              Title:
              <span> {searchData?.title?.slice(0, 25)} ...</span>
            </div>
            <div className="text-left px-4 text-lg font-bold py-2 mt-2 md:hidden">
              Title:
              <span> {searchData?.title?.slice(0, 18)} ...</span>
            </div>
            <div className=" hidden md:flex text-left px-4 py-2  text-lg font-serif ">
              Detail:<span>{searchData?.body?.slice(0, 26)} ...</span>
            </div>
            <div className="text-left px-4 py-2  text-lg font-serif md:hidden ">
              Detail:<span> {searchData?.body?.slice(0, 18)} ...</span>
            </div>
          </div>
          <Link to={`/${searchData.id}/comment`}>
            {" "}
            <div className="mt-5 font-semibold bg-gradient-to-r from-purple-500 to-gray-800 w-32 m-auto py-[3px] rounded-md">
              <button onClick={() => setPostId(searchData.id)}>View Comment</button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Search;
