import type { Messages } from './types';

export const messages: Messages = {
  locale: 'fi-FI',
  wikiLang: 'fi',
  appTitle: 'Liputuspäivä',
  flagDayToday: 'Tänään liputetaan',
  noFlagDay: 'Tänään ei ole liputuspäivä',
  eveTitle: 'Liputus alkaa tänä iltana klo 18',
  nextFlagDay: 'Seuraava liputuspäivä',
  inDays: (n) => (n === 1 ? 'huomenna' : `${n} päivän päästä`),
  category: {
    official: 'Virallinen liputuspäivä',
    established: 'Vakiintunut liputuspäivä',
    recommended: 'Suositeltu liputuspäivä',
  },
  categoryHelp: {
    official: 'Asetuksella säädetty. Valtion virastot ja laitokset liputtavat.',
    established: 'Almanakkaan vakiintunut liputuspäivä. Liputus on suositeltavaa.',
    recommended: 'Sisäministeriö suosittaa liputusta.',
  },
  flagTimeLabel: 'Liputusaika',
  flagTime: {
    default: 'klo 8 – auringonlasku, viimeistään klo 21',
    midsummer: 'juhannusaattona klo 18 – juhannuspäivänä klo 21',
    until20: 'klo 8–20',
  },
  halfMast: 'Liputetaan puolitankoon.',
  historyAndPurpose: 'Historia ja tarkoitus',
  readMore: 'Lue lisää Wikipediasta',
  allFlagDays: (year) => `Liputuspäivät ${year}`,
  footer: 'Tiedot: sisäministeriö ja Wikipedia. Tarkista virallinen liputusohje osoitteesta intermin.fi.',
  dataNote: 'Ajat Suomen aikaa.',
};
