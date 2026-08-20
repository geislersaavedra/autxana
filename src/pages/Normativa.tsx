import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Scale, Info, CheckCircle2 } from 'lucide-react';

const standards = [
  {
    country: 'España / Unión Europea',
    flag: '🇪🇸',
    sections: [
      {
        title: 'Diseño Estructural',
        items: [
          'Eurocódigo 3 (EN 1993): Diseño de estructuras de acero.',
          'Eurocódigo 1 (EN 1991): Acciones en estructuras (Viento, Nieve).',
          'CTE (Código Técnico de la Edificación): DB-SE y DB-SI.',
          'EAE (Instrucción de Acero Estructural).'
        ]
      },
      {
        title: 'Seguridad y Salud',
        items: [
          'Ley 31/1995 de Prevención de Riesgos Laborales.',
          'RD 1627/1997: Disposiciones mínimas de seguridad en obras.',
          'RD 2177/2004: Trabajos temporales en altura.'
        ]
      },
      {
        title: 'Privacidad',
        items: [
          'RGPD (UE) 2016/679: Reglamento General de Protección de Datos.',
          'LOPDGDD 3/2018: Garantía de los derechos digitales.'
        ]
      }
    ]
  },
  {
    country: 'Estados Unidos (USA)',
    flag: '🇺🇸',
    sections: [
      {
        title: 'Structural Standards',
        items: [
          'ANSI/TIA-222-H: Structural Standard for Antenna Supporting Structures.',
          'ASCE 7-16/22: Minimum Design Loads for Buildings.',
          'AISC 360: Specification for Structural Steel Buildings.',
          'ACI 318: Building Code Requirements for Structural Concrete.'
        ]
      },
      {
        title: 'Safety & Health',
        items: [
          'OSHA 29 CFR 1926: Safety and Health Regulations for Construction.',
          'OSHA 1910.268: Telecommunications safety standards.',
          'ANSI/ASSP Z359: Fall Protection Code.'
        ]
      },
      {
        title: 'Data Privacy',
        items: [
          'CCPA / CPRA: California Consumer Privacy Act.',
          'NIST Cybersecurity Framework compliance.'
        ]
      }
    ]
  },
  {
    country: 'Venezuela',
    flag: '🇻🇪',
    sections: [
      {
        title: 'Diseño Estructural',
        items: [
          'COVENIN 1756: Edificaciones Sismorresistentes.',
          'COVENIN 2003: Acciones del Viento sobre las Edificaciones.',
          'COVENIN 1618: Estructuras de Acero para Edificaciones.',
          'Normas FONDONORMA aplicables.'
        ]
      },
      {
        title: 'Seguridad Laboral',
        items: [
          'LOPCYMAT: Ley Orgánica de Prevención, Condiciones y Medio Ambiente de Trabajo.',
          'Reglamento Parcial de la LOPCYMAT.',
          'Normas Técnicas de INPSASEL.'
        ]
      },
      {
        title: 'Protección de Datos',
        items: [
          'Constitución de la República Bolivariana de Venezuela (Art. 28).',
          'Ley Especial contra los Delitos Informáticos.'
        ]
      }
    ]
  }
];

export default function Normativa() {
  return (
    <main className="pt-24 pb-24 bg-white">
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
            alt="Legal and Standards" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Normativa y <span className="text-brand-accent">Cumplimiento</span></h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Garantizamos la excelencia técnica y legal en cada proyecto, cumpliendo rigurosamente con los estándares 
              específicos de cada jurisdicción donde operamos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {standards.map((country, idx) => (
              <motion.div 
                key={country.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-12">
                  <span className="text-5xl">{country.flag}</span>
                  <h2 className="text-3xl font-bold text-slate-900 font-display">{country.country}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {country.sections.map((section) => (
                    <div key={section.title} className="space-y-6">
                      <div className="flex items-center space-x-2 text-brand-accent">
                        <ShieldCheck size={20} />
                        <h3 className="font-bold uppercase tracking-wider text-sm">{section.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start space-x-3 text-sm text-slate-600 leading-relaxed">
                            <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Info className="mx-auto text-brand-accent mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-6">Actualización Constante</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Nuestro departamento de ingeniería y legal revisa trimestralmente las actualizaciones normativas 
            para asegurar que todos nuestros cálculos y procesos estén alineados con las últimas versiones 
            de los códigos técnicos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold border border-white/20">ISO 9001 Certified</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold border border-white/20">TIA Member</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold border border-white/20">Eurocodes Compliance</span>
          </div>
        </div>
      </section>
    </main>
  );
}
