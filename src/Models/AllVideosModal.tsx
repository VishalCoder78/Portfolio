import { useEffect } from "react";
import { X, Youtube } from "lucide-react";

interface VideoCardProps {
  image: string;
  title: string;
  description: string;
  videoUrl: string;
  channelUrl: string;
  channelName?: string;
}

interface AllVideosModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: VideoCardProps[];
}

const AllVideosModal = ({ isOpen, onClose, videos }: AllVideosModalProps) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      style={{ backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)' }}
    >
      <div
        className={`bg-gray-900 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-gray-900 rounded-full p-2"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              All <span className="text-orange-500">Videos</span>
            </h2>
            <p className="text-gray-400">Watch all my video editing work and creative projects</p>
          </div>

          {/* Videos Grid - YouTube Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="cursor-pointer group"
              >
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden mb-3">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play button overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-black/70 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Info - YouTube Style */}
                  <div className="flex gap-3">
                    {/* YouTube Channel Icon */}
                    <a
                      href={video.channelUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-red-600 shrink-0 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <Youtube className="w-5 h-5 text-white" />
                    </a>
                    
                    {/* Title and Channel */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {video.title}
                      </h3>
                      <a
                        href={video.channelUrl}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-xs hover:text-white transition-colors block"
                      >
                        {video.channelName || 'Vizmer'}
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-4 text-center">
          <p className="text-gray-400 text-sm">
            Press <span className="text-orange-500 font-semibold">ESC</span> to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllVideosModal;
