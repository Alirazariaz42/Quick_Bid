import React, { useState } from "react";
import Childupload from "./childupload";

function Uploadplan() {
  const [secondModal, setSecondModal] = useState(false);

  const openModal = () => {
    setSecondModal(true);
  };

  const closeModal = () => {
    setSecondModal(false);
  };                         

  return (
    <>
      <h2 className="text-[22px] font-bold text-center mt-8">
        Are You Ready To Get Started With Us!
      </h2>
      <div className="lg:w-[80%] w-full p-6 -mt-3 mx-auto">
        <div className="flex justify-start gap-2 mt-5">
          <p className="text-[20px] font-bold">1-</p>
          <p className="text-[20px] font-bold">Upload your Plans</p>
        </div>
        <p className="mt-2 text-[20px]">
          <span
            onClick={openModal}
            className="text-[#15A7AD] text-[20px] font-bold underline cursor-pointer"
          >
            Click here
          </span>
          {""} to upload your plans. we accept PDF format and your plans can be
          Bid set, Schematic, Design Development, Construction document, or
          conceptual drawings.
        </p>

        <div className="flex justify-start gap-2 mt-4">
          <p className="text-[20px] font-bold">2-</p>
          <p className="text-[20px] font-bold">Get a Quote</p>
        </div>
        <p className="mt-2 text-[20px]">
          Quotes will be based on invoice, delivery date, and turnaround time.
        </p>

        <div className="flex justify-start gap-2 mt-4">
          <p className="text-[20px] font-bold">3-</p>
          <p className="text-[20px] font-bold">Receive Estimate</p>
        </div>
        <p className="mt-2 text-[20px]">
          Estimates will be delivered to you in EXCEL sheets comprising all the
          material and labor pricing with cut & fill 3D visual reports either in
          MasterFormat or your customized format.
        </p>

        <p className="mt-4 text-[20px]">
          <span className="text-[#15a7ad] font-bold">QuickBid Estimating</span>
          {""} is a one-stop solution for all your estimation requirements
          through estimating services, working with clients throughout
          all over America.
        </p>

        {secondModal && <Childupload closeModal={closeModal} />}
      </div>
    </>
  );               
}

export default Uploadplan;
