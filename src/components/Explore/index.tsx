// import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images for all projects
import P1 from "../../assets/images/p1/P1.png";
import P2 from "../../assets/images/p1/P2.png";
import P3 from "../../assets/images/p1/P3.png";
import P4 from "../../assets/images/p1/P4.png";
import P5 from "../../assets/images/p1/P5.png";

const projects2 = [
  {
    title: "SUBISHI POLAM",
    subtitle: "@Kompally",
    image: P1,
  },
  {
    title: "RAJAPUSHPA GREENDALE",
    subtitle: "@Tellapur",
    image: P2,
  },
  {
    title: "4BHK VILLA",
    subtitle: "@LB Nagar",
    image: P3,
  },
  {
    title: "4BHK VILLA",
    subtitle: "@LB Nagar",
    image: P4,
  },
  {
    title: "4BHK PENTHOUSE",
    subtitle: "@Kokapet",
    image: P5,
  },
];

const Explore = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/flat");
  };

  return (
    <div className="w-full px-6 md:px-[120px] py-10 bg-[#222222] text-white">
      {/* Title Section */}
      <div className="flex items-center mb-8">
        <div className="border-t border-white flex-grow"></div>
        <span className="px-4 text-xl md:text-2xl font-light uppercase">
          Our Projects
        </span>
        <div className="border-t border-white flex-grow"></div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects2.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-[250px] md:h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                {project.title}
              </h3>
              <p className="text-white text-sm">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects2.slice(3).map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-[250px] md:h-[350px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                {project.title}
              </h3>
              <p className="text-white text-sm">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleChange}
          className="border border-white w-[27rem] py-3 text-sm md:text-base bg-transparent text-white hover:bg-white hover:text-black transition"
        >
          See all projects
        </button>
      </div>
    </div>
  );
};

export default Explore;
