import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Tag, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const projectData: Record<string, any> = {
  'red-5g-barcelona': {
    title: 'Red 5G Barcelona',
    category: 'Monopolos Urbanos',
    location: 'Barcelona, España',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1544724569-5f546ff6f2b5?auto=format&fit=crop&q=80&w=1200',
    challenge: 'El despliegue de la red 5G en el centro histórico de Barcelona requería estructuras que no rompieran la estética urbana y cumplieran con estrictas normativas de patrimonio.',
    solution: 'Diseñamos 15 monopolos mimetizados con acabados personalizados que integran las antenas y equipos de radio dentro de la propia estructura. Se realizó un análisis de vibraciones para garantizar la estabilidad de los equipos activos.',
    results: [
      'Despliegue exitoso en zonas de alta densidad poblacional.',
      'Cumplimiento total con las normativas de urbanismo y patrimonio.',
      'Optimización del espacio en vía pública mediante diseños compactos.'
    ],
    specs: [
      { label: 'Altura', value: '18m - 24m' },
      { label: 'Tipo', de: 'Monopolo Mimetizado' },
      { label: 'Normativa', value: 'Eurocódigo 3' },
      { label: 'Software', value: 'PLS-POLE / RISA-3D' }
    ]
  },
  'upgrade-sitio-caracas': {
    title: 'Upgrade Sitio Caracas',
    category: 'Refuerzo Estructural',
    location: 'Caracas, Venezuela',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Una torre autosoportada de 60m necesitaba un incremento de carga del 40% para soportar nuevos equipos Massive MIMO de última generación.',
    solution: 'Realizamos un análisis no lineal P-Delta que identificó los elementos críticos. Se diseñó un sistema de refuerzo mediante el encamisado de montantes y la adición de nuevos arriostramientos secundarios sin interrumpir el servicio.',
    results: [
      'Incremento de capacidad estructural verificado.',
      'Ahorro del 60% frente a la construcción de una nueva torre.',
      'Extensión de la vida útil del activo por 15 años adicionales.'
    ],
    specs: [
      { label: 'Altura', value: '60m' },
      { label: 'Tipo', value: 'Autosoportada' },
      { label: 'Normativa', value: 'TIA-222-H / COVENIN' },
      { label: 'Software', value: 'MSTower' }
    ]
  },
  'backbone-rural-florida': {
    title: 'Backbone Rural Florida',
    category: 'Torres Arriostradas',
    location: 'Florida, USA',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Diseño de un mástil de 120m para una red de backbone en una zona costera con vientos de diseño de hasta 250 km/h.',
    solution: 'Ingeniería de detalle para una torre arriostrada de sección triangular con acero de alta resistencia. Se implementó un sistema de monitoreo de tensión en los vientos para compensar las cargas dinámicas durante tormentas.',
    results: [
      'Estructura certificada para vientos huracanados.',
      'Mínima deflexión garantizando la alineación de enlaces microondas.',
      'Instalación completada en tiempo récord mediante secciones pre-ensambladas.'
    ],
    specs: [
      { label: 'Altura', value: '120m' },
      { label: 'Tipo', value: 'Arriostrada' },
      { label: 'Normativa', value: 'TIA-222-H' },
      { label: 'Software', value: 'TNXTower' }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <Link to="/proyectos" className="text-brand-accent mt-4 inline-block">Volver al portafolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <Link 
              to="/proyectos" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver al Portafolio
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-display">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-brand-accent mr-4 rounded-full"></span>
                  El Desafío
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-brand-accent mr-4 rounded-full"></span>
                  Nuestra Solución
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-brand-accent mr-4 rounded-full"></span>
                  Resultados Clave
                </h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {project.results.map((result: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                      <span className="text-slate-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specs */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Ficha Técnica</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin size={16} className="mr-2" />
                      Ubicación
                    </div>
                    <div className="font-semibold">{project.location}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      Año
                    </div>
                    <div className="font-semibold">{project.date}</div>
                  </div>
                  {project.specs.map((spec: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="text-slate-400 text-sm">{spec.label}</div>
                      <div className="font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50">
                <ShieldCheck className="text-brand-accent mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Garantía Autxana</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Todos nuestros proyectos cuentan con certificación de cumplimiento normativo y seguro de responsabilidad civil profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
