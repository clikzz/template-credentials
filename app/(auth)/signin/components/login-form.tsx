"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatRut, validateRut, cleanRut } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, KeyRound, User } from "lucide-react";
import flashy from "@pablotheblink/flashyjs";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [rut, setRut] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 12) return;
    const formattedRut = formatRut(e.target.value);
    setRut(formattedRut);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const rutValue = formData.get("rut") as string;
    const password = formData.get("password") as string;

    // Validar RUT antes de enviar
    if (!validateRut(rutValue)) {
      setLoading(false);
      return;
    }

    // Limpiar RUT antes de enviar
    const cleanedRut = cleanRut(rutValue);
    if (!cleanedRut) {
      setLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        rut: cleanedRut,
        password,
        redirect: false,
      });

      if (result?.error) {
        flashy.error("Credienciales incorrectas, por favor intenta de nuevo.");
      } else {
        flashy.success("Inicio de sesión exitoso");
        router.push("/panel");
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      flashy.error("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="mb-4 flex justify-center lg:hidden">
            <div className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
              <KeyRound className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="mb-4 hidden justify-center lg:flex">
            <div className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
              <KeyRound className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            Iniciar Sesión
          </h1>
          <p className="text-sm text-gray-600">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>

        {/* Formulario */}
        <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-center text-xl text-gray-800">
              Acceso al Sistema
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Completa los campos para continuar
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campo RUT */}
              <div className="space-y-2">
                <Label
                  htmlFor="rut"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <User className="text-primary h-4 w-4" />
                  RUT
                </Label>
                <div className="relative">
                  <Input
                    id="rut"
                    name="rut"
                    type="text"
                    required
                    value={rut}
                    onChange={handleRutChange}
                    placeholder="12.345.678-9"
                    className="focus:border-primary focus:ring-primary h-12 border-gray-200 pl-10 transition-all duration-200"
                  />
                  <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                </div>
              </div>

              {/* Campo Contraseña */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <KeyRound className="text-primary h-4 w-4" />
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Ingresa tu contraseña"
                    className="focus:border-primary focus:ring-primary h-12 border-gray-200 pr-12 pl-10 transition-all duration-200"
                  />
                  <KeyRound className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                disabled={loading}
                className="from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 h-12 w-full transform bg-gradient-to-r font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Iniciando sesión...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <KeyRound className="h-4 w-4" />
                    Iniciar Sesión
                  </div>
                )}
              </Button>
            </form>

            <Separator className="my-6" />

            {/* Links adicionales */}
            <Button variant="link" className="hover-none">
              <a href="/auth/forgot-password" className="text-sm">
                ¿Olvidaste tu contraseña?
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="space-y-1 text-center text-xs text-gray-500">
          <p>© 2025 Club CIAF. Todos los derechos reservados.</p>
          <p>Sistema de gestión de documentos</p>
        </div>
      </div>
    </div>
  );
}
