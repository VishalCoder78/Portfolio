import { useState } from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import Features from "./Components/Features";
import PreviousProject from "./Components/PreviousProject";
import Contect from "./Components/Contect";
import Services from "./Components/Services";
import ContactModal from "./Models/ContactModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[url(/Images/BG.jpg)] relative">
        <section className="relative px-6 py-20 md:px-20 lg:px-32 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-wider uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.2em' }}>VISHAL</h1>
            <p className="text-gray-400 text-lg mb-6">
              Professional Video Editor & Storyteller
            </p>
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Transforming raw footage into compelling visual narratives and
              captivating stories that bring ideas to life through the power
              of editing
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold transition cursor-pointer"
              >
                Get In Touch
              </button>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/igv1.shal/?igsh=MThkOG9oMTR5anR3#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.youtube.com/@Vizmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition"
                >
                  <Youtube />
                </a>
                <a
                  href="mailto:vishalcoder78@gmail.com"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Black gradient overlay at bottom for smooth blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

        {/* Services Section */}
        <Services />
      </div>
      {/* Featured Projects Section */}
      <Features />

      {/* Previous Projects Section */}
      <PreviousProject />

      {/* Contact Section */}
      <Contect />
      
      <div className="h-10 bg-orange-500"></div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
