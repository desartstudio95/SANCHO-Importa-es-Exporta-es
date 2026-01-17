import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sancho-cookie-consent');
    if (!consent) {
      // Delay slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sancho-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sancho-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:flex items-center justify-between gap-6">
        <div className="flex items-start gap-4 mb-4 md:mb-0">
          <div className="bg-sancho-yellow/20 p-3 rounded-full text-sancho-yellow shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-sancho-primary mb-2">Utilizamos Cookies</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência, personalizar conteúdo e analisar o tráfego do nosso site. Ao clicar em "Aceitar", concorda com a nossa política de privacidade.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
           <button 
             onClick={handleDecline}
             className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition-colors text-sm"
           >
             Recusar
           </button>
           <button 
             onClick={handleAccept}
             className="px-6 py-2.5 rounded-xl bg-sancho-primary hover:bg-sancho-secondary text-white font-bold shadow-lg transition-transform hover:scale-105 text-sm"
           >
             Aceitar Cookies
           </button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;