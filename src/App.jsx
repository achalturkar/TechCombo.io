import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Jobs from "./pages/Jobs/Jobs";

import ScrollToTop from "./function/ScrollToTop/ScrollToTop"


const App = () => (




  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route path="/jobs" element={<Jobs />}></Route>

     
      {/*<Route path="/services" element={<Services />}></Route>
      <Route path="/manpower" element={<Manpower />}></Route>
      <Route path="/executive" element={<Executive />}></Route>
      <Route path="/payroll" element={<Payroll />}></Route>
      <Route path="/staffing" element={<Staffing />}></Route>
      <Route path="/itDevelopment" element={<ITDevelopment />}></Route>
      <Route path="*" element={<NotFound />}></Route> */}

    </Routes>
  </>

)


export default App;