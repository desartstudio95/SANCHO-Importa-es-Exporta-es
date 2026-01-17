import React, { useState, useEffect } from 'react';
import { FAQ_ITEMS, WHATSAPP_LINK } from '../constants';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.remove('opacity-0', 'translate-y-8');
            target.classList.add('animate-fade-in-up');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" 
            alt="Perguntas Frequentes" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-sancho-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl">
            Perguntas Frequentes
          </h1>
          <p className="text-xl md:text-2xl text-sancho-yellow font-bold tracking-wide max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e produtos
          </p>
        </div>
      </section>

      {/* 2. FAQ LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-on-scroll opacity-0 translate-y-8">
            <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                    <div 
                        key={index} 
                        className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-sancho-accent bg-blue-50/30' : 'border-slate-200 hover:border-sancho-accent/50'}`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                        >
                            <span className={`font-bold text-lg ${openIndex === index ? 'text-sancho-primary' : 'text-slate-700'}`}>
                                {item.question}
                            </span>
                            <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-sancho-accent' : 'text-slate-400'}`}>
                                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </div>
                        </button>
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-sancho-primary py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 animate-on-scroll opacity-0 translate-y-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sancho-yellow">
                <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Ainda tem dúvidas?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Nossa equipe está disponível para esclarecer qualquer questão que não tenha sido respondida aqui.
            </p>
            <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sancho-yellow hover:bg-white hover:text-sancho-primary text-sancho-primary font-bold text-lg rounded-full shadow-xl transition-all hover:-translate-y-1"
            >
                <MessageCircle size={22} />
                Falar no WhatsApp
            </a>
          </div>
      </section>
    </div>
  );
};

export default FAQPage;