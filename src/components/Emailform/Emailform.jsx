// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const serviceId = "service_nujcps1";
//     const templateId = "template_3i1lwdq";
//     const publicKey = "LNgvvsyDboN2GOEeQ";

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       from_phone: phone,
//       to_name: "TheSGS",
//       message: message,
//     };

//     emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         setName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="EmailForm flex flex-col gap-4">
//       <label className="block text-sm font-medium text-gray-700">Full Name</label>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="p-2 bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
//       />

//       <label className="block text-sm font-medium text-gray-700">Email</label>
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="p-2 bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
//       />

//       <label className="block text-sm font-medium text-gray-700">Phone</label>
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//         className="p-2 bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
//       />

//       <label className="block text-sm font-medium text-gray-700">Message</label>
//       <textarea
//         placeholder="Your Message"
//         rows={4}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//         className="p-3 bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
//       ></textarea>

//       <button
//         type="submit"
//         style={{
//           border: "1px solid white",
//           padding: "10px 15px",
//           borderRadius: "1px",
//           background: "transparent",
//           color: "#FAFAFA",
//           cursor: "pointer",
//           transition: "background 0.3s ease, color 0.3s ease",
//           display: "flex",
//           justifyContent: "center",
//         }}
//         onMouseOver={(e) => {
//           e.currentTarget.style.background = "white";
//           e.currentTarget.style.color = "black";
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.background = "transparent";
//           e.currentTarget.style.color = "white";
//         }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default EmailForm;
