// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();

  if (users.length === 0) {
    const hashedPassword = await hash("12345", 10);

    await prisma.user.create({
      data: {
        rut: "211517735",
        name: "Administrador",
        email: "alv.loyolamendoza@gmail.com",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("✅ Usuario administrador creado");
  } else {
    console.log("ℹ️ Ya existen usuarios, no se crea el admin.");
  }
}

main()
  .catch((e) => {
    console.error("❌ Error al ejecutar el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
