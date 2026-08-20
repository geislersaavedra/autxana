import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  DraftingCompass, 
  RefreshCw, 
  Drone, 
  Box, 
  ShieldCheck,
  Cpu,
  Search
} from 'lucide-react';

const services = [
  {
    title: 'Análisis Estructural',
    description: 'Evaluación detallada de capacidad de carga para nuevas tecnologías (5G) y ampliaciones.',
    icon: Calculator,
    color: 'bg-blue-500',
    href: '/servicios/analisis'
  },
  {
    title: 'Diseño de Torres',
    description: 'Diseño desde cero de estructuras optimizadas: autosoportadas, monopolos y arriostradas.',
    icon: DraftingCompass,
    color: 'bg-emerald-500',
    href: '/servicios/diseno'
  },
  {
    title: 'Refuerzos y Modificaciones',
    description: 'Soluciones de ingeniería para aumentar la vida útil y capacidad de estructuras existentes.',
    icon: RefreshCw,
    color: 'bg-amber-500',
    href: '/servicios/refuerzos'
  },
  {
    title: 'Inspección LiDAR & Drones',
    description: 'Levantamientos de alta precisión con nubes de puntos y fotogrametría aérea.',
    icon: Drone,
    color: 'bg-purple-500',
    href: '/servicios/drones'
  },
  {
    title: 'Gemelos Digitales',
    description: 'Modelado 3D inteligente para gestión de activos y simulaciones en tiempo real.',
    icon: Box,
    color: 'bg-indigo-500',
    href: '/servicios/digital-twins'
  },
  {
    title: 'Cumplimiento Normativo',
    description: 'Certificación bajo TIA-222-H, Eurocódigo y normativas locales específicas.',
    icon: ShieldCheck,
    color: 'bg-rose-500',
    href: '/normativa'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Nuestra Experiencia</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Servicios de Ingeniería 360º</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combinamos ingeniería tradicional con las últimas tecnologías de captura de datos y simulación digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to={service.href} className="text-brand-accent font-bold text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Saber más</span>
                <Search size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
