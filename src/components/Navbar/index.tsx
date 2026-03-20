import { useState, useEffect } from "react";
import logo from "../../assets/images/logo1.png";
// import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobile(false); 

    }
  };
 

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>

      {/* Navigation */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links ms-auto mb-2  mb-lg-0"}>
        <li>
          <a href="/" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/services" onClick={handleLinkClick}>
            Services
          </a>
        </li>
        <li>
          <a href="/flat" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="/aboutus" onClick={handleLinkClick}>
            About Us
          </a>
        </li>
      


        {/* Contact Us button in mobile menu */}
        {isMobile && (
          <li>
            <a href="/contactus" className="contact-button1">
              Contact Us
            </a>
          </li>
        )}
      </ul>

      {/* Contact Us Button (Desktop) */}
      {!isMobile && (
        <div className="contact-button-container">
          <a href="/contactus" className="contact-button">
            Contact Us
          </a>
        </div>
      )}

      {/* Mobile Menu Icon */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        aria-label="Toggle navigation menu"
      >
        {isMobile ? "✖" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;
