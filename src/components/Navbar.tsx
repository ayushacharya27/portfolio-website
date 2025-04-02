import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToContact = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      // Navigate to home page
      navigate('/');
      // Wait for navigation to complete
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Get the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Calculate the offset to account for the navbar height
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      // Smooth scroll to the contact section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '/', onClick: scrollToTop },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact', onClick: scrollToContact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary/80 backdrop-blur-sm z-50">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="text-xl font-bold text-secondary">
            Ayush Acharya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={item.onClick}
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textSecondary hover:text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item.onClick) item.onClick(e);
                  }}
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 