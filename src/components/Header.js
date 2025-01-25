import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Search } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-6 py-4 backdrop-blur-lg bg-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Plane className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            DroneTech
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.path} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.path}
                className={`text-white/90 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-white backdrop-blur-sm transition-colors"
        >
          <Search className="w-4 h-4" />
          Search
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;