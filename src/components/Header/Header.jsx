import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [  'Home' ,  'Itinerary', 'Testimonials' , 'Contact'];
// console.log('Inside header')
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFF5EE] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Home Link */}
          <a
            href="/"
            className={`text-2xl font-bold hover:opacity-75 transition-opacity duration-150 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <img src="/assest/logo.png" alt="logo" className='h-[25%] w-[25%]' />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${(item === 'Home')? '/': item.toLowerCase()}`}
                className={`hover:opacity-75 transition-opacity duration-150 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
         
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 hover:opacity-75 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-2 bg-white shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                console.log(item , "item"),
                <a
                  key={item}
                  href={`${(item === 'Home')? '/': item.toLowerCase()}`}
                  className="text-black hover:opacity-75 transition-opacity duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
