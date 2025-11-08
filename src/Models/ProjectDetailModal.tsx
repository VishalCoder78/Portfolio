import { useEffect } from "react";
import { X } from "lucide-react";

interface ProjectCardProps {
  image: string;
  label: string;
  title: string;
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectCardProps | null;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
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

  // Get detailed information based on project type
  const getProjectDetails = (title: string) => {
    const details: Record<string, { description: string; features: string[]; tools: string[] }> = {
      "Cinematic Shorts": {
        description: "Creating visually stunning cinematic short films that capture emotion and tell compelling stories through expert editing, color grading, and visual effects.",
        features: [
          "Professional color grading",
          "Cinematic transitions",
          "Sound design & mixing",
          "Visual effects integration",
          "Story-driven narrative structure"
        ],
        tools: ["Adobe Premiere Pro"]
      },
      "Story Visualization": {
        description: "Transforming narratives into engaging visual stories with strategic pacing, emotional beats, and seamless storytelling techniques.",
        features: [
          "Narrative structure development",
          "Emotional pacing",
          "Character development through editing",
          "Scene transitions",
          "Story arc optimization"
        ],
        tools: ["Premiere Pro", "Final Cut Pro", "Storyboarding Tools"]
      },
      "Music Videos": {
        description: "Producing dynamic music videos that sync perfectly with beats, creating visual rhythm and enhancing the musical experience.",
        features: [
          "Beat-synced editing",
          "Dynamic visual effects",
          "Performance enhancement",
          "Color correction",
          "Lip-sync precision"
        ],
        tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
      },
      "Motion Graphics": {
        description: "Designing and animating motion graphics that bring static elements to life, creating engaging visual content for various media.",
        features: [
          "2D & 3D animations",
          "Typography animation",
          "Logo animations",
          "Infographic animations",
          "Visual effects integration"
        ],
        tools: ["After Effects", "Cinema 4D", "Illustrator", "Photoshop"]
      },
      "3D Animation (Intermediate)": {
        description: "Creating intermediate-level 3D animations and renders that add depth and dimension to video projects.",
        features: [
          "3D modeling basics",
          "Texturing and lighting",
          "Animation principles",
          "Rendering optimization",
          "Integration with video"
        ],
        tools: ["Blender", "Cinema 4D", "After Effects", "3D Modeling Software"]
      },
      "Color Grading (Basic)": {
        description: "Applying fundamental color grading techniques to enhance mood, create visual consistency, and elevate the overall look of videos.",
        features: [
          "Color correction",
          "Mood enhancement",
          "Skin tone correction",
          "LUT application",
          "Basic color theory"
        ],
        tools: ["DaVinci Resolve", "Premiere Pro", "Color Grading LUTs"]
      }
    };

    return details[title] || {
      description: "Professional video editing and creative work.",
      features: ["High-quality editing", "Creative storytelling", "Professional output"],
      tools: ["Industry-standard tools"]
    };
  };

  if (!project) return null;

  const projectDetails = getProjectDetails(project.title);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      style={{ backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)' }}
    >
      <div
        className={`bg-gray-900 rounded-lg border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300 ${
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
        <div>
          {/* Image Header */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">
                {project.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-orange-500">About This Project</h3>
              <p className="text-gray-300 leading-relaxed">{projectDetails.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projectDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {projectDetails.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 text-sm hover:border-orange-500 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
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

export default ProjectDetailModal;

