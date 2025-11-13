import React, { useEffect } from "react";
import Common from "../components/common";
import Hvac1 from "../assets/png/hvac1.png";
import Hvac2 from "../assets/png/hvac2.png";
import Hvac3 from "../assets/png/hvac3.png";
import Hvac4 from "../assets/png/hvac4.png";
import Hvac5 from "../assets/png/hvac5.png";
import Hvac6 from "../assets/png/hvac6.png";
import Hvac7 from "../assets/png/hvac7.png";
import Hvac8 from "../assets/png/hvac8.png";
import Hvac9 from "../assets/png/hvac9.png";
import Hvacimgg from "../assets/png/hvacimgg.png";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Hvac() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        HVAC ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2 scroll-left-animation">
          <p className=" text-[20px]">
            Contractors in HVAC rely on <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> for precise HVAC
            estimating services. Our MEP estimators specialize in quantifying HVAC
            components like ducts, hangers, fixtures, and units. With detailed
            plans and descriptions, our estimators ensure clarity for
            fabricators and contractors. At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, our experienced
            team focuses on enhancing comprehension for contractors, design
            engineers, and fabricators, providing clear cost projections for
            bidding and planning.
          </p>
        </div>
        <div className="scroll-right-animation">
          <img src={Hvacimgg} alt="" className="mx-auto" />
        </div>
      </div>

      <Common />

      <h2 className="text-[20px] font-bold mt-8 w-[80%] mx-auto">
        The Items We Quantify In HVAC Estimating And Takeoffs:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="">
          <div className="flex justify-start gap-2">
            <img src={Hvac1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Ductwork</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Duct insulation</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Piping</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Hvac4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Condensing units</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Exhaust Fan</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Hangers and Supports
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Hvac7} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Casings</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac8} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Pumps</p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Hvac9} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Building Automation and control
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Hvac;
