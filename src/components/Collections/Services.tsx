import * as React from 'react';
import Banner from "../Banner";
import Navbar from "../Navbar";
import Collections from "../Collections/index";

import "./Services.css"; // Import the CSS file
// import strip from "../../assets/images/strip11.jpg";


const Services: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
        
        
        {/* Strip Image */}
        <div className="strip-image">
          <h1 className="strip-text1">OUR SERVICES</h1>
        </div>
      {/* Gap Between Strip Image and First Project Heading */}
      <div className="gap8"></div>
      <div className='hide'>
        <Collections />
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Services;