import React, {useEffect} from "react";
import Banner from "../components/banner"
import PayComp from "../components/payComp";

function Payment() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);
  return (
    <>
   
      <PayComp/>
    
    </>
  );
}

export default Payment;
