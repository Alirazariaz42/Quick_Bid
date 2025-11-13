import React, { useState } from "react";
import Banner from "./banner";
import Modal from "./modal";
import PaymentSlide from "./paymentSlide";

function PayComp() {
  const [hello, setHello] = useState(false);
  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <div className="lg:w-[80%] w-full mx-auto mt-[160px]">
        <h1 className="text-[24px] font-bold text-center mt-[200px]">
          PAYMENT
        </h1>
        <p className="text-[22px] font-semibold text-[#212121] p-4">
          Refund Policy
        </p>
        <p className="text-[20px] font-poppins font-normal w-[80%] p-4">
          However, we would like to mention that we do not provide refunds. We
          only offer exchanges. Our goal is to provide our clients with the
          highest satisfaction and value for their money.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto w-[90%] mt-10">
          <div>
            <h2 className="text-[26px] font-bold font-poppins text-center mt-3">
              Upload your plans here
            </h2>
            <p className="text-[16px] font-poppins font-light text-center mt-3">
              TURNAROUND TIME 2-3 Days!
            </p>
            <p className="text-[16px] font-poppins font-light text-center mt-1">
              Affordable Estimate (30% off)
            </p>
            <div
              onClick={openModal}
              className="bg-[#15A7AD] mb-8 rounded-lg w-[180px] h-[60px] mx-auto flex justify-center items-center cursor-pointer mt-8"
            >
              <button className="text-white text-[19px] font-bold ">
                Upload plans
              </button>
            </div>
          </div>

          <div className=" self-center ">
            <PaymentSlide />
          </div>
        </div>

        <h2 className="text-[24px] font-medium font-poppins mt-6 p-4">
          PAYMENT TERMS
        </h2>
        <p className="text-[20px] font-poppins font-normal mt-2 w-[80%] p-4">
          At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we prioritize your financial security. We
          utilize Quickbooks Online Payments, a trusted platform, to ensure the
          privacy of your information. This allows you to comfortably pay for
          our services using your preferred method: Credit Card, Debit Card, or
          PayPal.After receiving your plans and analyzing your project
          specifications, we send a quote comprising the Quickbooks Invoice and
          delivery date. If you accept the quote, you can simply pay through
          your mobile phone, desktop or call us to proceed with the payment
          at
          <a className="underline text-red" href="tel:+1 917 300 1079">
            <span className="text-[#15A7AD] font-bold underline cursor-pointer">
              +1 917 300 1079
            </span>
          </a>
        </p>
      </div>
      <Banner />
      {hello && <Modal closeModal={closeModal} />}
    </>
  );
}

export default PayComp;
