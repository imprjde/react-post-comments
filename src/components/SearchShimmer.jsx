import React from "react";

const SearchShimmer = () => {
  return (
    <div className="m-auto">
      <div className="bg-gray-200 m-auto mt-2 py-4 w-[300px] md:w-[350px]  items-center justify-center rounded-lg animate-pulse">
        <div>
          <div className="text-left text-black bg-white w-[100px] h-[25px] ml-4 px-2  rounded-md font-bold animate-pulse">
            <div></div>
          </div>

          <div className="  m-auto text-left px-4 text-lg font-bold py-2 md:w-[300px] w-[250px] ml-[18px] mt-5 h-[25px] rounded-md bg-white animate-pulse "></div>
          <div className="  m-auto text-left px-4 text-lg font-bold py-2 md:w-[300px] w-[250px] ml-[18px] mt-5 h-[25px] rounded-md bg-white animate-pulse "></div>
        </div>
        <div className="mt-5 font-semibold bg-white w-32 m-auto py-[3px] rounded-md animate-pulse">
          <button className="text-white">View Comment</button>
        </div>
      </div>
    </div>
  );
};

export default SearchShimmer;
