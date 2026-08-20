import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Tag, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Impacto de la TIA-222-H en el diseño de nuevas torres',
    content: `
      <p>La norma ANSI/TIA-222-H representa un cambio significativo en la forma en que los ingenieros estructurales abordan el diseño y análisis de torres de telecomunicaciones. Esta actualización, que sucede a la revisión G, introduce criterios de carga más precisos y metodologías de análisis que reflejan mejor el comportamiento real de las estructuras bajo condiciones extremas.</p>
      
      <h3>Cambios Principales</h3>
      <p>Uno de los cambios más notables es la actualización de los mapas de velocidad de viento, que ahora se basan en periodos de retorno de 300, 700 y 1700 años dependiendo de la categoría de riesgo de la estructura. Esto permite una optimización del material sin comprometer la seguridad.</p>
      
      <p>Además, la revisión H introduce requisitos más estrictos para el análisis de fatiga en monopolos y estructuras tubulares, un factor crítico para prevenir fallos catastróficos en zonas de alta vibración eólica.</p>
      
      <h3>¿Cómo afecta a las torres existentes?</h3>
      <p>Para las estructuras ya instaladas, la TIA-222-H puede requerir re-análisis cuando se planean actualizaciones de equipos (colocation). En Autxana, utilizamos software de última generación para realizar estas transiciones de forma eficiente, identificando los puntos críticos de refuerzo necesarios para cumplir con la nueva normativa.</p>
    `,
    date: '2026-02-15',
    author: 'Ing. Javier García',
    category: 'Ingeniería',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Drones LiDAR: El futuro de la inspección estructural',
    content: `
      <p>La inspección tradicional de torres de telecomunicaciones a menudo implica riesgos significativos para el personal y tiempos de ejecución prolongados. La integración de drones equipados con sensores LiDAR (Light Detection and Ranging) está transformando radicalmente este proceso.</p>
      
      <h3>Precisión Milimétrica</h3>
      <p>A diferencia de la fotogrametría convencional, el LiDAR permite penetrar la vegetación y capturar la geometría exacta de la torre incluso en condiciones de iluminación variable. El resultado es una "nube de puntos" de alta densidad que sirve como base para crear modelos BIM (Building Information Modeling) extremadamente precisos.</p>
      
      <h3>Eficiencia Operativa</h3>
      <p>En Autxana, hemos comprobado que el uso de drones LiDAR reduce el tiempo de toma de datos en campo en un 70%. Lo que antes tomaba días de escalada y medición manual, ahora se realiza en cuestión de horas con una precisión superior.</p>
      
      <p>Esta tecnología no solo mejora la seguridad, sino que proporciona a nuestros ingenieros una base de datos digital inigualable para realizar análisis de capacidad y simulaciones de carga.</p>
    `,
    date: '2026-02-10',
    author: 'Dra. Elena Martínez',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Autxana expande operaciones en el mercado de Florida',
    content: `
      <p>Estamos orgullosos de anunciar la apertura de nuestra nueva sede estratégica en Miami, Florida. Este movimiento marca un hito en nuestra trayectoria de expansión internacional y refuerza nuestro compromiso con el mercado de las Américas.</p>
      
      <h3>Soporte Regional</h3>
      <p>La oficina de Miami actuará como nuestro hub central para proyectos en Estados Unidos, el Caribe y Centroamérica. Contamos con un equipo de ingenieros locales familiarizados con las normativas específicas de la región, incluyendo los estrictos códigos de construcción de Florida para zonas de huracanes.</p>
      
      <h3>Cercanía con el Cliente</h3>
      <p>Esta expansión nos permite ofrecer una respuesta más ágil y personalizada a nuestros clientes en la región, facilitando la coordinación de inspecciones de campo y la entrega de proyectos de ingeniería de detalle en tiempos récord.</p>
    `,
    date: '2026-01-28',
    author: 'Comunicación Corporativa',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'Gemelos Digitales: Gestión de activos en tiempo real',
    content: `
      <p>El concepto de "Gemelo Digital" ha pasado de ser una tendencia futurista a una herramienta esencial para las TowerCos y operadores de red. En Autxana, estamos liderando la implementación de esta tecnología para optimizar la gestión de infraestructuras.</p>
      
      <h3>¿Qué es un Gemelo Digital en Telecomunicaciones?</h3>
      <p>Es una réplica virtual exacta de una estructura física, vinculada a datos dinámicos. Esto incluye desde la geometría estructural hasta el inventario detallado de antenas, cables y equipos activos.</p>
      
      <h3>Beneficios Inmediatos</h3>
      <ul>
        <li><strong>Simulación de Colocation:</strong> Evaluar instantáneamente si una torre puede soportar nuevos equipos sin necesidad de visitas al sitio.</li>
        <li><strong>Mantenimiento Predictivo:</strong> Identificar signos de corrosión o fatiga antes de que se conviertan en problemas críticos.</li>
        <li><strong>Optimización de Espacio:</strong> Maximizar el uso de la estructura para aumentar la rentabilidad del activo.</li>
      </ul>
      
      <p>Nuestra plataforma de Gemelos Digitales permite a los gestores de red tomar decisiones basadas en datos reales, reduciendo drásticamente los costes operativos y mejorando la vida útil de la infraestructura.</p>
    `,
    date: '2026-01-15',
    author: 'Ing. Carlos Ruiz',
    category: 'Digital Twins',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function NewsDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Artículo no encontrado</h2>
        <Link to="/noticias" className="text-brand-accent hover:underline mt-4 inline-block">Volver a noticias</Link>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-brand-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-accent" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-brand-accent" />
                  <span>{post.author}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Link 
                to="/noticias" 
                className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-accent transition-colors mb-12 font-bold text-sm group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Volver a Noticias</span>
              </Link>

              <article className="prose prose-slate prose-lg max-w-none">
                <div 
                  className="text-slate-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Compartir:</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-accent hover:text-white transition-all">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-accent hover:text-white transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-accent hover:text-white transition-all">
                      <Facebook size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Tag size={16} />
                  <span className="text-xs font-medium uppercase tracking-wide">{post.category}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Suscríbete al Newsletter</h3>
                <p className="text-slate-600 text-sm mb-6">Recibe las últimas actualizaciones técnicas y noticias del sector directamente en tu email.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  />
                  <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Suscribirme
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 font-display">Artículos Relacionados</h3>
                <div className="space-y-6">
                  {posts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                    <Link key={p.id} to={`/noticias/${p.id}`} className="group block">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-brand-accent transition-colors line-clamp-2 text-sm leading-snug">
                            {p.title}
                          </h4>
                          <span className="text-xs text-slate-400 mt-2 block">{p.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
