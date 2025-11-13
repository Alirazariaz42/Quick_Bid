import React from "react";
import { SAMPLE_IMAGES } from "../data";

function SampleHome() {
  return (
    <>
      <h1 className="text-[24px] font-bold text-center mt-8">Samples</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto w-[84%] mt-10">
        {SAMPLE_IMAGES.map((x) => (
          <>
            <img src={x.img} alt="" />
          </>
        ))}       
      </div>
      {/* <div className="bg-[#212121] w-[140px] h-[59px] rounded-xl flex justify-center items-center mx-auto mt-10">
      <button className="text-[24px] font-semibold text-white">View</button>
      </div> */}
    </>
  );
}

export default SampleHome;
