import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Impacto de la TIA-222-H en el diseño de nuevas torres',
    excerpt: 'Analizamos los cambios clave en la normativa americana y cómo afectan a la capacidad portante de las estructuras existentes.',
    date: '2026-02-15',
    author: 'Ing. Javier García',
    category: 'Ingeniería',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Drones LiDAR: El futuro de la inspección estructural',
    excerpt: 'Cómo la captura de nubes de puntos está reduciendo los tiempos de ingeniería en un 70% y eliminando riesgos laborales.',
    date: '2026-02-10',
    author: 'Dra. Elena Martínez',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Autxana expande operaciones en el mercado de Florida',
    excerpt: 'Nuestra nueva sede en Miami fortalecerá el soporte técnico para operadores en toda la región de las Américas.',
    date: '2026-01-28',
    author: 'Comunicación Corporativa',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Gemelos Digitales: Gestión de activos en tiempo real',
    excerpt: 'La integración de modelos 3D con datos OSS/BSS permite a las TowerCos optimizar sus procesos de colocation.',
    date: '2026-01-15',
    author: 'Ing. Carlos Ruiz',
    category: 'Digital Twins',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  }
];

export default function News() {
  return (
    <main className="pt-24 pb-24 bg-white">
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display">Noticias e <span className="text-brand-accent">Insights</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Mantente al día con las últimas tendencias en ingeniería estructural, 
              innovación tecnológica y actualizaciones normativas del sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <Link 
                      to={`/noticias/${post.id}`} 
                      className="inline-flex items-center space-x-2 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors"
                    >
                      <span>Leer Artículo</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
