import React from "react";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-teal-100 p-4 flex justify-between items-center">
      <div className="w-10 h-10 relative hover:w-12">
        <a href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg"
            fill={true}
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex w-1/5 justify-between ">
        <a href="/about" className="text-blue-900 hover:text-blue-500 hover:decoration-slate-900 hover:underline">About</a>
        <a href="/counter" className="text-blue-900 hover:text-blue-500 hover:decoration-slate-900 hover:underline">Counter</a>
      </div>
    </nav>
  )
};

export default Navbar;
