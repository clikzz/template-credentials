import { z } from "zod/v4";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "El nombre solo puede contener letras y espacios",
    ),
  email: z
    .string()
    .email("Por favor ingresa un email válido")
    .min(5, "El email es muy corto")
    .max(100, "El email es muy largo"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[\d\s\-\(\)]{7,15}$/.test(val), {
      message: "Por favor ingresa un número de teléfono válido",
    }),
  subject: z
    .string()
    .min(5, "El asunto debe tener al menos 5 caracteres")
    .max(200, "El asunto no puede exceder 200 caracteres"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
