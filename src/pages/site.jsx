import React, { useEffect } from "react";
import Sitepic from "../assets/png/sitepic.png";
import Siteone from "../assets/png/siteone.png";
import Sitetwo from "../assets/png/sitetwo.png";
import Sitethree from "../assets/png/sitethree.png";
import Sitefour from "../assets/png/sitfour.png";
import Sitefive from "../assets/png/sitefive.png";
import Sitesix from "../assets/png/sitesix.png";
import Sitee from "../assets/png/sitee.png";
import Common from "../components/common";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Site() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        SITEWORK ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] w-full container mx-auto p-6">
        <div className="col-span-2 " >
          <p className="text-[20px]">
          At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, we empower sitework contractors, landscapers, developers, general contractors, and site contractors by offering more than just estimates. Our team of estimators utilizes the latest and cost-effective software to analyze drawings and plans accurately, providing precise material and labor takeoffs (including manhours) within 24-48 hours.
          </p>
          <p className="text-[20px] mt-3">
          Our Sitework Estimating Services are tailored to address the unique challenges encountered by excavation contractors, offering reliable and cost-effective solutions that free up valuable time for your team to manage busy sites effectively.
          </p>
          <p className="text-[20px] mt-3">
            Our deleiverables for site works estimating services includes:
          </p>
          <li className="text-[20px]">
            Cut & Fill Takeoff list with takeoff summary
          </li>
          <li className="text-[20px]">
            Earth Volumes, quantities, and section
          </li>
          <li className="text-[20px]">Surface Grading</li>
          <li className="text-[20px]">
            Landscaping estimate with soil volumes (Hardscape, Softscape &
            Irrigation)
          </li>
        </div>
        <div className="col-span-1 " >
          <img src={Sitepic} alt="" className="mx-auto" />
        </div>
      </div>
      {/* .................................... */}
      <Common />

      <h2 className="text-[30px] font-bold text-center mt-6">
        Our Sitework Estimating Services Portfolio
      </h2>

      <div className="lg:w-[80%] w-full mx-auto p-6">
      

        <p className="text-[20px] mt-2">
        At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we know every sitework project is unique. With modern tools and experienced estimators, we give precise estimates for materials, labor, and more. From equipment to permits, we cover it all. Need cost-effective solutions? We're flexible, efficient, and available 24/7:
        </p>

      

        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          <div className="lg:mx-auto block">
            <div className="flex justify-start gap-3 mt-6 ">
              <img src={Siteone} alt="" className="w-[85px] h-[85px]"/>
              <p className="text-[18px] font-semibold mt-6 ">
                Cost-effective Solutions (check prices)
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-6">
              <img src={Sitetwo} alt="" className="w-[85px] h-[85px]"/>
              <p className="text-[18px] font-semibold mt-6">Confidentiality</p>
            </div>
            <div className="flex justify-start gap-3 mt-6">
              <img src={Sitethree} alt="" className="w-[85px] h-[85px]"/>
              <p className="text-[18px] font-semibold mt-6">
                Efficiency & Accuracy
              </p>
            </div>
          </div>

          <div className="lg:mx-auto block">
            <div className="flex justify-start gap-3 mt-6">
              <img src={Sitefour} alt="" className="w-[85px] h-[85px]"/>
              <p className="text-[18px] font-semibold mt-6">
                Efficiency & Accuracy
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-6">
              <img src={Sitefive} alt="" className="w-[85px] h-[85px]" />
              <p className="text-[18px] font-semibold mt-6">
                Efficiency & Accuracy
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-6">
              <img src={Sitesix} alt="" className="w-[85px] h-[85px]"/>
              <p className="text-[18px] font-semibold mt-6">
                Efficiency & Accuracy
              </p>
            </div>
          </div>
        </div>
        {/* .................................. */}
        <h2 className="text-[30px] font-bold text-center mt-16">
          Scope of work in our Sitework Estimating Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mt-10 mx-auto">
          <div>
            <li className="text-[18px] font-semibold">Clearing & Demolition</li>
            <li className="text-[18px] font-semibold">Earthwork</li>
            <li className="text-[18px] font-semibold">Grading</li>
            <li className="text-[18px] font-semibold">Drainage</li>
            <li className="text-[18px] font-semibold">Utility Spoils</li>
            <li className="text-[18px] font-semibold">Storm Sewer</li>
            <li className="text-[18px] font-semibold">Water Distribution</li>
            <li className="text-[18px] font-semibold">Roadways</li>
            <li className="text-[18px] font-semibold">Sidewalk</li>{" "}
            <li className="text-[18px] font-semibold">Driveways</li>{" "}
            <li className="text-[18px] font-semibold">Pavements</li>
          </div>
          <div className="mx-auto">
            <li className="text-[18px] font-semibold">Site Furnishing</li>
            <li className="text-[18px] font-semibold">Concrete Flatwork</li>
            <li className="text-[18px] font-semibold">Retaining Walls</li>
            <li className="text-[18px] font-semibold">Climbing Walls</li>
            <li className="text-[18px] font-semibold">Fences and Gates</li>
            <li className="text-[18px] font-semibold">Landscaping</li>
            <li className="text-[18px] font-semibold">Irrigation</li>
            <li className="text-[18px] font-semibold">Fountains</li>
            <li className="text-[18px] font-semibold">Patio</li>
            <li className="text-[18px] font-semibold">Gabions</li>
            <li className="text-[18px] font-semibold">Docks</li>
          </div>
          <div>
            <img src={Sitee} alt="" />
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Site;
