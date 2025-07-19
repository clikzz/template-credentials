import React from "react";
import { Instagram, Mail, MapPin, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-custom-white py-12 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-8 md:grid-cols-4">
          {/* Club Info */}
          <div>
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Club Deportivo CIAF
              </h3>
              <div className="from-primary to-secondary h-1 w-12 rounded-full bg-gradient-to-r"></div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              Formando gimnastas integrales con más de 20 años de experiencia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+56412345678"
                className="hover:text-primary flex items-center space-x-2 text-sm text-gray-700 transition-colors duration-200"
              >
                <Phone className="text-primary h-4 w-4" />
                <span>+56 9 6632 6947</span>
              </a>
              <a
                href="mailto:gimnasiaclubciaf@gmail.com"
                className="hover:text-secondary flex items-center space-x-2 text-sm text-gray-700 transition-colors duration-200"
              >
                <Mail className="text-secondary h-4 w-4" />
                <span>gimnasiaclubciaf@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900">
              Ubicación
            </h4>
            <div className="flex items-start space-x-2 text-sm text-gray-700">
              <MapPin className="mt-0.5 h-4 w-4 text-gray-600" />
              <div>
                <p>Av. Pdte. Jorge Alessandri Rodriguez 3715</p>
                <p className="text-gray-600">Talcahuano, Chile</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900">
              Síguenos
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/clubciaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white transition-transform duration-200 hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/GimnasioCiaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform duration-200 hover:scale-105"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2025 Club Deportivo CIAF Concepción. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
