import React, { useEffect } from "react";
import Furnish1 from "../assets/png/furnish1.png";
import Common from "../components/common";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Furnishing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        FURNISHING ESTIMATING SERVICES
      </h1>

      <p className="w-[80%] mx-auto text-[20px] mt-6">
        We're committed to providing reliable and affordable furnishing
        estimation services. Our skilled team uses cutting-edge tools to deliver
        precise estimates, ensuring informed decisions and budget adherence for
        both residential and commercial projects.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[80%] mt-3 container mx-auto">
        <div className="">
          <p className="text-[20px]">
           <span className="text-[#15a7ad] font-bold"> QuickBid Estimating </span>can provide estimates for:
          </p>
          <li className="text-[20px]">Concrete Countertops</li>
          <li className="text-[20px]">Stone Countertop</li>
          <li className="text-[20px]">Plastic Laminates</li>
          <li className="text-[20px]">Wood Countertops</li>
          <li className="text-[20px]">Cultured Marble</li>
          <li className="text-[20px]">Solid Surfacing</li>
          <li className="text-[20px]">Glass Countertops</li>
          <li className="text-[20px]">Tile</li>
          <li className="text-[20px]">Laboratory Countertops</li>
          <li className="text-[20px]">Specialty Sinks and countertops</li>
        </div>

        <img src={Furnish1} alt="" className="mt-2 mx-auto" />
      </div>

      <Common />

      <h2 className="text-[22px] w-[80%] mx-auto font-bold mt-6">
        Home Furnishing Estimating Services
      </h2>

      <p className="w-[80%] mx-auto text-[20px]">
        We're committed to providing reliable and affordable furnishing
        estimation services. Our skilled team uses cutting-edge tools to deliver
        precise estimates, ensuring informed decisions and budget adherence for
        both residential and commercial projects.
      </p>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Furnishing;
