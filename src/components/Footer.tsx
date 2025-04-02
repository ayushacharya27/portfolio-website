import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="container-width px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-textSecondary">
            Robotics engineer developing intelligent systems through hardware integration and algorithmic solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-textSecondary hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-textSecondary hover:text-secondary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-textSecondary hover:text-secondary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-textSecondary hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ayushacharya27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ayushacharya27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/ayush3112.v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-textSecondary/20 text-center text-textSecondary">
          <p>© {new Date().getFullYear()} Ayush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 