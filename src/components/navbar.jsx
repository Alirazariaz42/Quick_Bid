import { useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Example from "../components/drawer";
import { Link, useLocation } from "react-router-dom";
import Upnav from "../components/upnav";
import NavComp from "./navComp";
import Modal from "./modal";

function Navbar() {
  const [open, setOpen] = useState(false);  
  const handleOnClose = () => setOpen(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverTwo, setIsHoverTwo] = useState(false);
  const [isHoverThree, setIsHoverThree] = useState(false);
  const [isHoverFour, setIsHoverFour] = useState(false);
  const [isHoverFive, setIsHoverFive] = useState(false);
  const [isHoverSix, setIsHoverSix] = useState(false);
  const [hello, setHello] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnterTwo = () => {
    setIsHoverTwo(true);
  };
  const handleMouseLeaveTwo = () => {
    setIsHoverTwo(false);
  };
  const handleMouseEnterThree = () => {
    setIsHoverThree(true);
  };
  const handleMouseLeaveThree = () => {
    setIsHoverThree(false);
  };

  const handleMouseEnterFour = () => {
    setIsHoverFour(true);
  };
  const handleMouseLeaveFour = () => {
    setIsHoverFour(false);
  };
  const handleMouseEnterFive = () => {
    setIsHoverFive(true);
  };
  const handleMouseLeaveFive = () => {
    setIsHoverFive(false);
  };
  const handleMouseEnterSix = () => {
    setIsHoverSix(true);
  };
  const handleMouseLeaveSix = () => {
    setIsHoverSix(false);
  };

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  const { pathname } = useLocation();
             
  return (
    <>
      
        <NavComp />
        <Upnav />
        <div className="bottom-navbar bg-[#393A3B]">
          <div className="p-2 flex justify-center ">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className="cursor-pointer w-full h-[60px] -ml-6 div-hide"
              />
            </Link>

            <div className="flex items-center justify-start gap-10 lg:gap-6">
              <div className="btny">
                <div className="lg:block hidden">
                  <div className="home-center gap-10 ">
                    <Link
                      to="/"
                      className="fonty text-white  lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/" ? (
                        <div className="text-[#15A7AD]">Home</div>
                      ) : (
                        "Home"
                      )}
                    </Link>

                    <Link
                      to="/services/"
                      className="fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/services/" ? (
                        <div className="text-[#15A7AD]">Services</div>
                      ) : (
                        "Services"
                      )}
                    </Link>

                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex justify-start gap-1 cursor-pointer">
                        <Link
                          to="/our-trades/"
                          className="fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                        >
                          {pathname === "/our-trades/" ? (
                            <div className="text-[#15A7AD]">Our Trades</div>
                          ) : (
                            "Our Trades"
                          )}
                        </Link>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 text-white mt-[5px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>

                      {isHovered && (
                        <div className="absolute bg-[#212121] rounded-md shadow-lg p-8 w-[910px] z-20">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x ">
                            <div className="col-span-1 ">
                              <Link to="/general-requirements/">
                                <h2 className="text-[14px] text-white font-normal cursor-pointer hover:text-[#15A7AD]">
                                  General Requirements
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterTwo}
                                onMouseLeave={handleMouseLeaveTwo}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/sitework-estimating-services/"
                                    className="fonty text-white  font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/sitework-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Sitework
                                      </div>
                                    ) : (
                                      "Sitework"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mt-[20px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverTwo && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                      <Link to="/landscaping-estimating-services/">
                                        <li className="text-[14px] list-none font-normal hover:text-[#15A7AD]">
                                          Landscaping Estimating
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/concrete-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Concrete
                                </h2>
                              </Link>
                              <Link to="/masonry-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Masonry
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterThree}
                                onMouseLeave={handleMouseLeaveThree}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/metals-estimating-services/"
                                    className="fonty  text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/metals-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Metals
                                      </div>
                                    ) : (
                                      "Metals"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mt-[4px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverThree && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                      <Link to="/rebar-estimating-services/">
                                        <li className="text-[14px] list-none font-normal hover:text-[#15A7AD]">
                                          Rebar Estimating Services
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/lumber-takeoff-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Lumber Takeoff
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterFive}
                                onMouseLeave={handleMouseLeaveFive}
                              >
                                <div className="grid justify-start gap-0 cursor-pointer">
                                  <Link
                                    to="/thermal-moisture-protection-estimating-services/"
                                    className="fonty  text-white font-inter text-[14px] mt-3 font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/thermal-moisture-protection-estimating-services/" ? (
                                      <div className="text-[#15A7AD]">
                                        Thermal and Moisture Protection
                                      </div>
                                    ) : (
                                      "Thermal and Moisture Protection"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mx-auto"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverFive && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                      <Link to="/roofing-estimating-services/">
                                        <li className="text-[14px] list-none  font-normal hover:text-[#15A7AD]">
                                          Roofing
                                        </li>
                                      </Link>
                                      <Link to="/insulation-estimating-services/">
                                        <li className="text-[14px]  list-none font-normal mt-1 hover:text-[#15A7AD]">
                                          Insulation
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/framing-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Framing
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterFour}
                                onMouseLeave={handleMouseLeaveFour}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <Link
                                    to="/interior-exterior-finishes/"
                                    className="fonty  text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname ===
                                    "/interior-exterior-finishes/" ? (
                                      <div className="text-[#15A7AD]">
                                        Interior & Exterior Finishes
                                      </div>
                                    ) : (
                                      "Interior & Exterior Finishes"
                                    )}
                                  </Link>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mt-[4px] mr-3"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverFour && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                      <Link to="/drywall-estimating-services/">
                                        <li className="text-[14px] list-none font-normal hover:text-[#15A7AD]">
                                          Drywall Estimating
                                        </li>
                                      </Link>
                                      <Link to="/flooring-estimating-services/">
                                        <li className="text-[14px] list-none mt-1 font-normal hover:text-[#15A7AD]">
                                          Flooring Estimating
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link to="/specialties/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Specialties
                                </h2>
                              </Link>
                              <Link to="/equipment-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Equipment
                                </h2>
                              </Link>
                              <Link to="/furnishing-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Furnishing
                                </h2>
                              </Link>
                            </div>
                            <div className="col-span-1 pl-6">
                              <Link to="/special-construction-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  cursor-pointer hover:text-[#15A7AD]">
                                  Special Construction
                                </h2>
                              </Link>
                              <Link to="/conveying-system/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Conveying Systems
                                </h2>
                              </Link>

                              <div
                                className="relative"
                                onMouseEnter={handleMouseEnterSix}
                                onMouseLeave={handleMouseLeaveSix}
                              >
                                <div className="flex justify-start gap-1 cursor-pointer">
                                  <p
                                    to=""
                                    className="fonty mt-3 text-white font-inter text-[14px] font-normal hover:text-[#15A7AD] cursor-pointer"
                                  >
                                    {pathname === "" ? (
                                      <div className="text-[#15A7AD]">MEP</div>
                                    ) : (
                                      "MEP"
                                    )}
                                  </p>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-white mt-[15px]"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>

                                {isHoverSix && (
                                  <>
                                    <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[135px] z-[999px]">
                                      <Link to="/mechanical-estimating-services/">
                                        <li className="text-[14px] font-normal hover:text-[#15A7AD]">
                                          Mechanical
                                        </li>
                                      </Link>

                                      <Link to="/electrical-estimating-services/">
                                        <li className="text-[14px]  mt-2 font-normal hover:text-[#15A7AD]">
                                          Electrical
                                        </li>
                                      </Link>

                                      <Link to="/plumbing-estimating-services/">
                                        <li className="text-[14px] mt-2 font-normal hover:text-[#15A7AD]">
                                          Plumbing
                                        </li>
                                      </Link>

                                      <Link to="/gutter-estimating-services/">
                                        <li className="text-[14px] mt-2 font-normal hover:text-[#15A7AD]">
                                          Gutter
                                        </li>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="col-span-1 pl-6">
                              <Link to="/hvac-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  cursor-pointer hover:text-[#15A7AD]">
                                  HVAC
                                </h2>
                              </Link>
                              <Link to="/commercial-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Commercial Estimating
                                </h2>
                              </Link>
                              <Link to="/industrial-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Industrial Estimating
                                </h2>
                              </Link>
                              <Link to="/residential-estimating-services/">
                                <h2 className="text-[14px] text-white font-normal  mt-3 cursor-pointer hover:text-[#15A7AD]">
                                  Residential Estimating
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/about-us/"
                      className="fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/about-us/" ? (
                        <div className="text-[#15A7AD]">About us</div>
                      ) : (
                        "About us"
                      )}
                    </Link>

                    <Link
                      to="/payment/"
                      className="fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/payment/" ? (
                        <div className="text-[#15A7AD]">Payment</div>
                      ) : (
                        "Payment"
                      )}
                    </Link>

                    <Link
                      to="/testimonials/"
                      className=" media fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/testimonials/" ? (
                        <div className="text-[#15A7AD]">Testimonials</div>
                      ) : (
                        "Testimonials"
                      )}
                    </Link>

                    <Link
                      to="/estimating-fee/"
                      className=" media fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/estimating-fee/" ? (
                        <div className="text-[#15A7AD]">Estimating fee</div>
                      ) : (
                        "Estimating fee"
                      )}
                    </Link>

                    <Link
                      to="/contact-us/"
                      className="fonty text-white font-inter lg:text-[14px] xl:text-[16px] font-semibold  hover:text-[#15A7AD] cursor-pointer"
                    >
                      {pathname === "/contact-us/" ? (
                        <div className="text-[#15A7AD]">Contact us</div>
                      ) : (
                        "Contact us"
                      )}
                    </Link>
                  </div>
                </div>

                <div className="visible lg:invisible flex justify-end">
                  <svg
                    onClick={() => setOpen(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 self-center text-[#15A7AD]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
                <Example open={open} setOpen={handleOnClose} />
              </div>
                <button
                  onClick={openModal}
                  className="mt-[1px] z-10 w-[154px] h-[42px] lg:block hidden bg-[#15A7AD] rounded-md font-semibold text-[18px] text-white "
                >
                  Get Estimate
                </button>
              {hello && <Modal closeModal={closeModal} />}
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Navbar;
