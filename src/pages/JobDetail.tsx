import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowLeft, CheckCircle2, Send, ShieldCheck, Zap, Globe } from 'lucide-react';

const jobs = [
  {
    id: 'eng-01',
    title: 'Ingeniero Estructural Senior',
    location: 'Madrid, España / Remoto',
    type: 'Tiempo Completo',
    category: 'Ingeniería',
    salary: 'Competitivo según experiencia',
    description: 'Buscamos un experto en cálculo de torres de telecomunicaciones con dominio de tnxTower y normativas TIA-222-H para liderar proyectos de gran envergadura.',
    responsibilities: [
      'Realizar análisis estructurales avanzados de torres autosoportadas, monopolos y estructuras arriostradas.',
      'Diseñar soluciones de refuerzo para estructuras existentes que requieren actualizaciones de equipos (5G).',
      'Validar memorias de cálculo bajo normativas internacionales (TIA-222-H, Eurocódigo).',
      'Coordinar con el equipo de campo para la validación de datos de inspección LiDAR.',
      'Mentoría de ingenieros junior y revisión de calidad de proyectos.'
    ],
    requirements: [
      'Grado en Ingeniería Civil, Mecánica o Industrial (especialidad estructuras).',
      'Mínimo 5-7 años de experiencia específica en el sector de telecomunicaciones.',
      'Dominio experto de tnxTower, RISA-3D o software similar.',
      'Conocimiento profundo de la normativa ANSI/TIA-222-H.',
      'Nivel de inglés técnico fluido (B2/C1).'
    ],
    benefits: [
      'Contrato indefinido con paquete retributivo atractivo.',
      'Flexibilidad horaria y opción de teletrabajo.',
      'Formación continua en tecnologías de vanguardia (Digital Twins, LiDAR).',
      'Oportunidad de trabajar en proyectos internacionales de primer nivel.'
    ]
  },
  {
    id: 'eng-02',
    title: 'Especialista BIM / Digital Twin',
    location: 'Caracas, Venezuela',
    type: 'Tiempo Completo',
    category: 'Tecnología',
    salary: 'Acorde al mercado internacional',
    description: 'Responsable de la creación de modelos inteligentes y gestión de nubes de puntos LiDAR para activos de infraestructura de telecomunicaciones.',
    responsibilities: [
      'Procesamiento de nubes de puntos LiDAR capturadas mediante drones.',
      'Creación de modelos BIM detallados de torres y emplazamientos.',
      'Integración de datos estructurales en plataformas de Gemelos Digitales.',
      'Desarrollo de flujos de trabajo automatizados para la extracción de inventario.',
      'Colaboración con el equipo de ingeniería para la validación de modelos.'
    ],
    requirements: [
      'Formación técnica en Arquitectura, Ingeniería o Topografía.',
      'Experiencia demostrable en Revit, Civil 3D o software de procesamiento LiDAR.',
      'Conocimiento de metodologías BIM.',
      'Capacidad analítica y atención al detalle.',
      'Pasión por las nuevas tecnologías y la digitalización.'
    ],
    benefits: [
      'Entorno de trabajo dinámico y tecnológico.',
      'Seguro médico privado.',
      'Bonificaciones por cumplimiento de objetivos.',
      'Plan de carrera en una empresa en expansión global.'
    ]
  },
  {
    id: 'eng-03',
    title: 'Ingeniero de Proyectos Junior',
    location: 'Miami, USA',
    type: 'Híbrido',
    category: 'Ingeniería',
    salary: 'Base + Incentivos',
    description: 'Apoyo en el diseño de refuerzos estructurales y coordinación de levantamientos con drones para el mercado de USA y Caribe.',
    responsibilities: [
      'Asistir en el modelado básico de estructuras de telecomunicaciones.',
      'Preparar planos de detalle para fabricación de refuerzos metálicos.',
      'Coordinar logística de inspecciones de campo con equipos de drones.',
      'Revisión preliminar de informes de inspección y cumplimiento normativo.',
      'Gestión de documentación técnica para permisos locales.'
    ],
    requirements: [
      'Ingeniero recién graduado o con 1-2 años de experiencia.',
      'Conocimientos básicos de AutoCAD y software de cálculo estructural.',
      'Residencia en el área de Miami o disposición para traslados frecuentes.',
      'Bilingüe (Español/Inglés) obligatorio.',
      'Actitud proactiva y ganas de aprender.'
    ],
    benefits: [
      'Entrenamiento especializado en normativa TIA-222-H.',
      'Oportunidad de crecimiento rápido dentro de la sede USA.',
      'Seguro de salud y beneficios de ley.',
      'Ambiente multicultural y colaborativo.'
    ]
  }
];

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Oferta no encontrada</h2>
        <Link to="/trabaja-con-nosotros" className="text-brand-accent hover:underline mt-4 inline-block">Volver a empleo</Link>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/trabaja-con-nosotros" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-bold text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Volver a Empleo</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {job.category}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Clock size={14} />
                  {job.type}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">{job.title}</h1>
              <div className="flex items-center text-slate-400 gap-6">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-brand-accent" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={16} className="text-brand-accent" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <a 
              href="#apply" 
              className="inline-flex items-center justify-center bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
            >
              Inscribirme ahora
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Descripción del Puesto</h2>
                <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                  {job.description}
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Zap size={20} className="text-brand-accent" />
                      Responsabilidades Clave
                    </h3>
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ShieldCheck size={20} className="text-brand-accent" />
                      Requisitos del Candidato
                    </h3>
                    <ul className="space-y-3">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2.5 shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Globe size={20} className="text-brand-accent" />
                      Beneficios Autxana
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {job.benefits.map((item, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm text-slate-700 font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Quick Apply */}
            <div className="lg:col-span-4" id="apply">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Enviar Candidatura</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">LinkedIn URL</label>
                    <input type="url" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">CV (PDF)</label>
                    <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-brand-accent/10 file:text-brand-accent hover:file:bg-brand-accent/20 cursor-pointer" />
                  </div>
                  <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all mt-4">
                    <span>Enviar Solicitud</span>
                    <Send size={18} />
                  </button>
                </form>
                <p className="text-[10px] text-slate-400 mt-6 text-center">
                  Al enviar tu solicitud, aceptas nuestra política de privacidad para el tratamiento de datos de candidatos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
