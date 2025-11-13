import React, { useState, useEffect } from "react";
import Blue from "../assets/png/blue.png";
import White from "../assets/png/white.png";
import Heroupload from "./heroUpload";


function Banner() {
  const [isWhite, setIsWhite] = useState(false);
  const [secondModal, setSecondModal] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const openModal = () => {
    setSecondModal(true);
  };

  const closeModal = () => {
    setSecondModal(false);
  };   



  const buttonStyles = {
    width: "180px",
    height: "55px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: isWhite ? "#ffffff" : "#15A7AD",
    color: isWhite ? "#000000" : "#ffffff",
    transition: "all 1s",
  };
  return (
    <>
      <div className="bg-[#263238] p-8 rounded-lg mt-8">
        <p className="sm:text-[26px] text-[16px] font-bold text-white text-center leading-[40px] sm:leading-[45px]">
          For a quick quote based on your project scope, call us at{" "}
          <a className="underline text-[#15A7AD]" href="tel:+1 917 300 1079">
            +1 917 300 1079
          </a>{" "}
          or email us at{" "}
          <a
            className="underline text-[#15A7AD]"
            href="mailto:Rao@quickbidestimating.com"
          >
            Rao@quickbidestimating.com
          </a>
        </p>

        <div onClick={openModal} className="w-[230px] rounded-xl mt-6 flex justify-center items-center mx-auto cursor-pointer">
          <div className="button-container">
            <button className="text-[18px] font-bold">Upload Plans</button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <img onClick={openModal} src={Blue} alt="" className="cursor-pointer" />
          <img onClick={openModal} src={White} alt="" className="cursor-pointer" />
        </div>
      </div>
      {secondModal && <Heroupload closeModal={closeModal} />}

    </>
  );
}

export default Banner;
