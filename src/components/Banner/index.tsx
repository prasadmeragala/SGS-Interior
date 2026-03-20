import { FaInstagram } from 'react-icons/fa';
import "./index.css"; // Import the CSS file
import { useState } from "react";
import emailjs from "@emailjs/browser";
import backgroundimage from '../../assets/ap-12.jpg';

const Banner = () => {
  // Initialize EmailJS with your public key
emailjs.init("LNgvvsyDboN2GOEeQ"); // Replace with your public key


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = (e:any) => {
    e.preventDefault();
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!"); // Notify the user
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again."); // Notify the user
      });
  };

    const serviceId = "service_nujcps1";
    const templateId = "template_3i1lwdq";
    const publicKey = "LNgvvsyDboN2GOEeQ";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "TheSGS", // Replace with the recipient's name
      message: message,
    };


  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Contact Information Section */}
        <div
          className="contact-info"
          style={{
            backgroundImage: `url(${backgroundimage})`,
          }}
        >
          <h2>CONTACT US</h2>
          <p>We'd love to hear from you. Please fill out this form.</p>
          <p>
            The Space Gallery Studio <br />
            1-65/312, Flat no.301, 3rd floor, <br />
            Road No.7, Kakatiya Hills, Madhapur, <br />
            Hyderabad, Telangana-500090.
          </p>
          <p>
            thespacegallerystudio@gmail.com <br />
            +91-91103 43736, +91-94949 63428
          </p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/the__SPACE__GALLERY__STUDIO"
              target="_blank"
              rel="noopener noreferrer"
            >
            
              <FaInstagram color="#ffffff" size="24px"/>

            </a>
          </div>
        </div>

                  {/* Contact Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="name">Name <span className="required-asterisk">*</span></label>
            <input 
              id="name"
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              autoComplete="name"
            />

            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <label htmlFor="phone">Phone <span className="required-asterisk">*</span></label>
            <input 
              id="phone"
              type="text" 
              placeholder="Phone Number" 
              value={phone}
              required 
              pattern="\d{10}" 
              onChange={(e) => setPhone(e.target.value)}
              title="Please enter a 10-digit phone number" 
              autoComplete="tel"
            />

            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              placeholder="Your Message" 
              value={message} 
              rows={4} 
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;