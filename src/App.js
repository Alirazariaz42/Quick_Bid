import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Service from "./pages/service";
import Trade from "./pages/trade";
import About from "./pages/about";
import Payment from "./pages/payment";
import Testimonials from "./pages/testimonials";
import Estimation from "./pages/estimation";
import Contact from "./pages/contact";
import General from "./pages/general";
import Site from "./pages/site";
import Concrete from "./pages/concrete";
import Masonry from "./pages/masonry";
import Metal from "./pages/metal";
import Wood from "./pages/wood";
import Thermal from "./pages/thermal";
import Door from "./pages/door";
import Finish from "./pages/finish";
import Special from "./pages/special";
import Equipment from "./pages/equipment";
import Furnishing from "./pages/furnishing";
import System from "./pages/system";
import Plumbing from "./pages/plumbing";
import Hvac from "./pages/hvac";
import Commercial from "./pages/commercial";
import Industrial from "./pages/industrial";
import Residential from "./pages/residential";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageNot from "./pages/pageNot";
import Cost from "./components/cost";
import Quantity from "./components/quantity";
import Schedule from "./components/schedule";
import Plan from "./components/plan";
import Landscape from "./pages/landscape";
import Roofing from "./pages/roofing";
import Insulation from "./pages/insulation";
import Drywall from "./pages/drywall";
import Flooring from "./pages/flooring";
import Mechanical from "./pages/mechanical";
import Electrical from "./pages/electrical";
import Gutter from "./pages/gutter";
import Rebar from "./pages/rebar";
import Material from "./pages/material";
import Constructionn from "./pages/constructionn"
import Framing from "./pages/framing";
import Specialties from "./pages/specialties";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services/" element={<Service />} />
          <Route path="/our-trades/" element={<Trade />} />
          <Route path="/general-requirements/" element={<General />} />
          <Route path="/sitework-estimating-services/" element={<Site />} />
          <Route path="/concrete-estimating-services/" element={<Concrete />} />
          <Route path="/masonry-estimating-services/" element={<Masonry />} />
          <Route path="/metals-estimating-services/" element={<Metal />} />
          <Route path="/lumber-takeoff-services/" element={<Wood />} />
          <Route path="/thermal-moisture-protection-estimating-services/" element={<Thermal />} />
          <Route path="/lumber-takeoff-services/" element={<Door />} />
          <Route path="/interior-exterior-finishes/" element={<Finish />} />
          <Route path="/special-construction-estimating-services/" element={<Special />} />
          <Route path="/specialties/" element={<Specialties />} />
          <Route path="/framing-estimating-services/" element={<Framing />} />
          <Route path="/equipment-estimating-services/" element={<Equipment />} />
          <Route path="/furnishing-estimating-services/" element={<Furnishing />} />
          <Route path="/conveying-system/" element={<System />} />
          <Route path="/hvac-estimating-services/" element={<Hvac />} />
          <Route path="/commercial-estimating-services/" element={<Commercial />} />
          <Route path="/industrial-estimating-services/" element={<Industrial />} />
          <Route path="/residential-estimating-services/" element={<Residential />} />
          <Route path="/landscaping-estimating-services/" element={<Landscape />} />
          <Route path="/rebar-estimating-services/" element={<Rebar />} />
          <Route path="/roofing-estimating-services/" element={<Roofing />} />
          <Route path="/insulation-estimating-services/" element={<Insulation />} />
          <Route path="/drywall-estimating-services/" element={<Drywall />} />
          <Route path="/flooring-estimating-services/" element={<Flooring />} />
          <Route path="/mechanical-estimating-services/" element={<Mechanical />} />
          <Route path="/electrical-estimating-services/" element={<Electrical />} />
          <Route path="/plumbing-estimating-services/" element={<Plumbing />} />
          <Route path="/gutter-estimating-services/" element={<Gutter />} />
          <Route path="/cost-estimating-services/" element={<Cost />} />
          <Route path="/quantity-takeoff-services/" element={<Quantity />} />
          <Route path="/cpm-scheduling/" element={<Schedule />} />
          <Route path="/material-takeoff-services/" element={<Material />} />
          <Route path="/construction-takeoff-services/" element={<Constructionn />} />
          <Route path="/planning/" element={<Plan />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/payment/" element={<Payment />} />
          <Route path="/testimonials/" element={<Testimonials />} />
          <Route path="/estimating-fee/" element={<Estimation />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/*" element={<PageNot />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
