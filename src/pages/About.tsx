import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe2, Users2, Target, ShieldCheck, Award } from 'lucide-react';

const stats = [
  { label: 'Años de Experiencia', value: '15+', icon: Award },
  { label: 'Proyectos Globales', value: '500+', icon: Globe2 },
  { label: 'Sedes Internacionales', value: '3', icon: Building2 },
  { label: 'Especialistas', value: '45+', icon: Users2 },
];

const values = [
  {
    title: 'Precisión Técnica',
    description: 'No dejamos nada al azar. Cada cálculo es verificado mediante simulaciones avanzadas y normativas internacionales.',
    icon: Target
  },
  {
    title: 'Seguridad Integral',
    description: 'La integridad de las personas y la infraestructura es nuestra prioridad absoluta en cada diseño.',
    icon: ShieldCheck
  },
  {
    title: 'Innovación Digital',
    description: 'Lideramos la transformación del sector mediante el uso de Gemelos Digitales y análisis LiDAR.',
    icon: Globe2
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" 
            alt="Autxana Engineering Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
          >
            Ingeniería que Conecta el <span className="text-brand-accent">Mundo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Autxana Engineering es una firma global especializada en el diseño, análisis y optimización de infraestructuras críticas de telecomunicaciones.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-brand-accent mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Nuestra Historia</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Liderando la evolución de las <span className="text-brand-accent">Telecomunicaciones</span></h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fundada con la visión de cerrar la brecha entre la ingeniería estructural tradicional y las demandas tecnológicas del siglo XXI, Autxana ha crecido hasta convertirse en un referente internacional.
                </p>
                <p>
                  Con sedes estratégicas en España, Estados Unidos y Venezuela, ofrecemos una perspectiva global combinada con un profundo conocimiento de las normativas locales. Nuestro equipo multidisciplinar de ingenieros utiliza las herramientas más avanzadas de CAD, BIM y simulación CAE para garantizar que cada estructura sea segura, eficiente y duradera.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineers working on structural models" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-accent p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white font-bold text-xl italic">"Diseñamos el soporte físico de la era digital."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Valores</h2>
            <p className="text-4xl font-bold text-slate-900 font-display">Lo que nos define</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
