import React from "react";
//  Navbar code goes here
const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-slate-600">
      <div className="container shadow-xl mx-auto h-full w-full flex items-center justify-center">
        <h1
          className="font-sans text-3xl text-white
        uppercase tracking-wider"
        >
          Expense Tracker
        </h1>
        <img
          className="ml-2"
          src="https://img.icons8.com/ios/50/000000/coins.png"
          alt="coins"
        />
      </div>
    </div>
  );
};

export default Navbar;
