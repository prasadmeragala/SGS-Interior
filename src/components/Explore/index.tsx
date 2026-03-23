import { useState, useEffect } from "react";

/* ---------- IMAGES (same as yours) ---------- */
import SPK1 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK1.jpg";
import SPK2 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK2.jpg";
import SPK3 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK3.jpg";
import SPK4 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK4.jpg";
import SPK5 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK5.jpg";
import SPK6 from "../../assets/images/1. SUBISHI POLAM @ Kompally/SPK6.jpg";

import RGT1 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT1.jpg";
import RGT2 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT2.jpg";
import RGT3 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT3.jpg";
import RGT4 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT4.jpg";
import RGT5 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT5.jpg";
import RGT6 from "../../assets/images/2. RAJAPUSHPA GREENDALE @ Tellapur/RGT6.jpg";

import VILLA1 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA1.jpg";
import VILLA2 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA2.jpg";
import VILLA3 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA3.jpg";
import VILLA4 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA4.jpg";
import VILLA5 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA5.jpg";
import VILLA6 from "../../assets/images/3. INDEPENDANT VILLA @ LB Nagar/VILLA6.jpg";

import PK1 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK1.jpg";
import PK2 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK2.jpg";
import PK3 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK3.jpg";
import PK4 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK4.jpg";
import PK5 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK5.jpg";
import PK6 from "../../assets/images/4. 4 BHK PENTHOUSE @ Kokapet/PK6.jpg";

import EM1 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM1.jpg"
import EM2 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM2.jpg"
import EM3 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM3.jpg"
import EM4 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM4.jpg"
import EM5 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM5.jpg"
import EM6 from "../../assets/images/5. EMERALD GREEN @ Kompally/EM6.jpg"

import v41 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v41.jpg";
import v42 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v42.jpg";
import v43 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v43.jpg";
import v44 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v44.jpg";
import v45 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v45.jpg";
import v46 from "../../assets/images/6. CASHMERE COURT VILLA  4 @ Mokila/v46.jpg";

import CASHMERE1 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE1.jpg";
import CASHMERE2 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE2.jpg";
import CASHMERE3 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE3.jpg";
import CASHMERE4 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE4.jpg";
import CASHMERE5 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE5.jpg";
import CASHMERE6 from "../../assets/images/7. CASHMERE COURT VILLA 5 @ Mokila/CASHMERE6.jpg";

import SAINIKPURI1 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI1.jpg";
import SAINIKPURI2 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI2.jpg";
import SAINIKPURI3 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI3.jpg";
import SAINIKPURI4 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI4.jpg";
import SAINIKPURI5 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI5.jpg";
// import SAINIKPURI6 from "../../assets/images/8. 3 BHK FLAT @ Sainikpuri/SAINIKPURI6.jpg";

import MYHOME1 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME1.jpg";
import MYHOME2 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME2.jpg";
import MYHOME3 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME3.jpg";
import MYHOME4 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME4.jpg";
import MYHOME5 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME5.jpg";
import MYHOME6 from "../../assets/images/9. MY HOME ANKURA VILLA 219 @ Tellapur/MYHOME6.jpg";

import v61 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v61.jpg";
import v62 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v62.jpg";
import v63 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v63.jpg";
import v64 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v64.jpg";
import v65 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v65.jpg";
import v66 from "../../assets/images/10. RAJAPUSHPA GREENDALE VILLA 259 @Tellapur/v66.jpg";

/* ---------- DATA ---------- */
const projects = [
  { title: "SUBISHI POLAM", location: "@Kompally", images: [SPK1, SPK2, SPK3, SPK4, SPK5, SPK6] },
  { title: "RAJAPUSHPA GREENDALE", location: "@Tellapur", images: [RGT1, RGT2, RGT3, RGT4, RGT5, RGT6] },
  { title: "INDEPENDENT VILLA", location: "@LB Nagar", images: [VILLA1, VILLA2, VILLA3, VILLA4, VILLA5, VILLA6] },

  { title: "4BHK PENTHOUSE", location: "@Kokapet", images: [PK1, PK2, PK3, PK4, PK5, PK6] },
  { title: "EMERALD GREENS", location: "@Kompally", images: [EM1, EM2, EM3, EM4, EM5, EM6] },

  { title: "CASHMERE COURT VILLA 04", location: "@Mokila", images: [v41, v42, v43, v44, v45, v46] },
  { title: "CASHMERE COURT VILLA 05", location: "@Mokila", images: [CASHMERE1, CASHMERE2, CASHMERE3, CASHMERE4, CASHMERE5, CASHMERE6] },
  { title: "3BHK FLAT", location: "@Sainikpuri", images: [SAINIKPURI1, SAINIKPURI2, SAINIKPURI3, SAINIKPURI4, SAINIKPURI5] },

  { title: "MY HOME ANKURA VILLA 219", location: "@Tellapur", images: [MYHOME1, MYHOME2, MYHOME3, MYHOME4, MYHOME5, MYHOME6] },
  { title: "RAJAPUSHPA GREENDALE VILLA 259", location: "@Tellapur", images: [v61, v62, v63, v64, v65, v66] },
];

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

  /* ---------- PRELOAD ---------- */
  useEffect(() => {
    if (!selectedProject) return;

    const next =
      selectedProject.images[(currentIndex + 1) % selectedProject.images.length];
    const prev =
      selectedProject.images[
        (currentIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      ];

    [next, prev].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentIndex, selectedProject]);

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
                : "grid-cols-1 md:grid-cols-2"
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
                  loading="lazy"
                  className="w-full h-[250px] md:h-[280px] object-cover group-hover:scale-105 transition duration-300"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300"></div>

                {/* TEXT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
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

              <h2 className="text-white text-sm md:text-base text-center">
                {selectedProject.title} {selectedProject.location}
              </h2>

              <button onClick={closeProject} className="text-white text-xl w-8">
                ✕
              </button>
            </div>

            {/* IMAGE */}
            <div className="relative flex items-center justify-center">
              <button onClick={prevSlide} className="absolute left-0 text-white text-3xl px-3">
                ‹
              </button>

              <img
                src={selectedProject.images[currentIndex]}
                loading="lazy"
                className="w-full max-h-[300px] md:max-h-[500px] object-contain transition-all duration-300"
              />

              <button onClick={nextSlide} className="absolute right-0 text-white text-3xl px-3">
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