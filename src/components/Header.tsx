import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-coopstar-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-md">
            <span className="text-white font-bold text-xl">CE</span>
          </div>
          <span className="text-2xl font-bold text-coopstar-900 group-hover:text-coopstar-600 transition-colors">
            Coopstar<span className="text-coopstar-600">Express</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-600 hover:text-coopstar-600 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href="#contato"
            className="flex items-center gap-2 bg-coopstar-600 hover:bg-coopstar-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-coopstar-600/30"
          >
            <PhoneCall size={18} />
            <span>(11) 5052-3563</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-4">
              {menuItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-slate-800 font-medium border-b border-slate-100 last:border-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
