import React from "react"; 

function PopUp({ img, name, price, category, quantity, close }) {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen  overflow-hidden  z-10 bg-gray-500 opacity-80"></div>
      <div className="transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center  p-1 border border-orange-500 bg-orange-500  z-10 rounded-lg  ">
        <div className="absolute right-3 top-1 cursor-pointer" onClick={close}>
          <span className=" flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
            <p className="font-bold text-2xl animate-bounce">X</p>
          </span>
        </div>

        <div className="w-96 h-96 ">
          <img src={img} alt="img" className="w-full h-full" />
        </div>
        <div className=" flex flex-col justify-center m-2 ">
          <p className="font-bold text-xl p-2">Name: {name}</p>
          <p className="font-bold text-xl p-2 ">Category: {category}</p>
          <p className="font-bold text-xl p-2 ">Quantity: {quantity}</p>
          <p className="font-bold text-xl p-2 ">Price: {price}$</p>
        </div>
      </div>
    </>
  );
}

export default PopUp;
