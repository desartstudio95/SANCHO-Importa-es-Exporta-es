import React, { useEffect } from 'react';
import { VALUES, WHATSAPP_LINK } from '../constants';
import { Target, Eye, MessageCircle, Star, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
    <div className="bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.takelog.com.br/imagens/informacoes/transporte-aduaneiro-importacao-02.webp" 
            alt="Escritório SANCHO" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-sancho-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Sobre a SANCHO
          </h1>
          <div className="w-24 h-2 bg-sancho-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide max-w-2xl mx-auto">
            Excelência e Tradição em Importação e Exportação
          </p>
        </div>
      </section>

      {/* 2. NOSSA HISTÓRIA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:w-1/2 opacity-0 translate-y-8 animate-on-scroll">
              <span className="inline-block px-4 py-2 bg-sancho-yellow/20 text-sancho-yellow-hover rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Nossa História
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-sancho-primary mb-6 leading-tight">
                Construindo o Futuro com <span className="text-sancho-accent">Qualidade</span> e <span className="text-sancho-yellow">Confiança</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  A <strong className="text-sancho-primary font-bold">SANCHO – Importações & Exportações LDA</strong> é uma empresa líder especializada em importação, exportação e fornecimento de máquinas e equipamentos de alta qualidade para os setores de construção, indústria, agricultura e logística.
                </p>
                <p>
                  Com anos de experiência no mercado, estabelecemos parcerias estratégicas com fabricantes internacionais e marcas reconhecidas mundialmente, garantindo produtos de excelência, durabilidade excepcional e desempenho superior.
                </p>
                <p>
                  Nosso compromisso vai além do fornecimento de equipamentos. Oferecemos soluções completas e personalizadas, atendimento especializado e suporte técnico integral aos nossos clientes em Moçambique.
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                 <a 
                   href={WHATSAPP_LINK}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-3 bg-sancho-primary hover:bg-sancho-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl group"
                 >
                   <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                   Falar com Consultor
                 </a>
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:w-1/2 w-full h-full opacity-0 translate-y-8 animate-on-scroll">
               <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-white">
                    <img 
                      src="https://www.deere.com.br/assets/images/region-3/products/front-loaders-for-tractors/562sl/carregadora_frontal_562_estudio_large_ac14a928003e37e30f35003b0f5865fa067f28d8.jpg"
                      alt="Maquinaria Pesada" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?auto=format&fit=crop&q=80&w=1000";
                      }}
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-white mt-8">
                     <img 
                      src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=1000" 
                      alt="Construção Civil" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-white -mt-8">
                     <img 
                      src="https://www.deere.com.br/assets/images/region-3/products/motor-graders/620g/620gxt_motor_grader_r4c011587_large_c8e616fe8c4c3e98ed6770f472acce4f91c9ae98.jpg" 
                      alt="Maquinaria Leve" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSÃO E VISÃO */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                 <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg opacity-0 translate-y-8 animate-on-scroll">
                    <div className="w-16 h-16 bg-sancho-primary/10 rounded-2xl flex items-center justify-center text-sancho-primary mb-6">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-sancho-primary mb-4">Nossa Missão</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Fornecer equipamentos de alta qualidade e soluções logísticas integradas que impulsionem o crescimento de Moçambique, garantindo eficiência, sustentabilidade e o sucesso dos projetos dos nossos clientes.
                    </p>
                 </div>

                 <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg opacity-0 translate-y-8 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="w-16 h-16 bg-sancho-accent/10 rounded-2xl flex items-center justify-center text-sancho-accent mb-6">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-sancho-primary mb-4">Nossa Visão</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Ser a referência líder em importação e exportação na África Austral, reconhecida pela excelência no atendimento, integridade nas relações e inovação nas soluções de fornecimento industrial.
                    </p>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. VALORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 opacity-0 translate-y-8 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-extrabold text-sancho-primary mb-4">Nossos Valores</h2>
                <div className="w-20 h-1.5 bg-sancho-yellow mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {VALUES.map((val, index) => (
                    <div 
                        key={index} 
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center opacity-0 translate-y-8 animate-on-scroll"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                            {val.icon}
                        </div>
                        <h4 className="text-xl font-bold text-sancho-primary mb-3">{val.title}</h4>
                        <p className="text-slate-600">{val.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 bg-sancho-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 opacity-0 translate-y-8 animate-on-scroll">
           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Pronto para começar?</h2>
           <p className="text-xl text-blue-100 mb-10 font-light">
             Entre em contato com nossa equipe e descubra como podemos ajudar a alavancar seu negócio com as melhores soluções do mercado.
           </p>
           <Link 
             to="/contactos" 
             className="inline-flex items-center gap-2 bg-sancho-yellow text-sancho-primary font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-white transition-all transform hover:-translate-y-1"
           >
             Fale Conosco <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;