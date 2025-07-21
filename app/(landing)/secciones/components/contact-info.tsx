import { Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="border-b bg-white/80 py-8 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-950/30 dark:to-indigo-950/30">
          <div className="flex items-center justify-center space-x-3 text-center">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Para horarios sin cupo:</strong> Envía un correo a{" "}
              <a
                href="mailto:gimnasiaclubciaf@gmail.com"
                className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                gimnasiaclubciaf@gmail.com
              </a>{" "}
              solicitando reserva para optar a un cupo disponible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
