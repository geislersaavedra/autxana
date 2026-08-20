import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Send, Linkedin, FileText, Upload, CheckCircle2, ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 'eng-01',
    title: 'Ingeniero Estructural Senior',
    location: 'Madrid, España / Remoto',
    type: 'Tiempo Completo',
    description: 'Buscamos un experto en cálculo de torres de telecomunicaciones con dominio de tnxTower y normativas TIA-222-H.'
  },
  {
    id: 'eng-02',
    title: 'Especialista BIM / Digital Twin',
    location: 'Caracas, Venezuela',
    type: 'Tiempo Completo',
    description: 'Responsable de la creación de modelos inteligentes y gestión de nubes de puntos LiDAR para activos de infraestructura.'
  },
  {
    id: 'eng-03',
    title: 'Ingeniero de Proyectos Junior',
    location: 'Miami, USA',
    type: 'Híbrido',
    description: 'Apoyo en el diseño de refuerzos estructurales y coordinación de levantamientos con drones.'
  }
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
            alt="Autxana Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
          >
            Únete al Equipo de <span className="text-brand-accent">Autxana</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Buscamos mentes brillantes apasionadas por la ingeniería estructural y la innovación tecnológica en telecomunicaciones.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Job Listings */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Vacantes Disponibles</h2>
              <div className="space-y-6">
                {jobs.map((job) => (
                  <div key={job.id} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        <Briefcase size={24} />
                      </div>
                      <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-brand-accent/20">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-slate-500 text-sm mb-4">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>
                    <Link 
                      to={`/trabaja-con-nosotros/${job.id}`}
                      className="text-brand-accent font-bold text-sm flex items-center hover:translate-x-2 transition-transform"
                    >
                      Ver detalles de la oferta <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">¡Solicitud Enviada!</h3>
                  <p className="text-slate-400">
                    Gracias por tu interés en Autxana. Nuestro equipo de RRHH revisará tu perfil y se pondrá en contacto contigo pronto.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-accent font-bold hover:underline"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-4 font-display">Candidatura Espontánea</h2>
                  <p className="text-slate-400 mb-8">
                    ¿No encuentras una vacante que se ajuste a tu perfil? Envíanos tu CV y te tendremos en cuenta para futuras oportunidades.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nombre Completo</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                          placeholder="email@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Enlace a LinkedIn</label>
                      <div className="relative">
                        <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input 
                          type="url" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                          placeholder="https://linkedin.com/in/tu-perfil"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Carta de Presentación</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                        placeholder="Cuéntanos por qué quieres unirte a Autxana..."
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Adjuntar CV (PDF)</label>
                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-xl hover:border-brand-accent transition-colors cursor-pointer group">
                          <div className="text-center">
                            <Upload className="mx-auto text-slate-500 group-hover:text-brand-accent mb-2" size={24} />
                            <span className="text-xs text-slate-500">Subir archivo</span>
                          </div>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" required />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Otros Documentos</label>
                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-xl hover:border-brand-accent transition-colors cursor-pointer group">
                          <div className="text-center">
                            <FileText className="mx-auto text-slate-500 group-hover:text-brand-accent mb-2" size={24} />
                            <span className="text-xs text-slate-500">Portafolio / Títulos</span>
                          </div>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
                    >
                      <span>Enviar Candidatura</span>
                      <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
