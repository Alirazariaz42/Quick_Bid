import React from 'react'
import Logo1 from "../assets/png/Logo1.png"
import Logo2 from "../assets/png/Logo2.png"
import Logo3 from "../assets/png/Logo3.png"
import Logo4 from "../assets/png/Logo4.png"
import Logo5 from "../assets/png/Logo5.png"
import Logo6 from "../assets/png/Logo6.png"

function Logos() {
  return (
    <>
    <div className='bg-[#15A7AD] p-10 pb-16 mt-8'>
        <p className='text-white text-center text-[24px] font-bold'>We worked with</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 container mx-auto mt-12 '>
            <img src={Logo1} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
            <img src={Logo2} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
            <img src={Logo3} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
            <img src={Logo4} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
            <img src={Logo5} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
            <img src={Logo6} alt="" className='w-[220px] h-[35px] md:block mx-auto'/>
        </div>
    </div>
    
    </>
  )
}

export default Logos