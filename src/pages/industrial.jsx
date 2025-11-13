import React, { useEffect } from "react";
import Common from "../components/common";
import Industrial1 from "../assets/png/industrial1.png";
import Icon1 from "../assets/png/icon1.png";
import Icon2 from "../assets/png/icon2.png";
import Icon3 from "../assets/png/icon3.png";
import Icon4 from "../assets/png/icon4.png";
import Icon5 from "../assets/png/icon5.png";
import Icon6 from "../assets/png/icon6.png";
import Icon7 from "../assets/png/icon7.png";
import Icon8 from "../assets/png/icon8.png";
import Icon9 from "../assets/png/icon9.png";
import Industrialimg from "../assets/png/industrialimg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Industrial() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        INDUSTRIAL CONSTRUCTION ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-[80%] container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-1">
            Get our Industrial estimating services at <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> to
            streamline your estimating process, enhance accuracy, and receive
            expert analysis from professional construction estimators with quick
            turnaround times. We specialize in providing comprehensive
            estimating solutions to clients in the USA industrial sector,
            including EPC contractors, owners, engineering firms, and financial
            investors. Our services cover project planning, conception, and
            construction phases, utilizing advanced technology and extensive
            experience to ensure precise cost control throughout the project
            lifecycle.
          </p>
        </div>
        <img src={Industrialimg} alt="" className="mx-auto" />
      </div>

      <Common />

      <h2 className="text-[20px] font-bold w-[80%] mx-auto mt-8">
        Our Range of Industrial Estimating Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 w-[80%] container mx-auto">
        <div className="col-span-2">
          <li className="text-[20px]">
            Comprehensive quantity takeoffs and cost estimates for all divisions
          </li>
          <li className="text-[20px]">
            Estimates for quality assurance and quality control
          </li>
          <li className="text-[20px]">Expert eye witnesses</li>
          <li className="text-[20px]">Cold eyes reviews</li>
          <li className="text-[20px]">Bid Evaluation & Management</li>
          <li className="text-[20px]">Procurement Services</li>
          <li className="text-[20px]">Change Order Preparation & Review</li>
          <li className="text-[20px]">Feasibility Studies</li>
          <li className="text-[20px]">Risk Analysis</li>
          <li className="text-[20px]">Productivity Analysis</li>
          <li className="text-[20px]">Project Scheduling</li>
          <li className="text-[20px]">Project Cost Management</li>
          <li className="text-[20px]">Value Engineering</li>
        </div>
        <div className="col-span-1 mt-3">
          <img src={Industrial1} alt="" className="mx-auto" />
        </div>
      </div>

      <h2 className="text-[20px] font-bold w-[80%] mx-auto mt-8">
        Industrial Structural Steal Estimating Services
      </h2>

      <p className="w-[80%] mx-auto text-[20px] mt-3">
        Utilize our specialized Industrial estimation services at <span className="text-[#15a7ad]">QuickBid Estimating</span> to minimize estimation costs while ensuring precision, with
        professional construction auditors reviewing your estimates and
        takeoffs. We cater specifically to clients in the USA industrial sector,
        including EPC contractors, owners, engineering firms, investors, and
        joint venture partners. Our customized industrial estimating services
        cover project initiation, planning, and execution, empowering clients to
        anticipate, plan, and control costs effectively throughout the project
        lifecycle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 w-[80%] container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-2">
            <img src={Icon1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Rebar</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Siding</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Railings</p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex justify-start gap-2 ">
            <img src={Icon4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Louvers</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Ladders</p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex justify-start gap-2 ">
            <img src={Icon7} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Roofing</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon8} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Platforms</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Icon9} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Grating</p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Industrial;
