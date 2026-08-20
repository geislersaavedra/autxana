import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ArrowRight, CheckCircle2, Ruler, Weight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfrastructureLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  specs: {
    height: string;
    load: string;
    footprint: string;
  };
  features: string[];
  applications: string[];
  children?: React.ReactNode;
}

export default function InfrastructureLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  specs,
  features,
  applications,
  children
}: InfrastructureLayoutProps) {
  return (
    <main className="pt-24 pb-24 bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 mb-6">
              <Icon size={16} className="text-brand-accent" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">{title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Specs Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
              <Ruler size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Altura Típica</p>
              <p className="text-lg font-bold text-slate-900">{specs.height}</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
              <Weight size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Capacidad de Carga</p>
              <p className="text-lg font-bold text-slate-900">{specs.load}</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Espacio en Base</p>
              <p className="text-lg font-bold text-slate-900">{specs.footprint}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Especificaciones Técnicas</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                {children}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <CheckCircle2 className="text-brand-accent" />
                  <span>Ventajas Estructurales</span>
                </h3>
                <ul className="space-y-4">
                  {features.map((f) => (
                    <li key={f} className="flex items-start space-x-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 shrink-0"></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Aplicaciones Ideales</h3>
                <ul className="space-y-4">
                  {applications.map((a) => (
                    <li key={a} className="flex items-start space-x-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-brand-primary p-8 rounded-3xl text-white shadow-2xl shadow-slate-900/20">
              <h3 className="text-xl font-bold mb-4">Ingeniería Especializada</h3>
              <p className="text-sm text-slate-400 mb-6">
                En Autxana realizamos el cálculo estructural completo para este tipo de infraestructura, 
                asegurando el cumplimiento de normativas locales e internacionales.
              </p>
              <Link
                to="/contacto"
                className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all"
              >
                <span>Solicitar Estudio</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" 
                alt="Engineering Analysis" 
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white">
                <h4 className="font-bold text-slate-900 mb-2">Análisis CAE Incluido</h4>
                <p className="text-xs text-slate-500">
                  Cada diseño de infraestructura incluye un análisis de elementos finitos para garantizar la estabilidad.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
