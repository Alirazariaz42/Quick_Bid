import React, { useEffect } from "react";
import Common from "../components/common";
import Electrical1 from "../assets/png/electrical1.png";
import Electrical2 from "../assets/png/electrical2.png";
import Plumbingimg from "../assets/png/plumbingimg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Plumbing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold w-[80%] mx-auto text-center mt-[200px]">
        PLUMBING ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-2">
            At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, we simplify plumbing estimates worldwide.
            With 10+ years of experience, we provide fast, accurate estimates
            using advanced software. From residential to commercial projects,
            count on us for precision and efficiency.
          </p>
          <p className="text-[20px] mt-4">
            From small residential jobs to large commercial projects, we handle
            it all. We offer estimating services for:
          </p>
          <li className="text-[18px] font-semibold">
            Residential (Private & Public)
          </li>
          <li className="text-[18px] font-semibold">Commercial</li>
          <li className="text-[18px] font-semibold">Industrial</li>
          <li className="text-[18px] font-semibold"> And More!</li>
        </div>
        <img src={Plumbingimg} alt="" className="mx-auto" />
      </div>
      <Common />
      <h2 className="text-[24px] font-medium mt-5 w-[80%] mx-auto">
        Range of Plumbing Estimating Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3 lg:w-[80%] w-full container mx-auto">
        <div className="">
          <li className="text-[18px] font-semibold">Material Takeoffs</li>
          <li className="text-[18px] font-semibold">Budget Estimates</li>
          <li className="text-[18px] font-semibold">Conceptual Estimates</li>
          <li className="text-[18px] font-semibold">
            Detailed Design Development Estimates
          </li>
          <li className="text-[18px] font-semibold">Bid Estimates</li>
          <li className="text-[18px] font-semibold">Bid Reviews</li>
        </div>
        <div className="">
          <li className="text-[18px] font-semibold">Bidding Assistance</li>
          <li className="text-[18px] font-semibold">
            Unbiased Third Party Estimate
          </li>
          <li className="text-[18px] font-semibold">
            Procurement & Change Orders
          </li>
          <li className="text-[18px] font-semibold">Project Cost Management</li>
          <li className="text-[18px] font-semibold">Subcontractor Marketing</li>
          <li className="text-[18px] font-semibold">
            Plumbing Project Lead Generation
          </li>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 gap-16 container mx-auto">
        <div className="">
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Electrical1} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-normal">
              <span className="text-[#15A7AD] text-[26px] font-medium">
                Commercial Plumbing <br />
                Estimating Services
              </span>{" "}
              <br />
              At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, we specialize in swift and accurate
              commercial plumbing estimates. Understanding the complexity of
              commercial plumbing, we meticulously itemize all components for
              multi-floor systems, including pipes, fittings, fixtures, valves,
              and accessories. repair of the following systems but are not
              limited to:
            </p>
          </div>
          <p className=" w-[70%] mx-auto mt-3">
            <li className="text-[18px] font-semibold ">
              Solar Hot Water Heating Systems
            </li>
            <li className="text-[18px] font-semibold ">
              Sewer, Gas & Water Lines
            </li>
            <li className="text-[18px] font-semibold ">
              Commercial HVAC Systems
            </li>
            <li className="text-[18px] font-semibold ">
              Commercial Water Heaters
            </li>
            <li className="text-[18px] font-semibold ">
              Sanitary Plumbing and Drainage
            </li>
            <li className="text-[18px] font-semibold ">
              Sub-Soil Drainage Systems
            </li>
            <li className="text-[18px] font-semibold ">Stormwater Discharge</li>
            <li className="text-[18px] font-semibold ">Water Conservation</li>
          </p>
        </div>

        <div className="">
          <div className="flex justify-start gap-3 mt-6">
            <img src={Electrical2} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-normal">
              <span className="text-[#15A7AD] text-[26px] font-medium">
                Residential Estimating
                <br /> Services{" "}
              </span>{" "}
              <br />
              Whether you're a small-scale plumber or a large residential
              plumbing contractor, precise estimates are crucial for quoting
              prices, bidding on jobs, and procuring materials from local
              vendors.
            </p>
          </div>
          <p className="w-[70%] mx-auto  mt-2">
            <li className="text-[18px] font-semibold ">Water Heaters</li>
            <li className="text-[18px] font-semibold ">Gas Lines</li>
            <li className="text-[18px] font-semibold ">Main Sewer Lines</li>
            <li className="text-[18px] font-semibold ">Water Lines</li>
          </p>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Plumbing;
