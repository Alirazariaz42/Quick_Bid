import React, { useEffect } from "react";
import { TRADE_CARDS, TRADE_CARDS_2 } from "../data";
import Banner from "../components/banner";
import Common from "../components/common";
import { useNavigate } from "react-router-dom";

function Trade() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h1 className="text-[24px] text-center font-bold mt-[200px]">OUR TRADES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[80%] w-[100%] mt-6 container mx-auto">
        {TRADE_CARDS.map((x) => (
          <>
            <div
              onClick={() => handleNavigate(x.link)}
              className="cursor-pointer mx-auto"
            >
              <img src={x.img} alt="" />
              <p className="text-center text-[18px] font-bold mt-2">
                {x.heading}
              </p>  
            </div>
          </>
        ))}
      </div>

      <Common />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] mt-12 container mx-auto">
        {TRADE_CARDS_2.map((x) => (
          <>
            <div
              onClick={() => handleNavigate(x.link)}
              className="cursor-pointer mx-auto"
            >
              <img src={x.img} alt="" />
              <p className="text-center text-[18px] font-bold mt-2">
                {x.heading}
              </p>
            </div>
          </>
        ))}
      </div>

      <Banner />
    </>
  );
}

export default Trade;
