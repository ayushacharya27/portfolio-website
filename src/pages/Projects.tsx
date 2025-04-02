import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  
    {
      "title": "Project MIRA 2.0",
      "description": "An Autonomous Underwater Vehicle (AUV) designed for underwater exploration, and competitions hosted around the world.",
      "technologies": ["ROS1", "Python/C++", "PyTorch", "PCB Design", "OpenCV", "CAD Modelling", "PixHawk", "PyMavLink"],
      "image": "/MIRA.png",
      "liveUrl": "",
      "githubUrl": "https://github.com/DNT-Dev"
    },
    {
      "title": "EcoDex",
      "description": "An AI-powered environmental monitoring system that uses IoT sensors and real-time analytics to track ecological data and provide insights for sustainability.",
      "technologies": ["ROS1", "YOLOv8", "Arduino", "ESP32", "Electronics", "React", "Tailwind CSS", "Node.js", "MongoDB"],
      "image": "/EcoDex.png",
      "liveUrl": "https://project1.com",
      "githubUrl": "https://github.com/Gobi05-exe/EcoDex"
    },
    {
      "title": "Mars Rover DIY",
      "description": "A DIY Mars Rover equipped with visual odometry and advanced navigation techniques, enabling autonomous exploration and terrain mapping.",
      "technologies": ["Python", "ROS1", "Sensors", "Visual Odometry", "Optical Flow", "PID"],
      "image": "/Orion.png",
      "liveUrl": "",
      "githubUrl": "https://github.com/ayushacharya27/mars-rover"
    },
    {
      "title": "Stone Security System",
      "description": "A smart security system integrating embedded sensors, real-time monitoring, and remote access for enhanced property protection.",
      "technologies": ["Flask", "Arduino", "Python", "Sensors", "Raspberry Pi", "ngrok", "Firebase"],
      "image": "/Stone.png",
      "liveUrl": "https://ayushacharya27.github.io/cn-website/",
      "githubUrl": "https://github.com/ayushacharya27/stone-securitysystem"
    },
    {
      "title": "GameZone",
      "description": "An online gaming platform built with Next.js, featuring authentication, multiplayer support, and real-time interaction.",
      "technologies": ["React", "Next.js", "SupaBase", "NextAuth.js"],
      "image": "/GameZone.png",
      "liveUrl": "",
      "githubUrl": "https://github.com/AaravTandon24/gamezone"
    },
    {
      "title": "Gesture Controlled Bot",
      "description": "A robotic vehicle controlled through hand gestures using an ESP32 and real-time data processing for intuitive navigation.",
      "technologies": ["ESP32", "Python", "React", "MongoDB"],
      "image": "/Gesture.png",
      "liveUrl": "",
      "githubUrl": "https://github.com/ayushacharya27/gesture-controlled-car"
    },
    {
      "title": "Smart Parking System",
      "description": "An IoT-based smart parking solution with real-time availability tracking and automated payment processing for urban spaces.",
      "technologies": ["Arduino", "React", "Node.js", "MongoDB"],
      "image": "/Parking.png",
      "liveUrl": "https://github.com/yourusername/smart-parking",
      "githubUrl": "https://github.com/ayushacharya27/robotics-projects"
    },
    {
      "title": "CozmoClench Bot",
      "description": "A high-performance robotic bot designed for controlled gripping and movement using an RC controller and Sabertooth motor driver.",
      "technologies": ["Arduino", "RC Controller", "Sabertooth MotorDriver"],
      "image": "/cozmo.jpg",
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "title": "Obstacle Avoidance Bot (Using CV)",
      "description": "A vision-based autonomous bot that detects and avoids obstacles in real-time using YOLOv8 and Raspberry Pi.",
      "technologies": ["Arduino", "YOLOv8", "Raspberry Pi", "Serial"],
      "image": "/obst.png",
      "liveUrl": "https://github.com/yourusername/smart-parking",
      "githubUrl": "https://github.com/ayushacharya27/robotics-projects"
    },  
    {
      "title": "And Many More....",
      "description": "Visit My Github Profile to explore more innovative projects.",
      "technologies": [],
      "image": "/more.png",
      "liveUrl": "",
      "githubUrl": "https://github.com/ayushacharya27"
    }
  
  
];

const Projects = () => {
  return (
    <section className="min-h-screen section-padding pt-24">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="heading-1">My Projects</h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            A collection of my work showcasing my skills in hardware design, embedded systems,
            and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary rounded-lg overflow-hidden group h-full"
              >
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-[300px] overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-tertiary transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowTopRightOnSquareIcon className="w-6 h-6 text-secondary" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <CodeBracketIcon className="w-6 h-6 text-secondary" />
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 