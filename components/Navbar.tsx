import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavItem: React.FC<{ item: typeof NAV_LINKS[number], mobile?: boolean }> = ({ item, mobile = false }) => {
     const isAnchor = item.href.includes('#') && location.pathname === '/';
     const isActive = location.pathname === item.href || (location.pathname === '/' && item.href === '/');
     
     let classes = "transition-all duration-300 font-semibold tracking-wide";

     if (mobile) {
        classes += ` block px-4 py-3 rounded-md text-base ${isActive ? 'bg-sancho-yellow-light text-sancho-primary' : 'text-sancho-secondary hover:text-sancho-accent hover:bg-slate-50'}`;
     } else {
        classes += ` text-sm px-4 py-2 rounded-full ${isActive ? 'bg-sancho-yellow-light text-sancho-primary' : 'text-sancho-secondary hover:text-sancho-accent hover:bg-slate-50'}`;
     }

     if (isAnchor) {
         return (
             <a href={item.href.replace('/', '')} onClick={() => setIsOpen(false)} className={classes}>
                 {item.label}
             </a>
         );
     }
     
     return (
         <Link to={item.href} onClick={() => setIsOpen(false)} className={classes}>
             {item.label}
         </Link>
     );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out bg-white border-b border-transparent ${scrolled ? 'shadow-md py-2' : 'py-3 md:py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer group">
             <img 
                  src="https://images.unsplash.com/photo-1768678009011-d46a8c133788?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="SANCHO Logo" 
                  className="h-10 w-auto md:h-14 object-contain"
                />
            <div className="flex flex-col justify-center">
              <span className={`font-extrabold text-lg md:text-xl lg:text-2xl uppercase tracking-tight leading-none text-sancho-primary`}>
                SANCHO
              </span>
              <span className={`text-[0.55rem] md:text-[0.6rem] font-bold tracking-[0.15em] text-sancho-accent uppercase`}>
                Importações & Exportações LDA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} item={link} />
            ))}
            
            <div className="ml-4 flex items-center gap-3">
              <img 
                src="https://flagcdn.com/w80/mz.png" 
                alt="Moçambique" 
                className="w-6 h-auto rounded-sm shadow-sm border border-slate-100" 
              />
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-sancho-yellow text-sancho-primary px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 hover:bg-sancho-yellow-hover hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
             <img 
                src="https://flagcdn.com/w80/mz.png" 
                alt="Moçambique" 
                className="w-6 h-auto rounded-sm shadow-sm border border-slate-100" 
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors focus:outline-none text-sancho-primary hover:text-sancho-accent bg-slate-50 rounded-md"
              aria-label="Menu principal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100 h-[calc(100vh-64px)] overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} item={link} mobile={true} />
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-sancho-yellow text-sancho-primary px-3 py-3 rounded-md font-bold hover:bg-sancho-yellow-hover transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;