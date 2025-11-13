import React, { useState } from "react";
import Pic from "../assets/png/pic.png";
import Modal from "./modal";

function Hero() {

  const [hello, setHello] = useState(false);

  const openModal = () => {
    setHello(true);
  };
  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <h1 className="sm:text-[48px] set-text text-[28px] font-semibold text-center font-Oswald media-screen-margin-top mt-[164px]">
      Empower Your Bids With Accurate Construction Estimating Services
      </h1>
      <div
        className=" max-w-full md:h-[360px] h-[150px] bg-cover bg-center relative "
        style={{ backgroundImage: `url(${Pic})` }}
      >
          <div className="w-[100%] md:flex grid justify-center gap-[20px] absolute top-[80px] md:top-[230px]">
            <p className="w-[60%] md:block hidden text-white text-[16px] font-light bg-black opacity-[0.8] border-solid border-2 border-black rounded-3xl p-4 ">
            Our experienced team can provide you with an accurate and detailed estimating for your construction project.
            </p>

            <div
              onClick={openModal}
              className="bg-[#15A7AD] cursor-pointer md:block hidden lg:flex justify-center items-center rounded-3xl w-[150px] md:h-auto h-[85px] mr-24 mt-1"
            >
              <div className="text-[17px] font-semibold text-white flex justify-center items-center lg:mt-0 mt-10">
                Get Estimate
              </div>
            </div>

            {hello && <Modal closeModal={closeModal} />}
          </div>
       
        {/* ................ */}
      </div>
     
    </>
  );
}

export default Hero;
