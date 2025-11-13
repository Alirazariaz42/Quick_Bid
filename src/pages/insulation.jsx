import React, { useEffect } from "react";
import Common from "../components/common";
import Insult from "../assets/png/insult.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";
import Construction1 from "../assets/png/construction1.png";
import Construction2 from "../assets/png/construction2.png";
import Construction3 from "../assets/png/construction3.png";
import Construction4 from "../assets/png/construction4.png";
import Construction5 from "../assets/png/construction5.png";
import Construction6 from "../assets/png/construction6.png";

function Insulation() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        INSULATION ESTIMATING SERVICES
      </h1>

      <p className="w-[80%] mx-auto text-[20px] p-6 -mt-2">
        <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span>{" "}
        specializes in insulation estimating services, ensuring accuracy and
        efficiency to meet your project deadlines and secure bids. Whether it's
        a residential or industrial project, we meticulously measure walls,
        floors, and ceilings using cutting-edge technology, factoring in doors
        and windows for precise estimates. Our comprehensive approach covers all
        forms of insulation, including liquid foam, spray board, rolls, batts,
        loose-fill, and foam board. Contact <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span> today at
        <a href="tel:+1 917 300 1079"><span className="text-[#15a7ad] font-bold"> +1 917 300 1079</span></a> for a
        free consultation.
      </p>
      <Common />
      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold ">Our Clients</h2>
        <p className="text-[20px] ">
        <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span> is a professional platform to deliver Roofing
          Estimating Services from last 10 years with different clients. Few of
          them are as follows:
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[80%] w-full p-6 -mt-10 container mx-auto">
        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction1}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Developers</span>{" "}
              <br />
              Make smart decisions early. Get reliable cost estimates with our
              accurate material takeoffs.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction2}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Homeowners & Builders
              </span>{" "}
              <br />
              We provide cost estimates for materials and labor, helping you
              make informed decisions before starting your project.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction3}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Subcontractors</span>{" "}
              <br />
              Subcontractors: Stop wasting time! Get fast, accurate quotes in
              just 1-2 days and slash your estimating costs by 60%.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction4}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 mb-6">
              <span className="text-[#15A7AD] font-bold">
                General Contractors
              </span>{" "}
              <br />
              Get accurate takeoffs, fast! We help you verify subcontractor bids
              and ensure reliable project costs before construction begins.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 ">
            <img
              src={Construction5}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3 mb-4">
              <span className="text-[#15A7AD] font-bold">
                Architects & Designers
              </span>{" "}<br/>
              We provide accurate quantity takeoff services to help maintain
              budget compliance during blueprint creation.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-7">
            <img
              src={Construction6}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">Vendors</span>
              <br /> Boost sales & build trust with accurate material estimates.
              Help clients avoid costly mistakes and reduce waste. Promote
              sustainability!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] p-6 container mx-auto">
        <div className="col-span-2 mx-auto">
          <div className="flex justify-start gap-3 mt-6 ">
            <div>
              <p className="text-[24px] font-bold mt-1 ">
                Our Insulation Estimting Services
              </p>
              <li className="text-[18px] font-semibold mt-2">
                Residential & Commercial Insulation Estimation
              </li>
              <li className="text-[18px] font-semibold">
                Industrial Mechanical Insulation Estimation
              </li>
              <li className="text-[18px] font-semibold">
                Thermal Insulation Estimation
              </li>
              <li className="text-[18px] font-semibold">
                Fireproofing & Firestopping Estimation
              </li>
              <li className="text-[18px] font-semibold">Roofing Estimation</li>
              <li className="text-[18px] font-semibold">
                Waterproofing & Dampproofing Estimation
              </li>
              <li className="text-[18px] font-semibold">
                Acoustic & Sound Proofing Estimation{" "}
              </li>
              <li className="text-[18px] font-semibold">
                Estimation of Insulation for boilers, HVAC systems, ductwork,
                pipeworks, valves etc.
              </li>
              <li className="text-[18px] font-semibold">Material Takeoffs</li>
              <li className="text-[18px] font-semibold">Pumping Stations</li>
              <li className="text-[18px] font-semibold">Budget Estimates</li>
              <li className="text-[18px] font-semibold">Bid Estimates</li>
              <li className="text-[18px] font-semibold">Bid Reviews</li>
              <li className="text-[18px] font-semibold">Bidding Assistance</li>
              <li className="text-[18px] font-semibold">
                Change Order Estimates
              </li>
              <li className="text-[18px] font-semibold">
                Preliminary Estimates
              </li>
              <li className="text-[18px] font-semibold">
                Pre-built Material Estimate
              </li>
              <li className="text-[18px] font-semibold">Value Engineering</li>
              <li className="text-[18px] font-semibold">
                Project Cost Management
              </li>
              <li className="text-[18px] font-semibold">
                Project Lead Generation
              </li>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24">
          <img src={Insult} alt="" className="" />
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Insulation;
