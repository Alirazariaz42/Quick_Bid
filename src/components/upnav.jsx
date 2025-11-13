import React from "react";
import Bluelogo from "../assets/png/sim.png"
import "../index.css";
import { Link } from "react-router-dom";

function Upnav() {
  return (
    <>
      <div className="navbar-set bg-[#15A7AD] h-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
          <Link to="/">
            <img
              src={Bluelogo}
              alt=""
              className="mx-auto hidden lg:block div-2-hide h-[60px] mt-[5px]"
            />
          </Link>
          <div className=" md:mx-auto block mb-1">
            <p className="text-white sm:text-[22px] text-[18px] text-center">
              TURNAROUND TIME 2-3 Days!
            </p>
            <div className="bg-water-animation sm:w-[300px] w-[250px] mx-auto flex justify-center items-center rounded-3xl">
              <p className="sm:text-[20px] text-[16px] font-semibold">
                Affordable Estimate (30% off)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upnav;
