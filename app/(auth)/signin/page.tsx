import HeroSection from "./components/hero-section";
import LoginForm from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sección izquierda - Hero/Imagen (exactamente 50% en desktop) */}
      <div className="hidden lg:block lg:w-1/2">
        <HeroSection />
      </div>

      {/* Sección derecha - Formulario (exactamente 50% en desktop, 100% en móvil) */}
      <div className="w-full lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
