"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatRut, validateRut, cleanRut } from "@/lib/utils";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rut, setRut] = useState("");

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedRut = formatRut(e.target.value);
    setRut(formattedRut);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const rutValue = formData.get("rut") as string;
    const password = formData.get("password") as string;

    // Validar RUT antes de enviar
    if (!validateRut(rutValue)) {
      setError("RUT inválido");
      setLoading(false);
      return;
    }

    // Limpiar RUT antes de enviar
    const cleanedRut = cleanRut(rutValue);
    if (!cleanedRut) {
      setError("RUT no puede estar vacío");
      setLoading(false);
      return;
    }

    signIn("credentials", {
      rut: cleanedRut,
      password,
      redirect: false,
    })
      .then((result) => {
        if (result?.error) {
          setError(result.error);
        } else {
          router.push("/home");
        }
      })
      .catch((err) => {
        console.error("Error during sign-in:", err);
        setError("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ingresa con tu RUT y contraseña
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="rut" className="sr-only">
                RUT
              </label>
              <input
                id="rut"
                name="rut"
                type="text"
                required
                value={rut}
                onChange={handleRutChange}
                className="focus:ring-primary-purple focus:border-primary-purple relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
                placeholder="RUT (ej: 12.345.678-9)"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="focus:ring-primary-purple focus:border-primary-purple relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          {error && (
            <div className="text-center text-sm text-red-500">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group bg-primary-purple hover:bg-primary-purple/90 focus:ring-primary-purple relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
