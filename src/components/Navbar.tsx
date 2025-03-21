
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';
import UserProfileButton from './UserProfileButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/824c25d5-0b7c-470e-9dc1-216f207b345b.png" 
            alt="Fique Frida Logo" 
            className="h-12 md:h-16 transition-all duration-300"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-frida-red after:w-full' : ''}`}>Início</Link>
          <Link to="/products?category=pochetes" className={`nav-link ${location.pathname === '/products' && location.search.includes('pochetes') ? 'text-frida-red after:w-full' : ''}`}>Pochetes</Link>
          <Link to="/products?category=shoulder-bags" className={`nav-link ${location.pathname === '/products' && location.search.includes('shoulder-bags') ? 'text-frida-red after:w-full' : ''}`}>Shoulder Bags</Link>
          <Link to="/products?category=travel-bags" className={`nav-link ${location.pathname === '/products' && location.search.includes('travel-bags') ? 'text-frida-red after:w-full' : ''}`}>Travel Bags</Link>
          <Link to="/products?category=outros" className={`nav-link ${location.pathname === '/products' && location.search.includes('outros') ? 'text-frida-red after:w-full' : ''}`}>Outros</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-frida-red after:w-full' : ''}`}>Sobre Nós</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-frida-red after:w-full' : ''}`}>Contato</Link>
        </div>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Pesquisar" className="p-2 hover:text-frida-red transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Favoritos" className="p-2 hover:text-frida-red transition-colors">
            <Heart size={20} />
          </button>
          <button aria-label="Carrinho" className="p-2 hover:text-frida-red transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-frida-red text-white text-xs rounded-full flex items-center justify-center">0</span>
          </button>
          <UserProfileButton />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button aria-label="Carrinho" className="p-2 hover:text-frida-red transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-frida-red text-white text-xs rounded-full flex items-center justify-center">0</span>
          </button>
          <UserProfileButton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="py-2 px-4 hover:bg-gray-50 rounded-md">Início</Link>
          <Link to="/products?category=pochetes" className="py-2 px-4 hover:bg-gray-50 rounded-md">Pochetes</Link>
          <Link to="/products?category=shoulder-bags" className="py-2 px-4 hover:bg-gray-50 rounded-md">Shoulder Bags</Link>
          <Link to="/products?category=travel-bags" className="py-2 px-4 hover:bg-gray-50 rounded-md">Travel Bags</Link>
          <Link to="/products?category=outros" className="py-2 px-4 hover:bg-gray-50 rounded-md">Outros</Link>
          <Link to="/about" className="py-2 px-4 hover:bg-gray-50 rounded-md">Sobre Nós</Link>
          <Link to="/contact" className="py-2 px-4 hover:bg-gray-50 rounded-md">Contato</Link>
          <div className="flex space-x-4 py-2 px-4">
            <button aria-label="Pesquisar" className="p-2 hover:text-frida-red transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="Favoritos" className="p-2 hover:text-frida-red transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
