import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  return (
    <a
      href="https://wa.me/919494963428?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white px-3 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:scale-110 transition z-[9999] font-bold"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
