// Intro.tsx
import * as React from 'react';
import './index.css'; // Import the CSS file
import DesignerImg from '../../assets/designer-12.jpg';

const Intro: React.FC = () => {
  // const imageName = "Designer_12.jpg"
  // const imagePath = `/src/assets/${imageName}`
  return (
    <div className="intro-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>ABOUT US</h1>
        <p>
          <span>The Space Gallery Studio</span> is where creativity and innovation come together to craft transformative spaces that inspire and uplift. Specializing in both architecture and interior design, we seamlessly integrate functionality with aesthetic appeal, ensuring each project embodies our dedication to quality, sustainability, and enduring design. By focusing on tailored, thoughtful environments, we collaborate closely with clients to realize their vision—whether for residential retreats or commercial environments. At{' '}
          <span>The Space Gallery Studio</span>, we believe that exceptional design not only enhances how we live and work but also enriches the way we experience the world around us.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src={DesignerImg  } // Update the correct path
          alt="Designers"
        />
        <div className="designers-info">
          <span>Ar. Sujith</span>
          <span>Ar. Bharath Reddy</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
