import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pay1 from "../../src/assets/png/pay1.png";
import Pay2 from "../../src/assets/png/pay2.png";
import Pay3 from "../../src/assets/png/pay3.png";
import Pay4 from "../../src/assets/png/pay4.png";
import Pay5 from "../../src/assets/png/pay5.png";
import Pay6 from "../../src/assets/png/pay6.png";

function PaymentSlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:w-[80%] w-full mx-auto ">
        <div className="">
          <Slider {...settings}>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay1} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay2} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay3} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay4} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay5} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#393A3B] rounded-lg p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold text-center">
                Payment Methods
              </h2>

              <div className="slider-flex-div mt-6 ">
                <img src={Pay6} alt="" />
                <div className="flex justify-center mt-7 gap-1 h-[60px] cursor-pointer rounded-2xl bg-[#15A7AD]">
                  <button className="  text-[16px]  font-medium">
                    Pay now
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-5 mr-3 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default PaymentSlide;
