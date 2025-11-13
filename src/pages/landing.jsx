import React, { useEffect, useState, useRef } from "react";
import CardHome from "../components/cardHome";
import HalfText from "../components/halfText";
import Hero from "../components/hero";
import Step from "../components/step";
// import Logos from "../components/logos";
// import FeatureHome from "../components/featureHome";
import SampleHome from "../components/sampleHome";
import Banner from "../components/banner";
import Accordion from "../components/accordion";
import Counter from "../components/counter";
import Bell from "../assets/png/bell.png";
import Modal from "../components/modal";
import Common from "../components/common";

function Landing() {
  const [showPopup, setShowPopup] = useState(false);
  const [hello, setHello] = useState(false);
  const popupRef = useRef(null);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      clearTimeout(timeoutId);

      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleBodyClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay p-4">
          <div ref={popupRef} className="popup-content border">
            <button
              onClick={() => setShowPopup(false)}
              className="text-[#15A7AD] text-[22px] font-bold -mt-8 -ml-3 "
            >
              X
            </button>
            <img src={Bell} alt="" className="w-[90px] h-[60px] mx-auto" />
            <p className="text-[36px] text-center font-semibold p-6">
              AFFORDABLE ESTIMATES
            </p>
            <p className="text-[18px] font-semibold p-6 text-center -mt-10">
              Upto <span className="text-[28px] font-bold">30% OFF</span>{" "}
            </p>

            <div onClick={openModal} className="mx-auto w-[140px] mb-8">
              <button className="btvn  text-white font-semibold text-[18px] rounded-md text-center">
                Get Estimate
              </button>
            </div>
          </div>
        </div>
      )}
      {hello && <Modal closeModal={closeModal} />}
   
      <Hero />
      <Counter />
      <HalfText />
      <CardHome />
      <Step />
      <Accordion />
      {/* <FeatureHome /> */}
      <Common/>
      <SampleHome />
      <Banner />
    </>
  );
}

export default Landing;
