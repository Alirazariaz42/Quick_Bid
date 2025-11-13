import React, { useEffect } from "react";
import Roofing1 from "../assets/png/roofing1.png";
import Roofing2 from "../assets/png/roofing2.png";
import Common from "../components/common";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";
import Construction1 from "../assets/png/construction1.png";
import Construction2 from "../assets/png/construction2.png";
import Construction3 from "../assets/png/construction3.png";
import Construction4 from "../assets/png/construction4.png";
import Construction5 from "../assets/png/construction5.png";
import Construction6 from "../assets/png/construction6.png";

function Flooring() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
      Flooring Estimating & Takeoff Services
      </h1>
      <p className="text-[20px] lg:w-[80%] w-full mx-auto p-6">
      At <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span>, we make flooring estimates easy and accurate. Whether you're a contractor, manufacturer, architect, or designer, we've got you covered. Our tailored services consider all design elements to minimize waste. From access flooring to stair details, we cater to various properties such as residential, commercial, and more. Trust us for seamless flooring solutions.
      </p>
      <Common />


      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold ">Our Clients</h2>
        <p className="text-[20px] ">
         <span className="text-[#15a7ad] font-bold">QuickBid Estimating </span> is a professional platform to deliver Roofing
          Estimating Services from last 10 years with different clients. Few of
          them are as follows:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[80%] w-full p-6 -mt-10 container mx-auto">
        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction1}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Developers</span>{" "}
              <br />
              Make smart decisions early. Get reliable cost estimates with our
              accurate material takeoffs.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction2}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Homeowners & Builders
              </span>{" "}
              <br />
              We provide cost estimates for materials and labor, helping you
              make informed decisions before starting your project.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction3}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Subcontractors</span>{" "}
              <br />
              Subcontractors: Stop wasting time! Get fast, accurate quotes in
              just 1-2 days and slash your estimating costs by 60%.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction4}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 mb-6">
              <span className="text-[#15A7AD] font-bold">
                General Contractors
              </span>{" "}
              <br />
              Get accurate takeoffs, fast! We help you verify subcontractor bids
              and ensure reliable project costs before construction begins.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 ">
            <img
              src={Construction5}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 mb-4">
              <span className="text-[#15A7AD] font-bold">
                Architects & Designers
              </span>{" "}
              We provide accurate quantity takeoff services to help maintain
              budget compliance during blueprint creation.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction6}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Vendors</span>
              <br /> Boost sales & build trust with accurate material estimates.
              Help clients avoid costly mistakes and reduce waste. Promote
              sustainability!
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-[22px] font-semibold mt-8 w-[80%] mx-auto">
      Our Flooring Estimating Services
        </h2>
      <p className="lg:w-[80%] w-full mx-auto text-[20px]">
        Our expert estimators have extensive knowledge of how to estimate
        rapidly to different types of flooring works. It mainly includes the
        following:
      </p>
      <div className="w-[80%] mx-auto ">
        <li className="text-[18px] font-semibold">VCT tiles</li>
        <li className="text-[18px] font-semibold">LVT floors</li>
        <li className="text-[18px] font-semibold">Carpets</li>
        <li className="text-[18px] font-semibold">
        Rubber tiling
        </li>
        <li className="text-[18px] font-semibold">
        Wooden flooring
        </li>
        <li className="text-[18px] font-semibold">
        Vinyl Flooring
        </li>
        <li className="text-[18px] font-semibold">
        Dance Flooring
        </li>
        <li className="text-[18px] font-semibold">Leather Flooring</li>
        <li className="text-[18px] font-semibold">Fitness Room Flooring and Mats</li>
        <li className="text-[18px] font-semibold">Tile Flooring</li>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[80%] p-6 mt-6 container mx-auto">
        <div className="sm:flex grid mx-auto justify-start gap-3 mt-6">
          <img src={Roofing1} alt="" className=" w-[60px] h-[60px]" />
          <p className="text-[18px] font-semibold">
            <span className="text-[#15A7AD] text-[26px]">
              Residential Flooring <br />
              Estimating Services
            </span>{" "}
            <br />
            <li>Homes</li>
            <li>Apartments</li>
            <li>Mansions</li>
            <li>Home additions</li>
            <li>Condominium</li>
            <li>Home Improvements</li>
            <li>Mixed used facilitie</li>
            <li>Studio Flats</li>
          </p>
        </div>
        <div className="sm:flex grid mx-auto  gap-3 mt-6">
          <img src={Roofing2} alt="" className="w-[60px] h-[60px]" />
          <p className="text-[18px] font-semibold">
            <span className="text-[#15A7AD] text-[26px]">
              Commercial Flooring <br />
              Estimating Services
            </span>{" "}
            <br />
            <li>Offices</li>
            <li>Hospitals</li>
            <li>Airports</li>
            <li>Hotels</li>
            <li>Arenas</li>
            <li>Schools</li>
            <li>Warehouses</li>
            <li>Shopping Malls.</li>
            <li>Restaurants</li>
            <li>Fire Stations.</li>
          </p>
        </div>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default Flooring;
