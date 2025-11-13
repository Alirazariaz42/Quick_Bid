import React, { useEffect } from "react";
import Common from "../components/common";
import Resi1 from "../assets/png/resi1.png";
import Resi2 from "../assets/png/resi2.png";
import Resi3 from "../assets/png/resi3.png";
import Resi4 from "../assets/png/resi4.png";
import Resi5 from "../assets/png/resi5.png";
import Resi6 from "../assets/png/resi6.png";
import Resiimg from "../assets/png/resiimg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Residential() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        RESIDENTIAL CONSTRUCTION ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full p-6 mx-auto text-[20px]">
        Providing fast and reliable residential estimating services tailored to
        the needs of Residential Contractors, Subcontractors, Homebuilders,
        Homeowners, Developers, Investors, Lenders, and Architects.
      </p>
      <Common />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[80%] w-full mx-auto  p-6">
        <div className="col-span-2">
          <p className="text-[20px]">
            {" "}
            Accurate residential appraisals are essential for all construction
            financial dealings. Our Domestic Estimating services provide precise
            cost estimates for residential projects, aiding in budget
            allocation, financial planning, customer quoting, and contractor
            negotiations. With experienced professionals and cutting-edge
            software, we ensure detailed analysis and regional pricing accuracy
            for labor and materials. Our streamlined process adheres to industry
            standards, facilitating easy review and submission to vendors.
          </p>
        </div>
        <img src={Resiimg} alt="" className="mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="">
          <div className="flex justify-start gap-2">
            <img src={Resi1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Custom Residential Estimating
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Resi2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Material & Labor Costs
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Resi3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Digital Takeoff EXCEL files
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Resi4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Coloured Marked up Plans
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-start gap-2 ">
            <img src={Resi5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Material Types & Quantities
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-8 mt-3">
            <img src={Resi6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Residential Project Summary
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Residential;
