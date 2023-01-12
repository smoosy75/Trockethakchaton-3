import React from "react";

function Pres() {
  return (
    <div className="bg-black text-white h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly ">
      <h2 className="absolute uppercase top-24 tracking-[10px] text-2xl text-white">
        Recommended Planets
      </h2>
      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <img className="w-30 h-30" src="../src/assets/a.png" alt="" />
        <img className="w-30 h-30" src="../src/assets/b.png" alt="" />
        <img className="w-30 h-30" src="../src/assets/6.png" alt="" />
        <img className="w-30 h-30" src="../src/assets/5.png" alt="" />
        <img className="w-30 h-30" src="../src/assets/4.png" alt="" />
        <img className="w-30 h-30" src="../src/assets/3.png" alt="" />
      </div>
    </div>
  );
}

export default Pres;
