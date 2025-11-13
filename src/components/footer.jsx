import React from "react";
import Logo from "../assets/svg/logo.svg";
import Locationn from "../assets/png/locationn.png";
import Call from "../assets/png/call.png";
import Messagee from "../assets/png/messagee.png";
import Blueinsta from "../assets/png/blueinsta.png";
import Bluefacebook from "../assets/png/bluefacebook.png";
import Bluelinked from "../assets/png/bluelinked.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-background-clr ">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-12 gap-6 pt-6 container mx-auto mt-8">
          <div className="col-span-2 self-center p-2 mx-auto md:block">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className="w-[100%] h-[90px] cursor-pointer flex justify-start "
              />
            </Link>
          </div>
          <div className="col-span-3 p-2  mx-auto md:block">
            <p className="text-[#15A7AD] sm:text-start text-center text-[22px] font-medium">
              About
            </p>
            <p className="text-[#FDFDFD] sm:text-start text-center text-[13px] mt-4 font-light leading-4">
              At <span className="text-[#15a7ad]">QuickBid Estimating</span>, we're a team of<br/> dedicated construction
              professionals passionate<br/> about helping you build your vision. We
              offer<br/> a comprehensive suite of services, including <br/> meticulous cost
              estimating and material<br/> takeoff to streamlined scheduling and
              expert<br/> planning. Our expertise ensures your project<br/> is built on a
              solid foundation for success.
            </p>
          </div>
          <div className="col-span-3 p-2  mx-auto md:block">
            <p className="text-[#15A7AD] sm:text-start text-center text-[22px] font-medium">
              Our Services
            </p>

            <p className="text-white text-[14px] hover:text-[#15A7AD] flex sm:justify-start justify-center mt-4 underline">
              <Link to="/cost-estimating-services/">Cost Estimating</Link>
            </p>
            <p className="text-white text-[14px] hover:text-[#15A7AD] flex sm:justify-start justify-center mt-4 underline">
              <Link to="/construction-takeoff-services/">
                Construction Takeoff Services
              </Link>
            </p>
            <p className="text-white text-[14px] hover:text-[#15A7AD] flex sm:justify-start justify-center mt-4 underline">
              <Link to="/cpm-scheduling/">CPM Scheduling</Link>
            </p>
            <p className="text-white text-[14px] hover:text-[#15A7AD] flex sm:justify-start justify-center mt-4 underline">
              <Link to="/planning/">Planning</Link>
            </p>
          </div>
          <div className="col-span-4 ml-0 lg:ml-16 xl:ml-[80px] p-2">
            <div className="mx-auto md:block">
              <p className="text-[#15A7AD] md:text-start text-center text-[22px] font-medium">
                Contact Us
              </p>
              <div className="flex md:justify-start justify-center gap-2 mt-4 ">
                <img
                  src={Locationn}
                  alt=""
                  className="w-[14px] h-[16px] mt-[2px] "
                />
                <p className="clr-chng-foot text-black text-[14px] font-normal ">
                425 E 96th St, Brooklyn, NY 11212, USA
                </p>
              </div>
              <div className="flex md:justify-start justify-center gap-2 mt-3">
                <img src={Call} alt="" className="w-[14px] h-[16px] mt-[2px]" />
                <p className="clr-chng-foot text-black text-[14px] font-normal underline hover:text-[#15A7AD]">
                  <a href="tel:+1 917 300 1079">+1 917 300 1079</a>
                </p>
              </div>
              <div className="flex md:justify-start justify-center gap-2 mt-3">
                <img
                  src={Messagee}
                  alt=""
                  className="w-[16px] h-[14px] mt-[3px]"
                />
                <p className="clr-chng-foot text-black text-[14px] font-normal underline hover:text-[#15A7AD]">
                  <a href="mailto:Rao@quickbidestimating.com">
                    Rao@quickbidestimating.com
                  </a>
                </p>
              </div>
              <div className="flex justify-end mt-8 gap-4 ">
                <a
                  target="blank"
                  href="https://www.instagram.com/quickbidestimating/"
                >
                  <img
                    src={Blueinsta}
                    alt=""
                    className="cursor-pointer w-[18px] h-[18px] mt-[5px]"
                  />
                </a>

                <a
                  target="blank"
                  href="https://www.facebook.com/photo?fbid=122121676838111985&set=a.122097757328111985"
                >
                  <img
                    src={Bluefacebook}
                    alt=""
                    className="cursor-pointer mt-[1px] w-[26px] h-[26px]"
                  />
                </a>

                <a
                  target="blank"
                  href="https://www.linkedin.com/company/81810439/admin/feed/posts/"
                >
                  <img
                    src={Bluelinked}
                    alt=""
                    className="cursor-pointer mt-[1px] w-[26px] h-[26px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] text-white text-center font-light pb-2">
          Copyright © 2024 <span className="text-[#15a7ad]">Quickbid Estimating</span> Designed By{" "}
          <a target="blank" href="http://mfbzone.com/">
            <span className="text-[#008000] font-semibold">
              MF <span className="text-[#FF6400] font-semibold">Bzone</span>
            </span>
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
