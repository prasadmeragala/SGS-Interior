import * as React from 'react';
import Navbar from "../Navbar";
import Banner from "../Banner";
import Intro from "../Intro/index";
import "./Aboutus.css";
// import Intro from "../Intro/index.css";
// import strip from "../../assets/images/strip11.jpg";

const Aboutus: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
        
        
        {/* Strip Image */}
        {/* <div className="strip-image">
          <h1 className="strip-text">About US</h1>
        </div> */}
        <Intro />
        <div className='gap13'>
     
        <Banner />
        </div>
      </div>
        
    </div>
  );
};

export default Aboutus;
