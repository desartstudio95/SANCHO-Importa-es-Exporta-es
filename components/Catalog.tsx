import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CATALOG_DATA } from '../constants';
import { Check, Calculator } from 'lucide-react';

const Catalog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const container = sectionRef.current;
    if (container) {
        const elements = container.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="catalog" ref={sectionRef} className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {CATALOG_DATA.map((category, index) => (
          <div key={category.id} className="mb-20 last:mb-0">
            {/* Category Header */}
            <div className="text-center mb-10 opacity-0 translate-y-8 animate-on-scroll">
               <h2 className="text-3xl md:text-4xl font-extrabold text-sancho-primary mb-3">{category.title}</h2>
               <div className="w-16 h-1 bg-sancho-accent mx-auto rounded-full mb-4"></div>
               <p className="text-slate-600 text-base max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  className="animate-on-scroll opacity-0 translate-y-8 bg-white hover:bg-blue-50/50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full border border-slate-100 hover:border-sancho-accent/20 overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image Area - More compact */}
                  <div className="h-48 md:h-52 overflow-hidden relative bg-slate-100 flex items-center justify-center cursor-pointer">
                     <Link to={`/produto/${item.id}`} className="block w-full h-full">
                       <img 
                        src={item.image || category.image} 
                        alt={item.name} 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; 
                          target.src = "https://placehold.co/600x400/e2e8f0/1e293b?text=SANCHO+Equipamentos";
                        }}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary/80 to-transparent opacity-80 pointer-events-none"></div>
                       <h3 className="absolute bottom-3 left-5 right-5 text-white text-lg font-bold drop-shadow-md z-10 group-hover:text-sancho-accent transition-colors leading-tight line-clamp-2">{item.name}</h3>
                     </Link>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-grow flex flex-col border-t border-slate-100">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {item.specs.slice(0, 3).map((spec, k) => (
                        <li key={k} className="flex items-start gap-2 text-slate-600">
                          <Check className="w-4 h-4 text-sancho-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm font-medium leading-tight">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link 
                          to={`/produto/${item.id}`}
                          className="w-full py-2.5 border border-sancho-primary text-sancho-primary hover:bg-sancho-primary hover:text-white font-bold text-sm rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Detalhes
                        </Link>
                        <Link 
                          to="/cotacao"
                          className="w-full py-2.5 bg-sancho-primary text-white hover:bg-sancho-yellow hover:text-sancho-primary font-bold text-sm rounded-lg text-center transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                        >
                          <Calculator size={16} /> Cotação
                        </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;