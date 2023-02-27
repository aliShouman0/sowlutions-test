import React from "react";
import logo from "../../assets/logo.jpeg";

function NavBar() {
  return (
    <div className=" p-1 border border-orange-500 flex items-center ">
      <div className="h-20 w-20 ">
        <img src={logo} alt="log" />
      </div>
      <div className="pl-5 font-bold text-xl">
        <p>Welcome To mano</p>
      </div>
    </div>
  );
}

export default NavBar;
