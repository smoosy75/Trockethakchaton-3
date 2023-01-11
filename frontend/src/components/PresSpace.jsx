import React from "react";

function PresSpace() {
  return (
    <div className="bg-black text-white h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly ">
      <h2 className="absolute uppercase top-24 tracking-[10px] text-2xl text-white">
        top rated spaceship
      </h2>
      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ml:90">
        <img className="w-80 h-80" src="../src/assets/S1.png" alt="" />
        <img className="w-80 h-80" src="../src/assets/S2.png" alt="" />
        <img className="w-80 h-80" src="../src/assets/S3.png" alt="" />
        <img className="w-80 h-80" src="../src/assets/S4.png" alt="" />
      </div>
    </div>
  );
}

export default PresSpace;
