import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="from-primary to-secondary relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br p-12">
      {/* Fondo decorativo */}
      <div className="from-primary/20 to-secondary/20 absolute inset-0 bg-gradient-to-br">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-lg space-y-8 text-center text-white">
        {/* Logo principal */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src="/favicon.ico"
                alt="Logo Club CIAF"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-2 -right-2 h-6 w-6 animate-pulse rounded-full bg-yellow-400" />
            <div className="absolute -bottom-1 -left-1 h-4 w-4 animate-bounce rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Título y descripción */}
        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight">
            Bienvenido a
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Club CIAF
            </span>
          </h1>

          <p className="text-xl leading-relaxed text-white/90">
            Tu plataforma integral para la gestión de gimnastas
          </p>

          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="flex items-center space-x-2 text-white/80">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium">Seguro</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-sm font-medium">Rápido</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="text-sm font-medium">Confiable</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 pt-8">
          <div className="flex items-center space-x-3 text-white/90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">Gestión de Gimnastas</span>
          </div>

          <div className="flex items-center space-x-3 text-white/90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">Gestión de Pagos</span>
          </div>

          <div className="flex items-center space-x-3 text-white/90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">
              Acceso seguro y controlado
            </span>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-20 h-32 w-32 animate-pulse rounded-full bg-white/5 blur-xl" />
      <div className="absolute right-20 bottom-20 h-24 w-24 animate-bounce rounded-full bg-blue-400/10 blur-lg" />
      <div className="absolute top-1/2 left-10 h-16 w-16 animate-pulse rounded-full bg-yellow-400/10 blur-md" />
    </div>
  );
}
