import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Drone } from 'lucide-react';

export default function DroneInspections() {
  return (
    <ServiceLayout
      title="Inspección con Drones & LiDAR"
      subtitle="Ingeniería de Campo 4.0"
      description="Capturamos la realidad física con precisión milimétrica mediante tecnología aérea y sensores láser de última generación."
      icon={Drone}
      image="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200"
      features={[
        'Nubes de puntos LiDAR de alta densidad (±2mm precisión)',
        'Modelos de elevación digital y análisis de Line-of-Sight',
        'Inspección térmica para detección de puntos calientes en equipos',
        'Cálculo automático de azimut y tilt de antenas',
        'Detección de corrosión y fatiga mediante IA visual'
      ]}
      benefits={[
        'Reducción del 90% en el tiempo de toma de datos en sitio',
        'Eliminación total de riesgos de caída para personal de inspección',
        'Datos digitales exportables directamente a software de cálculo',
        'Auditoría visual 360º accesible desde el navegador'
      ]}
      tools={['DJI Enterprise', 'LiDAR Sensors', 'Pix4D', 'ContextCapture', 'Global Mapper']}
    >
      <p>
        La ingeniería de campo ha cambiado para siempre. En Autxana, utilizamos drones no solo para tomar fotos, 
        sino como herramientas de medición geodésica. Nuestros levantamientos <strong>LiDAR (Light Detection and Ranging)</strong> 
        atraviesan la vegetación y capturan la geometría exacta de la torre y sus accesorios.
      </p>
      <p>
        Esta tecnología nos permite realizar auditorías de inventario masivas con una precisión sin precedentes. 
        Podemos identificar el modelo exacto de una antena, su altura de montaje y su orientación sin que un 
        técnico tenga que escalar la estructura.
      </p>
      <p>
        Los datos capturados se procesan para generar informes técnicos que alimentan directamente nuestros 
        modelos de análisis estructural, cerrando el círculo entre la realidad física y el cálculo de ingeniería 
        de una manera ágil y segura.
      </p>
    </ServiceLayout>
  );
}
