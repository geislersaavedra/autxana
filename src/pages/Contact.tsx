import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactMap from '../components/ContactMap';

export default function Contact() {
  return (
    <main className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Contacta con <span className="text-brand-accent">Nosotros</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos presentes en tres continentes para ofrecerte el mejor soporte técnico y consultoría estructural.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Info Cards */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 mb-4">Nuestro equipo responderá en menos de 24h.</p>
            <a href="mailto:info@autxana.com" className="text-brand-accent font-bold hover:underline">info@autxana.com</a>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Teléfono</h3>
            <p className="text-slate-600 mb-4">Contáctanos para consultas directas.</p>
            <div className="space-y-1">
              <p className="font-bold text-slate-900">Disponible según región</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Oficinas</h3>
            <p className="text-slate-600 mb-4">Visítanos en nuestras sedes globales.</p>
            <p className="text-sm font-bold text-slate-900">Navarra • Florida • Caracas</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Corporativo</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  placeholder="email@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Asunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white">
                  <option>Análisis Estructural</option>
                  <option>Diseño de Nueva Torre</option>
                  <option>Inspección con Drones</option>
                  <option>Gemelos Digitales</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all">
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </button>
              <p className="text-xs text-slate-500 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad y protección de datos.
              </p>
            </form>
          </motion.div>

          {/* Map Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Ubicaciones Globales</h2>
            <ContactMap />
            <div className="bg-brand-accent/5 p-6 rounded-2xl border border-brand-accent/10">
              <h4 className="font-bold text-brand-primary mb-2">Presencia Estratégica</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nuestra red de oficinas nos permite cubrir proyectos en toda Europa y América, 
                asegurando el cumplimiento de las normativas locales y una respuesta ágil a las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
