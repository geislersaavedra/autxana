import React from 'react';
import InfrastructureLayout from '../../components/InfrastructureLayout';
import { Building } from 'lucide-react';

export default function Rooftops() {
  return (
    <InfrastructureLayout
      title="Rooftops & Mástiles"
      subtitle="Infraestructura Urbana"
      description="Soluciones de montaje sobre edificios existentes, aprovechando la altura urbana para una cobertura capilar y eficiente."
      icon={Building}
      image="https://images.unsplash.com/photo-1585909665970-21c5bc462847?auto=format&fit=crop&q=80&w=1200"
      specs={{
        height: '3m - 12m (Sobre edificio)',
        load: 'Variable (Soportes ligeros)',
        footprint: 'Mínimo (Repartidores de carga)'
      }}
      features={[
        'Mástiles arriostrados o autoportantes sobre azotea',
        'Bancadas de reparto de carga para protección de forjados',
        'Soluciones sin perforación (Non-Penetrating Mounts)',
        'Mimetización con elementos arquitectónicos',
        'Diseños ligeros en aluminio o acero galvanizado'
      ]}
      applications={[
        'Despliegue de microceldas urbanas',
        'Centros históricos con restricciones visuales',
        'Edificios de oficinas y residenciales',
        'Instalaciones temporales en eventos'
      ]}
    >
      <p>
        La infraestructura de azotea (Rooftop) es vital para la densificación de las redes 5G. En Autxana, 
        somos expertos en integrar equipos de telecomunicaciones en edificios existentes sin comprometer 
        la integridad estructural de la edificación ni su estética.
      </p>
      <p>
        Realizamos estudios de carga sobre forjados para diseñar bancadas de reparto que distribuyan el peso 
        de los equipos de manera segura. En muchos casos, utilizamos soluciones de contrapeso que no requieren 
        perforar la impermeabilización de la cubierta, evitando problemas de filtraciones a futuro.
      </p>
      <p>
        Nuestros diseños de mástiles y soportes de pared están pensados para ser instalados de forma rápida 
        y discreta, cumpliendo con las ordenanzas municipales de paisaje urbano y garantizando la máxima 
        seguridad para los habitantes del edificio.
      </p>
    </InfrastructureLayout>
  );
}
