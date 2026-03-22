import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  return (
    <a
      href="https://wa.me/919494963428?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
