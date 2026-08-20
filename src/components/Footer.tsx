import React from 'react';
import { Link } from 'react-router-dom';
import { TowerControl as Tower, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

// Custom X icon
const XIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16H20L8.267 4z" />
    <path d="M4 20l6.768-6.768m2.464-2.464L20 4" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-white">
                <Tower size={18} />
              </div>
              <span className="text-xl font-bold tracking-tighter font-display text-white">AUTXANA</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Ingeniería estructural de vanguardia para el sector de las telecomunicaciones. 
              Soluciones globales con cumplimiento normativo local en España, USA y Venezuela.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-accent transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors" title="X (Twitter)"><XIcon size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors" title="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/servicios/analisis" className="hover:text-white transition-colors">Análisis Estructural</Link></li>
              <li><Link to="/servicios/diseno" className="hover:text-white transition-colors">Diseño de Torres</Link></li>
              <li><Link to="/servicios/refuerzos" className="hover:text-white transition-colors">Refuerzos y Modificaciones</Link></li>
              <li><Link to="/servicios/drones" className="hover:text-white transition-colors">Inspección LiDAR & Drones</Link></li>
              <li><Link to="/servicios/digital-twins" className="hover:text-white transition-colors">Gemelos Digitales</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Compañía</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/infraestructura" className="hover:text-white transition-colors">Infraestructura</Link></li>
              <li><Link to="/normativa" className="hover:text-white transition-colors">Normativa Técnica</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li><Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors">Trabaja con nosotros</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Oficinas Globales</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent shrink-0" />
                <span>Navarra, España (EU HQ)</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent shrink-0" />
                <span>Florida, USA (Americas HQ)</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-accent shrink-0" />
                <span>Caracas, Venezuela</span>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <Mail size={18} className="text-brand-accent" />
                <a href="mailto:info@autxana.com" className="hover:text-white">info@autxana.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {currentYear} Autxana Engineering S.L. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <Link to="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/legal/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/legal/terminos" className="hover:text-white transition-colors">Términos de Uso</Link>
            <Link to="/legal/prl" className="hover:text-white transition-colors">PRL & Seguridad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
