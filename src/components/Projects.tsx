import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Home Automation System',
      description: 'An IoT-based home automation system with custom PCB design and mobile app integration.',
      image: '/project1.jpg',
      tags: ['Hardware', 'IoT', 'React Native', 'Node.js'],
      link: '#',
    },
    {
      title: 'Embedded Data Logger',
      description: 'A custom PCB design for environmental data logging with wireless connectivity.',
      image: '/project2.jpg',
      tags: ['PCB Design', 'C', 'ESP32', 'Python'],
      link: '#',
    },
    {
      title: 'Robotic Arm Control System',
      description: 'Hardware and software solution for precise robotic arm control with real-time feedback.',
      image: '/project3.jpg',
      tags: ['Arduino', 'C++', 'Python', 'ROS'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-tertiary">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-secondary/10 flex items-center justify-center">
                <span className="text-textSecondary">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-secondary hover:text-secondary/80 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 