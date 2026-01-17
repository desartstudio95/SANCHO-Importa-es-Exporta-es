import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATALOG_DATA, WHATSAPP_LINK } from '../constants';
import { Check, MessageCircle, ArrowRight, ShieldCheck, Ruler, Truck, FileText } from 'lucide-react';
import LazyImage from './LazyImage';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the product across all categories
  const category = CATALOG_DATA.find(cat => cat.items.some(item => item.id === id));
  const product = category?.items.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-3xl font-bold text-sancho-primary mb-4">Produto não encontrado</h2>
        <p className="text-slate-600 mb-8">O produto que você está procurando não existe ou foi removido.</p>
        <Link to="/produtos" className="px-6 py-3 bg-sancho-accent text-white rounded-full font-bold hover:bg-sancho-accent-hover transition-colors">
          Voltar ao Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center text-sm text-slate-500 gap-2 animate-fade-in-up">
          <Link to="/" className="hover:text-sancho-accent">Início</Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-sancho-accent">Produtos</Link>
          <span>/</span>
          <span className="text-sancho-primary font-bold truncate">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 opacity-0 translate-y-8 animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Image Section */}
            <div className="relative bg-slate-100 min-h-[400px] lg:min-h-[600px] p-0 md:p-8 flex items-center justify-center group overflow-hidden cursor-zoom-in">
              <div className="absolute inset-0 bg-white/50 pattern-grid opacity-20 pointer-events-none"></div>
              
              <LazyImage 
                src={product.image || ""} 
                alt={product.name} 
                className="w-full h-full object-cover lg:object-contain z-10 drop-shadow-2xl"
                containerClassName="w-full h-full absolute inset-0 md:relative md:inset-auto md:w-full md:h-full flex items-center justify-center bg-transparent transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <span className="bg-sancho-yellow text-sancho-primary text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                   {category?.title}
                </span>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 lg:p-12 flex flex-col">
              <h1 className="text-3xl md:text-5xl font-extrabold text-sancho-primary mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="w-20 h-1.5 bg-sancho-accent rounded-full mb-8"></div>

              <div className="prose prose-slate mb-8 text-slate-600 text-lg leading-relaxed">
                <p>{product.fullDescription || "Entre em contato para mais detalhes técnicos sobre este equipamento de alta performance."}</p>
              </div>

              {/* Specs Grid */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <h3 className="text-sancho-primary font-bold mb-4 flex items-center gap-2">
                  <Ruler size={20} className="text-sancho-accent" /> Especificações Principais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-sancho-accent/10 hover:shadow-md cursor-default">
                      <div className="w-2 h-2 rounded-full bg-sancho-yellow shrink-0"></div>
                      <span className="text-sm font-medium text-slate-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List (if available) */}
              {product.features && (
                <div className="mb-10">
                   <h3 className="text-sancho-primary font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-sancho-accent" /> Diferenciais
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  to="/cotacao" 
                  className="group bg-sancho-primary hover:bg-sancho-secondary text-white font-bold py-4 rounded-xl text-center transition-all duration-300 shadow-xl hover:shadow-sancho-primary/40 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-center transition-all duration-300 shadow-xl hover:shadow-green-500/40 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" /> 
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 opacity-0 translate-y-8 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="p-3 bg-blue-50 text-sancho-accent rounded-full"><Truck size={24} /></div>
              <div>
                <h4 className="font-bold text-sancho-primary">Entrega em Todo País</h4>
                <p className="text-xs text-slate-500">Logística integrada para Moçambique</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 opacity-0 translate-y-8 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="p-3 bg-yellow-50 text-sancho-yellow rounded-full"><ShieldCheck size={24} /></div>
              <div>
                <h4 className="font-bold text-sancho-primary">Garantia Certificada</h4>
                <p className="text-xs text-slate-500">Produtos originais com garantia</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 opacity-0 translate-y-8 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="p-3 bg-green-50 text-green-500 rounded-full"><FileText size={24} /></div>
              <div>
                <h4 className="font-bold text-sancho-primary">Cotação Rápida</h4>
                <p className="text-xs text-slate-500">Receba sua proposta em 24h</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;