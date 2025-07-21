import React from "react";
import {
  SectionHero,
  ContactInfo,
  SectionsGrid,
  CallToAction,
  formativos,
  avanzados,
} from "./components";

export default function SeccionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      {/* Hero Section */}
      <SectionHero />

      {/* Contact Info */}
      <ContactInfo />

      {/* Formativo Sections */}
      <SectionsGrid
        title="Gimnastas Nuevos - Formativo"
        subtitle="Programas diseñados para gimnastas que inician su formación deportiva"
        sections={formativos}
      />

      {/* Avanzado Sections */}
      <SectionsGrid
        title="Gimnastas con Experiencia"
        subtitle="Para gimnastas con requisitos técnicos de nivel Formativo, Avanzado y Elite"
        sections={avanzados}
        showNote={true}
        className="bg-gray-50/50 dark:bg-gray-900/30"
      />

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
