import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_1, EMAIL, ADDRESS, GOOGLE_MAPS_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email content
    const subject = encodeURIComponent(`Contato pelo Site: ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `E-mail: ${formData.email}\n\n` +
      `Mensagem:\n${formData.message}`
    );

    // Open email client with correct email from constants
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setFormStatus('success');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 translate-y-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-sancho-secondary mb-4 tracking-tight">Entre em Contato</h2>
          <div className="w-24 h-1.5 bg-sancho-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 font-light text-lg">
            Estamos prontos para atender sua solicitação com agilidade e excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 opacity-0 translate-y-8 animate-on-scroll">
            <div className="bg-sancho-primary p-8 rounded-lg shadow-xl text-white h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sancho-accent/20 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-xl font-bold mb-8 text-white tracking-wide border-b border-sancho-accent/30 pb-4 inline-block">
                Informações de Contato
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Telefones</p>
                    <a href={`tel:${PHONE_1}`} className="text-slate-300 group-hover:text-white transition-colors hover:underline block">
                      {PHONE_1}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">E-mail</p>
                    <a href={`mailto:${EMAIL}`} className="text-slate-300 hover:text-white break-all transition-colors hover:underline block">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Localização</p>
                    <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" className="text-slate-300 group-hover:text-white transition-colors hover:underline block">
                      {ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 opacity-0 translate-y-8 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <form onSubmit={handleSubmit} className="bg-slate-50 p-10 rounded-lg border border-slate-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-sancho-primary mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-4 rounded-sm border border-slate-300 focus:ring-2 focus:ring-sancho-accent focus:border-transparent outline-none transition-all bg-white" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-sancho-primary mb-2">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-4 rounded-sm border border-slate-300 focus:ring-2 focus:ring-sancho-accent focus:border-transparent outline-none transition-all bg-white" 
                    placeholder="+258..." 
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-bold text-sancho-primary mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-4 rounded-sm border border-slate-300 focus:ring-2 focus:ring-sancho-accent focus:border-transparent outline-none transition-all bg-white" 
                  placeholder="seu@email.com" 
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-sancho-primary mb-2">Mensagem ou Cotação</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-4 rounded-sm border border-slate-300 focus:ring-2 focus:ring-sancho-accent focus:border-transparent outline-none transition-all bg-white" 
                  placeholder="Gostaria de saber mais sobre..." 
                />
              </div>

              <button 
                type="submit" 
                className={`w-full md:w-auto px-10 py-4 rounded-sm font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-md ${formStatus === 'success' ? 'bg-green-600' : 'bg-sancho-accent hover:bg-sancho-accent-hover'}`}
              >
                {formStatus === 'success' ? 'Redirecionando para E-mail...' : (
                  <>Enviar Mensagem <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;