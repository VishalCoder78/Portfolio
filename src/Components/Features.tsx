import { useState } from "react";
import ProjectDetailModal from "../Models/ProjectDetailModal";

interface ProjectCardProps {
    image: string;
    label: string;
    title: string;
  }
const Features = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: ProjectCardProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

    const featuredProjects: ProjectCardProps[] = [
        {
          image: "/Images/Cinematics.jpg",
          label: "Cinematic",
          title: "Cinematic Shorts"
        },
        {
          image: "/Images/StoryTelling.jpg",
          label: "Story Telling",
          title: "Story Visualization"
        },
        {
          image: "/Images/Music.jpg",
          label: "Music",
          title: "Music Videos"
        },
        {
          image: "/Images/Motion.png",
          label: "Motion Graphics",
          title: "Motion Graphics"
        },
        {
          image: "/Images/3D-Render.jpg",
          label: "3D Animation",
          title: "3D Animation (Intermediate)"
        },
        {
          image: "/Images/Color-Gradient.jpg",
          label: "Color Grading",
          title: "Color Grading (Basic)"
        }
      ];
    return (
    <section className="px-6 py-20 md:px-20 lg:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Featured <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-gray-400">Showcasing my latest video editing and creative work</p>
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(project)}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.label}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </section>
    )
}

export default Features;