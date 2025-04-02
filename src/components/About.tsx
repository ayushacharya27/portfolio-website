import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-tertiary">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
           <p className="text-textSecondary">
  I am a dedicated engineer with a deep passion for robotics, embedded systems, and algorithmic problem-solving.
  My journey began with a curiosity for electronics and has evolved into a strong focus on developing
  intelligent systems that combine hardware and software seamlessly.
</p>
<p className="text-textSecondary">
  With a solid foundation in electrical engineering and computer science, I specialize in creating
  autonomous solutions, control systems, and efficient algorithms. My experience spans across embedded systems,
  robotics, and full-stack development, where I aim to bridge the gap between physical and digital technologies.
</p>
<p className="text-textSecondary">
  I am committed to pushing the boundaries of innovation through continuous learning and exploring new
  frontiers in robotics and software development. Whether it's designing circuit boards, programming microcontrollers,
  or developing advanced algorithms, I thrive on tackling complex challenges and creating impactful solutions.
</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Hardware</h3>
              <ul className="text-textSecondary space-y-2">
                <li>• PCB Design</li>
                <li>• Embedded Systems</li>
                <li>• Microcontrollers</li>
                <li>• Sensors & Actuators</li>
              </ul>
            </div>
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Software</h3>
              <ul className="text-textSecondary space-y-2">
                <li>• Full Stack Development</li>
                <li>• Firmware</li>
                <li>• IoT Solutions</li>
                <li>• Cloud Integration</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 