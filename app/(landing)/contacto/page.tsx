import React from "react";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header de la página */}
      <div className="from-primary to-secondary bg-gradient-to-r py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Contáctanos
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos
            a la brevedad.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Columna izquierda - Formulario */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Columna derecha - Información */}
          <div className="order-1 lg:order-2">
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Sección adicional de CTA */}
      <div className="from-primary/10 to-secondary/10 bg-gradient-to-r py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            ¿Listo para comenzar?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Únete a nuestra comunidad y descubre todo lo que Club CIAF tiene
            para ofrecerte. ¡Tu bienestar y desarrollo son nuestra prioridad!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/secciones"
              className="from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 inline-flex transform items-center justify-center rounded-lg bg-gradient-to-r px-8 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Ver Nuestras Secciones
            </a>
            <a
              href="/nosotros"
              className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded-lg border-2 px-8 py-3 font-medium transition-all duration-200 hover:text-white"
            >
              Conoce Más Sobre Nosotros
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
