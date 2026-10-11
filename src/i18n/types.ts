import type { Category } from '../data/flagdays';

export interface DayContent {
  name: string;
  /** Päivän teema tai toinen nimi, esim. "suomalaisen kulttuurin päivä". */
  theme?: string;
  /** Lyhyt kuvaus päivän tarkoituksesta. */
  summary: string;
  /** Tiivistelmä päivän historiasta. */
  history: string;
}

export interface Messages {
  /** BCP 47 -kielitunniste päivämäärien muotoiluun, esim. "fi-FI". */
  locale: string;
  /** Wikipedia-kieliversio lisätietolinkkeihin, esim. "fi". */
  wikiLang: string;
  appTitle: string;
  flagDayToday: string;
  noFlagDay: string;
  eveTitle: string;
  nextFlagDay: string;
  inDays: (n: number) => string;
  category: Record<Category, string>;
  categoryHelp: Record<Category, string>;
  flagTimeLabel: string;
  flagTime: { default: string; midsummer: string; until20: string };
  halfMast: string;
  historyAndPurpose: string;
  readMore: string;
  allFlagDays: (year: number) => string;
  footer: string;
  dataNote: string;
}

export interface Locale {
  messages: Messages;
  content: Record<string, DayContent>;
}
