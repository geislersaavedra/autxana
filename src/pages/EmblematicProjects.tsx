import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Globe, Building2, TowerControl as Tower, Ruler } from 'lucide-react';

const emblematicProjects = [
  {
    id: 'estadio-cachamay',
    title: 'Estadio CTE Cachamay',
    subtitle: 'Copa América Venezuela 2007',
    location: 'Puerto Ordaz, Edo. Bolívar',
    description: 'Cálculo, diseño e ingeniería de detalle de la estructura de acero para el soporte de la cubierta de techo. Un proyecto masivo que involucró 479 toneladas de acero estructural y la instalación de 23.300 m² de tejido arquitectónico de alta resistencia.',
    category: 'Infraestructura Deportiva',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Acero Estructural', value: '479 Ton' },
      { label: 'Tejido Arq.', value: '23.300 m²' }
    ]
  },
  {
    id: 'estadio-merida',
    title: 'Estadio Metropolitano de Mérida',
    subtitle: 'Ingeniería de Tensoestructuras',
    location: 'Mérida, Edo. Mérida',
    description: 'Cálculo, diseño e ingeniería de detalle de las cubiertas de tejido arquitectónico en la grada principal. Este proyecto destaca por su complejidad geométrica y el uso de materiales textiles avanzados para cubrir 10.000 m².',
    category: 'Infraestructura Deportiva',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Área Cubierta', value: '10.000 m²' },
      { label: 'Año Ejecución', value: '2005-2007' }
    ]
  },
  {
    id: 'coliseo-guanare',
    title: 'Coliseo de Guanare',
    subtitle: 'Domo Geodésico de Gran Luz',
    location: 'Guanare, Edo. Portuguesa',
    description: 'Ingeniería de detalle para un gimnasio de usos múltiples con capacidad para 7.500 espectadores. El diseño cuenta con un domo de 86 metros de diámetro y 28 metros de altura, soportado por una estructura de acero optimizada.',
    category: 'Estructuras Espaciales',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Diámetro Domo', value: '86 m' },
      { label: 'Capacidad', value: '7.500 Pax' }
    ]
  },
  {
    id: 'satelite-simon-bolivar',
    title: 'Estación Terrena Simón Bolívar',
    subtitle: 'Soberanía Tecnológica',
    location: 'El Sombrero, Edo. Guárico',
    description: 'Cálculo, diseño e ingeniería de detalle de la estructura de acero de la edificación principal de las instalaciones satelitales. Un proyecto de infraestructura crítica que requirió los más altos estándares de precisión y seguridad.',
    category: 'Telecomunicaciones & Espacial',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Tipo', value: 'Infra. Crítica' },
      { label: 'Estructura', value: 'Acero' }
    ]
  },
  {
    id: 'gimnasio-uc',
    title: 'Gimnasio Ciudad Universitaria UC',
    subtitle: 'Malla Espacial Avanzada',
    location: 'Valencia, Edo. Carabobo',
    description: 'Ingeniería de detalle de un gimnasio múltiple con una estructura espacial de 51x66 metros de luz libre. El diseño integra cerramientos y estructuras de gradas en una solución arquitectónica funcional y moderna.',
    category: 'Estructuras Espaciales',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Luz Libre', value: '51x66 m' },
      { label: 'Altura', value: '16 m' }
    ]
  },
  {
    id: 'telecom-nacional',
    title: 'Red Nacional de Telecomunicaciones',
    subtitle: 'Movistar / Digitel / Cantv / Movilnet',
    location: 'Venezuela (Nacional)',
    description: 'Diseño, cálculo y rediseño de cientos de torres de telecomunicaciones (autosoportadas, venteadas y monopolos). Incluye estudios de carga para la implementación de nuevas tecnologías y optimización de infraestructura existente.',
    category: 'Telecomunicaciones',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Estudios Carga', value: '1000+' },
      { label: 'Operadoras', value: 'Top 4' }
    ]
  }
];

export default function EmblematicProjects() {
  return (
    <div className="pt-20 bg-[#f5f2ed]">
      {/* Hero Section - Prestige Style */}
      <section className="relative py-32 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-6">Trayectoria Consolidada</h2>
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 font-serif leading-tight">
              Proyectos <span className="italic">Emblemáticos</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Una recopilación de las obras de ingeniería más significativas lideradas por nuestro equipo técnico a lo largo de dos décadas de excelencia profesional.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Tower size={600} className="text-brand-primary transform translate-x-1/4 translate-y-1/4" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {emblematicProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                {/* Image Side */}
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                      <p className="text-white font-serif italic text-2xl">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-8">
                    <div>
                      <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold text-slate-900 mb-4 font-display leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm font-medium">
                        <Globe size={16} className="mr-2 text-brand-accent" />
                        {project.location}
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                      {project.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="border-l-2 border-brand-accent pl-4">
                          <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <div className="inline-flex items-center space-x-4 text-brand-primary font-bold group cursor-default">
                        <div className="w-12 h-[1px] bg-brand-accent group-hover:w-16 transition-all"></div>
                        <span className="text-sm uppercase tracking-widest">Ingeniería de Detalle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award size={48} className="text-brand-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">Más de 20 años de <span className="text-brand-accent">Excelencia</span></h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
            Nuestra propiedad intelectual y experiencia acumulada en estos proyectos emblemáticos son la base de la confianza que nuestros clientes depositan en Autxana hoy en día.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <span className="font-bold tracking-widest uppercase">Copa América 2007</span>
            <span className="font-bold tracking-widest uppercase">Juegos Nacionales ANDES</span>
            <span className="font-bold tracking-widest uppercase">Misión Vivienda</span>
            <span className="font-bold tracking-widest uppercase">Redes 5G Global</span>
          </div>
        </div>
      </section>
    </div>
  );
}
