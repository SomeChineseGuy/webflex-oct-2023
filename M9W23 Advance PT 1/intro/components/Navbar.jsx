import React from "react";

const Navbar = () => {
  return ( 
    <nav className="bg-pink-600 py-10 px-15 hover:bg-red-400 mb-10">
      <div className="flex justify-between items-center px-10">
        <h1>Welcome</h1>
        <a href="#" className="w-full sm:w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-green-600 focus:outline-offset-2 focus-visible:dark:focus:outline-green-600-dark leading-snug bg-green-600 text-white hover:bg-opacity-80 text-lg py-3 rounded-full px-4 sm:px-6">Click me!</a>
      </div>
    </nav>
  )
};

export default Navbar;
