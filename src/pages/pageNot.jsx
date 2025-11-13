import React from 'react'
import Oops from "../assets/png/oops.png"

function PageNot() {
  return (
    <>
    <img src={Oops} alt="" className='w-[220px] h-[190px] mx-auto mt-8 -mb-16'/>
    <p className='text-[33px] text-black font-bold text-center mt-2'>404-Page Not Found!<br/>&#128542;</p>
    </>
  )
}

export default PageNot