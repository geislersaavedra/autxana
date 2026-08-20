import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import TowerTypes from '../components/TowerTypes';
import FeaturedProjects from '../components/FeaturedProjects';
import StrategicExpansion from '../components/StrategicExpansion';
import Compliance from '../components/Compliance';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      
      <Services />
      
      {/* Technology Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Innovación Tecnológica</h2>
              <p className="text-4xl font-bold text-slate-900 mb-6">Ingeniería Digital de Precisión</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Utilizamos herramientas de última generación para garantizar la máxima fiabilidad en nuestros cálculos. 
                Desde nubes de puntos LiDAR hasta simulaciones CAE avanzadas, transformamos la infraestructura física 
                en activos digitales inteligentes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-accent/10 rounded flex items-center justify-center text-brand-accent">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  </div>
                  <span className="font-semibold text-slate-700">Levantamientos con Drones & Fotogrametría</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-accent/10 rounded flex items-center justify-center text-brand-accent">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  </div>
                  <span className="font-semibold text-slate-700">Modelado BIM & Gemelos Digitales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-accent/10 rounded flex items-center justify-center text-brand-accent">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  </div>
                  <span className="font-semibold text-slate-700">Análisis No Lineal P-Delta Avanzado</span>
                </li>
              </ul>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
                alt="Engineer analyzing structural CAD model"
                className="rounded-2xl h-64 w-full object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                alt="Digital Twin visualization on tablet in the field"
                className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <StrategicExpansion />

      <TowerTypes />
      <FeaturedProjects />
      <Compliance />
    </main>
  );
}
