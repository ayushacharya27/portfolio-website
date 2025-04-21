import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, TrophyIcon, AcademicCapIcon, LightBulbIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section className="min-h-screen section-padding pt-16 md:pt-24">
      <div className="container-width px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">About Me</h1>
          <p className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto">
            A passionate engineer bridging the gap between hardware and software
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 md:space-y-6 mb-8 md:mb-12"
        >
          <p className="text-textSecondary text-sm md:text-base">
            I specialize in robotics, embedded systems, and algorithm design, focusing on building efficient, high-performance solutions. My expertise spans control systems, PCB design, real-time processing, and data structures & algorithms (DSA) to develop intelligent and adaptive systems.
          </p>
          <p className="text-textSecondary text-sm md:text-base">
            With a strong foundation in robotics and autonomous systems, I design optimized frameworks for motion planning, perception, and decision-making. I also explore computer vision, machine learning, and efficient data structures to enhance real-world applications.
          </p>
          <p className="text-textSecondary text-sm md:text-base">
            Passionate about problem-solving and system optimization, I continuously push the boundaries of automation and intelligent control.
          </p>
          <p className="text-textSecondary text-sm md:text-base">
            When I'm not designing algorithms or working on robotic systems, you can find me exploring emerging technologies, contributing to open-source projects, or sharing insights through technical workshops and articles.
          </p>
          <p className="text-textSecondary text-sm md:text-base">
            Let's build the future of robotics, one optimized algorithm at a time. 🚀
          </p>

          {/* Resume Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-secondary/20 transition-colors text-sm md:text-base"
            >
              <DocumentArrowDownIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4 md:mb-6 flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            Experience
          </h2>
          {/* Add your experience content here */}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4 md:mb-6 flex items-center gap-2">
            <TrophyIcon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Hackathon Wins */}
            <div className="bg-tertiary p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-3 md:mb-4 flex items-center gap-2">
                <TrophyIcon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                Hackathon Wins
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">First Place - Nexathon</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Developed an innovative IoT solution for smart agriculture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">Best Innovation - CyberSpectrum 3.0</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Created a IOT controlled bot having custom server for remote control</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Academic Achievements */}
            <div className="bg-tertiary p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-3 md:mb-4 flex items-center gap-2">
                <AcademicCapIcon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                Academic Excellence
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">Dean's List 2024</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Consistently maintained 9.1+ CGPA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">Best Special Team Award</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Awarded for outstanding performance of my Special Team Dreadnought Robotics</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Technical Achievements */}
            <div className="bg-tertiary p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-3 md:mb-4 flex items-center gap-2">
                <LightBulbIcon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                Technical Milestones
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">Patent Filed</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Innovative IoT device for remote control from anywhere</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">Research Paper Published</h4>
                    <p className="text-textSecondary text-xs md:text-sm">IEEE Conference on Autonomonus Vehicles using LSTM Algorithms</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-tertiary p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-3 md:mb-4 flex items-center gap-2">
                <DocumentArrowDownIcon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                Certifications
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                   
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-textPrimary text-sm md:text-base">ZTM (Udemy) Certification</h4>
                    <p className="text-textSecondary text-xs md:text-sm">Open CV Beginner to Advanced</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 