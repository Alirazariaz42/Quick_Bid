import React from "react";
import Const1 from "../assets/png/const1.png";
import Constone from "../assets/png/constone.png";
import Consttwo from "../assets/png/consttwo.png";
import Constfour from "../assets/png/constfour.png";
import Constthree from "../assets/png/constthree.png";
import Common from "../components/common";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Special() {
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        SPECIAL CONSTRUCTION ESTIMATING SERVICES
      </h1>

      <p className="text-[20px] w-[80%] mx-auto mt-3">
        <span className="text-[#15a7ad]">QuickBid Estimating</span> specializes in providing accurate and detailed
        predictions for custom building projects. Our team helps you strategize
        and allocate resources for unique project requirements.
      </p>

      <h2 className="text-[30px] font-bold mt-3 w-[80%] mx-auto">
        Our Special Construction Estimating Process{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mt-6 container mx-auto">
        <div className="col-span-2 -mt-4">
          <p className="text-[20px]">
            <span className="font-semibold text-black">
              Initial Consultation:
            </span>{" "}
            We discuss your project goals, estimate preferences, and budget to
            understand your needs.
          </p>
         
          <p className="text-[20px] mt-3">
            <span className="font-semibold text-black">
              Material and Equipment Suggestions:
            </span>{" "}
            We recommend materials and equipment tailored to your project.
          </p>
          <p className="text-[20px] mt-3">
            <span className="font-semibold text-black">
              Comprehensive Estimate:
            </span>{" "}
            We provide a detailed cost evaluation for materials, equipment, and
            labor.
          </p>
          <p className="text-[20px] mt-3">
            <span className="font-semibold text-black">
              Presentation and Approval:
            </span>{" "}
            We present the estimate, address questions.
          </p>
        
        </div>

        <div>
          <img src={Const1} alt="lg:mx-auto md:mx-auto sm:mx-auto block" />
        </div>
      </div>
      <Common />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 gap-6 mt-16 container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Constone} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-medium mt-4 ">
              <span className="text-[#15A7AD]">Specialized Materials</span>{" "}
              <br />
              Including strong alloys, customized concrete mixes, and unique
              building materials to match your project's needs.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Consttwo} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-medium mt-4 ">
              <span className="text-[#15A7AD]">
                Safety Measures and Compliance ials
              </span>{" "}
              <br />
              This involves using specialized safety gear, fire control systems,
              and other precautions to meet sector-specific regulations.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6">
            <img src={Constthree} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-semibold mt-4">
              <span className="text-[#15A7AD]">Specialized Equipment:</span>{" "}
              <br />
              This involves the use of heavy machinery, precise instruments, or
              specialized tools required for your unique construction project.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-6">
            <img src={Constfour} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-semibold mt-4">
              <span className="text-[#15A7AD]">Technology Integration:</span>{" "}
              <br />
              This includes advanced HVAC systems, smart building technologies,
              or customized infrastructure crucial for modern facilities.
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Special;
