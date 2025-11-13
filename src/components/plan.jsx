import React, { useRef, useState, useEffect } from "react";
import CostModal from "../components/costModal";
import planimg from "../assets/png/planimg.png";
import Group1 from "../assets/png/Group1.png";
import Group2 from "../assets/png/Group2.png";
import Keyy from "../assets/png/keyy.png";
import Banner from "./banner";
import Common from "../components/common";
import { useInView } from "react-intersection-observer";

function Plan() {
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

  const targetRef = useRef(null);

  useEffect(() => {
    const targetElement = targetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

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
        <h1 className="text-[30px] font-bold text-center mt-[200px]">
          Planning
        </h1>

        <p className="text-[20px] font-normal w-[80%] leading-[26px] mt-3 mx-auto">
          In project management, the first and most important step is planning.
          This involves creating a detailed layout for the project's progress.
          It's essential to understand that planning isn't the same as
          scheduling. Planning is like drawing up a detailed chart with project
          leads and construction teams, while scheduling is about turning that
          chart into a timeline with the help of scheduling professionals. So,
          planning sets the direction, while scheduling ensures everything
          happens at the right time.
        </p>
        <div
          onClick={openModal}
          className="fixed right-0 top-[200px] z-[999px] shadow-lg bg-[#15A7AD] rounded-l overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
        >
          <button className="text-white text-[18px] font-semibold blink-text">
            Services
          </button>
        </div>
        <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      </div>

      <h2 className="text-[22px] font-semibold mt-6 w-[80%] mx-auto">
        What is Construction Master Plan?
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-[80%] container mx-auto"
      >
        <div className="col-span-2">
          <p
            className={`text-[20px] font-normal leading-[26px] mt-2 ${
              inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
            }`}
          >
            The Construction Master Plan is a comprehensive roadmap that
            outlines the entire scope, timeline, and resources required for a
            construction project. It serves as a guiding document that helps
            project stakeholders understand the project's objectives,
            milestones, and critical tasks. The Master Plan typically includes
            key elements such as project goals, budget estimates, scheduling
            milestones, resource allocation, risk management strategies, and
            communication plans. By providing a clear overview of the project
            from start to finish, the Construction Master Plan ensures efficient
            coordination and execution of all project activities.
          </p>

          <p
            className={`text-[20px] font-normal leading-[26px] mt-1 ${
              inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
            }`}
          >
            A construction master plan addresses how will the project be
            planned, organized, and major work activities be controlled to meet
            the goals of finishing the work on time, within budget and as
            specified.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          {" "}
          <img src={planimg} alt="" className=" mx-auto" />
        </div>
      </div>

    

      {/* ..................................... */}

      <Common />



      {/* ........................Key................. */}
      <h2 className="text-[22px] font-semibold mt-12 w-[80%] mx-auto">
        Key Elements of Effective Planning
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 container w-[80%] mx-auto">
        <div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">1.</p>
            <p>
              <span className="font-bold">
              Clear Objectives:
              </span>{" "}
              Defining clear and achievable project goals to guide planning efforts.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">2.</p>
            <p>
              <span className="font-bold">Thorough Scope Definition:</span> : Clearly outlining the project's boundaries, deliverables, and requirements.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">3.</p>
            <p>
              <span className="font-bold">Detailed Work Breakdown Structure:</span>{" "}
              Breaking down the project into smaller, manageable tasks for better organization and resource allocation.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">4.</p>
            <p>
              <span className="font-bold">
              Accurate Time Estimation: 
              </span>{" "}
              Estimating the time required for each task and milestone to create realistic schedules.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">5.</p>
            <p>
              <span className="font-bold">
              Resource Allocation: 
              </span>{" "}
              Effectively assigning and managing resources such as manpower, equipment, and materials.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">6.</p>
            <p>
              <span className="font-bold">Risk Management:</span>  Identifying and mitigating potential risks to minimize project disruptions.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[16px]">7.</p>
            <p>
              <span className="font-bold">
              Communication Plan:
              </span>{" "}
              Establishing a framework for effective communication among project stakeholders to ensure transparency and collaboration.
            </p>
          </div>
        </div>

        <div>
          <img src={Keyy} alt="" className="mx-auto h-[470px] mt-4" />
        </div>
      </div>


      <Banner />
    </>
  );
}

export default Plan;
