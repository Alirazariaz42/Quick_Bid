import React, { useEffect, useRef } from "react";
import Section from "../assets/png/section.png";

function HalfText() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollPos = window.scrollY || window.pageYOffset;
        const containerPos = container.getBoundingClientRect().top;

        if (scrollPos > containerPos) {
          container.classList.add("animate");
        } else {
          container.classList.remove("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h2 className="text-[#212121] text-[22px] font-bold text-center p-6 md:-mb-16 -mb-16 w-full mx-auto mt-10">
        Why QuickBid Estimating should be your First choice
      </h2>

      <div
        className="w-full lg:w-[80%] container mx-auto p-2"
        ref={containerRef}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-[20px] p-6 mt-12 leading-[26px] left-content">
            <span className="text-[#15A7AD] font-medium">
              QuickBid Estimating
            </span>{" "}
             offers top-notch construction estimating
            services, ensuring accuracy and reliability. Save time and money
            with our prompt and cost-effective solutions.
            <li className="mt-3">
              <span className="text-[#15A7AD] font-medium">Fast Turnaround:
              </span>{" "}
              Get accurate estimates quickly to make informed decisions without
              delays.{" "}
            </li>
            <li className="mt-1">
              <span className="text-[#15A7AD] font-medium">Cost-Effective:
              </span>{" "}
              Our efficient process saves you time and money compared to traditional estimating methods.
            </li>
            <li className="mt-1">
              <span className="text-[#15A7AD] font-medium">Informed Decisions:
              </span>{" "}
              Gain a clear understanding of project costs upfront to avoid budget surprises.
            </li>
            <li className="mt-1">
              <span className="text-[#15A7AD] font-medium">Competitive Advantage:
              </span>{" "}
              Respond to bids faster and secure more projects with quick estimates.
            </li>
            <li className="mt-1">
              <span className="text-[#15A7AD] font-medium">Focus on Project Success:
              </span>{" "}
              Spend less time on estimating and more time on project planning and execution.
            </li>
          </p>
          <img src={Section} alt="" className="mx-auto mt-16 right-content" />
        </div>
      </div>
    </>
  );
}

export default HalfText;
