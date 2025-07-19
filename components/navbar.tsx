"use client";

import type React from "react";
import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Menu,
  UserIcon,
  Settings,
  Home,
  FileText,
  Users,
  BarChart3,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { LogoutButton } from "@/components/logout-button";

interface BaseNavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface InternalNavItem extends BaseNavItem {
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

type NavItem = BaseNavItem | InternalNavItem;

interface UserProps {
  id: string;
  name: string;
  rut: string;
  email: string;
  role: string;
}

interface NavbarProps {
  user?: UserProps | null;
  isLandingPage?: boolean;
  onLogout?: () => void;
}

// Función helper mejorada
const hasIcon = (item: NavItem): item is InternalNavItem => "icon" in item;

// Hook personalizado para la navegación
const useNavigation = (user: UserProps | null, isLandingPage: boolean) => {
  return useMemo(() => {
    if (isLandingPage) {
      return [
        { href: "/", label: "Inicio" },
        { href: "/nosotros", label: "Nosotros" },
        { href: "/secciones", label: "Secciones" },
        { href: "/contacto", label: "Contacto" },
      ] as BaseNavItem[];
    }

    const baseItems: InternalNavItem[] = [
      { href: "/", label: "Inicio", icon: Home },
      { href: "/documentos", label: "Documentos", icon: FileText },
    ];

    const roleBasedItems: InternalNavItem[] = [];

    if (user?.role === "ADMIN") {
      roleBasedItems.push({
        href: "/usuarios",
        label: "Usuarios",
        icon: Users,
      });
    }

    if (user?.role === "ADMIN") {
      roleBasedItems.push({
        href: "/analiticas",
        label: "Analíticas",
        icon: BarChart3,
      });
    }

    return [...baseItems, ...roleBasedItems];
  }, [user?.role, isLandingPage]);
};

const Logo: React.FC<{ isLandingPage: boolean }> = ({ isLandingPage }) => (
  <Link
    href={"/"}
    className="group flex items-center space-x-3 transition-all duration-200 hover:scale-105"
  >
    <div className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200">
      <img src="/favicon.ico" alt="Logo de Club CIAF" />
    </div>
    <span className="text-xl font-bold tracking-tight">Club CIAF</span>
  </Link>
);

const MobileNavigation: React.FC<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navItems: NavItem[];
  user: UserProps | null;
  isLandingPage: boolean;
}> = ({ isOpen, setIsOpen, navItems, user, isLandingPage }) => {
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const userName = user?.name || user?.email || "Usuario";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent transition-all duration-200 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú de navegación</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[320px] p-0">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="text-left">
            <Logo isLandingPage={isLandingPage} />
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {/* Enlaces de navegación */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:bg-accent hover:text-accent-foreground flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200"
                  onClick={handleLinkClick}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {!isLandingPage && hasIcon(item) && (
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span className="flex-1">{item.label}</span>
                  {hasIcon(item) && item.badge && (
                    <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Sección de usuario */}
          <div className="border-t p-6">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm font-medium">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{userName}</p>
                    <p className="text-muted-foreground truncate text-xs capitalize">
                      {user.role || "usuario"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-1">
                  <Link
                    href="/perfil"
                    className="hover:bg-accent flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    <UserIcon className="h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                  <Link
                    href="/configuracion"
                    className="hover:bg-accent flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Configuración</span>
                  </Link>
                </div>

                <Separator />

                <LogoutButton />
              </div>
            ) : (
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="login-button w-full bg-transparent"
                >
                  <Link href="/api/auth/signin">Iniciar Sesión</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Componente de navegación de escritorio mejorado
const DesktopNavigation: React.FC<{
  navItems: NavItem[];
  isLandingPage: boolean;
}> = ({ navItems, isLandingPage }) => (
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList className="flex items-center justify-center space-x-1">
      {navItems.map((item) => (
        <NavigationMenuItem
          key={item.href}
          className="flex items-center justify-center"
        >
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className="hover-underline-blue group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-transparent disabled:pointer-events-none disabled:opacity-50"
              {...(item.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {!isLandingPage && hasIcon(item) && (
                <item.icon className="mr-2 h-4 w-4 transition-all duration-200 group-hover:scale-110" />
              )}
              <span>{item.label}</span>
              {hasIcon(item) && item.badge && (
                <span className="bg-primary text-primary-foreground ml-2 rounded-full px-2 py-0.5 text-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

// Componente de sección de usuario mejorado
const UserSection: React.FC<{ user: UserProps | null }> = ({ user }) => {
  if (!user) {
    return (
      <div className="login-button hidden items-center space-x-3 md:flex">
        <Button asChild variant="ghost" size="sm" className="login-button">
          <Link href="/api/auth/signin">Iniciar Sesión</Link>
        </Button>
      </div>
    );
  }

  const userName = user.name || user.email || "Usuario";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="hidden items-center gap-2 md:flex">
      <Button asChild variant="ghost" size="default" className="login-button">
        <Link href="/home">Panel</Link>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-accent h-10 w-auto rounded-full pr-2 pl-3 transition-all duration-200"
          >
            <div className="flex items-center space-x-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-xs font-medium">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">{userName}</p>
              <p className="text-muted-foreground text-xs leading-none">
                {user.email}
              </p>
              <p className="text-muted-foreground text-xs leading-none capitalize">
                {user.role || "usuario"}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/perfil" className="flex cursor-pointer items-center">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              href="/configuracion"
              className="flex cursor-pointer items-center"
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// Componente principal mejorado
export default function Navbar({
  user = null,
  isLandingPage = true,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useNavigation(user, isLandingPage);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Logo isLandingPage={isLandingPage} />

        {/* Navegación Desktop */}
        <DesktopNavigation navItems={navItems} isLandingPage={isLandingPage} />

        {/* Sección de Usuario Desktop */}
        <UserSection user={user} />

        {/* Navegación Móvil */}
        <MobileNavigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navItems={navItems}
          user={user}
          isLandingPage={isLandingPage}
        />
      </div>
    </header>
  );
}
