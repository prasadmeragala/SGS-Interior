// import  { useState } from "react";
import { useState } from "react";
// import { LogoLinkedin, ChevronDown, LogoInstagram, Person } from "react-ionicons";
// import video1 from "../../assets/videos/video1.mp4";
// import video2 from "../../assets/videos/video2.mp4";
// import video4 from "../../assets/videos/video4.mp4";
import sgs from "../../assets/videos/sgs vid.mp4";
// import logo from "../../assets/images/logo1.png";
// import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/index';
const Header = () => {
  // const 
  // navItems = [
  //   { path: "/", title: "Home" },
  //   { path: "/Services", title: "Service" },
  //   { path: "/flat", title: "Projects" },
  //   { path: "/aboutus", title: "About us" },
   
  // ];

  // const videos = [video1, video2, video4];
  const videos = [sgs];
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  // const [isScrolled, setIsScrolled] = useState(false);


  // Handle video end
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

   // Scroll event listener
  //  useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
        // const navigate = useNavigate()
        // const handleSubmit= () => {
        //   navigate('/contactus')
        // }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        key={currentVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videos[currentVideo]}
        autoPlay
        loop={true}
        muted
        onEnded={handleVideoEnd}
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Header Content */}
      <div
        // className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 lg:px-[150px] h-[90px] 
        //   transition-all duration-300 ${
        //   isScrolled ? "bg-[#435466] shadow-[0_4px_10px_rgba(87,87,83,0.5)]" : "bg-transparent"
        // }`}
      >
      <Navbar/>
      
        {/* Content here */}
      

        {/* Logo */}
        {/* <div className="flex-shrink-0">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-[70px] md:h-[50px]" 
                  />
                 </div> */}

       
        {/* Navigation Items */}
        {/* <div style={{ display: "flex", gap: "8px" }}>
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 300,
                fontSize: "16px",
                transition: "color 0.3s ease",
                marginRight: "80px",
              
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              
            >
              {item.title}
            </a>
          ))}
        </div> */}
                    {/* Contact Us Button */}
               {/* <div>
                  <button
                    style={{
                      border: "1px solid white",
                      padding: "10px 15px",
                      borderRadius: "1px",
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                      transition: "background 0.3s ease, color 0.3s ease",
                      marginRight: "15px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "white";
                    }}
                    onClick={handleSubmit}
                  >

                    Contact Us
                  </button>
               </div> */}
      </div>
    </div>
    
  );
};

export default Header;