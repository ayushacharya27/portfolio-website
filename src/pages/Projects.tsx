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
  overview: string;
  keyFeatures: string[];
  technicalImplementation: string;
  resultsAndImpact: string;
  currentUpdates: {
    latest: {
      title: string;
      date: string;
    };
    recent: {
      title: string;
      date: string;
    }[];
    comingSoon: string[];
  };
  galleryImages: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    "title": "Project MIRA 2.0",
    "description": "An Autonomous Underwater Vehicle (AUV) designed for underwater exploration, and competitions hosted around the world.",
    "technologies": ["ROS1", "Python/C++", "PyTorch", "PCB Design", "OpenCV", "CAD Modelling", "PixHawk", "PyMavLink"],
    "image": "/MIRA.png",
    "liveUrl": "",
    "githubUrl": "https://github.com/DNT-Dev",
    "overview": "Project MIRA 2.0 is an advanced Autonomous Underwater Vehicle designed for underwater exploration and competitions. The project focuses on developing a robust and efficient AUV capable of autonomous navigation, object detection, and data collection in underwater environments.",
    "keyFeatures": [
      "Autonomous navigation using ROS1 and PixHawk",
      "Real-time object detection with PyTorch and OpenCV",
      "Custom PCB design for power management",
      "CAD modeling for hydrodynamic efficiency",
      "Wireless communication system"
    ],
    "technicalImplementation": "The AUV uses a combination of ROS1 for high-level control and PixHawk for low-level control. The navigation system integrates IMU data with visual odometry for precise positioning. The object detection system uses a custom-trained YOLOv8 model running on an onboard NVIDIA Jetson. Power management is handled by a custom-designed PCB that ensures efficient power distribution to all subsystems.",
    "resultsAndImpact": "Project MIRA 2.0 has successfully participated in multiple international AUV competitions, achieving top rankings in autonomous navigation and object detection tasks. The project has contributed to the development of open-source underwater robotics tools and has been used as a reference for other AUV projects.",
    "currentUpdates": {
      "latest": {
        "title": "Implemented new navigation algorithm",
        "date": "2024-03-15"
      },
      "recent": [
        {
          "title": "Added real-time object detection",
          "date": "2024-03-01"
        },
        {
          "title": "Optimized power consumption",
          "date": "2024-02-15"
        }
      ],
      "comingSoon": [
        "AI-powered path planning",
        "Enhanced sensor fusion",
        "Underwater mapping capabilities"
      ]
    },
    "galleryImages": [
      { "src": "/MIRA.png", "alt": "MIRA 2.0 Overview" },
      { "src": "/MIRA-detail1.jpg", "alt": "Navigation System" },
      { "src": "/MIRA-detail2.jpg", "alt": "Object Detection" }
    ]
  },
  {
    "title": "EcoDex",
    "description": "An AI-powered environmental monitoring system that uses IoT sensors and real-time analytics to track ecological data and provide insights for sustainability.",
    "technologies": ["ROS1", "YOLOv8", "Arduino", "ESP32", "Electronics", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    "image": "/EcoDex.png",
    "liveUrl": "https://project1.com",
    "githubUrl": "https://github.com/Gobi05-exe/EcoDex",
    "overview": "EcoDex is an innovative environmental monitoring system that combines IoT sensors with AI to provide real-time ecological data analysis. The system helps in tracking environmental parameters and provides actionable insights for sustainability initiatives.",
    "keyFeatures": [
      "Real-time environmental data monitoring",
      "AI-powered data analysis and predictions",
      "Custom IoT sensor network",
      "Interactive dashboard for data visualization",
      "Automated alerts and notifications"
    ],
    "technicalImplementation": "The system uses ESP32 microcontrollers for sensor data collection, which is then processed by a Node.js backend. The frontend is built with React and Tailwind CSS, providing a responsive dashboard. YOLOv8 is used for image-based environmental monitoring, and MongoDB stores the collected data.",
    "resultsAndImpact": "EcoDex has been successfully deployed in multiple locations, providing valuable environmental data and insights. The system has helped in identifying environmental trends and supporting sustainability initiatives.",
    "currentUpdates": {
      "latest": {
        "title": "Added new sensor types",
        "date": "2024-03-10"
      },
      "recent": [
        {
          "title": "Improved data visualization",
          "date": "2024-02-28"
        },
        {
          "title": "Enhanced AI models",
          "date": "2024-02-15"
        }
      ],
      "comingSoon": [
        "Mobile app integration",
        "Advanced predictive analytics",
        "Blockchain-based data verification"
      ]
    },
    "galleryImages": [
      { "src": "/EcoDex.png", "alt": "EcoDex Overview" },
      { "src": "/EcoDex-detail1.jpg", "alt": "Sensor Network" },
      { "src": "/EcoDex-detail2.jpg", "alt": "Dashboard" }
    ]
  },
  {
    "title": "Mars Rover DIY",
    "description": "A DIY Mars Rover equipped with visual odometry and advanced navigation techniques, enabling autonomous exploration and terrain mapping.",
    "technologies": ["Python", "ROS1", "Sensors", "Visual Odometry", "Optical Flow", "PID"],
    "image": "/Orion.png",
    "liveUrl": "",
    "githubUrl": "https://github.com/ayushacharya27/mars-rover",
    "overview": "The Mars Rover DIY project is a comprehensive exploration of autonomous robotics, focusing on terrain navigation and mapping capabilities similar to those used in actual Mars rovers.",
    "keyFeatures": [
      "Visual odometry for precise navigation",
      "Terrain mapping and analysis",
      "Autonomous obstacle avoidance",
      "Real-time sensor data processing",
      "Custom control algorithms"
    ],
    "technicalImplementation": "The rover uses ROS1 for high-level control and Python for implementing various algorithms. Visual odometry is achieved through camera data processing, while optical flow helps in motion estimation. PID controllers ensure precise movement and stability.",
    "resultsAndImpact": "The project has successfully demonstrated autonomous navigation capabilities in various terrains. It has been used as an educational tool and has contributed to the development of open-source robotics solutions.",
    "currentUpdates": {
      "latest": {
        "title": "Implemented new navigation algorithm",
        "date": "2024-03-12"
      },
      "recent": [
        {
          "title": "Added terrain mapping",
          "date": "2024-02-25"
        },
        {
          "title": "Improved obstacle detection",
          "date": "2024-02-10"
        }
      ],
      "comingSoon": [
        "3D terrain reconstruction",
        "Multi-robot coordination",
        "Advanced path planning"
      ]
    },
    "galleryImages": [
      { "src": "/Orion.png", "alt": "Mars Rover Overview" },
      { "src": "/Orion-detail1.jpg", "alt": "Navigation System" },
      { "src": "/Orion-detail2.jpg", "alt": "Terrain Mapping" }
    ]
  },
  {
    "title": "Stone Security System",
    "description": "A smart security system integrating embedded sensors, real-time monitoring, and remote access for enhanced property protection.",
    "technologies": ["Flask", "Arduino", "Python", "Sensors", "Raspberry Pi", "ngrok", "Firebase"],
    "image": "/Stone.png",
    "liveUrl": "https://ayushacharya27.github.io/cn-website/",
    "githubUrl": "https://github.com/ayushacharya27/stone-securitysystem",
    "overview": "Stone Security System is a comprehensive security solution that combines hardware sensors with a web-based monitoring interface, providing real-time security alerts and remote access capabilities.",
    "keyFeatures": [
      "Real-time security monitoring",
      "Remote access and control",
      "Multiple sensor integration",
      "Automated alerts and notifications",
      "User-friendly web interface"
    ],
    "technicalImplementation": "The system uses Arduino and Raspberry Pi for sensor data collection and processing. A Flask backend handles data management and user authentication, while Firebase provides real-time database capabilities. The frontend is built with modern web technologies for responsive monitoring.",
    "resultsAndImpact": "The system has been successfully deployed in multiple locations, providing reliable security monitoring and peace of mind to users. It has demonstrated significant improvements in response times to security events.",
    "currentUpdates": {
      "latest": {
        "title": "Added facial recognition",
        "date": "2024-03-08"
      },
      "recent": [
        {
          "title": "Improved alert system",
          "date": "2024-02-20"
        },
        {
          "title": "Enhanced mobile app",
          "date": "2024-02-05"
        }
      ],
      "comingSoon": [
        "AI-powered threat detection",
        "Voice control integration",
        "Smart home integration"
      ]
    },
    "galleryImages": [
      { "src": "/Stone.png", "alt": "Security System Overview" },
      { "src": "/Stone-detail1.jpg", "alt": "Sensor Network" },
      { "src": "/Stone-detail2.jpg", "alt": "Monitoring Interface" }
    ]
  },
  {
    "title": "GameZone",
    "description": "An online gaming platform built with Next.js, featuring authentication, multiplayer support, and real-time interaction.",
    "technologies": ["React", "Next.js", "SupaBase", "NextAuth.js"],
    "image": "/GameZone.png",
    "liveUrl": "",
    "githubUrl": "https://github.com/AaravTandon24/gamezone",
    "overview": "GameZone is a modern gaming platform that brings together players from around the world, offering a seamless gaming experience with real-time multiplayer capabilities and social features.",
    "keyFeatures": [
      "Real-time multiplayer gaming",
      "User authentication and profiles",
      "Social features and chat",
      "Game statistics and leaderboards",
      "Responsive design for all devices"
    ],
    "technicalImplementation": "Built with Next.js for optimal performance and SEO, the platform uses SupaBase for real-time data management and NextAuth.js for secure authentication. The frontend is built with React and styled with modern CSS frameworks.",
    "resultsAndImpact": "GameZone has successfully created an engaging gaming community with thousands of active users. The platform has received positive feedback for its performance and user experience.",
    "currentUpdates": {
      "latest": {
        "title": "Added new game modes",
        "date": "2024-03-05"
      },
      "recent": [
        {
          "title": "Improved matchmaking",
          "date": "2024-02-18"
        },
        {
          "title": "Enhanced chat system",
          "date": "2024-02-01"
        }
      ],
      "comingSoon": [
        "Tournament system",
        "Mobile app version",
        "Streaming integration"
      ]
    },
    "galleryImages": [
      { "src": "/GameZone.png", "alt": "GameZone Overview" },
      { "src": "/GameZone-detail1.jpg", "alt": "Game Interface" },
      { "src": "/GameZone-detail2.jpg", "alt": "User Profile" }
    ]
  },
  {
    "title": "Gesture Controlled Bot",
    "description": "A robotic vehicle controlled through hand gestures using an ESP32 and real-time data processing for intuitive navigation.",
    "technologies": ["ESP32", "Python", "React", "MongoDB"],
    "image": "/Gesture.png",
    "liveUrl": "",
    "githubUrl": "https://github.com/ayushacharya27/gesture-controlled-car",
    "overview": "The Gesture Controlled Bot project explores innovative ways of human-robot interaction through hand gestures, making robot control more intuitive and accessible.",
    "keyFeatures": [
      "Real-time gesture recognition",
      "Wireless control via ESP32",
      "Custom gesture mapping",
      "Responsive movement control",
      "User-friendly interface"
    ],
    "technicalImplementation": "The system uses ESP32 for gesture detection and wireless communication. Python processes the gesture data and controls the robot's movements. A React-based dashboard provides real-time monitoring and control options.",
    "resultsAndImpact": "The project has demonstrated successful gesture-based control with high accuracy and responsiveness. It has potential applications in accessibility and human-robot interaction research.",
    "currentUpdates": {
      "latest": {
        "title": "Added new gestures",
        "date": "2024-03-03"
      },
      "recent": [
        {
          "title": "Improved accuracy",
          "date": "2024-02-15"
        },
        {
          "title": "Enhanced control interface",
          "date": "2024-02-01"
        }
      ],
      "comingSoon": [
        "AI-powered gesture learning",
        "Multi-robot control",
        "Advanced motion patterns"
      ]
    },
    "galleryImages": [
      { "src": "/Gesture.png", "alt": "Gesture Bot Overview" },
      { "src": "/Gesture-detail1.jpg", "alt": "Gesture Recognition" },
      { "src": "/Gesture-detail2.jpg", "alt": "Control Interface" }
    ]
  },
  {
    "title": "Smart Parking System",
    "description": "An IoT-based smart parking solution with real-time availability tracking and automated payment processing for urban spaces.",
    "technologies": ["Arduino", "React", "Node.js", "MongoDB"],
    "image": "/Parking.png",
    "liveUrl": "https://github.com/yourusername/smart-parking",
    "githubUrl": "https://github.com/ayushacharya27/robotics-projects",
    "overview": "The Smart Parking System is an IoT solution that addresses urban parking challenges by providing real-time parking space availability and automated payment processing.",
    "keyFeatures": [
      "Real-time parking space monitoring",
      "Automated payment processing",
      "Mobile app integration",
      "Parking analytics dashboard",
      "Reservation system"
    ],
    "technicalImplementation": "The system uses Arduino-based sensors for space detection, a Node.js backend for data processing, and MongoDB for data storage. The frontend is built with React, providing a responsive interface for users and administrators.",
    "resultsAndImpact": "The system has been successfully tested in multiple locations, showing significant improvements in parking space utilization and user satisfaction. It has reduced parking search time by up to 40%.",
    "currentUpdates": {
      "latest": {
        "title": "Added payment integration",
        "date": "2024-03-01"
      },
      "recent": [
        {
          "title": "Improved sensor accuracy",
          "date": "2024-02-12"
        },
        {
          "title": "Enhanced mobile app",
          "date": "2024-01-28"
        }
      ],
      "comingSoon": [
        "AI-powered parking prediction",
        "Electric vehicle charging integration",
        "Smart city integration"
      ]
    },
    "galleryImages": [
      { "src": "/Parking.png", "alt": "Parking System Overview" },
      { "src": "/Parking-detail1.jpg", "alt": "Sensor Network" },
      { "src": "/Parking-detail2.jpg", "alt": "User Interface" }
    ]
  },
  {
    "title": "CozmoClench Bot",
    "description": "A high-performance robotic bot designed for controlled gripping and movement using an RC controller and Sabertooth motor driver.",
    "technologies": ["Arduino", "RC Controller", "Sabertooth MotorDriver"],
    "image": "/cozmo.jpg",
    "liveUrl": "",
    "githubUrl": "",
    "overview": "CozmoClench Bot is a specialized robotic system designed for precise gripping and movement control, combining RC technology with advanced motor control.",
    "keyFeatures": [
      "Precise gripping mechanism",
      "RC-based control system",
      "High-performance motor control",
      "Custom mechanical design",
      "Real-time feedback system"
    ],
    "technicalImplementation": "The bot uses Arduino for control logic and the Sabertooth motor driver for precise motor control. The RC controller provides intuitive user input, while custom mechanical components ensure reliable operation.",
    "resultsAndImpact": "The bot has demonstrated excellent performance in various gripping and movement tasks, showing potential for industrial and educational applications.",
    "currentUpdates": {
      "latest": {
        "title": "Improved gripping mechanism",
        "date": "2024-02-28"
      },
      "recent": [
        {
          "title": "Enhanced motor control",
          "date": "2024-02-10"
        },
        {
          "title": "Added feedback system",
          "date": "2024-01-25"
        }
      ],
      "comingSoon": [
        "AI-powered object recognition",
        "Autonomous operation mode",
        "Advanced control algorithms"
      ]
    },
    "galleryImages": [
      { "src": "/cozmo.jpg", "alt": "CozmoClench Overview" },
      { "src": "/cozmo-detail1.jpg", "alt": "Gripping Mechanism" },
      { "src": "/cozmo-detail2.jpg", "alt": "Control System" }
    ]
  },
  {
    "title": "Obstacle Avoidance Bot (Using CV)",
    "description": "A vision-based autonomous bot that detects and avoids obstacles in real-time using YOLOv8 and Raspberry Pi.",
    "technologies": ["Arduino", "YOLOv8", "Raspberry Pi", "Serial"],
    "image": "/obst.png",
    "liveUrl": "https://github.com/yourusername/smart-parking",
    "githubUrl": "https://github.com/ayushacharya27/robotics-projects",
    "overview": "The Obstacle Avoidance Bot project explores computer vision-based navigation, using YOLOv8 for real-time obstacle detection and avoidance in dynamic environments.",
    "keyFeatures": [
      "Real-time obstacle detection",
      "Autonomous navigation",
      "Computer vision processing",
      "Dynamic path planning",
      "Multi-sensor integration"
    ],
    "technicalImplementation": "The system uses YOLOv8 running on a Raspberry Pi for obstacle detection, with Arduino handling motor control. Serial communication ensures smooth data transfer between components, while custom algorithms handle path planning.",
    "resultsAndImpact": "The bot has demonstrated successful obstacle avoidance in various environments, showing potential for applications in autonomous navigation and robotics research.",
    "currentUpdates": {
      "latest": {
        "title": "Improved detection accuracy",
        "date": "2024-02-25"
      },
      "recent": [
        {
          "title": "Enhanced path planning",
          "date": "2024-02-08"
        },
        {
          "title": "Added new sensor types",
          "date": "2024-01-20"
        }
      ],
      "comingSoon": [
        "3D obstacle mapping",
        "Multi-bot coordination",
        "Advanced navigation algorithms"
      ]
    },
    "galleryImages": [
      { "src": "/obst.png", "alt": "Obstacle Bot Overview" },
      { "src": "/obst-detail1.jpg", "alt": "Vision System" },
      { "src": "/obst-detail2.jpg", "alt": "Navigation" }
    ]
  },
  {
    "title": "And Many More....",
    "description": "Visit My Github Profile to explore more innovative projects.",
    "technologies": [],
    "image": "/more.png",
    "liveUrl": "",
    "githubUrl": "https://github.com/ayushacharya27",
    "overview": "A collection of various innovative projects showcasing skills in robotics, IoT, and software development.",
    "keyFeatures": [
      "Diverse project portfolio",
      "Cross-disciplinary applications",
      "Innovative solutions",
      "Open-source contributions",
      "Continuous development"
    ],
    "technicalImplementation": "Various technologies and frameworks are used across different projects, demonstrating versatility and adaptability in solving complex problems.",
    "resultsAndImpact": "These projects have contributed to the development of innovative solutions and have been recognized in various competitions and communities.",
    "currentUpdates": {
      "latest": {
        "title": "New project added",
        "date": "2024-03-01"
      },
      "recent": [
        {
          "title": "Project updates",
          "date": "2024-02-15"
        },
        {
          "title": "Documentation improvements",
          "date": "2024-02-01"
        }
      ],
      "comingSoon": [
        "New project announcements",
        "Enhanced documentation",
        "Community contributions"
      ]
    },
    "galleryImages": [
      { "src": "/more.png", "alt": "More Projects" },
      { "src": "/more-detail1.jpg", "alt": "Project Showcase" },
      { "src": "/more-detail2.jpg", "alt": "Development" }
    ]
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
                    src={project.image.replace(/\.(png|jpg)$/, '.webp')}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
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