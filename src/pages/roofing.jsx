import React, { useEffect } from "react";
import Common from "../components/common";
import Roofing1 from "../assets/png/roofing1.png";
import Rooff from "../assets/png/rooff.png";
import Roofingimg from "../assets/png/roofingimg.png";
import Construction1 from "../assets/png/construction1.png";
import Construction2 from "../assets/png/construction2.png";
import Construction3 from "../assets/png/construction3.png";
import Construction4 from "../assets/png/construction4.png";
import Construction5 from "../assets/png/construction5.png";
import Construction6 from "../assets/png/construction6.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Roofing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (       
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        ROOFING ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
        <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span>{" "}
        offers rapid and accurate commercial roofing estimates. Secure a
        dependable roofing strategy with us for a smooth project process.
        Contact us anytime for support via chat, email{" "}
        <a href="mailto:webmaster@example.com"> <span className="text-[#15a7ad] font-bold">
          (Rao@quickbidestimating.com)
        </span></a>
        , or phone{" "}
        <a href="tel:+1 917 300 1079"> <span className="text-[#15a7ad] font-bold">(+1 917 300 1079)</span></a>.
      </p>

      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold  -mt-8">
          Our Roofing Estimates
        </h2>
        <p className="text-[20px] ">
          Our expert Roofing estimators generally work with their expertise
          quickly. They deal with different types of roofing works. Few of them
          are as follows:
        </p>
        <div className="">
          <li className="text-[18px] font-semibold mt-2">
            Green Roofs and Green Walls
          </li>
          <li className="text-[18px] font-semibold">
            Flashing and Sheet Metal
          </li>
          <li className="text-[18px] font-semibold">Membrane Roofing</li>
          <li className="text-[18px] font-semibold">
            Damp Roofing and Waterproofing
          </li>
          <li className="text-[18px] font-semibold">Steep Roofing</li>
          <li className="text-[18px] font-semibold">Shingles</li>
          <li className="text-[18px] font-semibold">
            Roof Windows and Skylights
          </li>
          <li className="text-[18px] font-semibold">
            Common Roofing Materials
          </li>
        </div>
      </div>

      <Common />
      <div className="lg:w-[80%] w-full p-6 mx-auto">
        <h2 className="text-[22px] font-semibold ">Our Clients</h2>
        <p className="text-[20px] ">
          <span className="text-[#15a7ad] font-bold"> QuickBid Estimating</span>{" "}
          is a professional platform to deliver Roofing Estimating Services from
          last 10 years with different clients. Few of them are as follows:
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
              </span>{" "}
              We provide accurate quantity takeoff services to help maintain
              budget compliance during blueprint creation.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 -mt-6 container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Roofing1} alt="" className="w-[60px] h-[60px]" />
            <div>
              <p className="text-[24px] font-bold mt-1 ">
                Residential Roofing <br />
                Estimating Services
              </p>
              <li className="text-[18px] font-semibold mt-2">Homes</li>
              <li className="text-[18px] font-semibold">Apartments</li>
              <li className="text-[18px] font-semibold">Mansions</li>
              <li className="text-[18px] font-semibold">Home additions</li>
              <li className="text-[18px] font-semibold">Condominium</li>
              <li className="text-[18px] font-semibold">Home Improvements</li>
              <li className="text-[18px] font-semibold">
                Mixed used facilities
              </li>
              <li className="text-[18px] font-semibold">Studio Flats</li>
              <li className="text-[18px] font-semibold">Custom Homes</li>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6">
            <img src={Roofing1} alt="" className="w-[60px] h-[60px]" />
            <div>
              <p className="text-[24px] font-bold mt-4">
                Commercial Roofing
                <br /> Estimating Services
              </p>
              <li className="text-[18px] font-semibold mt-2">Offices</li>
              <li className="text-[18px] font-semibold">Hospitals</li>
              <li className="text-[18px] font-semibold">Airports</li>
              <li className="text-[18px] font-semibold">Hotels</li>
              <li className="text-[18px] font-semibold">Arenas</li>
              <li className="text-[18px] font-semibold">Schools</li>
              <li className="text-[18px] font-semibold">Warehouses</li>
              <li className="text-[18px] font-semibold">Shopping Malls</li>
              <li className="text-[18px] font-semibold">Restaurants</li>
              <li className="text-[18px] font-semibold">
                Exhibition Buildings
              </li>
              <li className="text-[18px] font-semibold">Fire Stations.</li>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 -mt-6 container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Rooff} alt="" className="w-[60px] h-[60px]" />
            <div>
              <p className="text-[24px] font-bold mt-1 ">
                Industrial Roofing <br /> Estimating Services
              </p>
              <li className="text-[18px] font-semibold mt-2">Petrochemical</li>
              <li className="text-[18px] font-semibold">Mining and Metals</li>
              <li className="text-[18px] font-semibold">Marine</li>
              <li className="text-[18px] font-semibold">Drilling</li>
              <li className="text-[18px] font-semibold">Oil & Gas</li>
              <li className="text-[18px] font-semibold">
                Pharmaceutical Plants
              </li>
              <li className="text-[18px] font-semibold">Food Processing</li>
              <li className="text-[18px] font-semibold">
                Hydrocarbon Processing
              </li>
              <li className="text-[18px] font-semibold">Manufacturing</li>
              <li className="text-[18px] font-semibold">Pumping Stations</li>
              <li className="text-[18px] font-semibold">Polymers</li>
              <li className="text-[18px] font-semibold">Fertilizers</li>
            </div>
          </div>
        </div>

        <div className="self-center">
          <div className="flex justify-start gap-3 mt-6">
            <img src={Roofingimg} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] w-full mx-auto p-6 -mt-6">
        <h2 className="text-[20px] font-bold mt-6">
          Fire Proofing & Fire Stopping Estimating – Material Takeoff
        </h2>
        <p className="text-[20px] mt-3">
          For fireproofing and firestopping contractors, accurate estimates are
          essential. Our expert estimators provide detailed takeoffs of plans,
          including fireproofing ratings and structural assemblies. We include
          thickness and material of insulation, along with structural details,
          ensuring contractors have all necessary information for bidding and
          procurement.
        </p>

        <h2 className="text-[20px] font-bold mt-6">
          Waterproofing & Damp Proofing Estimating – Material Takeoff
        </h2>
        <p className="text-[20px] mt-3">
          Our estimates provide essential details for waterproofing contractors,
          aiding in bids and material procurement. We outline where and how
          materials will be applied, including foundation, footings, and
          below-grade slabs. Our services are also valuable for air vapor
          barriers & sealants contractors, helping them prepare bids and
          determine material requirements.
        </p>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default Roofing;
