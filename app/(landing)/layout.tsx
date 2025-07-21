import type React from "react";
import NavbarServer from "@/components/navbar-server";
import { Footer } from "./components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarServer isLandingPage={true} />
      {children}
      <Footer />
    </>
  );
}
