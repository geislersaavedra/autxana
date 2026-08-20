import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe, TowerControl as Tower } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navigation = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Servicios',
    href: '/servicios',
    children: [
      { name: 'Análisis Estructural', href: '/servicios/analisis' },
      { name: 'Diseño de Torres', href: '/servicios/diseno' },
      { name: 'Refuerzos y Modificaciones', href: '/servicios/refuerzos' },
      { name: 'Inspección con Drones & LiDAR', href: '/servicios/drones' },
      { name: 'Gemelos Digitales', href: '/servicios/digital-twins' },
    ],
  },
  {
    name: 'Infraestructura',
    href: '/infraestructura',
    children: [
      { name: 'Torres Autosoportadas', href: '/infraestructura/autosoportadas' },
      { name: 'Monopolos', href: '/infraestructura/monopolos' },
      { name: 'Torres Arriostradas', href: '/infraestructura/arriostradas' },
      { name: 'Rooftops & Mástiles', href: '/infraestructura/rooftops' },
    ],
  },
  {
    name: 'Proyectos',
    href: '/proyectos',
    children: [
      { name: 'Portafolio Reciente', href: '/proyectos' },
      { name: 'Proyectos Emblemáticos', href: '/proyectos/emblematicos' },
    ],
  },
  {
    name: 'Compañía',
    href: '/nosotros',
    children: [
      { name: 'Sobre Nosotros', href: '/nosotros' },
      { name: 'Normativa Técnica', href: '/normativa' },
      { name: 'Noticias e Insights', href: '/noticias' },
      { name: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
              <Tower size={24} />
            </div>
            <span className={cn(
              "text-2xl font-bold tracking-tighter font-display",
              !scrolled && location.pathname === '/' ? "text-white" : "text-brand-primary"
            )}>
              AUTXANA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    'text-sm font-medium flex items-center space-x-1 transition-colors',
                    !scrolled && location.pathname === '/' 
                      ? 'text-white/90 hover:text-white' 
                      : 'text-slate-600 hover:text-brand-accent'
                  )}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contacto"
              className="bg-brand-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
            >
              Presupuesto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg",
                !scrolled && location.pathname === '/' ? "text-white" : "text-slate-600"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-accent hover:bg-slate-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm text-slate-500 hover:text-brand-accent"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-accent text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
