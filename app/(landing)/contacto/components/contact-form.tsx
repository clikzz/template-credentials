"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { contactFormSchema } from "@/schemas/forms/contact-form.schema";
import type { ContactFormData } from "@/schemas/forms/contact-form.schema";
import { api } from "@/trpc/react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const messageValue = watch("message", "");

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: () => {
      setSuccess(true);
      setError("");
      reset();
    },
    onError: (error) => {
      setError(error.message);
      setSuccess(false);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    sendMessage.mutate(data);
  };

  const isLoading = sendMessage.isPending;

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
        <CardHeader className="space-y-4 pb-6 text-center">
          <div className="flex justify-center">
            <div className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Contáctanos
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Mensajes de estado */}
          {success && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo
                pronto.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-red-700">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nombre */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <User className="text-primary h-4 w-4" />
                Nombre completo *
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className={`focus:border-primary focus:ring-primary h-12 border-gray-200 pl-10 transition-all duration-200 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                  {...register("name")}
                />
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
              {errors.name && (
                <p className="flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email y Teléfono en una fila */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <Mail className="text-primary h-4 w-4" />
                  Email *
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={`focus:border-primary focus:ring-primary h-12 border-gray-200 pl-10 transition-all duration-200 ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    {...register("email")}
                  />
                  <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <Phone className="text-primary h-4 w-4" />
                  Teléfono
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    className={`focus:border-primary focus:ring-primary h-12 border-gray-200 pl-10 transition-all duration-200 ${
                      errors.phone
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    {...register("phone")}
                  />
                  <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                </div>
                {errors.phone && (
                  <p className="flex items-center gap-1 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Asunto */}
            <div className="space-y-2">
              <Label
                htmlFor="subject"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <MessageSquare className="text-primary h-4 w-4" />
                Asunto *
              </Label>
              <div className="relative">
                <Input
                  id="subject"
                  type="text"
                  placeholder="¿Sobre qué te gustaría consultarnos?"
                  className={`focus:border-primary focus:ring-primary h-12 border-gray-200 pl-10 transition-all duration-200 ${
                    errors.subject
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                  {...register("subject")}
                />
                <MessageSquare className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
              {errors.subject && (
                <p className="flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <MessageSquare className="text-primary h-4 w-4" />
                Mensaje *
              </Label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí... Cuéntanos en qué podemos ayudarte."
                  className={`focus:border-primary focus:ring-primary w-full resize-none rounded-md border border-gray-200 pt-3 pr-3 pb-3 pl-10 transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : ""
                  }`}
                  {...register("message")}
                />
                <MessageSquare className="absolute top-4 left-3 h-4 w-4 text-gray-400" />
              </div>
              {errors.message && (
                <p className="flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  {errors.message.message}
                </p>
              )}
              <p className="text-xs text-gray-500">
                Mínimo 10 caracteres. Máximo 1000 caracteres. (
                {messageValue.length}/1000)
              </p>
            </div>

            {/* Botón de envío */}
            <Button
              type="submit"
              disabled={isLoading || !isValid}
              className="from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 h-12 w-full transform bg-gradient-to-r font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Enviando mensaje...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </div>
              )}
            </Button>
          </form>

          {/* Información adicional */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-600">
              También puedes contactarnos directamente:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="text-primary h-4 w-4" />
                <span>gimnasiaclubciaf@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="text-primary h-4 w-4" />
                <span>+56 9 6632 6947</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
