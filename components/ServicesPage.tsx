import React, { useEffect } from 'react';
import { DETAILED_SERVICES_PAGE, WORK_PROCESS, WHATSAPP_LINK } from '../constants';
import { Check, MessageCircle, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
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
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.takelog.com.br/imagens/informacoes/transporte-aduaneiro-importacao-03.webp" 
            alt="Armazém Logístico" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-sancho-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-sancho-primary/50 to-sancho-accent/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Nossos Serviços
          </h1>
          <div className="w-24 h-2 bg-sancho-yellow mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto">
            Soluções Completas para o Seu Negócio Crescer
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES_PAGE.map((service, index) => (
            <div 
              key={index} 
              className="opacity-0 translate-y-8 animate-on-scroll bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Card Image Header */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sancho-primary/40 group-hover:bg-sancho-primary/20 transition-colors"></div>
              </div>

              {/* Icon Overlay (Floating) */}
              <div className="relative -mt-12 ml-8 mb-4">
                <div className="w-24 h-24 bg-sancho-yellow rounded-2xl rotate-3 flex items-center justify-center shadow-lg border-4 border-white text-sancho-primary group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 pt-2 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-sancho-primary mb-4 group-hover:text-sancho-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium group/item">
                      <Check size={18} className="text-sancho-yellow shrink-0 mt-0.5 group-hover/item:text-sancho-accent transition-colors" strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-4 rounded-xl font-bold transition-all bg-slate-50 text-sancho-primary hover:bg-sancho-primary hover:text-white border border-slate-200 group-hover:border-sancho-primary flex items-center justify-center gap-2"
                >
                  Solicitar Informações <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORK PROCESS (TIMELINE) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-0 translate-y-8 animate-on-scroll">
            <span className="text-sancho-accent font-bold uppercase tracking-widest text-sm mb-2 block">Passo a Passo</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-sancho-primary mb-4">Como Trabalhamos</h2>
            <div className="w-16 h-1 bg-sancho-yellow mx-auto rounded-full mb-12"></div>
          </div>
          
          <div className="relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-slate-100 via-sancho-yellow/50 to-slate-100 -z-0 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {WORK_PROCESS.map((step, idx) => (
                <div key={idx} className="opacity-0 translate-y-8 animate-on-scroll flex flex-col items-center group" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className="w-24 h-24 bg-sancho-yellow rounded-full flex items-center justify-center text-3xl font-extrabold text-sancho-primary shadow-xl border-8 border-white mb-6 group-hover:scale-125 group-hover:bg-sancho-primary group-hover:text-white transition-all duration-300 relative">
                    {step.number}
                    <div className="absolute inset-0 rounded-full border border-sancho-primary/10 group-hover:border-sancho-yellow/50 scale-110 transition-all"></div>
                  </div>
                  <h3 className="text-xl font-bold text-sancho-primary mb-3 group-hover:text-sancho-accent transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-2 group-hover:text-slate-800 transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BLUE CTA SECTION */}
      <section className="bg-sancho-primary py-24 text-white relative overflow-hidden opacity-0 translate-y-8 animate-on-scroll">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-sancho-secondary/50 skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Precisa de Ajuda para Escolher?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa equipe está pronta para ajudá-lo a encontrar a solução perfeita para o seu negócio com o melhor custo-benefício.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/cotacao" 
              className="px-8 py-4 bg-sancho-yellow hover:bg-white hover:text-sancho-primary text-sancho-primary font-bold text-lg rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <Calculator size={24} className="group-hover:rotate-12 transition-transform" />
              Solicitar Cotação
            </Link>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-sancho-primary font-bold text-lg rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;