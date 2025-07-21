import type React from "react";
import { auth } from "~/auth";
import { redirect } from "next/navigation";
import NavbarServer from "@/components/navbar-server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <>
      <NavbarServer isLandingPage={false} />
      {children}
    </>
  );
}
