import { Clock, Users, Calendar, Star, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge as BadgeComponent } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Section } from "./types";

interface SectionCardProps {
  section: Section;
}

export function SectionCard({ section }: SectionCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-xl dark:bg-gray-900/80 dark:hover:bg-gray-900">
      {/* Color strip */}
      <div className={`absolute top-0 left-0 h-full w-2 ${section.color}`} />

      {/* Promotional banner */}
      {section.hasPromo && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white">
            <Star className="mr-1 inline h-3 w-3" />
            PROMOCIÓN
          </div>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {section.name}
            </CardTitle>
            <BadgeComponent variant="secondary" className="mt-1 text-xs">
              {section.level}
            </BadgeComponent>
          </div>
          {section.noSpots && (
            <BadgeComponent variant="destructive" className="text-xs">
              <AlertCircle className="mr-1 h-3 w-3" />
              SIN CUPO
            </BadgeComponent>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>{section.ageRange}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{section.schedule}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{section.hours}</span>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${section.price.toLocaleString("es-CL")}
            <span className="text-sm font-normal text-gray-500"> /mes</span>
          </div>
        </div>

        {section.hasPromo && section.promoDetails && (
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-3 dark:from-amber-950/30 dark:to-orange-950/30">
            <p className="text-xs text-amber-800 dark:text-amber-200">
              <Star className="mr-1 inline h-3 w-3" />
              {section.promoDetails}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
