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
  const date = new Date(timestamp * 1000);

  const formattedTime = date.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
  });

  return formattedTime;
}
