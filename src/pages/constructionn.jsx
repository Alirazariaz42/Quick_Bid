import React, { useState, useEffect } from "react";
import CostModal from "../components/costModal";
import Electrical from "../assets/png/electrical.png";
import Construction1 from "../assets/png/construction1.png";
import Construction2 from "../assets/png/construction2.png";
import Construction3 from "../assets/png/construction3.png";
import Construction4 from "../assets/png/construction4.png";
import Construction5 from "../assets/png/construction5.png";
import Construction6 from "../assets/png/construction6.png";
import Quantitytake from "../assets/png/quamtitytake.png";
import Materialtake from "../assets/png/materialtake.png";
import Banner from "../components/banner";
import Common from "../components/common";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Constructionn() {
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
          CONSTRUCTION TAKEOFF SERVICES
        </h1>

        <p className="text-[20px] font-normal w-[80%] leading-[26px] mt-3 mx-auto">
          <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>{" "}
          offers reliable Construction Takeoff Services, including Quantity
          Takeoff Services and Material Takeoff Services, to ensure the success
          of your project right from the start. With our extensive experience
          spanning over the past 10 years, we understand the ever-changing
          market conditions and can handle projects of any complexity, serving
          contractors, owners, vendors, and developers.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-6 w-[50%] mx-auto">
          <Link to="/quantity-takeoff-services/">
            <img src={Quantitytake} alt="" className="w-full h-[320px]" />
          </Link>
          <Link to="/material-takeoff-services/">
            <img src={Materialtake} alt="" className="w-full h-[320px]" />
          </Link>
        </div>
      </div>
      {/* ..................................... */}

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
              a 60% less estimating expense.{" "}
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
              <br />
              Architects have to strictly remain within the budget limit of
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
      {/* ......................................... */}

      <Common />

      {/* ................................... */}

      <h2 className="text-[22px] font-semibold mt-12 w-[80%] mx-auto">
        Service Area
      </h2>
      <div
        ref={ref}
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-[80%] container mx-auto"
      >
        <div className="col-span-2">
        <p
          className={`text-[20px] mt-2 ${
            inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
          }`}
        >
          We help clients all over the United States with our Estimating
          services. Whether you're in any part of the country or bidding on any
          project, we've got you covered. We specialize in figuring out how much
          material and labor you'll need for your construction project. Our team
          will go through the blueprints and list all the materials you need in
          a format you can easily use, like Microsoft Excel or Adobe. We're fast
          and accurate, making sure you have everything you need to build. Plus,
          we organize the materials by location, making it simple for your team
          to know where everything goes.
        </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
        <img src={Electrical} alt="" className=" " />
        </div>
      </div>
      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className="w-[80%] mx-auto">
        <h2 className="text-[22px] font-semibold mt-8">
          We Provide Quantity Takeoff Services To Our Clients In All CSI
          Divisions:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mt-4 mx-auto">
          <div className="">
            <li className="text-[18px] font-semibold">Site Work Takeoff</li>
            <li className="text-[18px] font-semibold">Masonry Takeoff</li>
            <li className="text-[18px] font-semibold">Concrete Takeoff</li>
            <li className="text-[18px] font-semibold">Drywall Takeoff</li>
            <li className="text-[18px] font-semibold">Painting Takeoff</li>
            <li className="text-[18px] font-semibold">Insulation Takeoff</li>
            <li className="text-[18px] font-semibold">Roofing Takeoff</li>
          </div>
          <div className="">
            <li className="text-[18px] font-semibold">Lumber Takeoff</li>
            <li className="text-[18px] font-semibold">Millwork Takeoff</li>
            <li className="text-[18px] font-semibold">Cabinet Takeoff</li>
            <li className="text-[18px] font-semibold">Mechanical Takeoff</li>
            <li className="text-[18px] font-semibold">HVAC Takeoff</li>
            <li className="text-[18px] font-semibold">Plumbing Takeoff</li>
            <li className="text-[18px] font-semibold">Electrical Takeoff</li>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Constructionn;
