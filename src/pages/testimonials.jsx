
import React, { useState, useEffect } from "react";
import Bigman from "../assets/png/bigman.png";
import Blackman from "../assets/png/blackman.png";
import Girl from "../assets/png/girl.png";
import Gentleman from "../assets/png/gentleman.png";
import Banner from "../components/banner";

function Testimonials() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const images = [Bigman, Blackman, Girl, Gentleman];
  const imageTexts = [
    "We recently partnered with QuickBid Estimating for a complex commercial development project. Their meticulous approach to construction estimating and fast turnaround times were invaluable. The accurate estimates they provided helped us secure funding and stay within budget throughout the project. We highly recommend Quick Bid Estimating for any construction project requiring precision and efficiency.",
    "As a general contractor, I rely on accurate estimates to win bids and manage projects successfully. QuickBid Estimating has become my go-to partner for construction estimating. Their team's deep industry knowledge and proficiency with advanced software ensure detailed and reliable estimates.  Their clear communication throughout the process allows me to make informed decisions with confidence.",
    "We were facing a tight budget for our new office buildout and needed accurate estimates to stay on track.  QuickBid Estimating's sharp estimates saved us over $300. We're extremely satisfied with the services provided by QuickBid Estimating and would definitely recommend them to others.",
    "Before QuickBid Estimating, our estimating process was slow and cumbersome. Now, with their streamlined approach, we get fast and accurate estimates, allowing us to bid on more projects and win more contracts.  We highly recommend them!",
  ];
  const imageHeadings = [
    "Emily",
    "Olivia",
    "Sophia",
    "Ava",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveImageIndex((prevIndex) => {
          const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTextHover = () => {
    setIsPaused(true); 
  };

  const handleTextLeave = () => {
    setIsPaused(false); 
  };

  return (
    <>
      <div className="bg-[#212121] p-16 mt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[80%] w-[100%] container mx-auto">
          <div className="col-span-1 mt-6">
            <img
              src={images[activeImageIndex]}
              alt=""
              style={{ width: "100%", height: "auto" }}
              
            />
          </div>
          <div
            className="col-span-1 mt-6"
            onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}
          >
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      border:
                        activeImageIndex === index
                          ? "1px solid white "
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="text-white mt-16 text-[24px] font-semibold ">
                {imageHeadings[activeImageIndex]}
              </h2>
              <p className="text-white text-[18px] font-light mt-4 cursor-pointer">
                {imageTexts[activeImageIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
}

export default Testimonials;
