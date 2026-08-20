import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    country: 'España',
    flag: '🇪🇸',
    entity: 'Autxana Ingeniería y Sistemas Digitales, S.L.',
    city: 'Pamplona — Navarra',
    tags: ['Sede Europea', 'Eurocódigos', 'NextGen EU', 'IT & MSP'],
    mapUrl: 'https://maps.google.com/maps?q=Pamplona,Navarra,Spain&t=&z=11&ie=UTF8&iwloc=&output=embed'
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    entity: 'Autxana Engineering & Digital Systems, LLC',
    city: 'Florida — Miami Area',
    tags: ['Hub Norteamérica', 'TIA-222', 'Data Centers', 'Corporate IT'],
    mapUrl: 'https://maps.google.com/maps?q=Miami,Florida,USA&t=&z=11&ie=UTF8&iwloc=&output=embed'
  },
  {
    country: 'Venezuela',
    flag: '🇻🇪',
    entity: 'Autxana Ingeniería y Sistemas Digitales, C.A.',
    city: 'Caracas — Distrito Capital',
    tags: ['Base LatAm', 'Telecom', 'Normativa Sísmica', 'Ejecución'],
    mapUrl: 'https://maps.google.com/maps?q=Caracas,Venezuela&t=&z=11&ie=UTF8&iwloc=&output=embed'
  }
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Presencia Global</div>
            <h2 className="text-4xl font-bold mb-4 font-display">Tres Hubs, Un Equipo</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Operamos desde España, USA y Venezuela para dar cobertura técnica y comercial en Europa, Norteamérica y Latinoamérica.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-brand-accent/50 transition-all"
            >
              <div className="text-4xl mb-4">{loc.flag}</div>
              <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{loc.country}</div>
              <h3 className="text-xl font-bold mb-3 leading-tight">{loc.entity}</h3>
              <div className="flex items-center text-slate-400 text-sm mb-6">
                <MapPin size={16} className="mr-2 text-brand-accent" />
                {loc.city}
              </div>
              <div className="flex flex-wrap gap-2">
                {loc.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={`map-${loc.country}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="h-56 rounded-2xl overflow-hidden border border-white/10 mb-4 bg-slate-800">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) invert(90%) contrast(80%) hue-rotate(180deg)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map ${loc.city}`}
                ></iframe>
              </div>
              <p className="text-center text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center">
                <MapPin size={12} className="mr-1" /> {loc.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
