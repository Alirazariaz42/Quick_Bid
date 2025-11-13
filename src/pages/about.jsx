import React, { useEffect } from "react";
import Banner from "../components/banner";
import Imagee from "../assets/png/imagee.png";
import AboutCardss from "../components/aboutCardss";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="lg:w-[83%] w-full mx-auto mt-[200px] pb-24">
        <h1 className="text-[24px] font-bold p-6">
          About <span className="text-[#15A7AD]">Quick BID Estimating</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 container mx-auto ">
          <div className="col-span-2 -mt-6">
            <p className="text-[18px] p-6">
              At <span className="text-[#15a7ad]">QuickBid Estimating</span>,
              we're your one-stop shop for all your construction estimating
              needs. We're a team of dedicated professionals passionate about
              providing fast, accurate, and reliable estimating services. From
              cost estimates and project planning to construction takeoffs and
              scheduling, we empower you to make informed decisions with
              confidence throughout the entire construction process.
            </p>
            <p className="text-[18px] p-6">
              In the dynamic world of AEC (Architecture, Engineering,
              Construction), staying ahead of the curve is crucial. At <span className="text-[#15a7ad]">QuickBid Estimating</span>, with over 10 years of experience, we do just that. Our
              team of passionate professionals combines deep industry knowledge
              with a commitment to construction estimating, scheduling, and cost
              Estimating. We leverage this expertise alongside cutting-edge
              technology like Bluebeam, Plan Swift, and On-Screen Takeoff (OST)
              to develop efficient and streamlined processes. We can assist you
              with an expert if you need one.
              <a href="tel:+1 917 300 1079">
                <span className="text-[#15A7AD] font-semibold">
                  {" "}
                  Reach us at +1 917 300 1079.
                </span>
              </a>
            </p>
          </div>
          <div className="col-span-1 p-3">
            <img src={Imagee} alt="" className="mx-auto" />
          </div>
        </div>

        <div className="flex justify-start gap-2 p-6 w-[90%]">
          <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full mt-[6px]">
            <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
          </div>
          <p className="text-[22px] font-bold ">Our Vision</p>
        </div>

        <p className="text-[18px] font-normal p-6 -mt-10">
          At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we're more than just an estimating service -
          we're your trusted partner in construction success. Our goal is to
          build long-term relationships with our clients by exceeding
          expectations. That means we focus on meeting your needs for delivery
          timelines, cost-effectiveness, and accurate estimates.
        </p>

        <div className="flex justify-start gap-2 p-6 -mt-6 w-[90%]">
          <div className="bg-[#15A7AD] w-[20px] h-[20px] rounded-full mt-[6px]">
            <div className="bg-black w-[10px] h-[10px] rounded-full flex justify-center items-center mx-auto mt-[5px]"></div>
          </div>
          <p className="text-[22px] font-bold ">Our Mission</p>
        </div>

        <p className="text-[18px] font-normal p-6 -mt-10">
          Our mission is straight forward: to build and maintain successful
          business relationships by offering top-notch quality, reliable
          accuracy, and quick turnaround times. We serve General Contractors,
          Home Builders, Subcontractors, Architects, Developers, and Homeowners,
          ensuring their needs are met with excellence.
        </p>

        <AboutCardss />

        <p className="text-[24px] font-normal leading-[35px] p-6">
          {" "}
          With over 10 years in the AEC industry,<span className="font-bold text-[#15a7ad]">QuickBid Estimating</span> stays
          ahead of the curve, leveraging experience and cutting-edge technology
          to deliver the most accurate and efficient construction estimates.
          This commitment to innovation helps you save time and money throughout
          your project lifecycle. We can assist you with an expert if you need
          one. 
          <a href="tel:+1 917 300 1079">
            <span className="font-bold text-[#15a7ad]">Reach us at +1 917 300 1079.</span>
          </a>
        </p>
      </div>
      <Banner />
    </>
  );
}

export default About;
