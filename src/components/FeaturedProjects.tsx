import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'red-5g-barcelona',
    title: 'Red 5G Barcelona',
    category: 'Monopolos Urbanos',
    description: 'Diseño y cálculo de 15 monopolos mimetizados para el despliegue de red 5G en el centro histórico.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    location: 'Barcelona, España'
  },
  {
    id: 'upgrade-sitio-caracas',
    title: 'Upgrade Sitio Caracas',
    category: 'Refuerzo Estructural',
    description: 'Análisis y refuerzo de torre autosoportada de 60m para soportar nuevos equipos Massive MIMO.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    location: 'Caracas, Venezuela'
  },
  {
    id: 'backbone-rural-florida',
    title: 'Backbone Rural Florida',
    category: 'Torres Arriostradas',
    description: 'Ingeniería de detalle para mástil arriostrado de 120m en zona de alta incidencia de vientos huracanados.',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
    location: 'Florida, USA'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Portafolio</h2>
            <p className="text-4xl font-bold text-slate-900 font-display">Proyectos <span className="text-brand-accent">Destacados</span></p>
            <p className="text-lg text-slate-600 mt-4">
              Una muestra de nuestra capacidad técnica en el diseño y análisis de infraestructuras críticas a nivel global.
            </p>
          </div>
          <Link 
            to="/proyectos" 
            className="inline-flex items-center space-x-2 text-brand-primary font-bold hover:text-brand-accent transition-colors group"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-brand-accent px-3 py-1 rounded-full">
                    {project.location}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/proyectos/${project.id}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors"
                >
                  <span>Ver Detalles</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
