import React from "react";
import logo from "../../assets/logo.jpeg";

function Footer() {
  return (
    <div className=" p-2 border border-orange-500 bg-orange-300 flex flex-row-reverse items-center justify-between ">
      <div className="h-20 w-20 hover:animate-bounce">
        <img src={logo} alt="log" />
      </div>
      <div className="pl-5 font-bold text-xl hover:animate-bounce">
        <p>mano</p>
        <p>© {new Date().getFullYear()} sowlutions All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
