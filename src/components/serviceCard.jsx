import React from "react";
import { HOME_CARDS_MAPPING } from "../data";
import { useNavigate } from "react-router-dom";
       

function ServiceCard() {
  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(link)
    }
  return (
    <>
    <h1 className="text-[24px] font-bold text-center mt-[200px]">SERVICES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-[80%] lg:w-[60%] p-2 container mx-auto mt-3">
        {HOME_CARDS_MAPPING.map((x) => (
          <>
            <div className="border border-gray-300 h-auto rounded-2xl overflow-hidden">
              <img src={x.img} alt="" className="w-full "/>
              <h1 className="text-black xl:text-[22px] text-[16px] ml-2 font-semibold mt-2">{x.title}</h1>
              <p className="text-black xl:text-[16px] leading-6 text-[12px] font-light ml-2 mr-10 mt- pb-4">{x.para}</p>
              
              <div className="flex justify-start items-center ml-2 mx-auto mb-2">
              <button onClick={() => handleNavigate(x.link)} className="btvn mt-[0px]  w-[120px] h-[42px]  font-inter text-[16px] text-white rounded-[15px]">
              Read more
            </button>
            </div>
            </div>
                 
          </>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
