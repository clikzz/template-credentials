import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FAQ_DATA = [
  {
    question: "¿Cuáles son los requisitos de ingreso?",
    answer:
      "Para el registro de nuevos deportistas en nuestra institución solicitamos algunos requisitos mínimos para los pequeños, debido a que las clases se realizan sin la presencia del apoderado. (a excepción de las secciones Baby Gym, en el cual se requiere que el apoderad@ se mantenga en el recinto y pueda acompañar al infante al baño u otra situación según lo solicite el entrenador o entrenadora)\n     - El deportista debe ser independiente para vestirse e ir al baño, a excepción de Fran 1, 2 y 3.\n      - Debe tener madurez emocional para trabajar sin la presencia del apoderado, a excepción de Fran 1.\n      - Debe saber seguir las indicaciones del entrenador o entrenadora, a excepción de la franja 1 que debe ser el apoderado.",
  },
  {
    question: "¿Con que ropa debe asistir el deportista?",
    answer:
      "El orden y disciplina son una de las cualidades más importante de un deportista y se deben de ver reflejados en los entrenamientos. Sumado a lo anterior es obligatorio el uso de ropa deportiva según los requerimientos del club. \n Uniforme y artículos para entrenar: \n- Damas: calzas cortas y peto deportivo o Malla. Pelo amarrado con cole. \n- Varones: Short elastizado, y polera Institucional o Malla. (calzas para niveles competitivos). \n Artículos: Traer en su mochila o morral una botella plástica con agua, en el caso de que el entrenador lo requiera elástico numérico y/o pan de magnesio para el entrenamiento. Categorías competitivas deberán traer calleras según indicación del entrenador.\nSe Prohíbe: Ropa Interior a la vista, ropa deportiva no adecuada, joyas, botellas de vidrio y Ropa informal.",
  },
  {
    question: "¿El deportista debe saber gimnasia para ingresar?",
    answer:
      "NO, ya que no es un requisito de ingreso. Todos los deportistas que ingresan al CIAF parten de cero, con el objetivo de corregir su postura y técnica en los ejercicios.\nLos deportistas matriculados serán evaluados, para realizar un diagnóstico de sus capacidades físicas, cognitivas y participación, en el caso de tener experiencia, serán evaluadas las habilidades técnicas, entre otros. La evaluación en ningún modo definirá la continuidad del alumno, pero nos permite aclarar si le corresponde la sección en la que fue matriculado o debe ser asignado a otra según sus capacidades generales.",
  },
  {
    question: "¿Dónde está ubicado el Club CIAF?",
    answer:
      "Las clases presenciales del Club Deportivo CIAF, se realizan en el gimnasio Pianura Center\nDirección: Av. Pdte. Jorge Alessandri Rodríguez 3715, Talcahuano, Bío-Bío (a pasos del mall plaza trébol)",
  },
  {
    question: "¿Cuándo es el periodo de vacaciones?",
    answer:
      "Del 27 de enero al 15 de febrero del 2025, puede haber cambios en la fecha según sección. Las vacaciones están contempladas en la temporada anual.",
  },
  {
    question: "¿Cómo contactar?",
    answer:
      "Plataformas que utilizamos para la comunicación. (Gmail, WhatsApp, Drive y Zoom)\nEscribir a gimnasiaclubciaf@gmail.com o llamar +56966326947",
  },
  {
    question: "Informaciones Adicionales",
    answer:
      "- Integrarse al club contempla la participación de actividades propias de la institución, competencias, cursos y otras en las que sean seleccionados. Para tales actividades deberán tener su buzo deportivo, malla de entrenamiento y/o de competencia, requerimientos distintos según el nivel y participación.\n- Los gastos de viajes y otras competencias son asumidos por los apoderados, incluido el costo de delegación por viajes.\n- Las vacaciones están contempladas dentro del plan anual de entrenamiento (entre enero y febrero).\n- La rama de gimnasia cuenta con un centro de padres.\n- El Club no cuenta con seguro médico y es responsabilidad del apoderado, contratar alguno.\n- El recinto cuenta con estacionamiento, camarines, cafetería, comercio y zonas de espera.\n- Durante el inicio de la temporada se informará sobre el calendario y posteriormente la indumentaria que es obligatoria solo para quienes participan de las competencias y otras actividades de representación.\n- Las fotografías de participación de competencia serán utilizadas por el club para el uso informativo, registro de participación, horarios y otras instancias relacionadas con el área de comunicación del Club CIAF.",
  },
];

export function FAQ() {
  return (
    <section className="from-primary to-secondary bg-gradient-to-r py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-200">
            Resolvemos las dudas más comunes sobre nuestros programas de
            gimnasia
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-white"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-gray-200 px-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <AccordionTrigger className="group py-6 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-100 transition-colors duration-200 group-hover:text-gray-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <p
                    className="text-base leading-relaxed text-gray-200"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="from-primary/5 to-secondary/5 mx-auto max-w-2xl rounded-2xl bg-gradient-to-r p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-200">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <Link href="/contacto" passHref>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90"
                size="lg"
              >
                <span className="text-white">Contáctanos</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
