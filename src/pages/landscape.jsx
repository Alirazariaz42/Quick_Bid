import React, {useEffect} from "react";
import Land11 from "../assets/png/land11.png";
import Common from "../components/common";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Landscape() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        LANDSCAPING ESTIMATING SERVICES
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-[80%] w-full p-6 container mx-auto">
        <div className="col-span-2">
          <p className="text-[20px] ">
          <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span> is your partner in expert landscaping estimating services. Our team of skilled landscape estimators ensures that your business runs profitably. Statistics demonstrate that contractors consistently generate profits on every job. Accurate bidding on landscaping projects is crucial for ensuring profitability. With our expert landscape estimators and professional estimating software, we streamline landscaping takeoffs swiftly and efficiently.
          </p>
        </div>
        <img src={Land11} alt="" className=" mx-auto mt-6" />
      </div>

      <Common />

      <div className="w-[80%] mx-auto">
        <h2 className="text-[22px] font-semibold mt-12 ">
          How Do We Deliver Accurate Landscaping Estimating Services With
          Landscaping Estimating
          <br /> Software?
        </h2>
        <p className="text-[20px] mt-3">
          We are using cloud-based estimating software for our diverse range of
          Landscaping estimating through Planswift estimating software.
          Following are the few ways to manage Landscaping takeoff services
          through Plan swift.
        </p>

        <li className="text-[18px] font-semibold mt-6">
          Efficiently measure square footage, volumes and linear dimensions. We
          deal with everything, and either “linear” is curved.
        </li>
        <div className="flex justify-start gap-4">
          <div className="rounded-full w-[6px] h-[6px] bg-black mt-3"></div>
        <p className="text-[18px] font-semibold">
          Our strategy is to acquire instant, accurate area dimensions for sod,
          gravel, mulch and other products, particularly with a single click.
        </p>
        </div>
        <li className="text-[18px] font-semibold">
          Have an accurate professional estimate through point, click drag and
          drop.
        </li>
        <li className="text-[18px] font-semibold">
          Quick and precise estimate to save your time and elevate your bottom
          line.
        </li>

        <p className="text-[20px] mt-3">
          Our usage of Planswift manages to generate exact material lists that
          enclose the number of yards anyone acquires for a city park and
          several feet edging for any residential area. Planswift can
          effectively assist through its different tools to measure areas,
          volumes and lengths to follow complex curves with a certain ease. It
          is a useful count tool to evaluate the exact amount of plants to order
          and their placement.
        </p>

        <h2 className="text-[22px] font-semibold mt-6">
          How To Perform Landscaping Estimating?
        </h2>
        <p className="text-[20px] mt-1">
          There are few common steps through which anyone can easily perform
          Landscaping estimating to different clients around the world.
          Following are the few main steps to follow.
        </p>

        <li className="text-[18px] font-semibold mt-2">Talk to a client</li>
        <li className="text-[18px] font-semibold">
          Effectively estimate an overhead cost
        </li>
        <li className="text-[18px] font-semibold">
          Reliable estimate materials costs
        </li>
        <li className="text-[18px] font-semibold">
          Estimate a subcontractor cost
        </li>
        <li className="text-[18px] font-semibold">Estimate labor costs</li>
        <li className="text-[18px] font-semibold">Add a markup</li>
        <li className="text-[18px] font-semibold">Calculate the total price</li>
      </div>
<Uploadplan/>
<Banner/>

    </>
  );
}

export default Landscape;
