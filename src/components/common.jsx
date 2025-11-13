import React, { useState, useEffect } from "react";
import Feature1 from "../assets/png/feature1.png";
import Feature2 from "../assets/png/feature2.png";
import Feature3 from "../assets/png/feature3.png";
import Feature4 from "../assets/png/feature4.png";
import Heroupload from "./heroUpload";

function Common() {
  const [secondModal, setSecondModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const openModal = () => {
    setSecondModal(true);
  };

  const closeModal = () => {
    setSecondModal(false);
  };

  return (
    <>
      <div className="bg-[#212121] p-8 mt-10">
        <p className="lg:w-[88%] w-full mx-auto text-center text-white text-[20px] font-normal mt-10">
          Our 'Upload Plan' button facilitates you in easily and quickly
          benefiting from our Estimating services. We provide our clients with
          solid evidence of our expertise and honesty. Our aim is to assist you
          in advancing with ease and confidence by providing accurate and timely
          Estimates for your construction projects.
        </p>

        <div className="w-[88%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 container mx-auto pb-5">
          <div className="bg-white rounded-lg p-3">
            <img src={Feature1} alt="" className="mx-auto h-[170px]" />
            <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
              Great Service
            </p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <img src={Feature2} alt="" className="mx-auto h-[170px]" />
            <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
              High Standards
            </p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <img src={Feature3} alt="" className="mx-auto h-[170px]" />
            <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
              Professional Team
            </p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <img src={Feature4} alt="" className="mx-auto h-[170px]" />
            <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
              Creative Solution
            </p>
          </div>
        </div>
        
          <div onClick={openModal} className="animated-button border rounded-lg p-1 mt-2 lg:w-[12%] md:w-[30%] w-[50%] mx-auto bg-[#15a7ad] flex justify-center items-center hover:bg-white ">
            <button className="text-[17px] text-black font-bold ">Upload Plans</button>
          </div>
       
      </div>
      {secondModal && <Heroupload closeModal={closeModal} />}
    </>
  );
}

export default Common;
