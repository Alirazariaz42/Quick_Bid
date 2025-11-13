import React, { useEffect } from "react";
import Metal1 from "../assets/png/metal1.png";
import Metal2 from "../assets/png/metal2.png";
import Metal3 from "../assets/png/metal3.png";
import Metal4 from "../assets/png/metal4.png";
import Metal5 from "../assets/png/metal5.png";
import Metal6 from "../assets/png/metal6.png";
import Metalimg from "../assets/png/metalimg.png";
import Common from "../components/common";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Metal() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        METALS ESTIMATING SERVICES{" "}
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
        <span className="text-[#15A7AD] font-semibold">
          QuickBid Estimating
        </span>{" "}
        specializes in providing accurate and reliable metal estimating services
        for construction projects. We understand the critical role that metals
        play in ensuring structural stability, aesthetic appeal, and
        functionality in construction. With our expertise and commitment to
        excellence, we deliver customized metal estimates tailored to meet your
        project's specific requirements.
      </p>

      <h2 className="text-[20px] lg:w-[80%] w-full p-6 mx-auto font-bold -mt-6 text-blacks">
        Our Metal Estimation Process
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[80%] w-full p-6 container mx-auto -mt-10">
        <div>
          <div className="sm:flex grid justify-start gap-3 mt-8">
            <img
              src={Metal1}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Initial Consultation:
              </span>{" "}
              We start by understanding your project goals, design preferences,
              and budget constraints. This helps us grasp the scope and vision
              of your construction project.
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-8">
            <img
              src={Metal2}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Material Selection:
              </span>{" "}
              Based on your project requirements, we recommend suitable metals
              and alloys considering factors like strength, corrosion
              resistance, and aesthetic preferences.
            </p>
          </div>
          
        </div>

        <div>
          
          <div className="sm:flex grid justify-start gap-3 mt-8">
            <img
              src={Metal5}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                In-Depth Estimation:
              </span>{" "}
              Our team supplies a thorough analysis of the projected costs for
              each metal required, including quantities and any supplementary
              charges like fabrication or finishing.
            </p>
          </div>
          <div className="sm:flex grid justify-start gap-3 mt-8">
            <img
              src={Metal3}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Presentation and Approval:
              </span>{" "}
              We present the estimate and address your questions.
            </p>
          </div>
        </div>
      </div>

      {/* .................................... */}
      <Common />
      {/* ..................................... */}
      <h2 className="text-[20px] font-bold w-[80%] mx-auto mt-8">
        Our Steel Estimating Services include
      </h2>
      <li className="text-[20px] w-[80%] mx-auto">
        Detailed and accurate steel takeoffs and estimates ranging from budget,
        the order of magnitude, design, and bid estimate.
      </li>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] container mx-auto">
        <div className="col-span-1">
          <li className="text-[20px]">Precast estimation</li>
          <li className="text-[20px]">Cold-form steel estimation</li>
          <li className="text-[20px]">Steel frames takeoffs</li>
          <li className="text-[20px]">Rebar estimation</li>
          <li className="text-[20px]">Structural steel takeoffs</li>
          <li className="text-[20px]">Bar bending schedules</li>
          <li className="text-[20px]">Change order management</li>
          <li className="text-[20px]">Rebar project management</li>
          <li className="text-[20px]">CPM scheduling</li>
          <li className="text-[20px]">Conflict Resolution</li>
          <li className="text-[20px]">Consultancy on smartly filing bids</li>
        </div>
        <div className="col-span-2 mt-3">
          <img src={Metalimg} alt="" className="mx-auto" />
        </div>
      </div>
      {/* ........................................... */}

      <h2 className="text-[20px] font-bold w-[80%] mx-auto mt-12">
        Rebar & Structural Steel Estimating Services
      </h2>

      <p className="w-[80%] mx-auto text-[20px] mt-4">
        Accurate estimates are crucial in construction to avoid overbidding or
        underbidding. Our rebar estimating services provide precise estimates
        for materials, accessories, and erection costs. We handle various
        projects, leveraging advanced 3D modeling for cost analysis and
        feasibility.<br/>Our deliverables include:
      </p>
      <div className="w-[80%] mx-auto mt-3">
        <li className="text-[18px] font-semibold">Contract plans & numbers</li>
        <li className="text-[18px] font-semibold">Take-off Quantities</li>
        <li className="text-[18px] font-semibold">Rebar Weight</li>
        <li className="text-[18px] font-semibold">
          Structural Activity Codes (SAC)
        </li>
        <li className="text-[18px] font-semibold">
          Part Codes (Rebar, wire mesh and other accessories)
        </li>
        <li className="text-[18px] font-semibold">
          Steel grade (e.g. ASTM A108)
        </li>
        <li className="text-[18px] font-semibold">
          Structure wise or scope wise bid item number
        </li>
        <li className="text-[18px] font-semibold">Appendix</li>
        <li className="text-[18px] font-semibold">Locations</li>
        <li className="text-[18px] font-semibold">Reference Sections</li>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Metal;
