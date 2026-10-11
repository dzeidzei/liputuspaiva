import { ELECTIONS, FLAG_DAYS, type Category, type ElectionKind, type FlagTime, type Rule } from '../data/flagdays';
import { addDays, daysInMonth, iso, parseIso, weekday, type IsoDate } from './dates';

export interface Occurrence {
  /** Sisältöavain: liputuspäivän id tai vaalien tapauksessa `election-<laji>`. */
  id: string;
  date: IsoDate;
  category: Category;
  flagTime: FlagTime;
  halfMast: boolean;
  startsOnEve: boolean;
  wiki?: string;
  election?: ElectionKind;
}

export function resolveRule(rule: Rule, year: number): IsoDate {
  switch (rule.kind) {
    case 'fixed':
      return iso(year, rule.month, rule.day);
    case 'nthWeekday': {
      if (rule.n > 0) {
        const first = iso(year, rule.month, 1);
        const offset = (rule.weekday - weekday(first) + 7) % 7;
        return addDays(first, offset + (rule.n - 1) * 7);
      }
      const last = iso(year, rule.month, daysInMonth(year, rule.month));
      const offset = (weekday(last) - rule.weekday + 7) % 7;
      return addDays(last, -offset + (rule.n + 1) * 7);
    }
    case 'weekdayBetween': {
      const start = iso(year, rule.month, rule.from);
      const offset = (rule.weekday - weekday(start) + 7) % 7;
      return addDays(start, offset);
    }
  }
}

const CATEGORY_ORDER: Record<Category, number> = { official: 0, established: 1, recommended: 2 };

/** Vuoden kaikki liputuspäivät aikajärjestyksessä (samana päivänä virallinen ensin). */
export function occurrencesForYear(year: number): Occurrence[] {
  const days: Occurrence[] = FLAG_DAYS.map((d) => ({
    id: d.id,
    date: resolveRule(d.rule, year),
    category: d.category,
    flagTime: d.flagTime ?? 'default',
    halfMast: d.halfMast ?? false,
    startsOnEve: d.startsOnEve ?? false,
    wiki: d.wiki,
  }));

  for (const e of ELECTIONS) {
    if (parseIso(e.date).year !== year) continue;
    days.push({
      id: `election-${e.kind}`,
      date: e.date,
      category: 'official',
      // Vaalipäivinä äänestys päättyy klo 20, joten lippu lasketaan silloin; virkaanastujaispäivänä normaalisti.
      flagTime: e.kind === 'inauguration' ? 'default' : 'until20',
      halfMast: false,
      startsOnEve: false,
      election: e.kind,
    });
  }

  return days.sort((a, b) => a.date.localeCompare(b.date) || CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category]);
}

export interface DayStatus {
  /** Tänään vietettävät liputuspäivät. */
  today: Occurrence[];
  /** Liputuspäivät, joiden liputus alkaa jo tänä iltana (juhannusaatto). */
  eve: Occurrence[];
  /** Seuraava(t) liputuspäivä(t) tämän päivän jälkeen. */
  next: Occurrence[];
}

export function statusFor(date: IsoDate): DayStatus {
  const { year } = parseIso(date);
  const upcoming = [...occurrencesForYear(year), ...occurrencesForYear(year + 1)];
  const tomorrow = addDays(date, 1);

  const today = upcoming.filter((o) => o.date === date);
  const eve = upcoming.filter((o) => o.startsOnEve && o.date === tomorrow);
  const nextDate = upcoming.find((o) => o.date > date)?.date;
  const next = nextDate ? upcoming.filter((o) => o.date === nextDate) : [];

  return { today, eve, next };
}
