import React, { useEffect, useRef } from "react";
import Measure from "../assets/png/measure.png";
import Masonry1 from "../assets/png/masonry1.png";
import Masonry2 from "../assets/png/masonry2.png";
import Masonry3 from "../assets/png/masonry3.png";
import Masonry4 from "../assets/png/masonry4.png";
import Masonry5 from "../assets/png/masonry5.png";
import Secmas1 from "../assets/png/secmas1.png";
import Secmas2 from "../assets/png/secmas2.png";
import Secmas3 from "../assets/png/secmas3.png";
import Secmas4 from "../assets/png/secmas4.png";
import Secmas5 from "../assets/png/secmas5.png";
import Secmas6 from "../assets/png/secmas6.png";
import Banner from "../components/banner";
import Common from "../components/common";
import Uploadplan from "../components/uploadplan";

function Masonry() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const leftObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    leftObserver.observe(leftColumnRef.current);

    const rightObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    rightObserver.observe(rightColumnRef.current);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        MASONRY ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full p-6 mx-auto text-[20px] ">
        Choose{" "}
        <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>{" "}
        for top-notch masonry estimating solutions. With our extensive expertise
        nationwide, we deliver accurate and timely estimates. Our skilled
        masonry cost estimator specializes in Division 4, covering brickwork,
        CMU walls, and various masonry styles. Using advanced tools like OST,
        Planswift, and Bluebeam, our dedicated team ensures precision in every
        evaluation. Contact us at{" "}
        <a href="tel:+1 917 300 1079"><span className="text-[#15a7ad] font-bold hover:underline"> +1 917 300 1079</span></a> or
        via email{" "}
        <a href="Rao@quickbidestimating.com"><span className="text-[#15a7ad] font-bold hover:underline">
          (Rao@quickbidestimating.com)
        </span>{" "}</a>
        to get started.
      </p>

      <Common />
      {/* .. ,,,,,..................*/}
      <div className="lg:w-[80%] w-full mx-auto">
        <h2 className="text-[20px] font-bold p-6 mt-2">
          The Range Of Masonry Estimating Services
        </h2>
        <p className="text-[20px] p-6 -mt-8">
          The Range Of Masonry Estimating Services" encompasses a variety of
          services tailored to estimate the cost and material requirements for
          masonry work in construction projects.
          <br /> Our services include:
        </p>
        {/* ............................... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 lg:w-[100%] w-full container mx-auto ">
          <div className="mb-10 animate-left-to-righ" ref={leftColumnRef}>
            <div className="flex justify-start gap-2">
              <img src={Secmas1} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">
                Labor and material rates
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-16">
              <img src={Secmas5} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">
                Color-coded plans
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-16">
              <img src={Secmas3} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">
                EXCEL spreadsheet
              </p>
            </div>
          </div>
          <div className="animate-right-to-left" ref={rightColumnRef}>
            <div className="flex justify-start gap-2">
              <img src={Secmas2} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">Man Hours</p>
            </div>
            <div className="flex justify-start gap-2 mt-16">
              <img src={Secmas4} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">
                Detailed summary{" "}
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-16">
              <img src={Secmas6} alt="" className="w-[80px] h-[82px]" />
              <p className="text-[20px] font-semibold mt-6">
                Review of addendums
              </p>
            </div>
          </div>
        </div>

        {/* ...................................... */}
        <h2 className="text-[20px] font-bold -mt-8 p-6">
        What Do We Take In The Division 4 Masonry Trade?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mt-6 p-6 container mx-auto">
          <div className="">
            <li className="text-[18px] font-semibold">CMU Masonry</li>
            <li className="text-[18px] font-semibold">Glass unit masonry</li>
            <li className="text-[18px] font-semibold">Clay unit masonry</li>
            <li className="text-[18px] font-semibold">
              Architectural & glazed masonry
            </li>
            <li className="text-[18px] font-semibold">Stonemasonry walls</li>
            <li className="text-[18px] font-semibold">Granite</li>
            <li className="text-[18px] font-semibold">Limestone</li>
            <li className="text-[18px] font-semibold">Marble</li>
            <li className="text-[18px] font-semibold">Sandstone</li>{" "}
            <li className="text-[18px] font-semibold">Soapstone</li>{" "}
          </div>
          <div className="">
            <li className="text-[18px] font-semibold">Slate</li>
            <li className="text-[18px] font-semibold">Cast stone</li>
            <li className="text-[18px] font-semibold">Mortar and grout</li>
            <li className="text-[18px] font-semibold">Masonry Flashing</li>
            <li className="text-[18px] font-semibold">Masonry Anchorage</li>
            <li className="text-[18px] font-semibold">Masonry Insulation</li>
            <li className="text-[18px] font-semibold">Chimney brick</li>
            <li className="text-[18px] font-semibold">Brick tuckpointing</li>
            <li className="text-[18px] font-semibold">brick wall tiles</li>
            <li className="text-[18px] font-semibold">Brick Veneer</li>
            <li className="text-[18px] font-semibold">Stucco work</li>
          </div>
          <div>
            <img src={Measure} alt="lg:mx-auto md:mx-auto sm:mx-auto block" />
          </div>
        </div>      
        {/* ................................................................. */}

        <h2 className="text-[20px] font-bold mt-6 ">
          Why Should You Outsource Your Masonry Estimate?{" "}
        </h2>

        <p className="text-[20px] ">
          Detailed masonry estimates require expertise in materials, labor,
          transportation, and software – a significant time commitment. QuickBid
          Estimating can help! Outsource your estimates and unlock a range of
          benefits.
          <br />
          Outsourcing can be an important factor in the following scenarios:
        </p>

        <li className="text-[20px] mt-2 ">Dams</li>
        <li className="text-[20px] ">Bridges</li>
        <li className="text-[20px] ">Residential Buildings</li>
        <li className="text-[20px] ">Commercial Buildings</li>
        <li className="text-[20px] ">Foundations for High Rise Buildings</li>
        <li className="text-[20px] ">Highways</li>
        <li className="text-[20px] ">Driveways</li>
        <li className="text-[20px] ">Culverts and Sewers</li>
        <li className="text-[20px] ">Marine Structures</li>
        <li className="text-[20px] ">Fences</li>

        <p className="text-[20px] mt-2 ">
          QuickBid's team delivers accurate estimates quickly, using the latest
          technology. Contact us today for a free quote
        </p>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Masonry;
