import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Información de ubicación */}
      <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="from-primary to-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Nuestra Ubicación
              </h3>
              <p className="mb-3 text-gray-600">
                Av. Pdte. Jorge Alessandri Rodriguez 3715
                <br />
                Talcahuano, Chile
                <br />
                Pianura Center / Centro Pianura
              </p>
              <div className="text-primary text-sm font-medium">
                <a
                  href="https://maps.app.goo.gl/YXuXPMCfPbV3KCLM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacto directo */}
      <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Contacto Directo
            </h3>

            {/* Teléfono */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <a
                  href="tel:+56212345678"
                  className="hover:text-primary font-medium text-gray-800 transition-colors"
                >
                  +56 9 6632 6947
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:gimnasiaclubciaf@gmail.com"
                  className="hover:text-primary font-medium text-gray-800 transition-colors"
                >
                  gimnasiaclubciaf@gmail.com
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Redes sociales */}
      <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Síguenos en Redes Sociales
          </h3>
          <div className="flex space-x-4">
            <a
              href="app/(landing)/components/footer.tsx"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg transition-all duration-200 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl"
              target="_blank"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/GimnasioCiaf"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
              target="_blank"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
