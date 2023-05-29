import { useState } from 'react';

export function useChangeFormat(state: boolean): {
  isChanged: boolean;
} {
  const [isChanged, setIsChanged] = useState(false);
  setIsChanged(state);

  return { isChanged };
}

export function formatTimeUnix(
  timestamp: number,
  locale: Array<string>
): string {
  const date = new Date(timestamp);

  // Obtener la fecha y hora localizada
  const localizedDateTime = date.toLocaleString(locale);

  // Extraer las horas y los minutos de la fecha y hora localizada
  const match = localizedDateTime.match(/(\d{1,2}):(\d{2}):(\d{2})/);
  const hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);

  // Convertir la hora a formato de 24 horas
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Formatear la hora en base al idioma
  let formattedTime;
  if (
    Array.isArray(locale) &&
    locale.length > 0 &&
    locale[0].startsWith('en')
  ) {
    formattedTime = `${formattedHours}:${formattedMinutes}`;
  } else {
    formattedTime = `${formattedHours}:${formattedMinutes}`;
  }

  return formattedTime;
}
