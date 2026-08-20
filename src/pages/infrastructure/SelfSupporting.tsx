import React from 'react';
import InfrastructureLayout from '../../components/InfrastructureLayout';
import { Building2 } from 'lucide-react';

export default function SelfSupporting() {
  return (
    <InfrastructureLayout
      title="Torres Autosoportadas"
      subtitle="Estructuras de Celosía"
      description="La solución definitiva para despliegues de gran altura y máxima capacidad de carga en entornos rurales y estratégicos."
      icon={Building2}
      image="https://images.unsplash.com/photo-1548676530-56844241f040?auto=format&fit=crop&q=80&w=1200"
      specs={{
        height: '30m - 120m+',
        load: 'Muy Alta (Múltiples Operadores)',
        footprint: 'Grande (Requiere Cimentación)'
      }}
      features={[
        'Estructura triangular o cuadrada de 3/4 patas',
        'Máxima rigidez torsional para enlaces de microondas',
        'Diseño modular para transporte en zonas remotas',
        'Larga vida útil con galvanizado en caliente',
        'Escaleras internas con sistemas anticaídas integrados'
      ]}
      applications={[
        'Nodos principales de red (Backbone)',
        'Zonas rurales con baja densidad de sitios',
        'Instalaciones de radiodifusión y TV',
        'Sistemas de vigilancia y seguridad perimetral'
      ]}
    >
      <p>
        Las torres autosoportadas (Self-Supporting Towers) representan el estándar de oro en la infraestructura de telecomunicaciones 
        cuando se requiere la máxima fiabilidad. Su diseño en celosía permite una distribución eficiente de las cargas de viento 
        y el peso de los equipos hacia una cimentación robusta.
      </p>
      <p>
        En Autxana, optimizamos el diseño de estas torres utilizando perfiles angulares o tubulares de alta resistencia. 
        Nuestro enfoque se centra en reducir el peso total del acero sin comprometer la estabilidad, lo que se traduce 
        en ahorros significativos en fabricación y logística.
      </p>
      <p>
        Cada torre es calculada para soportar no solo la carga actual, sino también futuras ampliaciones tecnológicas, 
        permitiendo la coexistencia de múltiples operadores y tecnologías (4G, 5G, IoT) en una misma estructura.
      </p>
    </InfrastructureLayout>
  );
}
