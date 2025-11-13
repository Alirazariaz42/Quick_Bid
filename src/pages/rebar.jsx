import React, { useEffect } from "react";
import Common from "../components/common";
import Rebar1 from "../assets/png/rebar1.png";
import Rebar2 from "../assets/png/rebar2.png";
import Rebar3 from "../assets/png/rebar3.png";
import Rebar4 from "../assets/png/rebar4.png";
import Rebarfull from "../assets/png/rebarfull.png";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Rebar() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        REBAR ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
        Looking for reliable Rebar estimating services for your construction
        project? <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> has you covered. Our expert team
        specializes in delivering precise and high-quality Rebar detailing and
        estimating services.
        <br /> What sets our Rebar estimating services apart is our commitment
        to accuracy and thoroughness. With years of experience, we have
        successfully provided comprehensive estimates to a diverse range of
        clients. No matter the project size or complexity, we ensure efficient
        and accurate results.
      </p>

      <div className="lg:w-[80%] w-full p-6 -mt-16 mx-auto">
        {/* <h2 className="text-[22px] font-semibold mt-6 ">
          Rebar Estimating Services
        </h2> */}
        <p className="text-[20px] mt-4">
          Rebar estimating services require expertise. <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>,{""}
         stands out with our skilled team. Rebar reinforces concrete. To price
          concrete jobs, we evaluate Rebar needs. Our quotes are quick and
          precise
        </p>

        <li className="text-[18px] font-semibold mt-4">Accessories</li>
        <li className="text-[18px] font-semibold">Materials</li>
        <li className="text-[18px] font-semibold">Erection costs</li>

        <p className="text-[20px] mt-1">
          We'll evaluate your project, identify optimal schedules, and ensure
          fast turnaround times.
        </p>

        <li className="text-[18px] font-semibold mt-2">
          We integrate project management
        </li>
        <li className="text-[18px] font-semibold">
          We insight on how to optimize your schedules
        </li>
        <li className="text-[18px] font-semibold">
          We provide regular updates on your construction project's progress
          through weekly and quarterly assessments
        </li>
      </div>

      <Common />

      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold mt-8 ">
          Distinctive Features Of Rebar Estimation
        </h2>
        <p className="text-[20px] mt-1">
          Our estimates give you all the data you need for rebar forecasting. We
          minimize waste and identify key accessories, ensuring a smooth
          fabrication process. With error-free bar bending schedules, we help
          you avoid costly rework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full gap-6 p-6 container mx-auto">
        <div className="mx-auto">
          <div className="sm:flex grid justify-start gap-3 mt-6 ">
            <img src={Rebar1} alt="" className="w-[88px] h-[88px]" />
            <p className="text-[18px] font-semibold mt-6 ">
              Comprehensive estimation summary according to client’s requirement
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-10">
            <img src={Rebar2} alt="" className="w-[88px] h-[88px]" />
            <p className="text-[18px] font-semibold mt-6">
              A comprehensive list of different accessories that includes
              chairs, bolsters, wire mesh, ex
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <div className="sm:flex grid justify-start gap-3 mt-6">
            <img src={Rebar3} alt="" className="w-[88px] h-[88px]" />
            <p className="text-[18px] font-semibold mt-6">
              Rebar take off summary
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-10">
            <img src={Rebar4} alt="" className="w-[88px] h-[88px]" />
            <p className="text-[18px] font-semibold mt-6">
              The output itself into MS excel, Soule estimation formats, ASA
              estimation
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-[24px] w-[80%] mx-auto font-medium ">
      Specialized Rebar Detailing Solutions
      </h2>

      <p className="text-[18px] w-[80%] mx-auto -mt-1">
      Our expertise in rebar detailing encompasses a wide range of services, including:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-[80%] container mt-3 mx-auto">
        <div className="mt-2">
          <li className="text-[18px] font-semibold">Rebar shop drawings</li>
          <li className="text-[18px] font-semibold">
            Bar listing in ASA format
          </li>
          <li className="text-[18px] font-semibold">Foundation details</li>
          <li className="text-[18px] font-semibold">Footing detailing</li>
          <li className="text-[18px] font-semibold">Total rebar estimation</li>
          <li className="text-[18px] font-semibold">Bar bending schedules</li>
          <li className="text-[18px] font-semibold">
            Roof truss and joint details
          </li>
          <li className="text-[18px] font-semibold">
            Retaining walls detailing
          </li>
          <li className="text-[18px] font-semibold">
            Concrete masonry detailing
          </li>{" "}
          <li className="text-[18px] font-semibold">
            Quality takeoffs and as-built drawings
          </li>{" "}
        </div>

        <div>
          <img src={Rebarfull} alt="" />
        </div>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default Rebar;
