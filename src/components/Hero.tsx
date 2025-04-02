import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CpuChipIcon, CommandLineIcon, WrenchScrewdriverIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const skills = [
    { icon: CpuChipIcon, label: 'Embedded Firmware' },
    { icon: CommandLineIcon, label: 'Robotics Algorithms' },
    { icon: WrenchScrewdriverIcon, label: 'PCB Design' },
    { icon: CodeBracketIcon, label: 'Control Systems' },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="heading-1">
              Hi, I'm <span className="text-secondary">Ayush</span>
            </h1>
            <h2 className="heading-2 text-textSecondary">
              Robotics Software & Embedded Systems Engineer
            </h2>
            <p className="text-textSecondary text-lg mb-8">
              I develop <span className=  "text-secondary">embedded intelligence</span> for robotic systems, 
              combining <span className="text-secondary">low-level firmware</span> with 
              <span className="text-secondary"> high-performance algorithms</span> to create responsive autonomous solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg"
                >
                  <skill.icon className="w-5 h-5 text-secondary" />
                  <span>{skill.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex"
              >
                <Link to="/projects" className="btn-primary inline-flex items-center px-6 py-3 min-w-[200px] justify-center">
                  View Technical Projects
                </Link>
              </motion.div>
              <motion.a 
                href="#contact"
                onClick={scrollToContact}
                className="btn-secondary inline-flex items-center px-6 py-3 min-w-[200px] justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Collaboration
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Space Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-tertiary rounded-lg p-8 relative overflow-hidden">
              {/* Stars Background */}
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute w-1 h-1 bg-secondary rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Planet */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="relative w-32 h-32">
                  {/* Planet Ring */}
                  <motion.div
                    className="absolute w-48 h-8 border-2 border-secondary/30 rounded-full"
                    style={{
                      top: '-20px',
                      left: '-32px',
                      transform: 'rotate(20deg)',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Planet Surface */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full" />
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={`crater-${i}`}
                        className="absolute w-6 h-6 rounded-full bg-secondary/20"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${30 + i * 15}%`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Satellite */}
              <motion.div
                className="absolute w-4 h-4 bg-secondary/80 rounded-lg"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: ['0%', '100%', '0%'],
                  y: ['0%', '50%', '0%'],
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute w-6 h-1 bg-secondary/60 rounded-sm"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute w-0.5 h-2 bg-secondary"
                    style={{
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>

              {/* Orbit Path */}
              <motion.div
                className="absolute inset-0"
                style={{
                  border: '1px dashed rgba(100, 255, 218, 0.2)',
                  borderRadius: '50%',
                  width: '80%',
                  height: '80%',
                  top: '10%',
                  left: '10%',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Space Atmosphere */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'radial-gradient(circle at center, #64ffda 0%, transparent 70%)',
                }}
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;