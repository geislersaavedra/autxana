import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Calculator } from 'lucide-react';

export default function StructuralAnalysis() {
  return (
    <ServiceLayout
      title="Análisis Estructural Avanzado"
      subtitle="Ingeniería de Precisión"
      description="Evaluamos la integridad y capacidad de carga de infraestructuras de telecomunicaciones bajo las normativas internacionales más exigentes."
      icon={Calculator}
      image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
      features={[
        'Análisis de carga de viento, hielo y sismo (TIA-222-H / Eurocódigo)',
        'Verificación de capacidad de miembros y conexiones críticas',
        'Análisis de soportes de antenas (Mount Analysis)',
        'Mapeo y evaluación de cimentaciones existentes',
        'Estudios de fatiga y vibración eólica'
      ]}
      benefits={[
        'Certificación técnica para despliegues 5G de alta densidad',
        'Optimización de la capacidad portante sin sobrecostes',
        'Cumplimiento normativo en España, USA y Venezuela',
        'Informes ejecutivos con semáforo de estado (Pasa/Falla)'
      ]}
      tools={['tnxTower', 'RISA-3D', 'STAAD.Pro', 'Robot Structural Analysis', 'MStower']}
    >
      <p>
        El análisis estructural es el núcleo de nuestra ingeniería. En Autxana, no nos limitamos a correr un software; 
        interpretamos los resultados basándonos en décadas de experiencia en campo. Realizamos análisis no lineales 
        P-Delta avanzados para capturar el comportamiento real de las torres bajo cargas extremas.
      </p>
      <p>
        Especialmente críticos son nuestros <strong>Mount Analysis</strong>, donde evaluamos si los soportes de antenas 
        actuales pueden resistir el peso y la superficie de viento de los nuevos equipos Massive MIMO. Si un soporte 
        falla, diseñamos la solución de refuerzo o el reemplazo más eficiente.
      </p>
      <p>
        Nuestros ingenieros están familiarizados con las transiciones normativas, como el paso de TIA-222-G a H, 
        asegurando que sus activos cumplan con los estándares de seguridad más recientes y rigurosos del mercado global.
      </p>
    </ServiceLayout>
  );
}
