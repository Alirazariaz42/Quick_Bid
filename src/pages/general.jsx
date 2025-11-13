import React, { useEffect } from "react";
import Generalimg from "../assets/png/generalimg.png";
import General2 from "../assets/png/general2.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";
import Common from "../components/common";

function General() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        GENERAL REQUIREMENTS
      </h1>
      <p className="text-[20px] font-normal lg:w-[80%] w-full leading-[26px] p-6  mx-auto">
        Our general requirement provide a comprehensive overview, analyzing your
        project needs and ensuring compliance with regulations. We deliver
        detailed estimates for materials, labor, and equipment, allowing for
        informed decisions and smooth project execution. Trust us for clear
        communication and on-budget completion.
      </p>
      {/* ............cards animation flip............ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto lg:w-[60%] w-full mt-8">
        <div class="flip-card-general mx-auto">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={Generalimg} alt="" className="" />
            </div>
            <div class="flip-card-back-general">
              <div className="grid justify-start p-12">
                <p className="underline text-[18px]">Design Estimates</p>
                <p className="underline text-[18px] mt-2">
                  Screening Estimates
                </p>
                <p className="underline text-[18px] mt-2">
                  Engineer's Estimates
                </p>
                <p className="underline text-[18px] mt-2">
                  Preliminary Estimates
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card-general mx-auto">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={General2} alt="" />
            </div>
            <div class="flip-card-back-general">
              <div className="grid justify-start p-12">
                <p className="underline text-[18px]">Budget Cost Estimates</p>
                <p className="underline text-[18px] mt-2">Estimated Cost</p>
                <p className="underline text-[18px] mt-2">Estimates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .................................................. */}
      <Common />
      <div className="w-[80%] mx-auto">
        <h2 className="text-[22px] font-semibold mt-8">
          Key Components of General Requirements
        </h2>
        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">1.</p>
          <p className="text-[20px] font-bold"> Project Objectives</p>
        </div>
        <li className="ml-8 mt-1">
          Clearly defined and measurable goals that the project aims to achieve.
        </li>
        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">2.</p>
          <p className="text-[20px] font-bold"> Scope of Work</p>
        </div>
        <li className="ml-8 mt-1">
          A detailed description of the tasks, deliverables, and boundaries of
          the project.
        </li>

        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">3.</p>
          <p className="text-[20px] font-bold"> Resource Allocation</p>
        </div>
        <li className="ml-8 mt-1">
          Identifying and assigning the necessary resources, including manpower,
          materials, and equipment.
        </li>

        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">4.</p>
          <p className="text-[20px] font-bold"> Quality Standards</p>
        </div>
        <li className="ml-8 mt-1">
          Specifications for the level of quality expected for project
          deliverables.
        </li>

        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">5.</p>
          <p className="text-[20px] font-bold">
            {" "}
            Regulatory and Compliance Requirements
          </p>
        </div>
        <li className="ml-8 mt-1">
          Ensuring that the project adheres to legal and regulatory standards.
        </li>

        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">6.</p>
          <p className="text-[20px] font-bold">
            {" "}
            Budget and Financial Constraints
          </p>
        </div>
        <li className="ml-8 mt-1">
          Defining the financial parameters and constraints within which the
          project must operate.
        </li>
        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">7.</p>
          <p className="text-[20px] font-bold"> Risk Management Plan</p>
        </div>
        <li className="ml-8 mt-1">
          Identifying potential risks, assessing their impact, and outlining
          mitigation strategies.
        </li>
        <div className="flex justify-start gap-3 mt-3">
          <p className="text-[20px] font-bold">8.</p>
          <p className="text-[20px] font-bold"> Communication Plan</p>
        </div>
        <li className="ml-8 mt-1">
          Establishing channels and protocols for communication among team
          members and stakeholders.
        </li>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default General;
