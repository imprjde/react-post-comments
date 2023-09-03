import React from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Header = ({ search, setSearch, handleSearch }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      handleSearch(e);
      navigate("/search");
      console.log("HandleSubmit Ran");
    }

    if (!search) {
      navigate("/");
    }
  };
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-700 h-14 sticky top-0 z-20 mb-8 flex justify-between items-center">
      <div className="md:ml-10 ml-5 bg-gradient-to-r from-cyan-300 to-blue-700  text-white px-4 py-1 rounded-lg font-bold">
        SOCIAL
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:mr-44 mr-6 flex items-center "
      >
        <input
          value={search}
          className="pl-2 rounded-md h-8 w-40 md:w-auto"
          type="number"
          placeholder="Search Post By No..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-gradient-to-r from-purple-500 to-gray-800 px-2 py-[6px] rounded-md cursor-pointer text-white"
        >
          <ImSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default Header;
