// lib/email/brevo-service.ts
import * as brevo from "@getbrevo/brevo";
import { env } from "@/env.js";

// Configurar API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  env.BREVO_API_KEY,
);

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  try {
    // Email al administrador
    const adminEmail = new brevo.SendSmtpEmail();
    adminEmail.subject = `Nuevo contacto: ${data.subject}`;
    adminEmail.htmlContent = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ""}
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `;
    adminEmail.sender = { name: "Club CIAF", email: env.FROM_EMAIL };
    adminEmail.to = [{ email: env.ADMIN_EMAIL, name: "Administrador" }];
    adminEmail.replyTo = { email: data.email, name: data.name };

    await apiInstance.sendTransacEmail(adminEmail);

    // Email de confirmación al usuario
    const confirmationEmail = new brevo.SendSmtpEmail();
    confirmationEmail.subject = "Hemos recibido tu mensaje - Club CIAF";
    confirmationEmail.htmlContent = `
      <h2>¡Gracias por contactarnos!</h2>
      <p>Hola ${data.name},</p>
      <p>Hemos recibido tu mensaje y te responderemos pronto.</p>
      <hr>
      <p><strong>Tu mensaje:</strong></p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p>Saludos,<br>Equipo Club CIAF</p>
    `;
    confirmationEmail.sender = { name: "Club CIAF", email: env.FROM_EMAIL };
    confirmationEmail.to = [{ email: data.email, name: data.name }];

    await apiInstance.sendTransacEmail(confirmationEmail);

    return { success: true };
  } catch (error) {
    console.error("Error sending email with Brevo:", error);
    throw new Error("Error al enviar el email");
  }
}
