export function SectionHero() {
  return (
    <section className="from-secondary to-primary relative overflow-hidden bg-gradient-to-r py-16">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Nuestras Secciones
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100 md:text-xl">
            Horarios y planes anuales de entrenamiento para todas las edades y
            niveles
          </p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </section>
  );
}
