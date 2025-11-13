import React, { useEffect } from "react";
import Special1 from "../assets/png/special1.png";
import Special2 from "../assets/png/special2.png";
import Special3 from "../assets/png/special3.png";
import Special4 from "../assets/png/special4.png";
import Special5 from "../assets/png/special5.png";
import Special6 from "../assets/png/special6.png";
import Special7 from "../assets/png/special7.png";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";
import Common from "../components/common";

function Specialties() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        SPECIALTIES ESTIMATING SERVICES
      </h1>
      <p className="text-[20px] lg:w-[80%] w-full mx-auto p-6">
        There are many construction estimating services in the market, but they
        provide a limited number of options for the constructors.{" "}
        <span className="text-[#15a7ad]"> QuickBid Estimating</span> services
        are special when compared to the rest of the companies due to the
        following specialties.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[80%] w-full p-6  container mx-auto">
        <div>
          <div className="sm:flex grid justify-start gap-3 ">
            <img
              src={Special4}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 mb-[50px]">
              <span className="text-[#15A7AD] font-bold">Extensive range:</span>{" "}
              We offer comprehensive construction estimation services, including
              bid estimation, cost forecasting, material audits, software
              consultancy, frame costing, material takeoff assessments, and
              more, all in one place.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special5}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 ">
              <span className="text-[#15A7AD] font-bold">Material takeoff:</span>{" "}
              We specialize in precise construction cost estimation services for
              commercial, residential, and civil projects. Our experienced team
              excels in creating accurate material takeoffs and lists.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:flex grid justify-start gap-3 ">
            <img
              src={Special6}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Comprehensive and accurate Cost Estimating:
              </span>{" "}
              Our expert teams, powered by advanced software, deliver precise
              construction cost breakdowns for efficient estimating services.
              With extensive industry experience, we've satisfied numerous
              clients by meticulously handling all aspects of construction
              estimating.
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-11">
            <img
              src={Special7}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Construction Scheduling:
              </span>{" "}
              We plan construction tasks meticulously for efficient execution,
              akin to laying a foundation before building. Our cost analysis
              services leverage advanced tools like Bluebeam, On-screen takeoff
              (OST), and Planswift.
            </p>
          </div>
        </div>
      </div>
      <Common />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[80%] w-full p-6 container mx-auto">
        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special4}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Cost controls:</span>{" "}
              <span className="text-[#15a7ad]">QuickBid Estimating</span> plays a key role on-site during construction,
              handling estimating, project oversight, document management, and
              field inspection planning, ensuring efficient problem-solving for
              both our team and clients regarding construction cost estimation.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special3}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Budget estimating:
              </span>{" "}
             <span className="text-[#15a7ad]">QuickBid Estimating</span> excels in providing accurate and
              cost-effective budget projections for construction projects,
              earning acclaim across various bidding scenarios.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special1}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Construction designing:
              </span>{" "}
              We provide a comprehensive approach to cost prediction services
              for architectural design. Our organized team handles all aspects
              of construction planning, including scheduling, functionality, and
              timetable management.
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special2}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Construction Management:
              </span>{" "}
              We offer construction cost calculation services for all types of
              organizations, from startups to established firms, ensuring
              comprehensive assessments for various project needs.
            </p>
          </div>
        </div>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default Specialties;
