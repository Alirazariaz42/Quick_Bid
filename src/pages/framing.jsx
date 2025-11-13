import React, { useEffect } from "react";
import Frame from "../assets/png/frame.png";
import Common from "../components/common";
import Frame1 from "../assets/png/frame1.png";
import Frame9 from "../assets/png/frame9.png";
import Frame3 from "../assets/png/frame3.png";
import Frame8 from "../assets/png/frame8.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Framing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h1 className="text-[30px] font-bold w-[80%] mx-auto text-center mt-[200px]">
        FRAMING ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 lg:w-[80%] container mx-auto p-6">
        <div className="col-span-2">
          <p className=" text-[20px] -mt-3 leading-[26px]">
            Framing estimating services, a subset of construction estimating,
            offer contractors detailed cost breakdowns for informed
            decision-making. These services help avoid budget overruns and
            ensure projects are completed on time, fostering client satisfaction
            and a positive reputation. Accurate framing estimates empower sound
            financial decisions during construction. Without them, projects risk
            exceeding budget and time constraints. Investing in framing
            estimating services from the start ensures a successful construction
            experience.
          </p>
        </div>
        <img src={Frame} alt="" className="mx-auto" />
      </div>
      <Common />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 gap-6 mt-6 container mx-auto">
        <div className="mx-auto">
          {/* <div className="flex justify-start gap-3 mt-6 ">
            <img src={Frame1} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-medium mt-1 ">
              <span className="text-[#15A7AD]">Wood frame construction</span>{" "}
              <br />
              Wood frame construction is gaining popularity globally for being
              eco-friendly and renewable. Countries like the USA are adopting it
              swiftly for its advantages. When planning wood framing for a
              project, consider various factors carefully.
            </p>
          </div> */}
          {/* <div className="flex justify-start gap-3 mt-6 ">
            <img src={Frame9} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-medium mt-1 ">
              <span className="text-[#15A7AD]">Metal frame construction</span>{" "}
              <br />
              Metal frame construction uses steel pillars and beams to create
              strong structures resistant to earthquakes and tsunamis.
              Estimating services ensure accurate planning for robust buildings.
            </p>
          </div> */}
          <div className="flex justify-start gap-3 mt-6 mb-10">
            <img src={Frame8} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-semibold mt-1">
              <span className="text-[#15A7AD]">
                Wood framing Estimating Services
              </span>{" "}
              <br />
              Wood framing estimating services accurately calculate the required
              amount and cost of wood for projects, preventing overordering and
              financial losses.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          
          <div className="flex justify-start gap-3 mt-6">
            <img src={Frame3} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-semibold mt-1">
              <span className="text-[#15A7AD]">
                Metal Framing Estimating Services
              </span>{" "}
              <br />
              We offer Metal Framing Estimating Services for precise assessments
              of metal quantity, type, and cost. Trust us to avoid financial
              setbacks.
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Framing;
