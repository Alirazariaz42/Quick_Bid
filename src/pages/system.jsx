import React, { useEffect } from "react";
import Sys1 from "../assets/png/sys1.png";
import Sys2 from "../assets/png/sys2.png";
import Sys01 from "../assets/png/sys01.png";
import Special4 from "../assets/png/special4.png";
import Sysimg from "../assets/png/sysimg.png";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";
import Common from "../components/common";

function System() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        CONVEYING SYSTEM ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full p-6 mx-auto text-[20px] ">
        At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>
        , our main goal is to provide accurate and comprehensive evaluations for
        transportation systems in various industries. Our team of experts is
        committed to helping you select and implement the perfect transport
        solutions to enhance the efficiency and productivity of your operations.
      </p>

      <Common />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container mx-auto w-[80%] mt-6">
        <div className="">
          <div className="md:flex grid justify-start gap-4">
            <img src={Sys1} alt="" className="w-[74px] h-[74px] " />
            <p className="text-[20px] font-semibold md:mt-5 mt-0 ">
              Operation and Maintenance
            </p>
          </div>
          <li className="md:ml-24 ml-0 ">
            Maintenance and Operation of Elevators
          </li>
          <li className="md:ml-24 ml-0 ">
            Furniture’s Maintenance and Operation
          </li>
          <li className="md:ml-24 ml-0 ">
            Dumbwaiter’s Maintenance and Operation
          </li>
          <li className="md:ml-24 ml-0 ">
            Utilities’ Maintenance and Operation
          </li>
          <li className="md:ml-24 ml-0 ">
            Transportation Maintenance and Operation
          </li>
          <li className="md:ml-24 ml-0 ">
            Airfield’s Maintenance and Operation
          </li>
          <li className="md:ml-24 ml-0 ">
            Storefront’s Maintenance and Operation
          </li>
          <div className="md:flex grid justify-start gap-4 mt-6">
            <img src={Special4} alt="" className="w-[74px] h-[74px] " />
            <p className="text-[20px] font-semibold md:mt-5 mt-0 ">
              Moving Walks and Escalators
            </p>
          </div>
          <li className="md:ml-24 ml-0 ">Moving Walks</li>
          <li className="md:ml-24 ml-0 ">Moving Ramps</li>
          <li className="md:ml-24 ml-0 ">Escalators</li>
          <li className="md:ml-24 ml-0 ">
            Moving Walks and Escalator’s Commissioning
          </li>
          <li className="md:ml-24 ml-0 ">Powered Ramps</li>
          <li className="md:ml-24 ml-0 ">Motorized Ramps</li>
          <li className="md:ml-24 ml-0 ">
            Facility Equipment’s Integrated Automation Control
          </li>
        </div>
        <div className=" ">
          <div className="md:flex grid justify-start gap-4">
            <img src={Sys01} alt="" className="w-[74px] h-[74px]  " />
            <p className="text-[20px] font-semibold md:mt-5 mt-0">Elevators</p>
          </div>
          <li className="md:ml-24 ml-0">Residential Elevators</li>
          <li className="md:ml-24 ml-0">Electric Traction Elevators</li>
          <li className="md:ml-24 ml-0">
            Electric Traction Elevators for Freight Purposes
          </li>
          <li className="md:ml-24 ml-0">
            Electric Traction Elevators for Passengers
          </li>
          <li className="md:ml-24 ml-0">
            Electric Traction Elevators for Residential Purposes
          </li>
          <li className="md:ml-24 ml-0 mb-12">
            Electric Traction Service Elevators Hydraulic Elevators
          </li>

          <div className="md:flex grid justify-start gap-4 mt-6">
            <img src={Sys2} alt="" className="w-[74px] h-[74px]  " />
            <p className="text-[20px] font-semibold md:mt-5 mt-0">Lifts</p>
          </div>
          <li className="md:ml-24 ml-0">People’s Lifts</li>
          <li className="md:ml-24 ml-0">
            People’s Lifts that are counterbalanced
          </li>
          <li className="md:ml-24 ml-0">
            People’s Lifts that have an endless belt
          </li>
          <li className="md:ml-24 ml-0">Wheelchair Lifts</li>
          <li className="md:ml-24 ml-0">Wheelchair lifts that are inclined</li>

          <li className="md:ml-24 ml-0">Platform Lifts</li>
        </div>
      </div>

      <h2 className="text-[20px] font-bold mt-8 w-[80%] mx-auto">
        Our Conveying Systems Cost Estimating Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mt-6 container mx-auto">
        <div className="col-span-2">
          <p className="text-[20px] ">
            <span className="font-bold">Initial Consultation:</span> We discuss
            your project goals, material handling needs, and budget constraints.
          </p>
         
          <p className="text-[20px] mt-2">
            <span className="font-bold">Conveyor System Selection:</span> Based
            on your project specifications, we recommend suitable conveyor
            systems tailored to your unique material handling requirements.
          </p>
          <p className="text-[20px] mt-2">
            <span className="font-bold">Detailed Estimate:</span> Our team
            provides a comprehensive breakdown of projected costs for each
            conveyor system type, including equipment, installation, and any
            additional expenses.
          </p>
          <p className="text-[20px] mt-2">
            <span className="font-bold">Presentation and Approval:</span> We
            present the estimate to you, addressing any questions or concerns
            you may have.
          </p>

          
        </div>
        <div className="col-span-1">
          <img src={Sysimg} alt="" className="mx-auto" />
        </div>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default System;
