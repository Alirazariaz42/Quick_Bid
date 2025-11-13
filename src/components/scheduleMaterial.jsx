

// import React from "react";
// import { SCHEDULE_CARDSs } from "../data";
// import { useSpring, animated } from "react-spring";
// import { useInView } from "react-intersection-observer";

// const ScheduleCard = ({ head, para }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: "0px 0px", 
//   });

//   const props = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateY(0)" : "translateY(-40px)",
//     reset: !inView,
//   });

//   return (
//     <animated.div
//       ref={ref}
//       style={props}
//       className="schedule-card bg-[#15A7AD] rounded-md p-6"
//     >
//       <h3 className="text-center font-semibold text-[18px] text-white">{head}</h3>
//       <p className="text-white font-normal text-[16px] mt-3">{para}</p>
     
//     </animated.div>
//   );
// };

// const ScheduleMaterial = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16 w-[50%] container mx-auto">
//       {SCHEDULE_CARDSs.map((x, index) => (
//         <ScheduleCard key={index} head={x.head} para={x.para} />
//       ))}
//     </div>
//   );
// };

// export default ScheduleMaterial;

import React from 'react'
import NewFlip from "../../src/assets/png/newFlip.png"
import NewFlip1 from "../../src/assets/png/newFlip1.png"

function ScheduleMaterial() {
  return (
    <>
    
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-[50%] w-full container mx-auto mt-6'>
    <div class="flip-card-general mb-2 mx-auto -z-10">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={NewFlip} alt="" />
            </div>
            <div class="flip-card-back-general ">
              <div className="p-6 text-[16px] mt-4">
                <p>
                Our experts excel in various building software solutions such as Planswift, Bluebeam, On Screen Takeoff (OST), and MS Project (Scheduling).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card-general mx-auto -z-10">
          <div class="flip-card-inner-general">
            <div class="flip-card-front-general">
              <img src={NewFlip1} alt="" />
            </div>
            <div class="flip-card-back-general">
              <div className="p-6 text-[16px]">
                <p>
                Our work involves using an adaptable Excel spreadsheet. We can customize it to your needs or integrate your business information into the estimate/proposal. For quantity takeoffs, we use programs like Planswift, BlueBeam, and On Screen Takeoff (OST).
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default ScheduleMaterial