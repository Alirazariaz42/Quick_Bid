import React, { useState, useEffect } from "react";
import CostModal from "../components/costModal";
import Materialtake from "../assets/png/materialtake.png";
import Quantityimg from "../assets/png/quantityimg.png";
import Construction1 from "../assets/png/construction1.png";
import Construction2 from "../assets/png/construction2.png";
import Construction3 from "../assets/png/construction3.png";
import Construction4 from "../assets/png/construction4.png";
import Construction5 from "../assets/png/construction5.png";
import Construction6 from "../assets/png/construction6.png";
import Constructionimg from "../assets/png/constructionimg.png";
import Banner from "./banner";
import Common from "../components/common";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Quantity() {
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
          QUANTITY TAKEOFF SERVICES
        </h1>
            
        <p className="text-[20px] font-normal w-[80%] leading-[26px] mt-3 mx-auto">
        <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> features the best quantity takeoff services for
          labor and material to general contractors, subcontractors, engineering
          firms, architects, and developers. Our team of quantity takeoff
          estimators offers the best in market takeoff software and tools to
          deliver quick, accurate quantity takeoff and reliable material
          takeoffs through quantity takeoff estimates. In case, you need
          quantity takeoffs in 24 hrs. Our team is capable of delivering in such
          short notice as well.
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
      {/* ..................................... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container w-[50%] mt-2 mx-auto">
        <Link to="/construction-takeoff-services/">
          <img
            src={Constructionimg}
            alt=""
            className="w-full h-[320px] cursor-pointer"
          />
        </Link>
        <Link to="/material-takeoff-services/">
          <img
            src={Materialtake}
            alt=""
            className="w-full h-[320px]"  
          />
        </Link>
      </div>

      <Common />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[80%] container mx-auto">
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
              At the early stages of planning of the construction project,
              developers and investors require quantity takeoffs and accurate
              material costs to analyze that if the project is worth investing
              time and money. Being experienced in the industry, we provide the
              most reliable preliminary estimates during material quantity
              takeoff services.
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
              Homebuilders and owners want to know if their investment is worth
              starting. Our estimator’s takeoff the project and give the
              estimated pricing of a project for material and labor before
              submitting for financing, acquiring supplier quotes.
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
              Being a contractor, performing takeoffs and estimates is always
              time-consuming and disrupt productivity. Therefore, many
              subcontractors approach us for precise and detailed quantity
              takeoffs and we get their bids finalized for proposal to their
              clients i.e. owners & General Contractors in 24-48 hours time with
              a 60% less estimating expense. Our material takeoffs services and
              quantity takeoff services help contractors for bid estimates,
              procurement, and supply purposes.
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
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                General Contractors
              </span>{" "}
              <br />
              General Contractors usually reach out to us for verifying their
              bids submitted by their subcontractors before undertaking any
              project in any construction configuration and project delivery
              methods. Our team of construction estimators delivers highly
              precise preconstruction final quantity takeoffs and estimates to
              solidify the number for the construction projects.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Construction5}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Architects & Designers
              </span>{" "}
              <br/>Architects have to strictly remain within the budget limit of
              their clients while preparing the drawing plans. Therefore, we
              supply accurate takeoffs and design estimates during our quantity
              takeoff services to aid them in all phases of design.
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
              <br /> Our precise material takeoffs help vendors and retailers to
              recommend the right material quantities to meet their client’s
              needs which promote sales and long-term business relations. The
              accurate material takeoffs and quantity takeoff services help in
              avoiding change orders, wastage, and contribute towards a green
              environment.
            </p>
          </div>
        </div>
      </div>
      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className="w-[80%] mx-auto">
        <h2 className="text-[22px] font-semibold mt-8">
          Material Takeoff List - Quantity Takeoff Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mt-3 mx-auto">
          <div className="mb-4">
            <li className="text-[18px] font-semibold">General Requirement</li>
            <li className="text-[18px] font-semibold">Site Works</li>
            <li className="text-[18px] font-semibold">Concrete</li>
            <li className="text-[18px] font-semibold">Masonry</li>
            <li className="text-[18px] font-semibold">Finishes</li>
            <li className="text-[18px] font-semibold">Specialties</li>
            <li className="text-[18px] font-semibold">Equipment</li>
            <li className="text-[18px] font-semibold">Furnishings</li>
          </div>
          <div className="mb-4">
            <li className="text-[18px] font-semibold">Metals</li>
            <li className="text-[18px] font-semibold">Wood and Plastics</li>
            <li className="text-[18px] font-semibold">
              Thermal and Moisture Protection
            </li>
            <li className="text-[18px] font-semibold">Doors and Windows</li>
            <li className="text-[18px] font-semibold">Special Construction</li>
            <li className="text-[18px] font-semibold">Conveying Systems</li>
            <li className="text-[18px] font-semibold">Mechanical/Plumbing</li>
            <li className="text-[18px] font-semibold">Electrical</li>
          </div>
          <div>
            <img
              src={Quantityimg}
              alt=""
              className="w-[260px]  h-[240px] mx-auto"
            />
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Quantity;
