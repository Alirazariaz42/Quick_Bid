

import React from "react";
import { SCHEDULE_CARDS } from "../data";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ScheduleCard = ({ head, para ,list, listt,listtt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px", 
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-40px)",
    reset: !inView,
  });

  return (
    <animated.div
      ref={ref}
      style={props}
      className="schedule-card bg-[#15A7AD] rounded-md p-6"
    >
      <h3 className="text-center font-semibold text-[18px] text-white">{head}</h3>
      <p className="text-white font-normal text-[14px]">{para}</p>
     <li className="text-white font-medium text-[16px] mt-2">{list}</li>
     <li className="text-white font-medium text-[16px]">{listt}</li>
     <li className="text-white font-medium text-[16px]">{listtt}</li>
    </animated.div>
  );
};

const ScheduleCards = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 w-[70%] container mx-auto">
      {SCHEDULE_CARDS.map((x, index) => (
        <ScheduleCard key={index} head={x.head} para={x.para} list={x.list} listt={x.listt} listtt={x.listtt}/>
        
      ))}
    </div>
  </>
  );
};

export default ScheduleCards;
         