import React from "react";
import { HOME_CARDS_MAPPING } from "../data";
import { useNavigate } from "react-router-dom";

function CardHome() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <>
    <h2 className="text-[#212121] text-[22px] font-bold text-center w-full mx-auto p-6">These are the services we offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-[100%] lg:w-[50%] p-6 container mx-auto -mt-5">
        {HOME_CARDS_MAPPING.map((x) => (
          <>
            <div
             onClick={() => handleNavigate(x.link)}
             className="bg-[#212121] h-auto rounded-2xl cursor-pointer">
              <img src={x.img} alt="" className="w-full"/>
              <h3 className="text-[#FFF] xl:text-[20px] text-[14px] text-center font-medium  p-2">{x.title}</h3>
              {/* <p className="text-[#FFF] xl:text-[18px] text-[14px] font-light ml-2 mr-10 mt- pb-4 p-2">{x.para}</p> */}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CardHome;
