import { createTRPCRouter, publicProcedure } from "~/api/trpc";
import { contactFormSchema } from "@/schemas/forms/contact-form.schema";
import { sendContactEmail } from "@/lib/brevo-service";
import { TRPCError } from "@trpc/server";
import { checkRateLimit } from "@/lib/rate-limit";

// Función para obtener la IP real del usuario desde headers
function getClientIP(headers: Headers): string {
  // Intentar obtener la IP de diferentes headers (para proxies, load balancers, etc.)
  const forwarded = headers.get("x-forwarded-for");
  const realIP = headers.get("x-real-ip");
  const cfConnectingIP = headers.get("cf-connecting-ip"); // Cloudflare

  // Prioridad: x-forwarded-for > cf-connecting-ip > x-real-ip
  if (forwarded) {
    // x-forwarded-for puede tener múltiples IPs separadas por coma
    const ips = forwarded.split(",").map((ip: string) => ip.trim());
    if (ips[0]) {
      return ips[0];
    }
  }

  return cfConnectingIP || realIP || "unknown";
}

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input, ctx }) => {
      // Obtener la IP del usuario desde los headers
      const clientIP = getClientIP(ctx.headers);

      console.log("Client IP:", clientIP);
      console.log("Contact form data:", input);

      // Usar la IP como identificador para el rate limiting
      const { allowed, remaining } = await checkRateLimit(clientIP);

      if (!allowed) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message:
            "Demasiados mensajes enviados desde esta dirección. Intenta en una hora.",
        });
      }

      try {
        await sendContactEmail(input);
        return {
          success: true,
          message: "Mensaje enviado correctamente",
          remainingRequests: remaining,
        };
      } catch (error) {
        console.error("Error sending contact email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al enviar el mensaje",
        });
      }
    }),
});
