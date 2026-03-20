import { useEffect, useState } from "react";
import './index.css'; // Import the CSS file

const Confident = () => {
  const items = [
    { title: "PROJECTS WORKED", value: 60 },
    { title: "CLIENTS", value: 60 },
    { title: "TEAM MEMBERS", value: 7 },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    items.map(() => 0)
  );

  // Animate numbers
  useEffect(() => {
    const incrementNumbers = () => {
      const speed = 100; // Speed of animation
      const updatedValues = [...animatedValues];
      items.forEach((item, index) => {
        const interval = setInterval(() => {
          if (updatedValues[index] < item.value) {
            updatedValues[index] += 1;
            setAnimatedValues([...updatedValues]);
          } else {
            clearInterval(interval);
          }
        }, speed);
      });
    };
    incrementNumbers();
  }, []);

  return (
    <div className="confident-container">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="confident-item"
        >
          {/* Animated Value */}
          <span className="confident-value">
            {animatedValues[index]}+
          </span>
          {/* Title */}
          <span className="confident-title">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Confident;