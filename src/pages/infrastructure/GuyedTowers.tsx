import React from 'react';
import InfrastructureLayout from '../../components/InfrastructureLayout';
import { Anchor } from 'lucide-react';

export default function GuyedTowers() {
  return (
    <InfrastructureLayout
      title="Torres Arriostradas"
      subtitle="Mástiles Tensados"
      description="Estructuras ligeras y extremadamente altas, soportadas por un sistema de cables tensores para máxima eficiencia de costes."
      icon={Anchor}
      image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200"
      specs={{
        height: '45m - 150m+',
        load: 'Media-Alta',
        footprint: 'Muy Grande (Radio de vientos)'
      }}
      features={[
        'Mástil central de sección triangular ligera',
        'Cables de acero galvanizado de alta resistencia',
        'Base pivotante para absorción de movimientos',
        'Bajo consumo de acero por metro lineal',
        'Ideal para terrenos con gran disponibilidad de espacio'
      ]}
      applications={[
        'Transmisiones de radio AM/FM y TV',
        'Enlaces de larga distancia en zonas llanas',
        'Estaciones meteorológicas y científicas',
        'Despliegues rurales de bajo coste'
      ]}
    >
      <p>
        Las torres arriostradas (Guyed Towers) son la solución de ingeniería más eficiente para alcanzar grandes alturas. 
        Al utilizar cables tensores para estabilizar el mástil central, se reduce drásticamente la cantidad de acero 
        necesaria en comparación con una torre autosoportada.
      </p>
      <p>
        En Autxana, realizamos análisis dinámicos complejos para determinar la tensión óptima de los vientos, 
        asegurando que la torre mantenga su verticalidad incluso bajo vientos huracanados. Calculamos con precisión 
        los bloques de anclaje, que son los encargados de mantener la estructura en pie.
      </p>
      <p>
        Este tipo de infraestructura requiere un mantenimiento especializado de la tensión de los cables. 
        Nuestros diseños incluyen protocolos de inspección y re-tensado para garantizar la seguridad operativa 
        a lo largo de décadas de servicio.
      </p>
    </InfrastructureLayout>
  );
}
