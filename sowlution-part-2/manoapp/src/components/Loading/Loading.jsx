import React from "react";
import logo from "../../assets/logo.jpeg";

function Loading() {
  return (
    <div className="animate-pulse   w-full m-5 flex flex-col items-center justify-center">
      <div className="h-40 w-40 ">
        <img src={logo} alt="log" />
      </div>
      <p className="m-2 animate-bounce text-2xl font-bold">Loading...</p>
    </div>
  );
}

export default Loading;
