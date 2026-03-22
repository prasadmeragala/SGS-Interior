import { useState } from "react";

import SPK1 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK1.jpg";
import SPK2 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK2.jpg";
import SPK3 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK3.jpg";
import SPK4 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK4.jpg";
import SPK5 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK5.jpg";
import SPK6 from "../../assets/images/SUBISHI POLAM @ Kompally/SPK6.jpg";

import EM1 from "../../assets/images/ERK/EMARALD1.png";
import EM2 from "../../assets/images/ERK/EMARALD2.png";
import EM3 from "../../assets/images/ERK/EMARALD3.png";
import EM4 from "../../assets/images/ERK/EMARALD4.png";
import EM5 from "../../assets/images/ERK/EMARALD5.png";
import EM6 from "../../assets/images/ERK/EMARALD6.png";

import MYHOME1 from "../../assets/images/MHA/MYHOME1.png";
import MYHOME2 from "../../assets/images/MHA/MYHOME2.png";
import MYHOME3 from "../../assets/images/MHA/MYHOME3.png";
import MYHOME4 from "../../assets/images/MHA/MYHOME4.png";
import MYHOME5 from "../../assets/images/MHA/MYHOME5.png";
import MYHOME6 from "../../assets/images/MHA/MYHOME6.png";

import RAJAPUSHPA1 from "../../assets/images/RG/RAJAPUSHPA1.png";
import RAJAPUSHPA2 from "../../assets/images/RG/RAJAPUSHPA2.png";
import RAJAPUSHPA3 from "../../assets/images/RG/RAJAPUSHPA3.png";
import RAJAPUSHPA4 from "../../assets/images/RG/RAJAPUSHPA4.png";
import RAJAPUSHPA5 from "../../assets/images/RG/RAJAPUSHPA5.png";
import RAJAPUSHPA6 from "../../assets/images/RG/RAJAPUSHPA6.png";

import VILLA1 from "../../assets/images/VLB/VILLA1.png";
import VILLA2 from "../../assets/images/VLB/VILLA2.png";
import VILLA3 from "../../assets/images/VLB/VILLA3.png";
import VILLA4 from "../../assets/images/VLB/VILLA4.png";
import VILLA5 from "../../assets/images/VLB/VILLA5.png";
import VILLA6 from "../../assets/images/VLB/VILLA6.png";

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

import v61 from "../../assets/images/villa6-RG/v61.jpg";
import v62 from "../../assets/images/villa6-RG/v62.jpg";
import v63 from "../../assets/images/villa6-RG/v63.jpg";
import v64 from "../../assets/images/villa6-RG/v64.jpg";
import v65 from "../../assets/images/villa6-RG/v65.jpg";
import v66 from "../../assets/images/villa6-RG/v66.jpg";

/* ---------- PROJECT DATA ---------- */

const projects = [
  { title: "SUBISHI POLAM", location: "@Kompally", images: [SPK1, SPK2, SPK3, SPK4, SPK5, SPK6] },
  { title: "RAJAPUSHPA GREENDALE", location: "@Tellapur", images: [RAJAPUSHPA1, RAJAPUSHPA2, RAJAPUSHPA3, RAJAPUSHPA4, RAJAPUSHPA5, RAJAPUSHPA6] },
  { title: "INDEPENDENT VILLA", location: "@LB Nagar", images: [VILLA1, VILLA2, VILLA3, VILLA4, VILLA5, VILLA6] },

  { title: "4BHK PENTHOUSE", location: "@Kokapet", images: [PK1, PK2, PK3, PK4, PK5, PK6] },
  { title: "EMERALD GREENS", location: "@Kompally", images: [EM1, EM2, EM3, EM4, EM5, EM6] },

  { title: "CASHMERE COURT VILLA 04", location: "@Mokila", images: [v41, v42, v43, v44, v45, v46] },
  { title: "CASHMERE COURT VILLA 05", location: "@Mokila", images: [CASHMERE1, CASHMERE2, CASHMERE3, CASHMERE4, CASHMERE5, CASHMERE6] },
  { title: "3BHK FLAT", location: "@Sainikpuri", images: [SAINIKPURI1, SAINIKPURI2, SAINIKPURI3, SAINIKPURI4, SAINIKPURI5, SAINIKPURI6] },

  { title: "MY HOME ANKURA VILLA 219", location: "@Tellapur", images: [MYHOME1, MYHOME2, MYHOME3, MYHOME4, MYHOME5, MYHOME6] },
  { title: "RAJAPUSHPA GREENDALE VILLA 259", location: "@Tellapur", images: [v61, v62, v63, v64, v65, v66] },
];

/* ---------- COMPONENT ---------- */

const Explore = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const rows = [
    projects.slice(0, 3),
    projects.slice(3, 5),
    projects.slice(5, 8),
    projects.slice(8, 10),
  ];

  return (
    <div className="w-full px-6 md:px-[120px] py-10 bg-[#222222] text-white">

      {/* TITLE */}
      <div className="flex items-center mb-8">
        <div className="border-t border-white flex-grow"></div>
        <span className="px-4 text-xl md:text-2xl font-light uppercase">
          Our Projects
        </span>
        <div className="border-t border-white flex-grow"></div>
      </div>

      {/* GRID */}
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-4 ${
              row.length === 3
                ? "grid-cols-1 md:grid-cols-3"
                : "flex justify-center gap-6 flex-wrap"
            }`}
          >
            {row.map((project, index) => (
              <div
                key={index}
                onClick={() => openProject(project)}
                className="relative cursor-pointer group overflow-hidden"
              >
                <img
                  src={project.images[0]}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-300"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>

                {/* HOVER TEXT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">

          <div className="relative w-[95%] md:w-[70%] bg-[#1f1f1f] rounded-lg p-4">

            {/* TOP BAR */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-8"></div>

              <h2 className="text-white text-sm md:text-base font-medium text-center">
                {selectedProject.title} {selectedProject.location}
              </h2>

              <button
                onClick={closeProject}
                className="text-white text-xl w-8 text-right"
              >
                ✕
              </button>
            </div>

            {/* IMAGE */}
            <div className="relative flex items-center justify-center">

              <button
                onClick={prevSlide}
                className="absolute left-0 text-white text-3xl px-3"
              >
                ‹
              </button>

              <img
                src={selectedProject.images[currentIndex]}
                className="w-[80%] h-[400px] object-cover rounded"
              />

              <button
                onClick={nextSlide}
                className="absolute right-0 text-white text-3xl px-3"
              >
                ›
              </button>
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-4 gap-2">
              {selectedProject.images.map((_: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    idx === currentIndex ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;