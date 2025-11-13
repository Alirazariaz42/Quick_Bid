import React, { useEffect } from "react";
import Common from "../components/common";
import Special1 from "../assets/png/special1.png";
import Special2 from "../assets/png/special2.png";
import Special3 from "../assets/png/special3.png";
import Banner from "../components/banner";
import Uploadplan from "../components/uploadplan";

function Equipment() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[30px] font-bold text-center mt-[200px]">
        EQUIPMENT ESTIMATING SERVICES
      </h1>

      <p className="lg:w-[80%] w-full mx-auto text-[20px] p-6">
       At <span className="text-[#15A7AD] font-semibold">
          QuickBid Estimating
        </span>{" "}
        , we're your trusted source for thorough equipment evaluation services.
        Our goal is to provide precise and up-to-date information crucial for
        project planning and financial strategy. Our database spans across
        different industries, offering valuable insights into the equipment
        required for project success.
      </p>

      <Common />

      <h2 className="text-[20px] lg:w-[80%] w-full mx-auto font-bold p-6">
        Our Metal Estimation Process
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[80%] container mx-auto">
        <div>
          <div className="sm:flex grid justify-start gap-3 mt-4">
            <img
              src={Special1}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Earthmoving Machinery:
              </span>{" "}
              Rent or buy costs, energy use, and maintenance for diggers,
              dozers, loaders, and levelers.
            </p>
          </div>

          <div className="sm:flex grid justify-start gap-3 mt-12">
            <img
              src={Special3}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Cranes and Lifting Equipment:
              </span>{" "}
              Types of cranes: tower, mobile, overhead. Costs depend on load
              capacity, installation needs, and safety measures.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:flex grid justify-start gap-3 mt-3">
            <img
              src={Special2}
              alt=""
              className="w-[70px] h-[70px] sm:block mx-auto"
            />
            <p className="text-[18px] font-normal mt-3">
              <span className="text-[#15A7AD] font-bold">
                Concrete and Paving Equipment:
              </span>{" "}
              Costs for using cement mixers, paving machines, and concrete
              pumps. Includes equipment rental, tools, and labor hours.
            </p>
          </div>
        </div>
      </div>
      {/* ...................... */}

      <h2 className="text-[20px] w-[80%] mx-auto font-bold mt-8">
        Manufacturing and Industrial Equipment
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[80%] container mx-auto">
        <div>
          <p className="text-[18px] font-normal mt-3">
            <span className="text-[#15A7AD] font-bold">
              Machinery and Production Equipment
            </span>{" "}
            <br />
            CNC milling machines, lathes, presses, and industrial equipment. Expenses for acquiring machinery, operating costs, and upkeep.
          </p>
        </div>

        <div>
          <p className="text-[18px] font-normal mt-3">
            <span className="text-[#15A7AD] font-bold">
              Material Handling Equipment
            </span>{" "}
            <br />
            Pallet trucks, belts, mechanized transporters. Projections for apparatus expenses, weight limits, and personnel for utilization and upkeep.
          </p>
        </div>
      </div>

      <Uploadplan />
      <Banner />
    </>
  );
}

export default Equipment;
