import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EstimateComp() {
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
      <div className="lg:w-[80%] w-full mx-auto mt-[200px] p-2">
        <h1 className="text-[24px] font-bold text-center">Estimating fee</h1>

        <div className="p-2 mx-auto">
          <Slider {...settings}>
            <div className=" bg-[#393A3B] rounded-lg lg:p-16 p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className=" ">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Approval
                </h3>
                <p className="text-white text-[18px] mt-2 mb-3">
                  Following our thorough review, we will furnish you with a
                  comprehensive fee proposal for your careful consideration and
                  approval.
                </p>

                <button className=" mx-auto rounded-md text-[15px] bg-[#15A7AD] hover:bg-white hover:text-black  lg:w-[25%] w-[45%] h-auto p-3">
                  Upload plans
                </button>
              </div>
            </div>
            <div className=" bg-[#393A3B] rounded-lg lg:p-16 p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  RFI\Clarification
                </h3>
                <p className="text-white text-[18px] mt-2 mb-3">
                  The RFI email will always be sent to you if anything is
                  unclear in the plans/drawings/notes, or if required with your
                  approval we can complete the job with appropriate assumptions.
                </p>

                <button className="mx-auto rounded-md text-[15px] bg-[#15A7AD] hover:bg-white hover:text-black  lg:w-[25%] w-[45%] h-auto p-3">
                  Upload plans
                </button>
              </div>
            </div>
            <div className=" bg-[#393A3B] rounded-lg lg:p-16 p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Submission
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                Our expert estimators provide detailed estimates covering materials and labor. We deliver estimates in EXCEL format, using our template or the client's preference.
                </p>

                <button className="mx-auto rounded-md text-[15px] bg-[#15A7AD] hover:bg-white hover:text-black  lg:w-[25%] w-[45%] h-auto p-3">
                  Upload plans
                </button>
              </div>
            </div>
            <div className=" bg-[#393A3B] rounded-lg lg:p-16 p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Project
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                  Avail yourself of the option to either upload your plans
                  directly or forward them via email to
                  
                  <a
                    className="underline hover:text-red"
                    href="mailto:Rao@quickbidestimating.com"
                  >
                    {" "}
                    Rao@quickbidestimating.com
                  </a>
                </p>

                <button className="mx-auto rounded-md text-[15px] bg-[#15A7AD] hover:bg-white hover:text-black  lg:w-[25%] w-[45%] h-auto p-3">
                  Upload plans
                </button>
              </div>
            </div>
            <div className=" bg-[#393A3B] rounded-lg lg:p-16 p-6 mt-6">
              <h2 className="text-white text-[22px] font-bold">Our Process</h2>

              <div className="">
                <h3 className="text-white text-[20px] font-medium mt-1 ">
                  Reviewing
                </h3>

                <p className="text-white text-[18px] mt-2 mb-3">
                  Upon submission of the proposal, our team thoroughly examines
                  the drawings provided by you.
                </p>

                <button className="mx-auto rounded-md text-[15px] bg-[#15A7AD] hover:bg-white hover:text-black  lg:w-[25%] w-[45%] h-auto p-3">
                  Upload plans
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default EstimateComp;
