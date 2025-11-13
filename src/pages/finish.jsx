import React, { useEffect } from "react";
import Finishh from "../assets/png/finishh.png";
import Finish1 from "../assets/png/finish1.png";
import Finish2 from "../assets/png/finish2.png";
import Finish3 from "../assets/png/finish3.png";
import Finish4 from "../assets/png/finish4.png";
import Finish5 from "../assets/png/finish5.png";
import Common from "../components/common";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Finish() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        INTERIOR AND EXTERIOR FINISHES ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-[80%] w-full p-6 container mx-auto">
        <div className="col-span-2">
          <p className="text-[20px] mt-4">
            Estimating both internal and external finishes is vital in
            construction. It involves forecasting costs for tasks like painting,
            stucco, plaster, and specialty coatings. Contractors need accurate
            estimates to order materials and provide quotes. Precision is
            crucial to avoid extra costs and waste. Outsourcing estimates can
            save money if accuracy is guaranteed. Over-ordering can lead to
            waste and extra expenses. Precise estimates help prevent wastage and
            ensure cost-effectiveness.
          </p>
        </div>
        <div className="col-span-1">
          <img src={Finishh} alt="" className="mt-4 mx-auto" />
        </div>
      </div>

      <Common />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-16 lg:w-[80%] w-full container mx-auto">
        <div className="mb-6">
          <div className="flex justify-start gap-2">
            <img src={Finish1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Material Takeoffs</p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Finish2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Ceiling Estimates</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-start gap-2">
            <img src={Finish3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Flooring Estimates</p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Finish4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Drywall Estimates</p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-2">
            <img src={Finish5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">Painting Estimates</p>
          </div>
        </div>
      </div>
      {/* ................................... */}

      <h2 className="text-[20px] font-bold lg:w-[80%] w-full mx-auto p-6">
        Flooring Estimating Services
      </h2>

      <p className="lg:w-[80%] w-ful] mx-auto text-[20px] p-6 -mt-10">
        At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, we specialize in accurate material assessments
        and price quotes for flooring projects. Our services minimize waste by
        considering design patterns and artistic elements. We cater to
        contractors, architects, and designers, providing estimates for various
        projects like interior flooring and stair details. Using advanced
        software, our estimators ensure precise evaluations. Our deliverables
        include digital takeoff files, material spreadsheets, color-coded plans,
        and seaming diagrams for easy installation.<br/> The results of our flooring
        estimation services include:
      </p>
      <div className="lg:w-[80%] w-ful mx-auto p-6 -mt-8">
        <li className="text-[18px] font-semibold">
          Digital flooring takeoff file
        </li>
        <li className="text-[18px] font-semibold">Material spreadsheet</li>
        <li className="text-[18px] font-semibold">Color-coded plans</li>
        <li className="text-[18px] font-semibold">Seaming diagrams</li>
        <li className="text-[18px] font-semibold">
          Takeoff summary including total square feet, seaming & welding linear
          feet, wall base, stair information, etc
        </li>
        <li className="text-[18px] font-semibold">
          Review of bid documents and addendums
        </li>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Finish;
