import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Listo para comenzar tu aventura en la gimnasia?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Contáctanos para más información sobre nuestras secciones y
            encuentra el programa perfecto para ti.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <a href="/contacto">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
