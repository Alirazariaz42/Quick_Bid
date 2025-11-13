import React, { useEffect } from "react";
import Common from "../components/common";
import Commercialimg from "../assets/png/commercialimg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Commercial() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        COMMERCIAL CONSTRUCTION ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-1">
          We specialize in providing reliable and expert commercial cost estimation services exclusively for clients in the USA. With a strong technical understanding, our team delivers precise estimates tailored to manage budgets effectively for projects across the country. Each project is overseen by senior project managers with a proven track record in commercial estimation.Each project is scrutinized by senior project managers with a track record of estimating a diverse range of commercial projects.
            <br />
            <li className="mt-3">
            Do you need consultancy with the estimation and scheduling of commercial construction projects?
            </li>
            <li>
              {" "}
              Or you don’t have the expertise to perform bill of material for a specific trade, size, or complexity?
            </li>
            <li>
            Or you are not confident about how to prepare and file a bidding proposal?
            </li>
          </p>
        </div>
        <img src={Commercialimg} alt="" className="mx-auto" />
      </div>
      <Common />

      <h2 className="text-[20px] w-[80%] mx-auto font-bold mt-6">
        Our Commercial Cost Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 lg:w-[80%] w-full gap-3 container mx-auto">
        <div>
          <li className="text-[18px] font-semibold">Commercial facilities</li>
          <li className="text-[18px] font-semibold">Restaurants</li>
          <li className="text-[18px] font-semibold">Retail spaces</li>
          <li className="text-[18px] font-semibold">Airports</li>
          <li className="text-[18px] font-semibold">Condominiums</li>
          <li className="text-[18px] font-semibold">Educational facilities</li>
          <li className="text-[18px] font-semibold">High Rise Buildings</li>
          <li className="text-[18px] font-semibold">Shopping Centers</li>
        </div>
        <div>
          <li className="text-[18px] font-semibold">Theaters & Museums</li>
          <li className="text-[18px] font-semibold">Sports Auditoriums</li>
          <li className="text-[18px] font-semibold">Exhibition Buildings</li>
          <li className="text-[18px] font-semibold">
            Prisons & Police Stations
          </li>
          <li className="text-[18px] font-semibold">Fire Stations</li>
          <li className="text-[18px] font-semibold">Courts</li>
          <li className="text-[18px] font-semibold">Office Buildings</li>
          <li className="text-[18px] font-semibold">Warehouses</li>
        </div>
        <div>
          <li className="text-[18px] font-semibold">Parking Garages</li>
          <li className="text-[18px] font-semibold">Libraries</li>
          <li className="text-[18px] font-semibold">Medical Facilities</li>
          <li className="text-[18px] font-semibold">Hotels & Motels</li>
          <li className="text-[18px] font-semibold">Airport Facilities</li>
          <li className="text-[18px] font-semibold">Bus & Subway Facilities</li>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Commercial;
