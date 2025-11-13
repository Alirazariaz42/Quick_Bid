import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

function Accordion() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div className="lg:w-[85%] w-[95%] mx-auto mt-16">
        <div id="accordionExample">
          <div className="rounded-t-md border border-neutral-200 bg-white">
            <h2 className="mb-0 font-bold" id="headingOne">
              <button
                className={`${
                  activeElement === "element1" && `text-primary hover:bg]`
                } group relative flex w-full items-center border-0 bg-[#212121] hover:bg-[#15A7AD] px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full">
                  <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
                </div>
                ACCURACY
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-white  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="p-8 py-4 text-black">
                In recent years, our clients' trust has been the foundation of
                our hard work. The results our team achieves are driven by the
                faith and confidence our clients have in us. We're dedicated to
                continuing this success by ensuring accuracy in all our work,
                providing precise data and delivering reliable results, just
                like we've always done.
              </div>
            </TECollapse>
          </div>
          {/* ......................................... */}
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-bold" id="headingTwo">
            <button
              className={`${
                activeElement === "element2"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center  border-0 bg-[#212121] hover:bg-[#15A7AD] px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full">
                <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
              </div>
              DEDICATION
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-white dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              We are committed to providing our customers with the best possible
              service. We are dedicated to our employees and their success. We
              are dedicated to our community and its well-being.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <button
              className={`${
                activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center  border-0 bg-[#212121] hover:bg-[#15A7AD] px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full">
                <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
              </div>
              EFFICIENCY
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              When it comes to delivering results, our team is skilled,
              talented, and importantly, trained. We're available 24/7, in
              constant communication with constructors and builders. Our staff
              brings a wealth of experience and expertise in cost estimating .
              Additionally, we take great pride in our market research, offering
              unmatched insights. You can rely on us not just for estimates, but
              also for expert consultation as we have a deep understanding of
              the market.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-b-lg border border-t-0 border-neutral-200  bg-white">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <button
              className={`${
                activeElement === "element4"
                  ? `text-primary `
                  : `transition-none `
              } group relative flex w-full items-center  border-0 bg-[#212121] hover:bg-[#15A7AD] px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full">
                <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
              </div>
              RELIABILITY
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 py-4 text-black">
              In the realm of construction estimating, dedication is the
              foundation of our success. Our commitment to excellence extends
              beyond numbers; it's about our relentless drive to deliver results
              that reflect our values.
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}

export default Accordion;
