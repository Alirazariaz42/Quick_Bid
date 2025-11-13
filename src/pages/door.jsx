import React, { useEffect } from "react";

function Door() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-6">
        Doors and Windows
      </h1>

      <p className="w-[80%] mx-auto text-[20px] mt-8">
        Constructing endeavors necessitate a framing assessment to determine the
        amount of lumber or wood needed. Projections for wooden beams, floor
        joists, wall studs, knee wall structures, trim support, and lumber all
        factor into the estimation. Consequently, framing specialists are
        crucial in construction as they establish the building's structural
        framework. The success of framing contractors relies on consistent
        repeat projects and meticulous control of expenses.
      </p>

      <h2 className="text-[22px] font-semibold mt-12 w-[80%] mx-auto">
        Key Elements of Effective Planning
      </h2>

      <div className=" container w-[80%] mx-auto">
        <div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">1.</p>
            <p className="text-[18px]">
              <span className="font-bold text-[18px]">
                Initial Consultation:
              </span>{" "}
              We start by examining your project goals, design preferences, and
              budget constraints. This allows us to understand the extent and
              aspiration of your building venture.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[18px] mt-4">
            <p className="font-bold text-[18px]">2.</p>
            <p className="text-[18px]">
              <span className="font-bold text-[18px]">Site Evaluation:</span> If
              required, we conduct a thorough site assessment to identify any
              distinct elements that might impact door and window selections,
              such as architectural style, weather, and security factors.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">3.</p>
            <p className="text-[18px]">
              <span className="font-bold">Product Selection:</span> Based on
              your project's guidelines, we propose an array of doors and
              windows that meet your functional, aesthetic, and financial needs.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">4.</p>
            <p className="text-[18px]">
              <span className="font-bold">Comprehensive Estimation:</span> Our
              team provides a full breakdown of the estimated costs for each
              door and window type, including quantities and any additional
              expenses like hardware or installation.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">5.</p>
            <p className="text-[18px]">
              <span className="font-bold">Presentation and Approval:</span> We
              present the estimate for your review, elucidating each aspect and
              addressing any questions or concerns you may have. Upon approval,
              we move forward with procurement.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">6.</p>
            <p className="text-[18px]">
              <span className="font-bold">
                Procurement and Installation Oversight:
              </span>{" "}
              We manage the procurement process to ensure the doors and windows
              comply with the established standards. Our team can also work with
              contractors to supervise proper installation.
            </p>
          </div>
          <div className="flex justify-start gap-3 text-[16px] mt-4">
            <p className="font-bold text-[18px]">7.</p>
            <p className="text-[18px]">
              <span className="font-bold">
                Monitoring and Control Measures:
              </span>{" "}
              Define how progress will be tracked and what actions will be taken
              if the project veers off course.
            </p>
          </div>
        </div>
      </div>

      {/* ........................ */}

      <h2 className="text-[30px] font-bold text-center mt-6">
        Site Work Estimating Services
      </h2>

{/* <div className="grid grid-cols-2 w-[80%] container mx-auto">
  <p>A successful framing estimate doesn't always guarantee maximum material efficiency. You can enhance material utilization by reducing waste. For instance, if 2x6 floor joists are needed, acquiring 12-foot studs and splitting them in two is more favorable than utilizing 8-foot studs, which creates an additional two feet of waste per joist. Likewise, for seven-foot back walls, it's more advantageous to secure two seven-foot studs from a fourteen-foot sample, rather than trimming a foot from an eight-foot stud. This method significantly cuts down on-site waste.</p>
  <img src={doorimg} alt="" />
</div> */}


    </>
  );
}

export default Door;
