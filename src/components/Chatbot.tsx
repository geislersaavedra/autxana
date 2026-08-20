import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Building2, Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

type Step = 'name' | 'company' | 'email' | 'phone' | 'need' | 'completed';

interface ChatData {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('name');
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: '¡Hola! Soy el asistente virtual de Autxana. ¿Cómo te llamas?', isBot: true }
  ]);
  const [data, setData] = useState<ChatData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    need: ''
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputValue('');

    // Process steps
    setTimeout(() => {
      processNextStep(userMessage);
    }, 600);
  };

  const processNextStep = (val: string) => {
    switch (step) {
      case 'name':
        setData(prev => ({ ...prev, name: val }));
        setMessages(prev => [...prev, { text: `Un placer, ${val}. ¿En qué empresa trabajas?`, isBot: true }]);
        setStep('company');
        break;
      case 'company':
        setData(prev => ({ ...prev, company: val }));
        setMessages(prev => [...prev, { text: 'Entendido. Para poder enviarte una propuesta formal, ¿cuál es tu email corporativo?', isBot: true }]);
        setStep('email');
        break;
      case 'email':
        setData(prev => ({ ...prev, email: val }));
        setMessages(prev => [...prev, { text: 'Gracias. ¿A qué número de teléfono podemos contactarte para una asesoría rápida?', isBot: true }]);
        setStep('phone');
        break;
      case 'phone':
        setData(prev => ({ ...prev, phone: val }));
        setMessages(prev => [...prev, { text: 'Perfecto. Por último, cuéntanos brevemente cuál es tu necesidad o consulta técnica.', isBot: true }]);
        setStep('need');
        break;
      case 'need':
        setData(prev => ({ ...prev, need: val }));
        setMessages(prev => [...prev, { text: '¡Muchas gracias! Hemos recibido tu solicitud. Un ingeniero estructural de nuestro equipo se pondrá en contacto contigo en menos de 24 horas.', isBot: true }]);
        setStep('completed');
        // Here you would typically send the data to a backend
        console.log('Chatbot Data Collected:', { ...data, need: val });
        break;
    }
  };

  const getIcon = () => {
    switch (step) {
      case 'name': return <User size={18} />;
      case 'company': return <Building2 size={18} />;
      case 'email': return <Mail size={18} />;
      case 'phone': return <Phone size={18} />;
      case 'need': return <MessageCircle size={18} />;
      default: return <Send size={18} />;
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿En qué podemos ayudarte?
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Asistente Autxana</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-slate-300">En línea</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      msg.isBot
                        ? 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                        : 'bg-brand-accent text-white shadow-md rounded-tr-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              {step === 'completed' ? (
                <div className="flex items-center justify-center space-x-2 text-emerald-600 font-bold text-sm py-2">
                  <CheckCircle2 size={18} />
                  <span>Solicitud enviada con éxito</span>
                </div>
              ) : (
                <form onSubmit={handleSend} className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {getIcon()}
                    </div>
                    <input
                      type={step === 'email' ? 'email' : 'text'}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Escribe aquí..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-11 h-11 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20"
                  >
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
