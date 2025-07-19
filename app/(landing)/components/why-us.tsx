import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      icon: Calendar,
      title: "+20 Años",
      description:
        "Formando deportistas integrales con las mejores técnicas y metodologías.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "7 Entrenadores",
      description:
        "Altamente capacitados y dedicados al desarrollo de cada gimnasta.",
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "Desarrollo integral",
      description:
        "Formamos deportistas completos, desarrollando habilidades técnicas, físicas y mentales.",
      color: "text-primary",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <div className="from-primary to-secondary mx-auto h-1 w-24 rounded-full bg-gradient-to-r"></div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardContent className="p-2 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`from-primary/10 to-secondary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
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
