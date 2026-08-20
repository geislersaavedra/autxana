import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { DraftingCompass } from 'lucide-react';

export default function TowerDesign() {
  return (
    <ServiceLayout
      title="Diseño de Torres de Telecomunicaciones"
      subtitle="Infraestructura a Medida"
      description="Diseñamos estructuras innovadoras, eficientes y duraderas, optimizadas para las necesidades específicas de cada sitio y cliente."
      icon={DraftingCompass}
      image="https://images.unsplash.com/photo-1548676530-56844241f040?auto=format&fit=crop&q=80&w=1200"
      features={[
        'Diseño de torres autosoportadas (Lattice) de alta eficiencia',
        'Monopolos estéticos y camuflados para entornos urbanos',
        'Unidades de Despliegue Rápido (RDU) para emergencias',
        'Diseño de cimentaciones en terrenos complejos (Roca/Fango)',
        'Modelado BIM LOD 400 para fabricación directa'
      ]}
      benefits={[
        'Reducción de hasta un 15% en el peso del acero mediante optimización',
        'Estructuras modulares que facilitan el transporte internacional',
        'Diseños "Future-Proof" con reserva de carga para 10 años',
        'Integración nativa de sistemas de seguridad anticaídas'
      ]}
      tools={['AutoCAD', 'Tekla Structures', 'SolidWorks', 'Autodesk Revit', 'Custom Design Scripts']}
    >
      <p>
        Diseñar una torre hoy requiere una visión a largo plazo. En Autxana, creamos infraestructuras que no solo 
        soportan las antenas de hoy, sino que están preparadas para la densificación de red de la próxima década. 
        Nuestros diseños de <strong>Greenfield Sites</strong> se centran en la eficiencia estructural y la facilidad de montaje.
      </p>
      <p>
        Para entornos urbanos sensibles, desarrollamos monopolos con soluciones de camuflaje innovadoras que 
        cumplen con las normativas municipales más estrictas sin comprometer la funcionalidad técnica. Cada diseño 
        pasa por un riguroso proceso de revisión por pares para garantizar la máxima seguridad.
      </p>
      <p>
        Entregamos paquetes de ingeniería completos que incluyen planos de taller detallados, listas de materiales (BOM) 
        y manuales de montaje, asegurando que el proceso de fabricación en España, USA o Venezuela sea impecable.
      </p>
    </ServiceLayout>
  );
}
