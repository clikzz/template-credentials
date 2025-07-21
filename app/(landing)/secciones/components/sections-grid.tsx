import { SectionCard } from "./section-card";
import type { Section } from "./types";

interface SectionsGridProps {
  title: string;
  subtitle: string;
  sections: Section[];
  showNote?: boolean;
  className?: string;
}

export function SectionsGrid({
  title,
  subtitle,
  sections,
  showNote = false,
  className = "",
}: SectionsGridProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
          {showNote && (
            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Nota:</strong> Las secciones pueden sumar horas.
                Consultar con su entrenador por disponibilidad de horario.
              </p>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <SectionCard key={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
