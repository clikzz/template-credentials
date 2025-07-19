import { auth } from "/server/auth";
import Navbar from "./navbar";

interface NavbarServerProps {
  isLandingPage?: boolean;
}

export default async function NavbarServer({
  isLandingPage = true,
}: NavbarServerProps) {
  const session = await auth();

  return <Navbar user={session?.user} isLandingPage={isLandingPage} />;
}
