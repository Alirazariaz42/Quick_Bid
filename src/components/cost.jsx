import React, { useState, useEffect } from "react";
import CostModal from "../components/costModal";
import Feature1 from "../assets/png/feature1.png";
import Feature2 from "../assets/png/feature2.png";
import Feature3 from "../assets/png/feature3.png";
import Feature4 from "../assets/png/feature4.png";
import Oneimgg from "../assets/png/oneimgg.png";
import Twoimgg from "../assets/png/twoimgg.png";
import Costimg from "../assets/png/costimg.png";
import CostFlip1 from "../assets/png/costFlip1.png";
import CostFlip2 from "../assets/png/costFlip2.png";
import CostFlip3 from "../assets/png/costFlip3.png";
import Banner from "./banner";
import { useInView } from "react-intersection-observer";
import Common from "./common";

function Cost() {
  const [serviceModal, setServiceModal] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  const buttonStyles = {
    width: "180px",
    height: "55px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: isWhite ? "#ffffff" : "#15A7AD",
    color: isWhite ? "#000000" : "#ffffff",
    transition: "all 1s",
  };

  return (
    <>
      <div className="relative ">
        <h1 className="text-[30px] font-bold text-center mt-[210px]">
          CONSTRUCTION COST ESTIMATING SERVICES
        </h1>

        <p className="text-[20px] font-normal w-[80%] leading-[26px] mt-3 mx-auto">
          <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>,
          a trusted name in the construction industry, specializes in providing
          accurate and reliable cost estimating services. With our experienced
          team of estimators, we deliver precise estimates for projects of all
          sizes and complexities. From detailed blueprint analysis to timely
          delivery, we ensure client satisfaction every step of the way. Choose
          <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span> for your project and experience excellence in
          cost estimating services.
        </p>

        <div
          onClick={openModal}
          className="fixed right-0 top-[200px] z-20 shadow-lg bg-[#15a7ad] rounded-l overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
        >
          <button className="text-white text-[18px] font-semibold blink-text">
            Services
          </button>
        </div>
        <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
        <div className="w-[80%] p-1 mx-auto">
          <p className="text-[20px] font-normal leading-[26px] mx-auto mt-2">
            At{" "}
            <span className="text-[#15a7ad] font-bold">
              QuickBid Estimating
            </span>
            , we understand our clients' unique needs, and our construction cost
            estimating services are tailored accordingly. Our clients include:
          </p>
          <div>
            <li className="text-[18px] font-semibold mt-3 ">
              General Contractors
            </li>
            <li className="text-[18px] font-semibold ">
              Subcontractors
            </li>
            <li className="text-[18px] font-semibold ">
              Project managers
            </li>
            <li className="text-[18px] font-semibold ">
              Developers
            </li>
            <li className="text-[18px] font-semibold ">
              Investors
            </li>
            <li className="text-[18px] font-semibold ">
              Architects
            </li>
            <li className="text-[18px] font-semibold ">
              Homebuilders
            </li>
            <li className="text-[18px] font-semibold ">
              Owners
            </li>
            <li className="text-[18px] font-semibold ">
              Vendors
            </li>
          </div>
        </div>
      </div>
      {/* .................. ................... */}

      
        
          <Common/>
           
     
      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold mt-8">
          Our Range Of Construction Cost Estimating Services:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mt-6 mx-auto">
          <div className="mx-auto w-[80%]">
            <li className="text-[18px] font-semibold">Cost estimates</li>
            <li className="text-[18px] font-semibold">Material takeoffs</li>
            <li className="text-[18px] font-semibold">Feasibilities studies</li>
            <li className="text-[18px] font-semibold">Bid evaluation</li>
            <li className="text-[18px] font-semibold">Bid management</li>
            <li className="text-[18px] font-semibold">
              Consultaion on bid filling
            </li>
            <li className="text-[18px] font-semibold">New project leads</li>
            <li className="text-[18px] font-semibold">
              Subcontractor marketing
            </li>
          </div>
          <div className="mx-auto w-[80%]">
            <li className="text-[18px] font-semibold">Litigation assistance</li>
            <li className="text-[18px] font-semibold">CPM scheduling</li>
            <li className="text-[18px] font-semibold">
              Project cost management
            </li>
            <li className="text-[18px] font-semibold">
              Change order management
            </li>
            <li className="text-[18px] font-semibold">Value engineering</li>
            <li className="text-[18px] font-semibold">CAD drafting</li>
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] w-full mx-auto">
        <h2 className="text-[22px]  font-medium p-4 ">
          What Type Of Cost Estimations We Provide To Our Client?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-5 container ">
          <div ref={ref} className="">
            <div className="flex justify-start gap-3 mt-8">
              <img
                src={Oneimgg}
                alt=""
                className={`w-[60px] h-[60px] ${
                  inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
                }`}
              />
              <h3
                className={`text-[22px] font-semibold mt-3 ${
                  inView
                    ? "animate__animated animate__fadeInRight"
                    : "opacity-0"
                }`}
              >
                Labor cost estimation
              </h3>
            </div>

            <p
              className={`text-[20px] mt-3 ${
                inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
              }`}
            >
              Accurately estimating labor costs is a critical component of any
              construction project budget. At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we
              understand that labor can be a significant cost factor, and we
              provide a meticulous approach to ensure your estimates are
              realistic and reliable.
            </p>
          </div>
          <div className="mx-auto">
            <div className="flex justify-start gap-3 mt-8">
              <img
                src={Twoimgg}
                alt=""
                className={`w-[60px] h-[60px] ${
                  inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
                }`}
              />
              <h3
                className={`text-[22px] font-semibold mt-3 ${
                  inView
                    ? "animate__animated animate__fadeInRight"
                    : "opacity-0"
                }`}
              >
                Material cost estimation
              </h3>
            </div>

            <p
              className={`text-[20px] mt-3 ${
                inView ? "animate__animated animate__fadeInRight" : "opacity-0"
              }`}
            >
              Material costs represent a significant portion of any construction
              project budget. At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we ensure your success by
              providing meticulous material cost estimates that reflect current
              market realities and project specifics.
            </p>
          </div>
        </div>
      </div>
      {/* ................................... */}

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12 w-[80%] container mx-auto">
        <div className="col-span-2">
      <h2 className="text-[22px] font-semibold">
        Our Approach to Construction Cost Estimating Services
      </h2>
        <p
          className={`text-[20px] mt-2 ${
            inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
          }`}
        >
          In today's dynamic construction environment, managing project finances
          can be a challenging task. At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we understand the
          complexities involved. That's why we don't just provide numbers; we
          offer a holistic and client-centered approach. Our aim is to empower
          you with the information you need to make informed decisions at every
          stage of your project's lifecycle.
        </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
        <img src={Costimg} alt="" className=" mx-auto" />
        </div>
      </div>
      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto w-[60%] mt-16">
        <div class="flip-card-general ">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={CostFlip1} alt="" />
            </div>
            <div class="flip-card-back-general">
              <div className="p-6 text-[16px]">
                <p>
                  At <span className="font-bold">QuickBid Estimating</span>, we
                  understand that building your dream home is a significant
                  investment. Our residential estimating services are designed
                  to provide you with the accurate and detailed cost estimates
                  you need to make informed decisions throughout the
                  construction process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flip-card-general ">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={CostFlip2} alt="" />
            </div>
            <div class="flip-card-back-general">
              <div className="p-6 text-[16px]">
                <p>
                  {" "}
                  At Quick Bid Estimating, we understand the unique challenges
                  of commercial construction projects. Our commercial estimating
                  services are tailored to provide you with the detailed and
                  reliable cost estimates you need to make informed decisions
                  throughout the project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flip-card-general ">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={CostFlip3} alt="" />
            </div>
            <div class="flip-card-back-general">
              <div className="p-6 text-[16px]">
                <p>
                  The complex nature of industrial construction projects demands
                  a meticulous approach to cost estimation. At{" "}
                  <span className="font-bold">QuickBid Estimating</span> , we
                  provide industrial estimating services tailored to the
                  specific needs of your project, ensuring you navigate the
                  construction process with confidence and financial clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Cost;
