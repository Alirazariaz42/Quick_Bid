import React, { useEffect, useState } from "react";
import Group1 from "../assets/png/Group1.png";
import Group2 from "../assets/png/Group2.png";
import Range from "../assets/png/range.png";
import Rangee from "../assets/png/rangee.png";
import Uploadplan from "../components/uploadplan";
import Common from "../components/common";

function Concrete() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        CONCRETE ESTIMATING SERVICES
      </h1>

      <p className="text-[20px] lg:w-[80%] w-full mx-auto p-6">
        Our Concrete Estimating Services at provide accurate and detailed
        estimates for all concrete-related aspects of your construction project.
        With our expertise and advanced software, we deliver precise
        calculations for materials, labor, equipment, and other necessary
        components. Whether it's foundation work, slabs, walls, or any other
        concrete structure, our team ensures that you have a clear understanding
        of the costs involved. Trust <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> for reliable concrete
        estimating services that help you plan and budget effectively for your
        project.
      </p>

      <Common />
      {/* ........................... */}
      <div className=" lg:w-[80%] w-full p-6 mx-auto ">
        <h2 className="text-[20px] font-bold mt-6">Our Estimation Process</h2>

        <p className="mt-3 text-[20px]">
          Our concrete estimation process starts with a detailed review of
          architectural drawings provided by the client to grasp the project
          scope. We utilize software such as Bluebeam, Planswift, On Screen Takeoff(OST) for a digital takeoff. The quantities are then meticulously
          entered into Excel sheets, accompanied by detailed annotations for
          each item.
        </p>
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto mt-8">
          <div className="sm:flex grid justify-start gap-2">
            <img src={Group1} alt="" className="w-[75px] h-[84px] mx-auto" />
            <p className="text-[18px] mt-4">
              The amount of concrete required for slabs, piers, footings,
              headers, grade beams, tie beams, foundation walls, columns,
              lintels, platforms, steps, etc. It also includes the estimate of
              transportation costs as well as the equipment required eg cranes,
              pumps, mixers, etc.
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-2">
            <img src={Group2} alt="" className="w-[75px] h-[84px] mx-auto" />
            <p className="text-[18px] mt-4">
              The costs for concrete formwork. It depends on the type of
              formwork, whether you buy or rent, repairs, equipment associated,
              transportation costs, labor, etc.
            </p>
          </div>
        </div>

        <h2 className="text-[20px] font-bold mt-8">
          The Range of Concrete Estimating Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-8 container mx-auto">
          <div className="col-span-1">
            <li className="text-[20px]">Concrete Quantity Takeoffs</li>
            <li className="text-[20px]">Budget & Bid Estimates</li>
            <li className="text-[20px]">Bid Preparation</li>
            <li className="text-[20px]">Design Estimates</li>
            <li className="text-[20px]">Change Order Estimates</li>
            <li className="text-[20px]">Value Engineering</li>
            <li className="text-[20px]">Project Lead Generation</li>
            <li className="text-[20px]">Concrete Contractor Marketing</li>
            <li className="text-[20px]">Expert Witness</li>
            <li className="text-[20px]">Litigation Assistance</li>
          </div>
          <div className="col-span-2 mt-3">
            <img src={Range} alt="mx-auto" />
          </div>
        </div>
        <h2 className="text-[20px] font-bold mt-16">
          Our Portfolio In Concrete Takeoff Services
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 mt-8 container mx-auto">
<div className="col-span-1">
        <li className="text-[20px]">Dams</li>
        <li className="text-[20px]">Bridges</li>
        <li className="text-[20px]">Residential Buildings</li>
        <li className="text-[20px]">Commercial Buildings</li>
        <li className="text-[20px]">Foundations for High Rise Buildings</li>
        <li className="text-[20px]">Highways</li>
        <li className="text-[20px]">Driveways</li>
        <li className="text-[20px]">Culverts and Sewers</li>
        <li className="text-[20px]">Marine Structures</li>
        <li className="text-[20px]">Fences</li>
        </div>
        <div>
        <img src={Rangee} alt="" />
          
        </div>
        </div>
        {/* ........................................... */}
      </div>
      <Uploadplan />
    </>
  );
}

export default Concrete;
