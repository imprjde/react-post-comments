import React from "react";
import CommentShimmer from "./CommentShimmer";

const Comments = ({ comments, commentIsLoading }) => {
  return (
    <div className="items-center mt-10">
      {commentIsLoading && <CommentShimmer />}
      {!commentIsLoading &&
        comments &&
        comments.map((data) => (
          <div
            key={data.id}
            className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white m-auto w-[340px] md:w-[400px] text-left pl-4 py-2  my-5 rounded-md h-[140px] justify-center items-center"
          >
            <div className="my-1">
              <span className="font-bold">Name: </span>{" "}
              <span className="font-semibold">
                {" "}
                {data.name.length > 28
                  ? data.name.slice(0, 28) + "..."
                  : data.name}
              </span>
            </div>
            <div className="my-1">
              <span className="font-bold">Email:</span>{" "}
              <span className="font-semibold">{data.email}</span>
            </div>
            <div className="hidden md:block py-1 bg-gray-900 -ml-2 mr-2 pl-2 rounded-md">
              <span className="font-bold">Comment:</span>{" "}
              <span className="font-serif">{data.body.slice(0, 75)}...</span>
            </div>
            <div className=" md:hidden py-1 bg-gray-900 -ml-2 mr-2 pl-2 mt-2 rounded-md">
              <span className="font-bold">Comment:</span>{" "}
              <span className="font-serif">{data.body.slice(0, 55)}.. </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
