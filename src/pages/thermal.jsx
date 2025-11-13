import React, { useEffect } from "react";
import Thermal1 from "../assets/png/thermal1.png";
import Thermal2 from "../assets/png/thermal2.png";
import Thermal3 from "../assets/png/thermal3.png";
import Thermal4 from "../assets/png/thermal4.png";
import Thermal5 from "../assets/png/thermal5.png";
import Thermal6 from "../assets/png/thermal6.png";
import Thermal7 from "../assets/png/thermal7.png";
import Thermal8 from "../assets/png/thermal8.png";
import Thermal9 from "../assets/png/thermal9.png";
import Thermalimgg from "../assets/png/thermalimgg.png";
import Common from "../components/common";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Thermal() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        THERMAL AND MOISTURE PROTECTION ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
        At {""}
        <span className="text-[#15A7AD] font-semibold">
          QuickBid Estimating
        </span>{" "}
        , we understand the importance of efficient thermal and moisture
        management in construction projects. Our calculation tools are designed
        to assist in planning and allocating resources for these essential
        elements, ensuring the longevity and durability of your project against
        environmental factors
      </p>

      <h2 className="text-[20px] font-bold lg:w-[80%] w-full mx-auto p-6 -mt-8">
        Thermal Insulation Estimating Services
      </h2>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6 -mt-10">
        Our team of estimators carefully breaks down each roofing project using
        advanced software. Whether it's repairs or installing various types of
        roofs like tin, steel, garage, metal, slate, shingle, or flat roofs, we
        digitize and quantify every detail in an EXCEL spreadsheet. Focusing on
        homeowners, we use their design specs as blueprints. With our experience
        and recent projects, we provide estimated costs for building a home roof
        within an hour.
      </p>

      <Common />
      {/* ............................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6  lg:w-[80%] w-full container mx-auto">
        <div className="mb-6">
          <div className="flex justify-start gap-2">
            <img src={Thermal1} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Fire retardant cable sprays takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal2} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Chemical grouting takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal3} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Plastic insulation takeoffs
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-start gap-2">
            <img src={Thermal4} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Damproofing takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal5} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Traffic coatings takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal6} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Cellulose insulation takeoffs
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-2">
            <img src={Thermal7} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Waterproofing takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal8} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Fiber insulation takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-16">
            <img src={Thermal9} alt="" className="w-[75px] h-[75px]" />
            <p className="text-[16px] font-semibold mt-6">
              Reflective insulation takeoffs
            </p>
          </div>
        </div>
      </div>
      {/* ......................................... */}

      <h2 className="text-[20px] font-bold lg:w-[80%] w-full mx-auto p-6 -mt-5">
        Thermal & Moisture Protection Takeoffs
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 p-6 -mt-8 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <li className="text-[20px]">Fire Retardant Cable Sprays Takeoffs</li>
          <li className="text-[20px]">Damproofing Takeoffs</li>
          <li className="text-[20px]">Waterproofing Takeoffs</li>
          <li className="text-[20px]">Chemical Grouting Takeoffs</li>
          <li className="text-[20px]">Traffic Coatings Takeoffs</li>
          <li className="text-[20px]">Fiber Insulation Takeoffs</li>
          <li className="text-[20px]">Plastic Insulation Takeoffs</li>
          <li className="text-[20px]">Cellulose Insulation Takeoffs</li>
          <li className="text-[20px]">Reflective Insulation Takeoffs</li>
          <li className="text-[20px]">Cladding Takeoffs</li>
          <li className="text-[20px]">Roof And Deck Installation Takeoffs</li>
          <li className="text-[20px]">
            EIFS( Exterior Insulation and Finish Systems) Takeoffs
          </li>
          <li className="text-[20px]">Weather Barriers Takeoffs</li>
          <li className="text-[20px]">Vapor Resistive Barriers Takeoffs</li>
          <li className="text-[20px]">Steep Slope Roofing Takeoffs</li>
          <li className="text-[20px]">
            Shingles (Asphalt, Metal, Slate) takeoffs
          </li>
          <li className="text-[20px]">Siding Panels Takeoffs</li>
          <li className="text-[20px]">Metal Siding Takeoffs</li>
          <li className="text-[20px]">Vinyl Siding Takeoffs</li>
        </div>
        <div className="col-span-1 mt-3">
          <img src={Thermalimgg} alt="" className="mx-auto" />
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Thermal;
