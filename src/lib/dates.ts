/** Kalenteripäivä muodossa YYYY-MM-DD. Merkkijonovertailu vastaa aikajärjestystä. */
export type IsoDate = string;

const pad = (n: number) => String(n).padStart(2, '0');

export function iso(year: number, month: number, day: number): IsoDate {
  return `${year}-${pad(month)}-${pad(day)}`;
}

export function parseIso(date: IsoDate): { year: number; month: number; day: number } {
  const [year, month, day] = date.split('-').map(Number);
  return { year, month, day };
}

function toUtc(date: IsoDate): number {
  const { year, month, day } = parseIso(date);
  return Date.UTC(year, month - 1, day);
}

export function addDays(date: IsoDate, days: number): IsoDate {
  const d = new Date(toUtc(date) + days * 86_400_000);
  return iso(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
}

export function daysBetween(from: IsoDate, to: IsoDate): number {
  return Math.round((toUtc(to) - toUtc(from)) / 86_400_000);
}

export function weekday(date: IsoDate): number {
  return new Date(toUtc(date)).getUTCDay();
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/** Kuluva päivä Suomen aikaa riippumatta laitteen aikavyöhykkeestä. */
export function todayInFinland(now: Date = new Date()): IsoDate {
  // en-CA tuottaa muodon YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}
