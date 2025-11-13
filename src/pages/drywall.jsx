import React, { useEffect } from "react";
import Common from "../components/common";
import Dry from "../assets/png/dry.png";
import Drysec from "../assets/png/drysec.png";
import Uploadplan from "../components/uploadplan";
import Banner from "../components/banner";

function Drywall() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        DRYWALL ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-[80%] w-ful p-6 mt-3 container mx-auto">
        <div className="col-span-2">
          <p className="text-[20px] -mt-2">
            If you're in need of accurate drywall takeoff services to ensure
            your bids are neither over nor underquoted, turn to <span className="text-[#15a7ad] font-bold"> QuickBid
            Estimating</span> for precise and detailed estimates. <br/>With years of
            experience in the AEC industry, <span className="text-[#15a7ad] font-bold"> QuickBid
            Estimating</span> specializes in
            professional and comprehensive estimates and quantity takeoffs,
            prioritizing accuracy for high-end residential, commercial, and
            retail projects. Our estimates are meticulously crafted using
            up-to-date zip code-based pricing for materials and labor, adhering
            to the strict guidelines of certified organizations like the
            American Association of Cost Engineers (AACE) and the Australian
            Institute of Quantity Surveyors (AIQS).
          </p>
        </div>
        <img src={Dry} alt="" className=" mx-auto" />
      </div>

      <Common />

      <h2 className="text-[24px] lg:w-[80%] w-ful mx-auto font-bold p-6 mt-3">
        Drywall Estimating Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:w-[80%] w-ful container p-6 -mt-8 mx-auto">
        <div>
          <li className="text-[18px] font-semibold">Bid Estimates</li>
          <li className="text-[18px] font-semibold">
            Complete Bidding Assistance
          </li>
          <li className="text-[18px] font-semibold">Change Order Management</li>
          <li className="text-[18px] font-semibold">
            Drywall Project Management
          </li>
          <li className="text-[18px] font-semibold">Subcontractor Marketing</li>
          <li className="text-[18px] font-semibold">Project Lead Generation</li>
        </div>
        <div className="">
          <li className="text-[18px] font-semibold">
            Drywall or Gypsum board Estimates
          </li>
          <li className="text-[18px] font-semibold">
            Drywall material & labor takeoffs with man hours
          </li>
          <li className="text-[18px] font-semibold">
            Acoustical Ceiling Estimates
          </li>
          <li className="text-[18px] font-semibold">Wood Framing Estimates</li>
          <li className="text-[18px] font-semibold">Metal Framing Estimates</li>
          <li className="text-[18px] font-semibold">Budget Estimates</li>
        </div>
      </div>
      <p className="text-[20px] p-6 lg:w-[80%] w-ful mx-auto">
        Among our clients are general contractors, drywall contractors, drywall
        installation service providers, homeowners, and designers involved in
        the construction of single and multi-family residential, commercial, and
        retail projects. With the special focus on bid deadlines, budget
        constraints, and scope of the project, we provide ready to be submitted
        complete bids containing accurate cost estimates and material takeoff
        sheets to drywall contractors that help them in winning their bids with
        good profit margins. We quantify drywall sheets, drywall mud, acoustic
        insulation, sheathing, screws, beads, studs, headers, etc. along with
        manhours, labor costs, logistics, permits, taxes, and other factors
        involved.
      </p>

      <h2 className="text-[24px] lg:w-[80%] w-ful mx-auto font-bold p-6">
        Our Approach To Drywall Estimating Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-[80%] w-ful p-6 -mt-8 container mx-auto">
        <div className="col-span-2">
          <p className="text-[20px]  ">
            When preparing the drywall estimate, complete knowledge of the
            drywall installation process is required. Our drywall estimators
            start with the review of drawing plans and systematic bid documents
            to identify the scope of the projects. Then, using the latest
            takeoff software like Planswift, we measure the walls, partitions,
            and ceilings by the point and click methods. The use of digital
            software mitigates the chances of errors and the exact square
            footage are measured. All the quantities are then exported to EXCEL
            spreadsheets and organized with floors, wall types, partitions,
            sections, and elevations. The exact amount of material i.e sheetrock
            panels, drywall mud, screws, beads, clips, etc, required to complete
            the installation process is estimated.
            <br /> Pricing is applied using RSMeans and our construction cost
            database for up to date and location-based costing of material and
            labor. We can also use your labor rates and send you quoted material
            lists that you can forward to your vendors.
            <br /> Local labor rates and labor hours, transportation costs,
            painting costs (if required), wastages, and other miscellaneous
            costs like permits, taxes, site repairs, cleanups, etc. are
            mentioned in our estimates. We also employ value engineering to
            increase our client’s profit potential.
          </p>
        </div>
        <img src={Drysec} alt="" className=" mx-auto" />
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Drywall;
