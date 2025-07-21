import React from "react";
import { Badge, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function OurValues() {
  const features = [
    {
      icon: Badge,
      title: "Excelencia",
      description:
        "Buscamos constantemente la mejora continua y la superación en cada aspecto de nuestro trabajo.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description:
        "Promovemos la colaboración, el apoyo mutuo y la fortaleza que viene de trabajar juntos.",
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "Disciplina",
      description:
        "Inculcamos el valor de la constancia, la dedicación y el compromiso con los objetivos.",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Respeto",
      description:
        "Cultivamos un ambiente de respeto mutuo, inclusión y apoyo entre todos los miembros.",
      color: "text-secondary",
    },
  ];

  return (
    <section className="from-secondary to-primary bg-gradient-to-r py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-background mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Nuestros Valores
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardContent className="p-2 text-center">
                  {/* Icon */}
                  <div className="mb-2">
                    <div
                      className={`from-primary/10 to-secondary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
