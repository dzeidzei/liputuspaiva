/**
 * Suomen liputuspäivät kielineutraaleina sääntöinä.
 * Tekstit (nimet, kuvaukset, historia) ovat kielikohtaisissa tiedostoissa src/content/<kieli>.ts.
 *
 * Lähteet: sisäministeriö (intermin.fi/liputus), asetus Suomen lipun käytöstä (383/1978),
 * fi.wikipedia.org/wiki/Luettelo_Suomen_liputuspäivistä. Tarkista vuosittain.
 */

export type Category = 'official' | 'established' | 'recommended';

/** Liputusajan tyyppi: vaikuttaa näytettävään kellonaikaan. */
export type FlagTime = 'default' | 'midsummer' | 'until20';

/** Viikonpäivä: 0 = sunnuntai … 6 = lauantai (kuten Date.getUTCDay). */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Rule =
  | { kind: 'fixed'; month: number; day: number }
  /** Kuukauden n:s viikonpäivä; n = -1 tarkoittaa kuukauden viimeistä. */
  | { kind: 'nthWeekday'; month: number; weekday: Weekday; n: number }
  /** Ainoa annettu viikonpäivä päivien from–to välillä (esim. juhannuspäivä). */
  | { kind: 'weekdayBetween'; month: number; weekday: Weekday; from: number; to: number };

export interface FlagDayDef {
  id: string;
  rule: Rule;
  category: Category;
  flagTime?: FlagTime;
  /** Liputetaan puolitankoon. */
  halfMast?: boolean;
  /** Liputus alkaa jo edellisenä iltana (juhannusaatto). */
  startsOnEve?: boolean;
  /** Suomenkielisen Wikipedia-artikkelin nimi lisätietolinkkiä varten. */
  wiki: string;
}

export const FLAG_DAYS: FlagDayDef[] = [
  // Viralliset liputuspäivät (asetus 383/1978)
  { id: 'kalevala', rule: { kind: 'fixed', month: 2, day: 28 }, category: 'official', wiki: 'Kalevalan_päivä' },
  { id: 'vappu', rule: { kind: 'fixed', month: 5, day: 1 }, category: 'official', wiki: 'Vappu' },
  { id: 'aitienpaiva', rule: { kind: 'nthWeekday', month: 5, weekday: 0, n: 2 }, category: 'official', wiki: 'Äitienpäivä' },
  { id: 'puolustusvoimat', rule: { kind: 'fixed', month: 6, day: 4 }, category: 'official', wiki: 'Puolustusvoimain_lippujuhlan_päivä' },
  {
    id: 'juhannus',
    rule: { kind: 'weekdayBetween', month: 6, weekday: 6, from: 20, to: 26 },
    category: 'official',
    flagTime: 'midsummer',
    startsOnEve: true,
    wiki: 'Juhannus',
  },
  { id: 'isanpaiva', rule: { kind: 'nthWeekday', month: 11, weekday: 0, n: 2 }, category: 'official', wiki: 'Isänpäivä' },
  { id: 'itsenaisyyspaiva', rule: { kind: 'fixed', month: 12, day: 6 }, category: 'official', flagTime: 'until20', wiki: 'Suomen_itsenäisyyspäivä' },

  // Vakiintuneet liputuspäivät (almanakka)
  { id: 'runeberg', rule: { kind: 'fixed', month: 2, day: 5 }, category: 'established', wiki: 'Runebergin_päivä' },
  { id: 'canth', rule: { kind: 'fixed', month: 3, day: 19 }, category: 'established', wiki: 'Minna_Canthin_päivä' },
  { id: 'agricola', rule: { kind: 'fixed', month: 4, day: 9 }, category: 'established', wiki: 'Mikael_Agricolan_päivä' },
  { id: 'veteraanipaiva', rule: { kind: 'fixed', month: 4, day: 27 }, category: 'established', wiki: 'Kansallinen_veteraanipäivä' },
  { id: 'eurooppa', rule: { kind: 'fixed', month: 5, day: 9 }, category: 'established', wiki: 'Eurooppa-päivä' },
  { id: 'snellman', rule: { kind: 'fixed', month: 5, day: 12 }, category: 'established', wiki: 'J._V._Snellmanin_päivä' },
  {
    id: 'kaatuneet',
    rule: { kind: 'nthWeekday', month: 5, weekday: 0, n: 3 },
    category: 'established',
    halfMast: true,
    wiki: 'Kaatuneitten_muistopäivä',
  },
  { id: 'leino', rule: { kind: 'fixed', month: 7, day: 6 }, category: 'established', wiki: 'Eino_Leinon_päivä' },
  { id: 'luonto', rule: { kind: 'nthWeekday', month: 8, weekday: 6, n: -1 }, category: 'established', wiki: 'Suomen_luonnon_päivä' },
  { id: 'sillanpaa', rule: { kind: 'fixed', month: 10, day: 1 }, category: 'established', wiki: 'Miina_Sillanpään_päivä' },
  { id: 'kivi', rule: { kind: 'fixed', month: 10, day: 10 }, category: 'established', wiki: 'Aleksis_Kiven_päivä' },
  { id: 'yk', rule: { kind: 'fixed', month: 10, day: 24 }, category: 'established', wiki: 'YK:n_päivä' },
  { id: 'ruotsalaisuus', rule: { kind: 'fixed', month: 11, day: 6 }, category: 'established', wiki: 'Ruotsalaisuuden_päivä' },
  { id: 'lapsenoikeudet', rule: { kind: 'fixed', month: 11, day: 20 }, category: 'established', wiki: 'Lapsen_oikeuksien_päivä' },
  { id: 'sibelius', rule: { kind: 'fixed', month: 12, day: 8 }, category: 'established', wiki: 'Jean_Sibeliuksen_päivä' },

  // Sisäministeriön suosittelemat liputuspäivät
  { id: 'aalto', rule: { kind: 'fixed', month: 2, day: 3 }, category: 'recommended', wiki: 'Alvar_ja_Aino_Aallon_päivä' },
  { id: 'saamelaiset', rule: { kind: 'fixed', month: 2, day: 6 }, category: 'recommended', wiki: 'Saamelaisten_kansallispäivä' },
  { id: 'romanit', rule: { kind: 'fixed', month: 4, day: 8 }, category: 'recommended', wiki: 'Romanien_kansallispäivä' },
  { id: 'evakot', rule: { kind: 'fixed', month: 4, day: 20 }, category: 'recommended', wiki: 'Evakkojen_liputuspäivä' },
  { id: 'jansson', rule: { kind: 'fixed', month: 8, day: 9 }, category: 'recommended', wiki: 'Tove_Janssonin_päivä' },
];

export type ElectionKind = 'parliamentary' | 'municipal' | 'european' | 'presidential' | 'inauguration';

export interface Election {
  date: string; // YYYY-MM-DD
  kind: ElectionKind;
}

/**
 * Vaalipäivät ja presidentin virkaanastujaispäivä ovat virallisia liputuspäiviä.
 * Niitä ei voi laskea säännöstä, joten ne ylläpidetään käsin (lähde: vaalit.fi / hel.fi/vaalit).
 * Presidentinvaalin mahdollinen toinen kierros lisätään, kun se varmistuu.
 */
export const ELECTIONS: Election[] = [
  { date: '2027-04-18', kind: 'parliamentary' },
  { date: '2029-04-15', kind: 'municipal' },
  { date: '2029-06-10', kind: 'european' },
  { date: '2030-01-27', kind: 'presidential' },
  { date: '2030-03-01', kind: 'inauguration' },
];
