import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calculator, Drone, Box, DraftingCompass, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Análisis Estructural',
    href: '/servicios/analisis',
    description: 'Evaluación de capacidad de carga mediante análisis no lineal P-Delta para despliegues 5G.',
    icon: Calculator,
    color: 'bg-blue-500'
  },
  {
    title: 'Diseño de Torres',
    href: '/servicios/diseno',
    description: 'Ingeniería de detalle para estructuras autosoportadas, monopolos y mástiles arriostrados.',
    icon: DraftingCompass,
    color: 'bg-emerald-500'
  },
  {
    title: 'Refuerzos y Modificaciones',
    href: '/servicios/refuerzos',
    description: 'Diseño de soluciones de refuerzo estructural para optimizar activos existentes.',
    icon: RefreshCw,
    color: 'bg-amber-500'
  },
  {
    title: 'Inspección LiDAR & Drones',
    href: '/servicios/drones',
    description: 'Captura de datos de alta precisión mediante fotogrametría y escaneo láser.',
    icon: Drone,
    color: 'bg-purple-500'
  },
  {
    title: 'Gemelos Digitales',
    href: '/servicios/digital-twins',
    description: 'Modelado 3D inteligente y gestión de inventario digital de infraestructuras.',
    icon: Box,
    color: 'bg-indigo-500'
  },
  {
    title: 'Cumplimiento Normativo',
    href: '/normativa',
    description: 'Certificación técnica bajo estándares TIA-222-H, Eurocódigo y normativas locales.',
    icon: ShieldCheck,
    color: 'bg-rose-500'
  }
];

export default function ServicesLanding() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Nuestros Servicios</h1>
            <p className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display">Ingeniería <span className="text-brand-accent">360º</span> para Telecomunicaciones</p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un ecosistema completo de soluciones técnicas que cubren todo el ciclo de vida de la infraestructura, desde el diseño inicial hasta el mantenimiento preventivo mediante gemelos digitales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link 
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-brand-accent font-bold hover:translate-x-2 transition-transform"
                >
                  <span>Explorar Servicio</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Methodology" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Metodología</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Innovación en cada <span className="text-brand-accent">Cálculo</span></h3>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg">
                  Nuestra metodología combina la experiencia de campo con las herramientas digitales más potentes del mercado. No solo entregamos planos; entregamos soluciones optimizadas que reducen costes y maximizan la seguridad.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2 font-semibold text-slate-800">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span>Flujos de trabajo BIM</span>
                  </li>
                  <li className="flex items-center space-x-2 font-semibold text-slate-800">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span>Análisis P-Delta</span>
                  </li>
                  <li className="flex items-center space-x-2 font-semibold text-slate-800">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span>Automatización CAD</span>
                  </li>
                  <li className="flex items-center space-x-2 font-semibold text-slate-800">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span>Simulación CAE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
