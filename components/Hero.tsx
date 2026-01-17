import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calculator } from 'lucide-react';
import { HERO_CONTENT, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[550px] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-sancho-primary pt-40 md:pt-52">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661933302016-2946d0b15650?auto=format&fit=crop&w=1200&q=80"
          alt="Porto e Logística SANCHO - Importações e Exportações" 
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay to match logo palette */}
        <div className="absolute inset-0 bg-sancho-primary/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in-up mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl tracking-tight">
            SANCHO – Importações <br className="hidden sm:block" />
            <span className="block sm:inline">& Exportações LDA</span>
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl text-sancho-accent font-semibold mb-8 tracking-wide px-2 max-w-3xl mx-auto">
            Soluções completas em Máquinas, Equipamentos Industriais e Logística
          </h2>

          <p className="text-sm sm:text-base text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto font-normal opacity-90 px-4">
            {HERO_CONTENT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto sm:max-w-none">
            {/* Accent Color Button */}
            <Link 
              to="/cotacao" 
              className="w-full sm:w-auto px-6 py-3 bg-sancho-accent hover:bg-sancho-accent-hover text-white font-bold text-base rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl min-w-[180px] flex items-center justify-center gap-2"
            >
              <Calculator size={18} />
              Simular Cotação
            </Link>
            
            {/* White/Transparent Button */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 text-white font-bold text-base rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 min-w-[180px]"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;