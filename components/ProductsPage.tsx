import React, { useState, useEffect } from 'react';
import { CATALOG_DATA, WHATSAPP_LINK } from '../constants';
import { HardHat, Cog, Sprout, Truck, Check, MessageCircle, Calculator, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Flatten all items for the 'all' view
  const allProducts = CATALOG_DATA.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryId: cat.id }))
  );

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(item => item.categoryId === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos', icon: <Package size={18} /> },
    { id: 'construction', label: 'Construção', icon: <HardHat size={18} /> },
    { id: 'industrial', label: 'Industrial', icon: <Cog size={18} /> },
    { id: 'agriculture', label: 'Agricultura', icon: <Sprout size={18} /> },
    { id: 'logistics', label: 'Logística', icon: <Truck size={18} /> },
  ];

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
  }, [filteredProducts, activeCategory]); // Re-run when products change

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-sancho-primary">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src="https://images.unsplash.com/photo-1629807472592-2649bfa09f9c?auto=format&fit=crop&w=870&q=80
" 
            alt="Frota de Equipamentos" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-sancho-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sancho-primary to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-xl">
            Nossos Produtos
          </h1>
          <p className="text-xl text-sancho-yellow font-bold tracking-wide max-w-2xl mx-auto uppercase">
            Equipamentos de Alta Performance
          </p>
        </div>
      </section>

      {/* 2. FILTER SECTION */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id 
                    ? 'bg-sancho-primary text-white shadow-lg shadow-sancho-primary/30 ring-2 ring-sancho-yellow ring-offset-2' 
                    : 'bg-slate-100 text-slate-600 hover:bg-sancho-accent hover:text-white hover:shadow-md'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 translate-y-8 animate-on-scroll">
          <h2 className="text-4xl font-extrabold text-sancho-primary mb-3">
            {categories.find(c => c.id === activeCategory)?.label === 'Todos' ? 'Catálogo Completo' : categories.find(c => c.id === activeCategory)?.label}
          </h2>
          <div className="w-16 h-1.5 bg-sancho-accent mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 max-w-xl mx-auto">
            Explore nossa seleção de equipamentos certificados para impulsionar seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="opacity-0 translate-y-8 animate-on-scroll bg-white hover:bg-blue-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-sancho-primary/20 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 border border-slate-100 hover:border-sancho-accent/30 overflow-hidden flex flex-col group"
              style={{ transitionDelay: `${Math.min(idx * 50, 500)}ms` }}
            >
              {/* Product Image */}
              <Link to={`/produto/${product.id}`} className="block h-64 relative bg-slate-100 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-blue-100 transition-colors">
                <LazyImage 
                  src={product.image || ""} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-sancho-yellow text-sancho-primary text-xs font-extrabold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                  <Check size={12} strokeWidth={4} /> DISPONÍVEL
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col border-t border-slate-100 group-hover:border-sancho-accent/10 transition-colors">
                <Link to={`/produto/${product.id}`}>
                  <h3 className="text-xl font-bold text-sancho-primary mb-2 line-clamp-2 hover:text-sancho-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="space-y-2 mb-6 flex-grow">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sancho-accent shrink-0"></div>
                      <span className="leading-snug font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <Link 
                    to={`/produto/${product.id}`}
                    className="col-span-1 bg-white border-2 border-sancho-primary text-sancho-primary hover:bg-sancho-primary hover:text-white font-bold py-3.5 rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md text-sm flex items-center justify-center gap-2"
                  >
                    Saiba Mais
                  </Link>
                  <Link 
                    to="/cotacao" 
                    className="col-span-1 bg-sancho-primary text-white hover:bg-sancho-yellow hover:text-sancho-primary font-bold py-3.5 rounded-xl text-center transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2"
                  >
                    <Calculator size={18} /> Cotação
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200 animate-on-scroll opacity-0 translate-y-8">
            <Package size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="text-lg text-slate-500 font-medium">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </section>

      {/* 4. CUSTOM CTA SECTION */}
      <section className="bg-sancho-primary py-24 text-center relative overflow-hidden opacity-0 translate-y-8 animate-on-scroll">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-sancho-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sancho-yellow/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Não Encontrou o Que Procura?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Temos acesso a uma vasta rede de fornecedores globais. Entre em contacto e encontraremos o equipamento ideal para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/cotacao" 
              className="px-8 py-4 bg-sancho-yellow hover:bg-white hover:text-sancho-primary text-sancho-primary font-bold text-lg rounded-full shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Calculator size={20} />
              Consulta Personalizada
            </Link>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-sancho-primary font-bold text-lg rounded-full shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;