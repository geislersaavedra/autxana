import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Scale, Users } from 'lucide-react';

const regulations = [
  {
    country: 'España / Europa',
    standards: ['Eurocódigo 3 (EN 1993)', 'CTE (Código Técnico)', 'Ley de Prevención de Riesgos Laborales', 'RGPD (Protección de Datos)'],
    icon: '🇪🇸'
  },
  {
    country: 'USA / Internacional',
    standards: ['ANSI/TIA-222-G/H', 'ASCE 7', 'OSHA Regulations', 'CCPA / Data Privacy'],
    icon: '🇺🇸'
  },
  {
    country: 'Venezuela',
    standards: ['COVENIN 1756', 'Normas de Diseño Estructural', 'LOPCYMAT (Seguridad Laboral)', 'Ley de Protección de Datos'],
    icon: '🇻🇪'
  }
];

export default function Compliance() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Seguridad y Normativa</h2>
            <p className="text-4xl md:text-5xl font-bold mb-8">Compromiso con el Cumplimiento Global</p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              En Autxana, la seguridad es nuestra prioridad. Operamos bajo los más estrictos estándares internacionales 
              y locales, garantizando que cada proyecto cumpla con las regulaciones de ingeniería, protección de datos 
              y prevención de riesgos laborales en cada jurisdicción.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Cálculo Certificado</h4>
                  <p className="text-sm text-slate-400">Memorias de cálculo visadas y aprobadas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users size={20} className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">PRL Avanzada</h4>
                  <p className="text-sm text-slate-400">Protocolos estrictos para trabajos en altura.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {regulations.map((reg, index) => (
              <motion.div
                key={reg.country}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{reg.icon}</span>
                  <h3 className="text-xl font-bold">{reg.country}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reg.standards.map((std) => (
                    <span key={std} className="text-xs font-semibold bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full border border-brand-accent/30">
                      {std}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
