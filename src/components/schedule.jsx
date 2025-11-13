import React, { useState, useEffect } from "react";
import CostModal from "../components/costModal";
import Common from "../components/common";
import Trade7 from "../assets/png/trade7.png";
import Banner from "./banner";
import { useInView } from "react-intersection-observer";
import ScheduleCards from "./scheduleCards";

function Cost() {
  const [serviceModal, setServiceModal] = useState(false);

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

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  return (
    <>
      <div className="relative ">
        <h1 className="text-[30px] font-bold text-center mt-[200px]">
          CPM Scheduling
        </h1>

        <p className="text-[20px] font-normal w-[80%] leading-[26px] mx-auto mt-4">
          <span className="font-bold text-[#15a7ad]">QuickBid Estimating</span>{" "}
          offers Critical Path Method (CPM) Scheduling services for construction
          projects to ensure they finish on time and manage risks effectively.
          We simplify complex projects, making it easier for you to reach your
          goals.
        </p>
        <div
          onClick={openModal}
          className="fixed right-0 top-[200px] z-[999px] shadow-lg bg-[#15A7AD] rounded-l overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
        >
          <button className="text-white text-[18px] font-bold blink-text">
            Services
          </button>
        </div>
        <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 w-[80%] container mx-auto"
      >
        <div className="col-span-2">
        <p
          className={`text-[20px] ${
            inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
          }`}
        >
          CPM scheduling analyzes project scope, requirements, and risks,
          planning essential activities and identifying critical and high-risk
          tasks. A well-designed schedule helps set budgets, anticipate issues,
          and achieve project milestones efficiently, continuously adapting to
          changes.
        </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
        <img src={Trade7} alt="" className=" mx-auto" />
        </div>
      </div>

      {/* ..................................... */}

      <Common />

      {/* <h2 className="text-[20px] font-bold w-[80%] mx-auto mt-12">
      Scheduling Software
      </h2>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
      Our expert team is proficient in developing and monitoring schedules with the following construction consulting software:
      </p>
      <li></li>
      */}

      <ScheduleCards />

      <Banner />
    </>
  );
}

export default Cost;
