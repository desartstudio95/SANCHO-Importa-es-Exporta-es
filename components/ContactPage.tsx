import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { PHONE_1, EMAIL, ADDRESS, WHATSAPP_LINK, GOOGLE_MAPS_LINK } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Cotação de Equipamento',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(`[Site] ${formData.subject}: ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `Assunto: ${formData.subject}\n\n` +
      `Mensagem:\n${formData.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${emailSubject}&body=${emailBody}`;
    
    // Clear form after slight delay
    setTimeout(() => {
      setFormData({ name: '', phone: '', subject: 'Cotação de Equipamento', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop" 
            alt="Atendimento ao Cliente" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-sancho-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl">
            Entre em Contacto
          </h1>
          <p className="text-xl md:text-2xl text-sancho-yellow font-bold tracking-wide max-w-2xl mx-auto">
            Estamos Prontos para Atendê-lo
          </p>
        </div>
      </section>

      {/* 2. CARDS SECTION (Matching Screenshot with improved hover) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card Template */}
          {[
            { 
              icon: <Phone size={28} />, 
              title: 'Telefone', 
              content: (
                <a 
                  href={`tel:${PHONE_1}`} 
                  className="hover:text-sancho-accent transition-colors block w-full h-full"
                >
                  {PHONE_1}
                </a>
              ) 
            },
            { 
              icon: <Mail size={28} />, 
              title: 'E-mail', 
              content: (
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="break-all hover:text-sancho-accent transition-colors block w-full h-full"
                >
                  {EMAIL}
                </a>
              ) 
            },
            { 
              icon: <MessageCircle size={28} />, 
              title: 'WhatsApp', 
              content: (
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-bold hover:text-sancho-accent transition-colors flex items-center justify-center gap-1"
                >
                  Conversar Agora
                </a>
              ) 
            },
            { 
              icon: <MapPin size={28} />, 
              title: 'Localização', 
              content: (
                <a 
                  href={GOOGLE_MAPS_LINK}
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-sancho-accent transition-colors hover:underline"
                >
                  {ADDRESS}
                </a>
              ) 
            }
          ].map((item, idx) => (
            <div key={idx} className="opacity-0 translate-y-8 animate-on-scroll bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-sancho-primary/10 transition-all duration-300 group border border-transparent hover:border-sancho-yellow/30" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="w-16 h-16 bg-sancho-yellow rounded-full flex items-center justify-center mb-6 shadow-lg shadow-sancho-yellow/30 text-sancho-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-sancho-primary mb-4 group-hover:text-sancho-accent transition-colors">{item.title}</h3>
              <div className="text-slate-600 font-medium space-y-1 group-hover:text-slate-800 w-full">
                {item.content}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 3. FORM & MAP SECTION */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Form */}
            <div className="opacity-0 translate-y-8 animate-on-scroll bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
              <div className="mb-8">
                <span className="text-sancho-accent font-bold uppercase tracking-widest text-xs mb-2 block">Fale Conosco</span>
                <h2 className="text-3xl font-bold text-sancho-primary mb-4">Envie uma Mensagem</h2>
                <p className="text-slate-600">Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-sancho-primary mb-2">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sancho-accent focus:ring-4 focus:ring-sancho-accent/10 outline-none transition-all bg-white hover:border-sancho-accent/50" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-sancho-primary mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sancho-accent focus:ring-4 focus:ring-sancho-accent/10 outline-none transition-all bg-white hover:border-sancho-accent/50" 
                      placeholder="+258..." 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-sancho-primary mb-2">Assunto</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sancho-accent focus:ring-4 focus:ring-sancho-accent/10 outline-none transition-all bg-white hover:border-sancho-accent/50"
                  >
                    <option>Cotação de Equipamento</option>
                    <option>Dúvida Técnica</option>
                    <option>Parceria</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-sancho-primary mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sancho-accent focus:ring-4 focus:ring-sancho-accent/10 outline-none transition-all bg-white hover:border-sancho-accent/50" 
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-sancho-primary hover:bg-sancho-yellow hover:text-sancho-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-1 group">
                  Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="opacity-0 translate-y-8 animate-on-scroll h-full min-h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group" style={{ transitionDelay: '200ms' }}>
               <iframe 
                 src="https://maps.google.com/maps?q=Av.+Eduardo+Mondlane+3112%2C+Maputo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, minHeight: '500px' }} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Mapa de Localização"
                 className="grayscale group-hover:grayscale-0 transition-all duration-700"
               ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;