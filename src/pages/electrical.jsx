import React, { useEffect } from "react";
import Common from "../components/common";
import Electrical1 from "../assets/png/electrical1.png";
import Electrical2 from "../assets/png/electrical2.png";
import Electricalimgg from "../assets/png/electricalimgg.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Electrical() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold lg:w-[80%] w-full mx-auto text-center mt-[200px]">
        ELECTRICAL ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:w-[80%] w-full container mx-auto">
        <div className="col-span-2">
          <p className=" text-[20px] mt-2">
            At <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>, we specialize in comprehensive electrical
            estimating services, covering everything from low-voltage solutions
            to instrumentation and control takeoffs. With our team's expertise
            and collaboration with clients, we ensure precise outputs tailored
            to each project's unique needs. Our experienced professionals
            utilize cutting-edge electrical takeoff software to deliver accurate
            estimates, helping you secure successful bids.
          </p>
        </div>
        <img src={Electricalimgg} alt="" className="mx-auto" />
      </div>

      <Common />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 gap-6 mt-16 container mx-auto">
        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6 ">
            <img src={Electrical1} alt="" className="w-[60px] h-[60px] " />
            <p className="text-[18px] font-medium mt-4 ">
              <span className="text-[#15A7AD]">
                Commercial Electrical Estimating Services
              </span>{" "}
              <br />
              As a commercial electrical contractor, you face tight deadlines
              and budgets. Our goal is to ease your workload with timely and
              accurate electrical estimating services. Our experienced
              estimators use advanced software to determine project costs,
              covering all electrical components needed for comprehensive bid
              proposals.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex justify-start gap-3 mt-6">
            <img src={Electrical2} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[18px] font-semibold mt-4">
              <span className="text-[#15A7AD]">
                Residential Electrical Estimating Services{" "}
              </span>{" "}
              <br />
              If you're involved in home-based electrical projects, our services
              can provide valuable electrical projections for procurement and
              tendering. Our dedicated team specializes in residential
              electrical estimation for various projects, including home
              enhancements, new constructions, eco-friendly homes, smart houses,
              and more.
            </p>
          </div>
        </div>
      </div>
      <Uploadplan />
      <Banner />
    </>
  );
}

export default Electrical;
