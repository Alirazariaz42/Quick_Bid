import React, { useEffect } from "react";
import Common from "../components/common";
import Plumbing1 from "../assets/png/plumbing1.png";
import Plumbing2 from "../assets/png/plumbing2.png";
import Plumbing3 from "../assets/png/plumbing3.png";
import Plumbing4 from "../assets/png/plumbing4.png";
import Plumbing5 from "../assets/png/plumbing5.png";
import Plumbing6 from "../assets/png/plumbing6.png";
import Plumbing7 from "../assets/png/plumbing7.png";
import Plumbing8 from "../assets/png/plumbing8.png";
import Plumbing9 from "../assets/png/plumbing9.png";
import Plumbing10 from "../assets/png/plumbing10.png";
import Plumbing11 from "../assets/png/plumbing11.png";
import Plumbing12 from "../assets/png/plumbing12.png";
import Mechanicalimgg from "../assets/png/mechanicalimgg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Mechanical() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold lg:w-[80%] w-full mx-auto text-center mt-[200px]">
        MECHANICAL ESTIMATING SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 -mt-3 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-2">
          We're here to make your mechanical projects hassle-free and profitable. Our team of experts specializes in providing accurate estimates for HVAC, refrigeration, and plumbing systems. With years of experience and cutting-edge technology, we ensure precise and timely estimates, tailored to your unique needs. From initial design to project completion, we offer comprehensive support to help you succeed in your industry.
          </p>
        </div>
        <img src={Mechanicalimgg} alt="" className="mx-auto" />
      </div>
      <Common />

      <h2 className="text-[24px] lg:w-[80%] w-full mx-auto font-medium p-6">
        The Range Of Mechanical Estimating Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 -mt-4 gap-3 container mx-auto">
        <div>
          <li className="text-[18px] font-semibold">
            Mechanical, plumbing, piping, HVAC quantity takeoffs
          </li>
          <li className="text-[18px] font-semibold">Budget estimates</li>
          <li className="text-[18px] font-semibold">Bid estimates</li>
          <li className="text-[18px] font-semibold">Bid reviews</li>
          <li className="text-[18px] font-semibold">Check estimates</li>
        </div>
        <div className="">
          <li className="text-[18px] font-semibold">
            Reconciliation estimates
          </li>
          <li className="text-[18px] font-semibold">Change order management</li>
          <li className="text-[18px] font-semibold">Project cost management</li>
          <li className="text-[18px] font-semibold">Subcontractor marketing</li>
          <li className="text-[18px] font-semibold">
            Mechanical project lead generation
          </li>
        </div>
      </div>
      {/* ................................ */}
      <h2 className="text-[24px] lg:w-[80%] w-full p-6 -mt-8 mx-auto font-medium">
        Mechanical Piping Estimating Services
      </h2>

      <p className="lg:w-[80%] w-full -mt-8 mx-auto text-[20px] p-6">
      MEP Piping Estimation Services: As a leading team in MEP estimation, we specialize in providing highly accurate estimates for mechanical piping contractors. Our detailed estimations support bid submissions, budget planning, procurement, and project scheduling. With hands-on experience in commercial and industrial projects across various sectors, including petrochemical, pharmaceutical, and power generation, we excel in analyzing costs for piping projects of any size or complexity. Our portfolio includes estimation solutions for a wide range of mechanical piping systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="">
          <div className="flex justify-start gap-2">
            <img src={Plumbing1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">HVAC piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Hydraulic piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Utility piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3 mb-6">
            <img src={Plumbing4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Prefabricated piping systems
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Plumbing5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Power boilers</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Control piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing7} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Power plant piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3 mb-6">
            <img src={Plumbing8} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Pre insulated piping systems
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Plumbing9} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Process piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing12} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Gas piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing11} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Steel mill piping</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Plumbing10} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Grooved piping systems
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Mechanical;
