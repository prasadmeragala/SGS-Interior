import { useState } from "react";
import Navbar from "../Navbar";
import sgs from "../../assets/videos/sgs vid.mp4";

const Header = () => {
  const videos = [sgs];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Loop video
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className=" h-screen sm:[h-80vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        key={currentVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        src={videos[currentVideo]}
        autoPlay
        loop
        muted
        onEnded={handleVideoEnd}
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Navbar */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;