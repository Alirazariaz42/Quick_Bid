import React, { useState } from "react";
import Pack from "../../src/assets/png/pack.png";
import Callestimate from "../../src/assets/png/callestimate.png";
import Vectorr from "../../src/assets/png/Vectorr.png";
import Modal from "./modal";

function Package() {
  const [hello, setHello] = useState(false);
  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 xl:w-[90%] w-[95%] container mx-auto">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto  ">
          <div className="bg-black h-[100%] hover:text-black rounded-lg p-6 ">
            
            <img src={Pack} alt="" className="mx-auto mt-16" />
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-black hover:bg-[#15A7AD] hover:opacity- rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
              <div className="col-span-1 border-x mb-4 self-center">
                <p className="text-white text-center text-[24px] font-poppins font-bold">
                  Single trade pricing
                </p>
                <p className="text-white text-center text-[14px] font-poppins">
                  Starting at
                </p>
                <p className="text-white text-center text-[24px] font-poppins font-bold">
                  $150/trade
                </p>
                <div
                  onClick={openModal}
                  className="bg-white w-[140px] h-[50px] rounded-2xl flex justify-center mx-auto mt-3"
                >
                  <button className="text-black">Get Started</button>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-[15px] font-poppins text-white text-center">
                  We charge ($150 to $500) for a single trade project and the
                  cost will vary on project Complexity.
                </p>
                <h3 className="text-[18px] font-poppins font-medium mt-3 text-white text-center">
                  Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 gap-4">
                  <div className="col-span-1 lg:mx-auto block">
                    <div className="flex justify-start gap-1">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        Turnaround Time 2 to 3 days
                      </p>
                    </div>
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />
                      <p className="text-[12px] font-light font-poppins text-white">
                        Free Quote Within 5 to 10 Min
                      </p>
                    </div>
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        Immediate and Unlimited Revisions
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 lg:mx-auto block">
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        Any Trade or Any Kind of Project
                      </p>
                    </div>
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        24/7 Email Support
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 lg:mx-auto block">
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        Free Consultation
                      </p>
                    </div>
                    <div className="flex justify-start gap-1 mt-2">
                      <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                      <p className="text-[12px] font-light font-poppins text-white">
                        Call Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4">
            <div className="col-span-2 bg-black hover:bg-[#15A7AD] rounded-lg p-6">
              <div className="flex justify-center gap-3">
                <div>
                  <p className="text-white text-center text-[24px] font-poppins font-bold">
                    Monthly
                  </p>
                  <p className="text-white text-center text-[14px] font-poppins">
                    Starting
                  </p>
                  <p className="text-white text-center text-[24px] font-poppins font-bold">
                    $1500/month
                  </p>
                </div>
                <div
                  onClick={openModal}
                  className="bg-white w-[140px] h-[50px] rounded-2xl flex justify-center mx-auto mt-3"
                >
                  <button className="text-black">Get Started</button>
                </div>
              </div>
              <p className="text-[15px] font-poppins text-white ">
                We charge ($1500 to $2500) for a projects and the cost will vary
                on project Complexity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-start gap-1 mt-3">
                    <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                    <p className="text-[12px] font-light font-poppins text-white">
                      Bid Filing and Consultation
                    </p>
                  </div>
                  <div className="flex justify-start gap-1 mt-2">
                    <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                    <p className="text-[12px] font-light font-poppins text-white">
                      24/7 Email Support
                    </p>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-start gap-1 mt-3">
                    <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                    <p className="text-[12px] font-light font-poppins text-white">
                      Material Takeoffs and Cost Management
                    </p>
                  </div>
                  <div className="flex justify-start gap-1 mt-3">
                    <img src={Vectorr} alt="" className="w-[16px] h-[16px]" />

                    <p className="text-[12px] font-light font-poppins text-white">
                      Call Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-black hover:bg-[#15A7AD] rounded-lg p-6">
              <div className="">
                <a className=" " href="tel:+1 917 300 1079">
                  <p className="text-white text-[23px] text-center font-poppins font-bold mt-5">
                    Dedicated Estimators
                  </p>
                  <img src={Callestimate} alt="" className="mx-auto mt-3" />

                  <p className="text-white text-[23px] text-center font-poppins font-bold mt-3">
                    Call For Price
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hello && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Package;
