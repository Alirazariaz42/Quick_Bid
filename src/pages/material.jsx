import React, { useState, useEffect } from "react";
import CostModal from "../components/costModal";
import Materialimg from "../assets/png/materialimg.png";
import Quantitytake from "../assets/png/quamtitytake.png";
import Constructionimg from "../assets/png/constructionimg.png";
import Banner from "../components/banner";
import Common from "../components/common";
import ScheduleMaterial from "../components/scheduleMaterial";
import { Link } from "react-router-dom";

function Material() {
  const [serviceModal, setServiceModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  return (
    <>
      <div className="relative ">
        <h1 className="text-[30px] font-bold text-center mt-[200px]">
          MATERIAL TAKEOFF SERVICES
        </h1>

        <p className="text-[20px] font-normal w-[80%] leading-[26px] mt-3 mx-auto">
          <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>{" "}
          has been in Construction takeoff services for past 10 years, serving
          contractors, owners, vendors and developers.
        </p>
        <div
          onClick={openModal}
          className="fixed right-0 top-[200px] z-[999px] shadow-lg bg-[#15A7AD] rounded-l overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
        >
          <button className="text-white text-[18px] font-semibold blink-text">
            Services
          </button>
        </div>
        <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
        <div className="w-[80%] mx-auto"></div>
      </div>
      {/* ..................................... */}

      <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:w-[50%] w-[90%] gap-6 mt-16 container mx-auto">
        <Link to="/construction-takeoff-services/">
          <img src={Constructionimg} alt="" className="w-full h-[320px]" />
        </Link>
        <Link to="/quantity-takeoff-services/">
          <img src={Quantitytake} alt="" className="w-full h-[320px]" />
        </Link>
      </div>

      {/* ......................................... */}

      <Common />

      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
      <h2 className="text-[22px] font-semibold w-[80%] mx-auto mt-8">
        Material Takeoff List - Quantity Takeoff Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] container mt-3 mx-auto">
        <div>
          <li className="text-[18px] font-semibold">General Requirement</li>
          <li className="text-[18px] font-semibold">Site Works</li>
          <li className="text-[18px] font-semibold"> Concrete</li>
          <li className="text-[18px] font-semibold">Masonry</li>
          <li className="text-[18px] font-semibold">Finishes</li>
          <li className="text-[18px] font-semibold">Specialties</li>
          <li className="text-[18px] font-semibold">Equipment</li>
          <li className="text-[18px] font-semibold">Furnishings</li>
        </div>
        <div className="mx-auto">
          <li className="text-[18px] font-semibold">Metals</li>
          <li className="text-[18px] font-semibold">Wood and Plastics</li>
          <li className="text-[18px] font-semibold">
            Thermal and Moisture Protection
          </li>
          <li className="text-[18px] font-semibold">Doors and Windows</li>
          <li className="text-[18px] font-semibold">Special Construction</li>
          <li className="text-[18px] font-semibold">Conveying Systems</li>
          <li className="text-[18px] font-semibold">Mechanical/Plumbing</li>
          <li className="text-[18px] font-semibold">Electrical</li>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Materialimg} alt="" className="w-[260px] h-[240px]" />
        </div>
      </div>

      <ScheduleMaterial />
      <Banner />
    </>
  );
}

export default Material;
