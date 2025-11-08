import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AllVideosModal from "../Models/AllVideosModal";

interface VideoCardProps {
    image: string;
    title: string;
    description: string;
    videoUrl: string;
    channelUrl: string;
    channelName?: string;
}

interface YouTubeOEmbed {
    title: string;
    thumbnail_url: string;
    thumbnail_width: number;
    thumbnail_height: number;
    author_name: string;
    author_url: string;
}

const VideosLinks: string[] = [
  "https://www.youtube.com/watch?v=xy0YDd2FTa4",
  "https://www.youtube.com/watch?v=KNBRbCdg_uw",
  "https://www.youtube.com/watch?v=avUb7e9sofs",
  "https://www.youtube.com/watch?v=cH9eFzq9hZI",
  "https://www.youtube.com/watch?v=G5xg5dKF1AQ",
  "https://www.youtube.com/watch?v=UAiUufClZDY",
  "https://www.youtube.com/watch?v=T__HKAJwRBk"
];

const PreviousProject = () => {
  const [previousProjects, setPreviousProjects] = useState<VideoCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAllVideosModalOpen, setIsAllVideosModalOpen] = useState(false);

  const handleMoreWorkClick = () => {
    setIsAllVideosModalOpen(true);
  };

  const handleCloseAllVideosModal = () => {
    setIsAllVideosModalOpen(false);
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoPromises = VideosLinks.map(async (link) => {
          try {
            // Fetch video metadata from YouTube oEmbed API
            const oEmbedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(link)}&format=json`;
            const response = await fetch(oEmbedUrl);
            
            if (!response.ok) {
              throw new Error(`Failed to fetch video data for ${link}`);
            }
            
            const data: YouTubeOEmbed = await response.json();
            
            return {
              image: data.thumbnail_url,
              title: data.title,
              description: `Watch this video on YouTube to see the full content and description.`, // Placeholder - description requires YouTube Data API
              videoUrl: link,
              channelUrl: data.author_url || 'https://www.youtube.com/@Vizmer', // Fallback to your channel if not available
              channelName: data.author_name || 'Vizmer'
            };
          } catch (error) {
            console.error(`Error fetching video data for ${link}:`, error);
            // Return fallback data if fetch fails
            return {
              image: "https://csspicker.dev/api/image/?q=video+thumbnail+youtube&image_type=photo",
              title: "Video Title",
              description: "Unable to load video information",
              videoUrl: link,
              channelUrl: 'https://www.youtube.com/@Vizmer', // Fallback channel
              channelName: 'Vizmer'
            };
          }
        });

        const videos = await Promise.all(videoPromises);
        setPreviousProjects(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

    return (
        <section className="px-6 py-20 md:px-20 lg:px-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Previous <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-gray-400">Watch my latest video editing work and creative projects from my @Vizmer YouTube channel</p>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {VideosLinks.map((_, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 animate-pulse"
                >
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-800 rounded mb-2"></div>
                    <div className="h-4 bg-gray-800 rounded mb-3"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Show only first 5 videos */}
              {previousProjects.slice(0, 5).map((video, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300"
                >
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative h-48 bg-gray-800 flex items-center justify-center group cursor-pointer"
                  >
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
                    
                  </a>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{video.description}</p>
                    <a 
                      href={video.channelUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-500 text-sm hover:underline"
                    >
                      Visit Channel
                    </a>
                  </div>
                </div>
              ))}
              
              {/* More Work Card */}
              <div 
                onClick={handleMoreWorkClick}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center min-h-[280px]"
              >
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-3">More Work</h3>
                  <div className="flex items-center justify-center text-orange-500 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">View All Videos</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          )}
          <a href='https://www.youtube.com/@Vizmer' target='_blank' rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition flex items-center gap-2 w-fit">
            <span>▶</span>
            Visit Youtube Channel
          </a>
        </div>

        {/* All Videos Modal */}
        <AllVideosModal
          isOpen={isAllVideosModalOpen}
          onClose={handleCloseAllVideosModal}
          videos={previousProjects}
        />
      </section>
    )
}

export default PreviousProject;