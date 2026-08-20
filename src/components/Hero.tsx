import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548676530-56844241f040?auto=format&fit=crop&q=80&w=2000"
          alt="Telecom Tower High Altitude"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-brand-accent text-xs font-bold tracking-wider uppercase">Ingeniería Global de Telecomunicaciones</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Elevando la <span className="text-brand-accent">Infraestructura</span> del Futuro
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Especialistas en diseño, cálculo estructural y análisis avanzado de torres de telecomunicaciones. 
              Presencia estratégica en España, USA y Venezuela.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/servicios"
                className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 group"
              >
                <span>Nuestros Servicios</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Solicitar Análisis
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5k+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Torres Analizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Sedes Globales</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
                alt="Structural Engineer working on CAD/CAE software"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Análisis CAE Avanzado</div>
                    <div className="text-slate-400 text-sm">Precisión estructural certificada</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
