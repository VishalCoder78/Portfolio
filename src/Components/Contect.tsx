import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Info } from "lucide-react";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vishal13", // ✅ Your EmailJS service ID
        "template_0jg0wef", // ✅ Your EmailJS template ID
        {
          from_name: formData.name,
          contact_info: formData.contact,
          message: formData.message,
        },
        "6Zdv3Od5RYWm4yt0y" // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Enquiry sent successfully!");
          setFormData({ name: "", contact: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="px-6 py-20 md:px-20 lg:px-32 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Send me an enquiry and let's discuss how I can bring your vision to life.
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2">
              Contact Details *
              <div className="relative group">
                <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-orange-500 transition-colors" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-10 border border-gray-700">
                  We'll use this information to reach out and respond to your inquiry.
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </label>

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="E-mail / WhatsApp number / Instagram handle"
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message *</label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
          >
            <span>✉</span>
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
