import  { useState, useEffect } from "react";
import "./Flat.css"; // Import the CSS file
// import strip from "../../assets/images/strip11.jpg";
import Banner from "../Banner";
import Navbar from "../Navbar";

// Import project images
import P1 from "../../assets/images/p1/P1.png";
import P2 from "../../assets/images/p1/P2.png";
import P3 from "../../assets/images/p1/P3.png";
import P4 from "../../assets/images/p1/P4.png";
import P5 from "../../assets/images/p1/P5.png";
import EMARALD1 from "../../assets/images/ERK/EMARALD1.png";
import EMARALD2 from "../../assets/images/ERK/EMARALD2.png";
import EMARALD3 from "../../assets/images/ERK/EMARALD3.png";
import EMARALD4 from "../../assets/images/ERK/EMARALD4.png";
import EMARALD5 from "../../assets/images/ERK/EMARALD5.png";
import EMARALD6 from "../../assets/images/ERK/EMARALD6.png";
import VILLA1 from "../../assets/images/VLB/VILLA1.png";
import VILLA2 from "../../assets/images/VLB/VILLA2.png";
import VILLA3 from "../../assets/images/VLB/VILLA3.png";
import VILLA4 from "../../assets/images/VLB/VILLA4.png";
import VILLA5 from "../../assets/images/VLB/VILLA5.png";
import VILLA6 from "../../assets/images/VLB/VILLA6.png";
import MYHOME1 from "../../assets/images/MHA/MYHOME1.png";
import MYHOME2 from "../../assets/images/MHA/MYHOME2.png";
import MYHOME3 from "../../assets/images/MHA/MYHOME3.png";
import MYHOME4 from "../../assets/images/MHA/MYHOME4.png";
import MYHOME5 from "../../assets/images/MHA/MYHOME5.png";
import MYHOME6 from "../../assets/images/MHA/MYHOME6.png";
import CASHMERE1 from "../../assets/images/CCM/CASHMERE1.png";
import CASHMERE2 from "../../assets/images/CCM/CASHMERE2.png";
import CASHMERE3 from "../../assets/images/CCM/CASHMERE3.png";
import CASHMERE4 from "../../assets/images/CCM/CASHMERE4.png";
import CASHMERE5 from "../../assets/images/CCM/CASHMERE5.png";
import CASHMERE6 from "../../assets/images/CCM/CASHMERE6.png";
import SAINIKPURI1 from "../../assets/images/SAINIK/SAINIKPURI1.png";
import SAINIKPURI2 from "../../assets/images/SAINIK/SAINIKPURI2.png";
import SAINIKPURI3 from "../../assets/images/SAINIK/SAINIKPURI3.png";
import SAINIKPURI4 from "../../assets/images/SAINIK/SAINIKPURI4.png";
import SAINIKPURI5 from "../../assets/images/SAINIK/SAINIKPURI5.png";
import SAINIKPURI6 from "../../assets/images/SAINIK/SAINIKPURI6.png";
import RAJAPUSHPA1 from "../../assets/images/RG/RAJAPUSHPA1.png";
import RAJAPUSHPA2 from "../../assets/images/RG/RAJAPUSHPA2.png";
import RAJAPUSHPA3 from "../../assets/images/RG/RAJAPUSHPA3.png";
import RAJAPUSHPA4 from "../../assets/images/RG/RAJAPUSHPA4.png";
import RAJAPUSHPA5 from "../../assets/images/RG/RAJAPUSHPA5.png";
import RAJAPUSHPA6 from "../../assets/images/RG/RAJAPUSHPA6.png";
import PK1 from "../../assets/images/4bhk-PK/PK1.jpg";
import PK2 from "../../assets/images/4bhk-PK/PK2.jpg";
import PK3 from "../../assets/images/4bhk-PK/PK3.jpg";
import PK4 from "../../assets/images/4bhk-PK/PK4.jpg";
import PK5 from "../../assets/images/4bhk-PK/PK5.jpg";
import PK6 from "../../assets/images/4bhk-PK/PK6.jpg";
import v41 from "../../assets/images/villa4-CCM/v41.jpg";
import v42 from "../../assets/images/villa4-CCM/v42.jpg";
import v43 from "../../assets/images/villa4-CCM/v43.jpg";
import v44 from "../../assets/images/villa4-CCM/v44.jpg";
import v45 from "../../assets/images/villa4-CCM/v45.jpg";
import v46 from "../../assets/images/villa4-CCM/v46.jpg";
import v61 from "../../assets/images/villa6-RG/v61.jpg";
import v62 from "../../assets/images/villa6-RG/v62.jpg";
import v63 from "../../assets/images/villa6-RG/v63.jpg";
import v64 from "../../assets/images/villa6-RG/v64.jpg";
import v65 from "../../assets/images/villa6-RG/v65.jpg";
import v66 from "../../assets/images/villa6-RG/v66.jpg";

