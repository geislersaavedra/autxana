import React from 'react';
import InfrastructureLayout from '../../components/InfrastructureLayout';
import { TowerControl as Tower } from 'lucide-react';

export default function Monopoles() {
  return (
    <InfrastructureLayout
      title="Monopolos"
      subtitle="Estructuras Tubulares"
      description="Diseño estilizado y eficiente para una integración perfecta en entornos urbanos y suburbanos con espacio limitado."
      icon={Tower}
      image="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200"
      specs={{
        height: '15m - 45m',
        load: 'Media (1-2 Operadores)',
        footprint: 'Mínimo (Ideal para aceras/parques)'
      }}
      features={[
        'Secciones tubulares encajables o bridadas',
        'Cableado interno protegido contra vandalismo',
        'Opciones de camuflaje (Palmeral, Ciprés, Reloj)',
        'Instalación rápida (1-2 días)',
        'Acabados en pintura según entorno municipal'
      ]}
      applications={[
        'Zonas urbanas densas',
        'Parques y áreas recreativas',
        'Bordes de carreteras y autopistas',
        'Sitios con restricciones de espacio severas'
      ]}
    >
      <p>
        Los monopolos son la respuesta de la ingeniería a la necesidad de conectividad en ciudades modernas. 
        Su diseño de un solo fuste ofrece un perfil visual mucho más discreto que las torres de celosía, 
        facilitando la obtención de permisos municipales y la aceptación social.
      </p>
      <p>
        En Autxana, diseñamos monopolos de sección circular o poligonal, optimizando el espesor de la chapa 
        para resistir las oscilaciones provocadas por el viento. Prestamos especial atención al diseño de 
        las bridas de conexión y la placa base, puntos críticos para la integridad de la estructura.
      </p>
      <p>
        Nuestras soluciones incluyen sistemas de montaje de antenas "low profile" que mantienen la estética 
        del monopolo mientras permiten una orientación precisa de los sectores de radio.
      </p>
    </InfrastructureLayout>
  );
}
