import { useEffect } from "react";
import { X, Mail, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      style={{ backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)' }}
    >
      <div
        className={`bg-gray-900 rounded-lg border border-gray-700 p-8 max-w-md w-full mx-4 relative transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:qrvishalkumar@gmail.com"
                  className="text-white hover:text-orange-500 transition-colors break-all"
                >
                  qrvishalkumar@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/9288341483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  +91 9288341483
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Press <span className="text-orange-500 font-semibold">ESC</span> to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

