import React, {useEffect} from 'react'
import EstimateComp from '../components/estimateComp'
import Banner from "../components/banner"
import EstimateTwo from '../components/estimateTwo';
import Package from '../components/package';

function Estimation() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  return (
<>
<EstimateComp/>
<EstimateTwo/>
<Package/>
<Banner/>
</>
    )
}

export default Estimation