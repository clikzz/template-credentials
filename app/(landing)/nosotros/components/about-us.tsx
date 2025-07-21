import React from "react";

export function AboutUs() {
  return (
    <section className="from-secondary to-primary bg-gradient-to-r text-white">
      <div className="container mx-auto flex max-w-3xl flex-col items-center px-6 py-12 text-center lg:py-16">
        <h2 className="mb-6 text-5xl font-bold">Sobre Nosotros</h2>
        <p className="text-xl text-gray-100">
          Somos una organización deportiva con más de 20 años de experiencia,
          dedicada al desarrollo de gimnastas en los ámbitos formativo y
          competitivo.
        </p>
      </div>
    </section>
  );
}
