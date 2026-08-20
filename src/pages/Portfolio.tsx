import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, MapPin, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'red-5g-barcelona',
    title: 'Red 5G Barcelona',
    category: 'Monopolos Urbanos',
    description: 'Diseño y cálculo de 15 monopolos mimetizados para el despliegue de red 5G en el centro histórico.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    location: 'Barcelona, España',
    date: '2023'
  },
  {
    id: 'upgrade-sitio-caracas',
    title: 'Upgrade Sitio Caracas',
    category: 'Refuerzo Estructural',
    description: 'Análisis y refuerzo de torre autosoportada de 60m para soportar nuevos equipos Massive MIMO.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    location: 'Caracas, Venezuela',
    date: '2024'
  },
  {
    id: 'backbone-rural-florida',
    title: 'Backbone Rural Florida',
    category: 'Torres Arriostradas',
    description: 'Ingeniería de detalle para mástil arriostrado de 120m en zona de alta incidencia de vientos huracanados.',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
    location: 'Florida, USA',
    date: '2023'
  },
  {
    id: 'smart-poles-madrid',
    title: 'Smart Poles Madrid',
    category: 'Smart Cities',
    description: 'Desarrollo de postes inteligentes integrando iluminación, 5G y sensores IoT.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    location: 'Madrid, España',
    date: '2024'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Portafolio</h1>
            <p className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display">Proyectos que <span className="text-brand-accent">Definen</span> nuestra Trayectoria</p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Una muestra de nuestra capacidad técnica en el diseño y análisis de infraestructuras críticas a nivel global.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-xs">
                          <Calendar size={14} className="mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center text-slate-500 text-sm mb-8">
                        <MapPin size={16} className="mr-2 text-brand-accent" />
                        {project.location}
                      </div>
                    </div>
                    <Link
                      to={`/proyectos/${project.id}`}
                      className="inline-flex items-center justify-center space-x-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-accent transition-colors"
                    >
                      <span>Ver Detalles del Proyecto</span>
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
