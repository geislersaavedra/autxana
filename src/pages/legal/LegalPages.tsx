import React from 'react';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <main className="pt-32 pb-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-12 font-display">{title}</h1>
      <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
        {children}
      </div>
    </div>
  </main>
);

export const Privacy = () => (
  <LegalLayout title="Política de Privacidad">
    <p>Última actualización: Marzo 2026</p>
    <h2>1. Responsable del Tratamiento</h2>
    <p>Autxana Engineering S.L. (España), Autxana LLC (USA) y Autxana C.A. (Venezuela) son los responsables del tratamiento de sus datos personales según la jurisdicción correspondiente.</p>
    <h2>2. Datos que Recopilamos</h2>
    <p>Recopilamos información necesaria para la prestación de servicios de ingeniería, incluyendo nombres, correos corporativos, datos de facturación y detalles técnicos de proyectos.</p>
    <h2>3. Finalidad del Tratamiento</h2>
    <p>Sus datos se utilizan exclusivamente para la gestión de proyectos, cumplimiento de obligaciones legales y envío de comunicaciones técnicas solicitadas.</p>
    <h2>4. Derechos del Usuario</h2>
    <p>Usted tiene derecho a acceder, rectificar, suprimir y oponerse al tratamiento de sus datos. En la UE, estos derechos están amparados por el RGPD.</p>
  </LegalLayout>
);

export const Cookies = () => (
  <LegalLayout title="Política de Cookies">
    <p>Este sitio web utiliza cookies técnicas y analíticas para mejorar su experiencia de navegación.</p>
    <h2>¿Qué son las cookies?</h2>
    <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar una web.</p>
    <h2>Tipos de cookies que utilizamos</h2>
    <ul>
      <li><strong>Técnicas:</strong> Necesarias para el funcionamiento del sitio.</li>
      <li><strong>Analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con la web (Google Analytics).</li>
    </ul>
    <h2>Gestión de cookies</h2>
    <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una.</p>
  </LegalLayout>
);

export const LegalNotice = () => (
  <LegalLayout title="Aviso Legal">
    <h2>Identificación</h2>
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los siguientes datos identificativos:</p>
    <ul>
      <li><strong>Titular:</strong> Autxana Engineering S.L.</li>
      <li><strong>NIF:</strong> B00000000</li>
      <li><strong>Domicilio:</strong> Pamplona, Navarra, España.</li>
      <li><strong>Email:</strong> legal@autxana.com</li>
    </ul>
    <h2>Propiedad Intelectual</h2>
    <p>Todos los contenidos de esta web (textos, imágenes, software de cálculo, diseños) son propiedad de Autxana o de sus licenciantes.</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Términos de Uso">
    <h2>1. Aceptación</h2>
    <p>El acceso a este sitio web implica la aceptación de los presentes términos de uso.</p>
    <h2>2. Uso del Sitio</h2>
    <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios técnicos ofrecidos.</p>
    <h2>3. Limitación de Responsabilidad</h2>
    <p>Autxana no se hace responsable de los daños derivados del uso de la información contenida en esta web para fines distintos a la consulta técnica general.</p>
  </LegalLayout>
);

export const PRL = () => (
  <LegalLayout title="PRL & Seguridad">
    <h2>Compromiso con la Seguridad</h2>
    <p>La seguridad es el pilar fundamental de Autxana Engineering. Operamos bajo la premisa de "Cero Accidentes".</p>
    <h2>Protocolos de Trabajo en Altura</h2>
    <p>Todos nuestros ingenieros de campo y subcontratistas cumplen estrictamente con:</p>
    <ul>
      <li>Uso de EPIs certificados (Arneses, cascos, calzado dieléctrico).</li>
      <li>Certificaciones de formación para trabajos en altura (TELCO en España, OSHA en USA).</li>
      <li>Planes de Seguridad y Salud específicos para cada sitio.</li>
    </ul>
    <h2>Prevención de Riesgos Laborales (PRL)</h2>
    <p>Cumplimos con la Ley 31/1995 en España, las regulaciones OSHA en Estados Unidos y la LOPCYMAT en Venezuela.</p>
  </LegalLayout>
);
