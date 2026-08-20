import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  benefits: string[];
  tools?: string[];
  children?: React.ReactNode;
}

export default function ServiceLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  features,
  benefits,
  tools,
  children
}: ServiceLayoutProps) {
  return (
    <main className="pt-24 pb-24 bg-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1 mb-6">
              <Icon size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Metodología y Alcance</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                {children}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Características del Servicio</h3>
                <ul className="space-y-4">
                  {features.map((f) => (
                    <li key={f} className="flex items-start space-x-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-primary p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-6">Beneficios Clave</h3>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start space-x-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 shrink-0"></div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {tools && (
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Software & Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-brand-accent p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-xl font-bold mb-4">¿Necesitas un presupuesto?</h3>
              <p className="text-sm text-blue-100 mb-6">Nuestro equipo de ingeniería evaluará tu caso y te enviará una propuesta técnica detallada.</p>
              <Link
                to="/contacto"
                className="w-full bg-white text-brand-accent py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors"
              >
                <span>Contactar Ahora</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
