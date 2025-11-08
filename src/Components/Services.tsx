import { Gamepad, ScissorsLineDashed, SparklesIcon, Ellipsis,  } from 'lucide-react';
import { CameraIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  
const Services = () => {

    const services: ServiceCardProps[] = [
        {
          icon: <CameraIcon className="w-8 h-8" />,
          title: "Cinematography",
          description: "Professional cinematography services with creative camera work and visual storytelling techniques"
        },
        {
          icon: <DocumentTextIcon className="w-8 h-8" />,
          title: "Story Structure",
          description: "Crafting compelling narratives with proper story structure and engaging plot development"
        },
        {
          icon: <Gamepad className="w-8 h-8" />,
          title: "Minecraft Video Editing",
          description: "Specialized editing for Minecraft content with dynamic gameplay footage and creative transitions"
        },
        {
          icon: <ScissorsLineDashed className="w-8 h-8" />,
          title: "Smooth Transitions",
          description: "Seamless transitions and cuts that enhance your content flow and visual appeal"
        },
        {
          icon: <SparklesIcon className="w-8 h-8" />,
          title: "Motion Graphics",
          description: "Create stunning animated graphics and visual effects that enhance your storytelling"
        },
        {
          icon: <Ellipsis className="w-8 h-8" />,
          title: "And So On...",
          description: "Additional video editing services tailored to your specific project needs and creative vision"
        }
      ];

    return (
        <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive video editing and post-production services to bring your creative vision to life
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Services;