import React, { useEffect } from "react";
import Secmas1 from "../assets/png/secmas1.png";
import Secmas2 from "../assets/png/secmas2.png";
import Secmas3 from "../assets/png/secmas3.png";
import Secmas4 from "../assets/png/secmas4.png";
import Secmas5 from "../assets/png/secmas5.png";
import Secmas6 from "../assets/png/secmas6.png";
import Lumber from "../assets/png/lumber.png";
import Common from "../components/common";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Wood() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        LUMBER TAKEOFF SERVICES
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
        
        <span className="text-[#15A7AD] font-semibold">
          QuickBid Estimating
        </span>{" "}
      specialized in providing high-quality wooden and plastic materials takeoff
        customized for construction projects. With our wide range of products
        and expert guidance, we ensure that your projects benefit from the best
        of natural and man-made materials.
      </p>
      <h2 className="text-[20px] font-bold lg:w-[80%] w-full mx-auto p-6 -mt-8">
        What Do We Deliver In Our Lumber Takeoffs?
      </h2>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6 -mt-11">
        Our lumber estimates cover everything from wood costs to labor and
        transportation. These estimates have helped clients win bids and
        negotiate with suppliers. We also provide precise cut lists, making it
        easier for woodworkers to minimize waste.
      </p>
      {/* ............................. */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-4 lg:w-[80%] w-full container mx-auto">
        <div>
          <div className="flex justify-start gap-2">
            <img src={Secmas1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Labor and material rates
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Secmas5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Color-coded plans</p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-2">
            <img src={Secmas2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Man Hours</p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Secmas4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Detailed summary </p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-2">
            <img src={Secmas3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">EXCEL spreadsheet</p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Secmas6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Review of addendums
            </p>
          </div>
        </div>
      </div>
      {/* ........................... */}
      <Common />
      {/* ................................ */}

      <h2 className="text-[20px] font-bold lg:w-[80%] w-full mx-auto p-6">
        Our Lumber Estimator Expertise
      </h2>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6 -mt-8">
        We have an experienced lumber estimator who's worked with many
        contractors in America. Our team follows strict guidelines from
        certified organizations like AACE and AIQS. They carefully examine your
        plans and provide detailed estimates for all wood components, ensuring
        accuracy and reliability in our wood-plastic composites estimates.
      </p>
      {/* ................................. */}

      <h2 className="text-[20px] lg:w-[80%] w-full container mx-auto font-bold p-6">
        Our Range of Lumber Takeoff Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 -mt-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-1">
          <li className="text-[20px]">Lumber Takeoffs</li>
          <li className="text-[20px]">Framing Takeoffs</li>
          <li className="text-[20px]">Lumber Cut Lists</li>
          <li className="text-[20px]">Bid Estimates</li>
          <li className="text-[20px]">Budget Estimates</li>
          <li className="text-[20px]">Project Lead Generation</li>
          <li className="text-[20px]">Preliminary Estimates</li>
          <li className="text-[20px]">Bidding Assistance</li>
          <li className="text-[20px]">Subcontractor Marketing</li>
          <li className="text-[20px]">Change Orders</li>
          <li className="text-[20px]">Value Engineering</li>
        </div>
        <div className="col-span-1 mt-3">
          <img src={Lumber} alt="" className="mx-auto" />
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Wood;
