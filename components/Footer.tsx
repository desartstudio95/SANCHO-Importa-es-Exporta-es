import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, NAV_LINKS, WHATSAPP_LINK, PHONE_1, EMAIL, ADDRESS, GOOGLE_MAPS_LINK, FACEBOOK_LINK, INSTAGRAM_LINK } from '../constants';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-sancho-primary text-blue-100 border-t border-blue-900 overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sancho-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col group items-start">
               <div className="flex flex-col">
                  <span className="font-extrabold text-2xl uppercase tracking-tight leading-none text-white">
                    SANCHO
                  </span>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-sancho-accent uppercase mt-1">
                    Importações & Exportações LDA
                  </span>
               </div>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed">
              Líderes em importação e exportação de máquinas pesadas e soluções logísticas em Moçambique. Conectando o seu negócio ao mundo com confiança e eficiência.
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sancho-accent flex items-center justify-center transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sancho-accent flex items-center justify-center transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Navegação
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-sancho-yellow hover:pl-2 transition-all flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} className="opacity-50" /> {link.label}
                  </Link>
                </li>
              ))}
              <li>
                 <Link 
                    to="/politica-privacidade" 
                    className="text-blue-200 hover:text-sancho-yellow hover:pl-2 transition-all flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} className="opacity-50" /> Política de Privacidade
                  </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Contactos
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Phone size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <a href={`tel:${PHONE_1}`} className="hover:text-white transition-colors">{PHONE_1}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Mail size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter / CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Atendimento
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <p className="text-sm text-blue-200 mb-4">
              Precisa de uma cotação rápida? Fale diretamente com nossos consultores.
            </p>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-sancho-yellow hover:bg-white text-sancho-primary font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
            >
              Iniciar Conversa
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/politica-privacidade" className="hover:text-white transition-colors flex items-center gap-1">
              <Shield size={12} /> Política de Privacidade
            </Link>
            <span className="opacity-20">|</span>
            <span className="flex items-center gap-1 opacity-70">
              Desenvolvido com excelência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;