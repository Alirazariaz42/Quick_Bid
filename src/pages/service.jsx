import React, {useEffect} from 'react'
import ServiceCard from '../components/serviceCard'
import Banner from '../components/banner'

function Service() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  return (
    <>
    <ServiceCard/>
    <Banner/>
    </>
  )
}

export default Service   