import React from "react";
import Calll from "../assets/png/calll.png";
import Message from "../assets/png/message.png";
import Vector from "../assets/png/Vector.png";
import Linkedin from "../assets/png/linkedin.png";
import Instaa from "../assets/png/instaa.png";

function NavComp() {
  return (
    <>
      <div className="navbar bg-[#393A3B] p-[2px] flex justify-end gap-10">
        <div className="sm:flex grid justify-end sm:gap-10 gap-2">
          <div className=" flex justify-start gap-2 mt-1">
            <img src={Calll} alt="" className="w-[20px] h-[20px]" />
            <p className="text-white">
              <a href="tel:+1 917 300 1079">+1 917 300 1079</a>
            </p>
          </div>
          <div className="flex justify-start gap-2 sm:mt-1 mt-0">
            <img src={Message} alt="" className="w-[18px] h-[16px] mt-1" />
            <p className="text-white">
              {" "}
              <a href="mailto:Rao@quickbidestimating.com">
                Rao@quickbidestimating.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mr-4 ">
          <a
            target="blank"
            href="https://www.instagram.com/quickbidestimating/"
          >
            {" "}
            <img
              src={Instaa}
              alt=""
              className="w-[16px] h-[16px] mt-[6px] hide-class-facebook cursor-pointer "
            />
          </a>

          <a
            target="blank"
            href="https://www.facebook.com/photo?fbid=122121676838111985&set=a.122097757328111985"
          >
            <img
              src={Vector}
              alt=""
              className="w-[18px] h-[18px] mt-[5px] hide-class-facebook cursor-pointer "
            />
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/company/81810439/admin/feed/posts/"
          >
            <img
              src={Linkedin}
              alt=""
              className="w-[24px] h-[24px] mt-[3px] hide-class-facebook cursor-pointer "
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavComp;
