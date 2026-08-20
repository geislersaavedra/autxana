import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Lightbulb, 
  TrainFront, 
  Waves, 
  Activity, 
  Sun,
  ArrowRight
} from 'lucide-react';

const sectors = [
  {
    title: 'Energía y Utilities',
    description: 'Análisis estructural de torres de alta tensión, subestaciones y soportes para infraestructuras críticas de energía.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50'
  },
  {
    title: 'Smart Cities',
    description: 'Diseño de mobiliario urbano inteligente (Smart Poles) que integran 5G, iluminación LED, sensores IoT y carga de vehículos eléctricos.',
    icon: Lightbulb,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Transporte e Infraestructura',
    description: 'Ingeniería para sistemas de señalización ferroviaria, torres de control aeroportuarias y comunicaciones en túneles.',
    icon: TrainFront,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Industrial & Oil/Gas',
    description: 'Inspección y monitoreo de integridad estructural en plataformas offshore, refinerías y plantas industriales remotas.',
    icon: Waves,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  }
];

const newServices = [
  {
    title: 'Monitoreo de Salud Estructural (SHM)',
    description: 'Implementación de sensores IoT para el seguimiento en tiempo real de vibraciones, tensiones y deformaciones en estructuras críticas.',
    icon: Activity
  },
  {
    title: 'Ingeniería de Energías Renovables',
    description: 'Cálculo de soportes para parques fotovoltaicos y micro-eólica integrada en infraestructuras de telecomunicaciones existentes.',
    icon: Sun
  }
];

export default function StrategicExpansion() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Análisis Estratégico</h2>
            <p className="text-4xl md:text-5xl font-bold mb-8 font-display leading-tight">
              Expandiendo los límites de la <span className="text-brand-accent">Ingeniería Estructural</span>
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Nuestra experiencia en el sector de las telecomunicaciones es solo el principio. 
              Aplicamos nuestro dominio del cálculo estructural y la digitalización de activos 
              en sectores estratégicos que demandan la máxima precisión y seguridad.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {newServices.map((s) => (
                <div key={s.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <s.icon className="text-brand-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectors.map((sector, idx) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-brand-accent/50 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl ${sector.bg} flex items-center justify-center ${sector.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <sector.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {sector.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-2xl font-bold mb-2">¿Tienes un proyecto en un sector no convencional?</p>
            <p className="text-slate-500">Nuestra ingeniería es adaptable a cualquier reto estructural complejo.</p>
          </div>
          <button className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-blue-600 transition-all">
            <span>Consultar con Expertos</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
