import React from "react";

function AboutCardss() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-4 p-6 ">
        <div className="bg-[#15A7AD] rounded-lg h-[65%]">
          <p className="text-white font-bold text-[18px] text-center pt-6">
            Our Services
          </p>
          <div className="bg-black rounded-lg mt-5 pb-8 ">
            <p className="text-white ml-5 mr-6 pt-6 text-[18px]">
              At <span className="text-[#15A7AD]">Quick Bid Estimating</span> we
              offer a diverse range of solutions to meet our clients' unique
              needs with utmost efficiency. Our suite of services includes:
            </p>
            <li className="text-white text-[18px] ml-5 mt-5">
              Construction Cost Estimating Services
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Construction Takeoff Services
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">CPM Scheduling</li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Bidding Assistance
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">Planning</li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Strategic planning
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Operational planning
            </li>
          </div>
        </div>
        {/* ...................................... */}
        <div className="bg-[#15A7AD] rounded-lg ">
          <p className="text-white font-bold text-[18px] text-center pt-6">
            All CSI Trades
          </p>
          <div className="bg-black rounded-lg mt-5 pb-8">
            <p className="text-white ml-5 mr-6 pt-6 text-[18px]">
              With our dedicated team of in-house trade specialist estimators
              and engineers, we deliver precise cost estimating and consultancy
              services across all CSI divisions, consolidating expertise within
              a single company.
            </p>
            <li className="text-white text-[18px] ml-5 mt-5">
              General Conditions
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">Siteworks</li>
            <li className="text-white text-[18px] ml-5 mt-5">Scheduling</li>
            <li className="text-white text-[18px] ml-5 mt-5">Concrete</li>
            <li className="text-white text-[18px] ml-5 mt-5">Planning</li>
            <li className="text-white text-[18px] ml-5 mt-5">Masonry</li>
            <li className="text-white text-[18px] ml-5 mt-5">Metals</li>
            <li className="text-white text-[18px] ml-5 mt-5">Finishes</li>
            <li className="text-white text-[18px] ml-5 mt-5">Mechanical</li>
            <li className="text-white text-[18px] ml-5 mt-5">Electrical</li>
            <li className="text-white text-[18px] ml-5 mt-5">Plumbing</li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Wood/Plastic Composites
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Thermal/Moisture Protection
            </li>
          </div>
        </div>
        {/* ..................................... */}
        <div className="bg-[#15A7AD] rounded-lg h-[78%]">
          <p className="text-white font-bold text-[18px] text-center pt-6">
            Our Projects
          </p>
          <div className="bg-black rounded-lg mt-5 pb-8">
            <p className="text-white ml-5 mr-6 pt-6 text-[18px]">
              We use our vast experience to offer construction cost estimation
              and advisory services in various construction sectors. This
              involves partnering with well-known public institutions.
            </p>
            <li className="text-white text-[18px] ml-5 mt-5">
              Mixed $ Multi-use Residential
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">Commercial</li>
            <li className="text-white text-[18px] ml-5 mt-5">Industrial</li>
            <li className="text-white text-[18px] ml-5 mt-5">Retail</li>
            <li className="text-white text-[18px] ml-5 mt-5">Institutional</li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Civil & Public Works
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Airports & Highways
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Perks & Recreation
            </li>
            <li className="text-white text-[18px] ml-5 mt-5">
              Mining & Marine
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCardss;
