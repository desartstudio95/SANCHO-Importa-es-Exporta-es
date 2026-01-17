import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Calendar, Mail } from 'lucide-react';
import { sendMessageToGeminiStream } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Seja bem-vindo à SANCHO Importações & Exportações. Sou o seu Assistente Executivo. Como posso auxiliar nas suas operações hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Função para transformar URLs em links clicáveis no texto
  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        const isMailto = part.startsWith('mailto:');
        const isWhatsapp = part.includes('wa.link') || part.includes('whatsapp') || part.includes('wa.me');
        const isCalendar = part.includes('calendar.google');

        let linkText = "Clique para abrir";
        let href = part;

        if (isMailto) {
            linkText = "Enviar E-mail";
        } else if (isWhatsapp) {
            linkText = "Abrir WhatsApp";
            // Remove mensagem pré-definida (query params) do link
            try {
                const url = new URL(part);
                url.search = ''; 
                href = url.toString();
            } catch (e) {
                href = part.split('?')[0];
            }
        } else if (isCalendar) {
            linkText = "Adicionar à Agenda";
        } else {
            linkText = part.length > 30 ? part.substring(0, 30) + "..." : part;
        }

        return (
          <a 
            key={i} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sancho-accent underline font-bold break-all hover:text-sancho-yellow transition-colors inline-flex items-center gap-1 bg-white/10 px-1 rounded"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const stream = sendMessageToGeminiStream(userMsg);
      
      // Add initial placeholder for model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullResponse = "";
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullResponse;
          }
          return newHistory;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, ocorreu um erro na comunicação. Por favor, tente novamente.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[60] bg-sancho-accent text-white p-4 rounded-full shadow-2xl hover:bg-sancho-accent-hover transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-[70] h-[60vh] sm:h-[500px] sm:w-96 bg-white rounded-xl shadow-2xl border border-sancho-primary/20 overflow-hidden flex flex-col animate-fade-in-up font-sans">
          {/* Header */}
          <div className="bg-sancho-primary p-4 flex justify-between items-center text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-1.5 rounded-full">
                 <Bot size={20} className="text-sancho-yellow" />
              </div>
              <div>
                 <span className="font-bold tracking-wide text-sm block leading-none mb-0.5">SANCHO</span>
                 <span className="text-[10px] text-blue-200 uppercase tracking-widest">Assistente Executivo</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-sancho-accent transition-colors p-1 rounded-full hover:bg-white/10">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-sancho-primary text-white font-medium rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  <div className="whitespace-pre-wrap">
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-sancho-primary" />
                  <span className="text-xs text-slate-400">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2.5 border border-slate-300 rounded-full focus:outline-none focus:border-sancho-primary focus:ring-1 focus:ring-sancho-primary text-sm transition-all bg-slate-50 focus:bg-white"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-sancho-primary text-white p-2.5 rounded-full hover:bg-sancho-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shrink-0 shadow-sm"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiChatbot;