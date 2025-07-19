import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRut(rut: string) {
  // Eliminar caracteres no deseados
  let value = rut.replace(/[^0-9kK]/g, "");

  // Si el RUT está vacío, retornar vacío
  if (!value) return "";

  // Si el RUT tiene un dígito verificador, separarlo
  let dv = "";
  if (value.length > 1) {
    dv = value.slice(-1);
    value = value.slice(0, -1);
  }

  // Formatear el número con puntos
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Retornar el RUT formateado con guión y dígito verificador
  return `${value}${dv ? `-${dv}` : ""}`;
}

export function validateRut(rut: string) {
  // Eliminar puntos y guión para normalizar
  const rutClean = rut.replace(/\./g, "").replace(/-/g, "").trim();

  if (rutClean.length < 2) {
    return false;
  }

  const dv = rutClean.slice(-1).toUpperCase();
  const rutNumber = parseInt(rutClean.slice(0, -1), 10);

  if (isNaN(rutNumber)) {
    return false;
  }

  // Algoritmo para calcular dígito verificador
  let sum = 0;
  let factor = 2;

  for (let i = rutNumber.toString().length - 1; i >= 0; i--) {
    sum += factor * parseInt(rutNumber.toString().charAt(i), 10);
    factor = factor === 7 ? 2 : factor + 1;
  }

  const expectedDV = 11 - (sum % 11);
  const calculatedDV =
    expectedDV === 11 ? "0" : expectedDV === 10 ? "K" : expectedDV.toString();

  return calculatedDV === dv;
}

export function cleanRut(rut: string) {
  // Eliminar puntos y guión
  return rut.replace(/\./g, "").replace(/-/g, "").trim();
}
