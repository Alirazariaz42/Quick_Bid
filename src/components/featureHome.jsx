import React from "react";
import Feature1 from "../assets/png/feature1.png";
import Feature2 from "../assets/png/feature2.png";
import Feature3 from "../assets/png/feature3.png";
import Feature4 from "../assets/png/feature4.png";

function FeatureHome() {
  return (
    <>
      <div className="bg-[#212121] p-8 mt-10">
        <p className="text-center text-white text-[22px] font-bold">Features</p>

        <p className="w-[88%] mx-auto text-center text-white text-[20px] font-light mt-10">
          We Specialize In Preparing Quantities Take-off, Cost Estimates As Well
          As Material Takeoffs And Material Lists For Every Construction Trade.
          One Of Our Construction Estimators Will Quantify From The Blueprints,
          All the Materials & Accessories Needed For Your Trade. It Will Be In
          Microsoft Excel Sheet Or Any Format You Need, So You Can Send It Out
          To Bid Quickly. We Specialize in Providing Our Customers With
          Following Features.
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
      </div>
    </>
  );
}

export default FeatureHome;
