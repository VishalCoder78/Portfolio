import React from 'react';
import { Gamepad, ScissorsLineDashed, SparklesIcon, Ellipsis, Instagram, Youtube, Mail,  } from 'lucide-react';
import { CameraIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectCardProps {
  image: string;
  label: string;
  title: string;
}

interface VideoCardProps {
  image: string;
  title: string;
  description: string;
}

const App = () => {
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

  const featuredProjects: ProjectCardProps[] = [
    {
      image: "https://csspicker.dev/api/image/?q=cinematic+dark+light&image_type=photo",
      label: "Cinematic",
      title: "Cinematic Shorts"
    },
    {
      image: "https://csspicker.dev/api/image/?q=story+visualization+cave&image_type=photo",
      label: "Story Telling",
      title: "Story Visualization"
    },
    {
      image: "https://csspicker.dev/api/image/?q=music+neon+lights&image_type=photo",
      label: "Music",
      title: "Music Videos"
    },
    {
      image: "https://csspicker.dev/api/image/?q=motion+graphics+purple&image_type=illustration",
      label: "Motion Graphics",
      title: "Motion Graphics"
    },
    {
      image: "https://csspicker.dev/api/image/?q=3d+animation+abstract&image_type=illustration",
      label: "3D Animation",
      title: "3D Animation (Intermediate)"
    },
    {
      image: "https://csspicker.dev/api/image/?q=color+grading+cinematic&image_type=photo",
      label: "Color Grading",
      title: "Color Grading (Basic)"
    }
  ];

  const previousProjects: VideoCardProps[] = [
    {
      image: "https://csspicker.dev/api/image/?q=video+thumbnail+youtube&image_type=photo",
      title: "Latest Cinematic Short Film - 2025",
      description: "A behind-the-scenes look at creating cinematic short films with professional techniques"
    },
    {
      image: "https://csspicker.dev/api/image/?q=minecraft+adventure+series&image_type=photo",
      title: "Minecraft Adventure Series - Episode 1",
      description: "Epic Minecraft adventure series with engaging gameplay and creative storytelling"
    },
    {
      image: "https://csspicker.dev/api/image/?q=motion+graphics+showreel&image_type=photo",
      title: "Motion Graphics Showreel 2025",
      description: "Showcase of stunning motion graphics and visual effects work"
    },
    {
      image: "https://csspicker.dev/api/image/?q=color+grading+tutorial&image_type=photo",
      title: "Color Grading Tutorial - Cinematic Look",
      description: "Learn professional color grading techniques to achieve cinematic looks"
    },
    {
      image: "https://csspicker.dev/api/image/?q=story+structure+video&image_type=photo",
      title: "Story Structure in Video Editing",
      description: "Understanding the fundamentals of crafting compelling narratives"
    },
    {
      image: "https://csspicker.dev/api/image/?q=3d+animation+process&image_type=photo",
      title: "Behind the Scenes - 3D Animation Process",
      description: "Explore the process of 3D animation production and creative techniques"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className='bg-[url(/Images/BG.jpg)]'>
      <section className="relative px-6 py-20 md:px-20 lg:px-32 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">VISHAL</h1>
            <p className="text-gray-400 text-lg mb-6">Professional Video Editor & Storyteller</p>
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Transforming raw footage into compelling visual narratives and captivating stories that bring ideas to life through the power of editing
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-orange-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold transition cursor-pointer">
                Get In Touch
              </button>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <Instagram />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <Youtube />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <Mail />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500">
              <img 
                src="https://csspicker.dev/api/image/?q=professional+video+editor&image_type=photo" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
</div>
      {/* Featured Projects Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Featured <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-gray-400">Showcasing my latest video editing and creative work</p>
            </div>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
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
      </section>

      {/* Previous Projects Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Previous <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-gray-400">Watch my latest video editing work and creative projects from my @Vizmer YouTube channel</p>
            </div>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
              More Work
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {previousProjects.map((video, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-800 flex items-center justify-center group cursor-pointer">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-2 py-1 rounded font-bold">
                    4 K
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{video.description}</p>
                  <a href="#" className="text-orange-500 text-sm hover:underline">Watch on YouTube</a>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition flex items-center gap-2">
            <span>▶</span>
            Visit Youtube Channel
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 md:px-20 lg:px-32 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Have a project in mind? Send me an enquiry and let's discuss how I can bring your vision to life.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name *</label>
              <input 
                type="text"
                placeholder="Your full name"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Address *</label>
              <input 
                type="email"
                placeholder="Your address"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message *</label>
              <textarea 
                rows={6}
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
    </div>
  );
};

export default App;