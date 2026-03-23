import * as React from "react";
import "./index.css";
import BharathImg from "../../assets/Bharath.jpg";
import SujithImg from "../../assets/Sujith.jpg"

const Intro: React.FC = () => {
  return (
    <div className="about-container">
      {/* Title */}
      <h1 className="about-title">ABOUT US</h1>

      {/* Images Section */}
      <div className="about-images">
        <div className="designer-card">
          <img src={SujithImg} alt="Sujith" />
          <p>Ar. Sujith</p>
        </div>

        <div className="designer-card">
          <img src={BharathImg} alt="Bharath" />
          <p>Ar. Bharath Reddy</p>
        </div>
      </div>

      {/* Description */}
      <p className="about-text">
        <span>The Space Gallery Studio</span> is where creativity and innovation
        come together to craft transformative spaces that inspire and uplift.
        Specializing in both architecture and interior design, we seamlessly
        integrate functionality with aesthetic appeal, ensuring each project
        embodies our dedication to quality, sustainability, and enduring design.
        By focusing on tailored, thoughtful environments, we collaborate closely
        with clients to realize their vision—whether for residential retreats or
        commercial environments. At{" "}
        <span>The Space Gallery Studio</span>, we believe that exceptional design
        not only enhances how we live and work but also enriches the way we
        experience the world around us.
      </p>
    </div>
  );
};

export default Intro;