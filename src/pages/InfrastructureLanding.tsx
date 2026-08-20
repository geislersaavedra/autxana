import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, TowerControl as Tower, Layout, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const infraTypes = [
  {
    title: 'Torres Autosoportadas',
    href: '/infraestructura/autosoportadas',
    description: 'Estructuras de celosía diseñadas para máxima capacidad y altura en entornos rurales y urbanos.',
    icon: Tower,
    image: 'https://images.unsplash.com/photo-1548676530-56844241f040?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Monopolos',
    href: '/infraestructura/monopolos',
    description: 'Soluciones estéticas y de bajo impacto visual para despliegues rápidos en zonas densamente pobladas.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Torres Arriostradas',
    href: '/infraestructura/arriostradas',
    description: 'Mástiles ligeros y económicos para grandes alturas, ideales para redes de backbone y broadcast.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Rooftops & Mástiles',
    href: '/infraestructura/rooftops',
    description: 'Ingeniería especializada para la instalación de equipos en azoteas y estructuras existentes.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1585909665970-21c5bc462847?auto=format&fit=crop&q=80&w=800'
  }
];

export default function InfrastructureLanding() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Nuestra Infraestructura</h1>
            <p className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display">Soluciones que <span className="text-brand-accent">Soportan</span> el Futuro</p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Diseñamos y analizamos todo tipo de estructuras de soporte para telecomunicaciones, garantizando estabilidad, durabilidad y cumplimiento normativo en cualquier entorno geográfico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infraTypes.map((type, idx) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-6">
                    <type.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-slate-300 mb-8 max-w-md">
                    {type.description}
                  </p>
                  <Link 
                    to={type.href}
                    className="inline-flex items-center space-x-2 text-white font-bold hover:text-brand-accent transition-colors"
                  >
                    <span>Ver Especificaciones</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
