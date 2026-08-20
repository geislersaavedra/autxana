import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const towerTypes = [
  {
    name: 'Torres Autosoportadas',
    description: 'Estructuras de celosía de 3 o 4 patas, ideales para grandes alturas y cargas pesadas.',
    image: 'https://images.unsplash.com/photo-1548676530-56844241f040?auto=format&fit=crop&q=80&w=800',
    features: ['Alta capacidad de carga', 'Versatilidad de montaje', 'Larga vida útil']
  },
  {
    name: 'Monopolos',
    description: 'Estructuras tubulares estéticas y de rápida instalación, perfectas para entornos urbanos.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    features: ['Mínimo impacto visual', 'Espacio reducido', 'Instalación ágil']
  },
  {
    name: 'Torres Arriostradas',
    description: 'Torres ligeras soportadas por cables tensores, óptimas para zonas rurales y gran altura.',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
    features: ['Coste eficiente', 'Grandes alturas', 'Transporte sencillo']
  }
];

export default function TowerTypes() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Infraestructura</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900">Expertos en Todo Tipo de Estructuras</p>
          </div>
          <p className="text-slate-600 max-w-md">
            Analizamos y diseñamos soluciones adaptadas a cada necesidad técnica y entorno geográfico.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {towerTypes.map((tower, index) => (
            <motion.div
              key={tower.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={tower.image}
                  alt={tower.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tower.name}</h3>
                <p className="text-slate-600 mb-6">{tower.description}</p>
                <ul className="space-y-3">
                  {tower.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
