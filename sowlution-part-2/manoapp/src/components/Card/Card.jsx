import React from "react";

function Card({ img, title, price, pId }) {
  return (
    <div className="w-56 h-72 m-5 p-1 border border-orange-500 ">
      <div className="w-full h-3/4 p-1 ">
        <img src={img} alt="img" className="w-full h-full" />
      </div>
      <div className=" flex items-center justify-between h-1/4 p-1 ">
        <p className="font-semibold text-sm">{title}</p>
        <p className="font-semibold text-sm ">{price}$</p>
      </div>
    </div>
  );
}

export default Card;
