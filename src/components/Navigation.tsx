import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How to Use', path: '/how-to-use' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-10 w-10" />
            <span className="text-gray-900">Tab Saver</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Download Button */}
          <a
            href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Extension
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
                Download Extension
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}