// import React from 'react';
import classic from "../../assets/images/serv-arch.jpg";
import luxury from "../../assets/images/serv-interior2.jpg";
import bright from "../../assets/images/serv-commercial.png";
import './index.css'; // Import the CSS file

const Collections = () => {
  const collectionItems = [
    {
      title: "Architectural Design",
      image: classic,
    },
    {
      title: "Interior Design",
      image: luxury,
    },
    {
      title: "Commercial Design",
      image: bright,
    },
  ];

  return (
    <div className="collections-container">
      {/* Heading with full-width lines */}
      <div className="collections-heading">
        <div className="heading-line"></div>
        <h2 className="heading-text">SERVICES WE OFFER</h2>
        <div className="heading-line"></div>
      </div>

      {/* Collection Items */}
      <div className="collections-grid">
        {collectionItems.map((item, index) => (
          <div key={index} className="collection-item">
            {/* Image */}
            <div
              className="collection-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            {/* Title */}
            <div className="collection-title">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;