import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Box } from 'lucide-react';

export default function DigitalTwins() {
  return (
    <ServiceLayout
      title="Gemelos Digitales"
      subtitle="Gestión Inteligente de Activos"
      description="Creamos réplicas virtuales inteligentes de tus torres para una gestión, simulación y mantenimiento sin precedentes."
      icon={Box}
      image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
      features={[
        'Modelos 3D inteligentes vinculados a bases de datos SQL',
        'Simulación de escenarios "What-if" para nuevos inquilinos',
        'Integración con sistemas de gestión de red (OSS/BSS)',
        'Visualización en Realidad Aumentada para técnicos de campo',
        'Mantenimiento predictivo basado en gemelos digitales'
      ]}
      benefits={[
        'Reducción de visitas fallidas al sitio en un 40%',
        'Aceleración de los procesos de colocation y alquiler de espacio',
        'Gestión centralizada de activos en múltiples países',
        'Transparencia total en el estado de la infraestructura'
      ]}
      tools={['Autodesk BIM 360', 'Bentley OpenTower', 'Custom Digital Twin Platforms', 'Unity/Unreal Engine for Visualization']}
    >
      <p>
        El futuro de la gestión de infraestructuras es digital. En Autxana, transformamos sus torres en 
        <strong>Smart Assets</strong>. Un Gemelo Digital no es solo una imagen bonita; es una herramienta de 
        decisión estratégica que permite simular el impacto de cualquier cambio antes de que ocurra.
      </p>
      <p>
        Nuestra plataforma permite a los gestores de TowerCos visualizar la capacidad disponible en tiempo real, 
        identificar espacios óptimos para nuevos inquilinos y planificar rutas de mantenimiento preventivo 
        basadas en el estado real de la estructura capturado por nuestros drones.
      </p>
      <p>
        Al integrar el Gemelo Digital con sus sistemas de inventario existentes, creamos un ecosistema de 
        información fluido que reduce drásticamente los costes operativos y mejora la seguridad de todos 
        los trabajadores que interactúan con el sitio.
      </p>
    </ServiceLayout>
  );
}
