export function detectDateFormat(
  timeStamp: number,
  formatOptions: Intl.DateTimeFormatOptions,
  operativeSystem: string,
  locale: Array<string> | string
): string {
  if (operativeSystem === 'windows') {
    return new Intl.DateTimeFormat(locale, formatOptions).format(timeStamp);
  }
  if (operativeSystem === 'linux' || operativeSystem === 'darwin') {
    return new Intl.DateTimeFormat(locale, {
      ...formatOptions,
      hour12: false,
    }).format(timeStamp);
  }
  return new Intl.DateTimeFormat(locale, formatOptions).format(timeStamp);
}
