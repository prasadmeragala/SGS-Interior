import { useState, useEffect } from "react";
import logo from "../../assets/images/logo1.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu after click
  const handleLinkClick = () => {
    if (isMobile) setIsMobile(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <a href="#" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>Services</a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>About Us</a>
        </li>

        {/* Mobile Contact */}
        {isMobile && (
          <li>
            <a href="#contact" className="contact-button1">
              Contact Us
            </a>
          </li>
        )}
      </ul>

      {/* Desktop Contact Button */}
      {!isMobile && (
        <div className="contact-button-container">
          <a href="#contact" className="contact-button">
            Contact Us
          </a>
        </div>
      )}

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✖" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;