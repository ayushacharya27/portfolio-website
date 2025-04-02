import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    hardware: [
      { name: 'PCB Design', level: 60 },
      { name: 'Embedded Systems', level: 65 },
      { name: 'Microcontrollers', level: 70 },
      { name: 'Sensors & Actuators', level: 70 },
      { name: 'FPGA', level: 10 },
      { name: 'Analog/Digital Electronics', level: 85 },
      { name: 'Autonomous Systems', level: 75 },  // New skill for robotics
      { name: 'Control Systems', level: 70 },     // New skill for robotics control
    ],
    
    software: [
      { name: 'ROS1', level: 80 },
      { name: 'Firmware Development', level: 55 },
      { name: 'Embedded C', level: 65 },
      { name: 'Python/C/C++', level: 60 },
      { name: 'Machine Learning', level: 35 },    // New skill for AI/robotics integration
      { name: 'Computer Vision', level: 70 },      // New skill for vision-based robotics
      { name: 'Algorithm Design', level: 55 },     // Replacing DSA with a broader term
      { name: 'OpenCV', level: 50 },               // New skill for visual processing in robotics
    ]
    
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Skills</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hardware Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Hardware</h3>
            <div className="space-y-4">
              {skills.hardware.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-textSecondary">{skill.name}</span>
                    <span className="text-textSecondary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-secondary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Software</h3>
            <div className="space-y-4">
              {skills.software.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-textSecondary">{skill.name}</span>
                    <span className="text-textSecondary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-secondary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 