const Flat = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "SUBISHI POLAM",
      subtitle: "@Kompally",
      images: [P1, P2, P3, P4, P5],
      heading: "3 BHK FLAT @ SUBISHI POLAM-KOMPALLY",
    },
    {
      title: "EMARALD",
      subtitle: "@NAMPALLY",
      images: [EMARALD1, EMARALD2, EMARALD3, EMARALD4, EMARALD5, EMARALD6],
      heading: "3 BHK FLAT @ EMERALD GREEN-KOMPALLY",
    },
    {
      title: "VILLA",
      subtitle: "@LB NAGAR",
      images: [VILLA1, VILLA2, VILLA3, VILLA4, VILLA5, VILLA6],
      heading: "4 BHK VILLA @ LB NAGAR",
    },
    {
      title: "MHA",
      subtitle: "@LB NAGAR",
      images: [MYHOME1, MYHOME2, MYHOME3, MYHOME4, MYHOME5, MYHOME6],
      heading: "MY HOME ANKURA",
    },
    {
      title: "CCM",
      subtitle: "@LB NAGAR",
      images: [CASHMERE1, CASHMERE2, CASHMERE3, CASHMERE4, CASHMERE5, CASHMERE6],
      heading: "CASHMERE COUTR-MOKILA",
    },
    {
      title: "SAINIK",
      subtitle: "@LB NAGAR",
      images: [SAINIKPURI1, SAINIKPURI2, SAINIKPURI3, SAINIKPURI4, SAINIKPURI5, SAINIKPURI6],
      heading: "3 BHK FLAT @ SAINIKPURI",
    },
    {
      title: "RAJAPUSHPA",
      subtitle: "@LB NAGAR",
      images: [RAJAPUSHPA1, RAJAPUSHPA2, RAJAPUSHPA3, RAJAPUSHPA4, RAJAPUSHPA5, RAJAPUSHPA6],
      heading: "3 BHK FLAT @ SAINIKPURI",
    },
    {
      title: "4bhk-PK",
      subtitle: "@LB NAGAR",
      images: [PK1, PK2, PK3, PK4, PK5, PK6],
      heading: "4 BHK FLAT PENTHOUSE @ KOKAPET",
    },
    {
      title: "villa4-CCM",
      subtitle: "@LB NAGAR",
      images: [v41, v42, v43, v44, v45, v46],
      heading: "4 BHKFLAT CASHMERE COUTR-MOKILA @ KOKAPET",
    },
    {
      title: "villa6-RG",
      subtitle: "@LBNAGAR",
      images: [v61, v62, v63, v64, v65, v66],
      heading: "4BHK FLAT RAJAPUSHPA GREENDALE @ KOKAPET",
    },
  ];

  return (
    <div>
      <div className={isScrolled ? "scrolled-navbar" : ""} >
      <Navbar />

      </div>
      {/* Strip Image */}
      <div className="strip-image">
        <h1 className="strip-text">OUR PROJECTS</h1>
      </div>

      {/* Gap Between Strip Image and First Project Heading */}
      <div className="gap2"></div>

      {/* Projects Section */}
      <div className="projects-section">
        {projects.slice(1).map((project, projectIndex) => (
          <div key={projectIndex} className="project-item">
            <div className="project-heading">
              <h3>{project.heading}</h3>
            </div>
            <div className="project-images">
              {project.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`${project.title} Project ${index + 1}`} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="banner-section">
        <Banner />
      </div>
    </div>
  );
};

export default Flat;