import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { RefreshCw } from 'lucide-react';

export default function Retrofitting() {
  return (
    <ServiceLayout
      title="Refuerzos y Modificaciones"
      subtitle="Extensión de Vida Útil"
      description="Transformamos estructuras existentes para soportar nuevas tecnologías, aumentando su capacidad sin necesidad de reemplazo total."
      icon={RefreshCw}
      image="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
      features={[
        'Refuerzo de patas mediante Split Pipes y Half Shells',
        'Sustitución y refuerzo de diagonales y horizontales',
        'Aumento de capacidad en cimentaciones (Micropilotes)',
        'Tensado y reemplazo de cables en torres arriostradas',
        'Inspecciones post-modificación certificadas'
      ]}
      benefits={[
        'Ahorro de hasta el 60% comparado con la construcción de un nuevo sitio',
        'Mantenimiento de la operatividad del sitio durante las obras',
        'Cumplimiento inmediato de nuevas normativas de seguridad',
        'Extensión de la vida útil de activos amortizados'
      ]}
      tools={['tnxTower', 'RISA-3D', 'Custom Strengthening Tools', 'FEA Analysis']}
    >
      <p>
        La saturación de los sitios existentes es uno de los mayores retos para los operadores. En Autxana, 
        somos especialistas en ingeniería de refuerzo, permitiendo que torres construidas hace 20 años 
        puedan soportar hoy la pesada carga de los equipos 5G.
      </p>
      <p>
        Nuestro proceso de <strong>Retrofitting</strong> comienza con una auditoría estructural precisa. Diseñamos 
        soluciones de refuerzo que se pueden instalar sin interrumpir el servicio (Hot-Work), utilizando 
        conexiones atornilladas de alta resistencia que evitan la soldadura en campo siempre que es posible.
      </p>
      <p>
        También abordamos problemas de cimentación, diseñando recrecidos de zapata o anclajes adicionales 
        cuando el momento volcador de la torre aumenta debido a la nueva carga de viento. Nuestra meta es 
        maximizar la rentabilidad de su infraestructura actual.
      </p>
    </ServiceLayout>
  );
}
