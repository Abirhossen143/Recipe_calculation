import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-full">
        <header className="flex justify-between items-center text-black md:px-32 bg-white ">
          <Link
            to="/"
            className="hover:scale-105 sm:text-2xl font-bold md:text-3xl"
          >
            Recipe Calaories
          </Link>
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <Link
              className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-poingreen"
              to="/"
            >
              Home
            </Link>
            <Link
              className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-poingreen"
              to="/recipe"
            >
              Recipes
            </Link>
            <Link
              className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-poingreen"
              to="/about"
            >
              About
            </Link>
            <Link
              className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all cursor-poingreen"
              to="/search"
            >
              Search
            </Link>
          </ul>
          <div className="relative hidden md:flex items-center justify-center gap-3 ">
            <i className="bx bx-search absolute left-3 text-2xl  text-gray-500 cursor-pointer"></i>
            <input
              className="py-2 mb-1 pl-10 rounded-full border-2  bg-gray-50  focus:bg-slate-200 focus:outline-green-400"
              type="text"
              placeholder="Search here"
            />
            <i className="bx bx-user sm-hidden  text-[20px] rounded-[50%] p-3 bg-green-400 text-black cursor-pointer mb-1 border-2"></i>
          </div>
          <i
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bx bx-menu md:ml-2 xl:hidden block text-5xl cursor-pointer"
          ></i>
          <div
            className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease,opacity  0.3s ease" }}
          >
            <Link
              className="list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <Link
              className="list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer"
              to="/recipes"
            >
              Recipes
            </Link>
            <Link
              className="list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer"
              to="/about"
            >
              About
            </Link>
            <Link
              className="list-none w-full text-center p-4 hover:bg-green-400 hover:text-white transition-all cursor-pointer"
              to="/search"
            >
              Search
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
