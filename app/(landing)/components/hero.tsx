import Image from "next/image";
import { Users, Calendar, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="from-secondary to-primary relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-r">
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-16">
        <div className="grid min-h-[50vh] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col space-y-2 text-white">
            {/* Experience Badge */}
            <Badge variant="default">Más de 20 años de experiencia</Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
                Desarrolla tu potencial en gimnasia
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">
                Formamos gimnastas de alto nivel en un ambiente profesional y
                positivo, desarrollando habilidades técnicas, físicas y
                mentales.
              </p>
            </div>

            {/* Quick Access Forms */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-medium text-white/90">
                Accesos rápidos:
              </h3>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUuAuGk2_N0Htm9HLM8SIQaeYzHzTptZUtWIzZICVDEUtzqQ/viewform"
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/30"
                  target="_blank"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Admisión Anual
                </Link>

                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdaJOar6uUMMuStOGmDGvdvnpzmFm28dRXndmLoI9BI0bi9aw/viewform"
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/30"
                  target="_blank"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Clase de Prueba
                </Link>

                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc6CDwfClOCE6iGMQxYflnFlweBlqB55IcLn3n971M-WPmRtQ/viewform"
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/30"
                  target="_blank"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pago de Matrícula
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular background for logo */}
              <div className="bg-primary/30 flex h-80 w-80 items-center justify-center rounded-full border border-white/20 backdrop-blur-sm md:h-96 md:w-96">
                <div className="h-64 w-64 md:h-80 md:w-80">
                  <Image
                    src="/images/logo-sin-fondo2.webp"
                    alt="Club Deportivo CIAF Concepción"
                    fill
                    className="rounded-full object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full border-2 border-white/40"></div>
              <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full border-2 border-white/30"></div>
              <div className="absolute top-1/2 -left-8 h-6 w-6 rounded-full border-2 border-white/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/3 blur-3xl"></div>
    </section>
  );
}
