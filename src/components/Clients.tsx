import React from 'react';
import { motion } from 'motion/react';

const clientTypes = [
  { name: 'American Tower', type: 'TowerCo' },
  { name: 'Cellnex', type: 'TowerCo' },
  { name: 'Vantage Towers', type: 'TowerCo' },
  { name: 'Telefónica', type: 'Operator' },
  { name: 'AT&T', type: 'Operator' },
  { name: 'T-Mobile', type: 'Operator' },
  { name: 'Digitel', type: 'Operator' },
  { name: 'Ericsson', type: 'Vendor' },
  { name: 'Nokia', type: 'Vendor' },
  { name: 'Huawei', type: 'Vendor' },
];

export default function Clients() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Global Trust</h2>
          <p className="text-3xl font-bold text-slate-900 font-display">Empresas que confían en <span className="text-brand-accent">Autxana</span></p>
        </div>

        {/* Infinite Scroll Marquee Effect */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-12 animate-marquee flex whitespace-nowrap items-center">
            {clientTypes.concat(clientTypes).map((client, idx) => (
              <div 
                key={`${client.name}-${idx}`} 
                className="mx-12 flex flex-col items-center justify-center group/item"
              >
                <span className="text-2xl md:text-3xl font-black text-slate-200 group-hover/item:text-brand-accent transition-colors duration-300 tracking-tighter uppercase italic">
                  {client.name}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                  {client.type}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">500+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sitios Analizados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">15+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">3</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sedes Globales</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">100%</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cumplimiento Normativo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
