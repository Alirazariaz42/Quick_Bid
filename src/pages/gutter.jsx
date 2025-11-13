import React, { useEffect } from "react";
import Common from "../components/common";
import Banner from "../components/banner";
import Gutter1 from "../assets/png/gutter1.png";
import Gutter2 from "../assets/png/gutter2.png";
import Gutter3 from "../assets/png/gutter3.png";
import Gutter4 from "../assets/png/gutter4.png";
import Gutter5 from "../assets/png/gutter5.png";
import Gutterimgg from "../assets/png/gutterimgg.png";
import Uploadplan from "../components/uploadplan";

function Gutter() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold w-[80%] mx-auto text-center mt-[200px]">
        GUTTER ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-2">
            Looking for reliable gutter estimating services for your
            construction project? Look no further! <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> offers
            professional gutter estimating services worldwide. Our expert team
            uses modern software to deliver accurate gutter estimates
            efficiently, complete with layouts and annotations. With just one
            click, we can generate detailed bills of materials or takeoffs,
            providing precise estimates to our clients instantly.
          </p>
        </div>
        <img src={Gutterimgg} alt="" className="mx-auto" />
      </div>

      <Common />

      <h2 className="text-[20px] w-[80%] mx-auto font-bold mt-6">
        Gutter Material
      </h2>
      <p className="w-[80%] mt-3 mx-auto text-[20px]">
        We efficiently try to imagine a certain type of new gutter that is quite
        right for you and include all the required material for a gutter
        installation. There are comprehensive varieties of gutter that vary
        according to their durability thresholds and appearances.
        <br /> Our expert Gutter cost estimators deal with a wide range of
        following gutters.
        <li className="text-[18px] font-semibold mt-3">Copper Gutter</li>
        <li className="text-[18px] font-semibold">Vinyl Gutter</li>
        <li className="text-[18px] font-semibold">Zinc Gutter</li>
        <li className="text-[18px] font-semibold">Aluminum Gutter</li>
        <li className="text-[18px] font-semibold">Steel Gutter</li>
      </p>
      <h2 className="text-[20px] w-[80%] mx-auto font-bold mt-4">
        Gutter Styles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-2 ">
            <img src={Gutter1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Seamless Gutter Estimating
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Gutter2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              K-Style Gutter Estimating
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex justify-start gap-2 ">
            <img src={Gutter3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Sectional Gutter Estimating
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Gutter4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Half Gutter Estimating
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex justify-start gap-2 ">
            <img src={Gutter5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Gutter Hamlet Estimating
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[20px] w-[80%] mx-auto font-bold mt-4">
        Gutter Costs
      </h2>
      <p className="w-[80%] mt-3 mx-auto text-[20px]">
        Our expert gutter cost estimators manage to evaluate your gutter
        installation cost, including its design, material and style. Of course,
        it isn’t simple for any common gutter estimator, but our team of
        well-known gutter estimators manages to select the right type of gutter
        for your home or any commercial building. In addition, we will
        efficiently evaluate different roof slopes to drain off the water from
        the roof, and its different styles will evacuate water from your roof
        and house.
      </p>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Gutter;
