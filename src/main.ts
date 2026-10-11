import './style.css';
import { registerSW } from 'virtual:pwa-register';
import { daysBetween, parseIso, todayInFinland, type IsoDate } from './lib/dates';
import { occurrencesForYear, statusFor, type Occurrence } from './lib/flagdays';
import { getLocale, pickLang } from './i18n';
import type { DayContent } from './i18n/types';

const lang = pickLang();
const { messages: t, content } = getLocale(lang);
document.documentElement.lang = lang;

type Child = Node | string | null | undefined | false;

/** Pieni DOM-apuri: luo elementin ja lisää lapset tekstisolmuina (ei innerHTML:ää). */
function h(tag: string, attrs: Record<string, string> = {}, ...children: Child[]): HTMLElement {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  for (const c of children) if (c) el.append(c);
  return el;
}

function flagSvg(className: string): SVGSVGElement {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 18 11');
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');
  const rect = (x: number, y: number, w: number, hh: number, fill: string) => {
    const r = document.createElementNS(ns, 'rect');
    Object.entries({ x, y, width: w, height: hh, fill }).forEach(([k, v]) => r.setAttribute(k, String(v)));
    svg.append(r);
  };
  rect(0, 0, 18, 11, '#fff');
  rect(5, 0, 3, 11, 'var(--flag-blue)');
  rect(0, 4, 18, 3, 'var(--flag-blue)');
  return svg;
}

const fmt = (date: IsoDate, opts: Intl.DateTimeFormatOptions) => {
  const { year, month, day } = parseIso(date);
  return new Intl.DateTimeFormat(t.locale, { timeZone: 'UTC', ...opts }).format(Date.UTC(year, month - 1, day));
};
const longDate = (d: IsoDate) => fmt(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const shortDate = (d: IsoDate) => fmt(d, { weekday: 'short', day: 'numeric', month: 'numeric' });

const textFor = (o: Occurrence): DayContent =>
  content[o.id] ?? { name: o.id, summary: '', history: '' };

const wikiUrl = (o: Occurrence) =>
  o.wiki ? `https://${t.wikiLang}.wikipedia.org/wiki/${encodeURIComponent(o.wiki)}` : null;

function badge(o: Occurrence): HTMLElement {
  return h('span', { class: `badge badge-${o.category}`, title: t.categoryHelp[o.category] }, t.category[o.category]);
}

function heading(o: Occurrence, level: 'h2' | 'h3'): HTMLElement {
  const c = textFor(o);
  return h('div', { class: 'day-heading' }, h(level, {}, c.name), c.theme && h('p', { class: 'theme' }, c.theme));
}

function todayCard(o: Occurrence, open: boolean): HTMLElement {
  const c = textFor(o);
  const url = wikiUrl(o);
  const details = h(
    'details',
    { class: 'history' },
    h('summary', {}, t.historyAndPurpose),
    h('p', {}, c.history),
    url && h('a', { href: url, target: '_blank', rel: 'noopener' }, `${t.readMore} ↗`),
  );
  if (open) details.setAttribute('open', '');

  return h(
    'article',
    { class: 'card today' },
    badge(o),
    heading(o, 'h2'),
    h('p', { class: 'summary' }, c.summary),
    h('dl', { class: 'meta' }, h('dt', {}, t.flagTimeLabel), h('dd', {}, t.flagTime[o.flagTime])),
    o.halfMast && h('p', { class: 'note' }, t.halfMast),
    details,
  );
}

function nextCard(list: Occurrence[], today: IsoDate): HTMLElement {
  const date = list[0].date;
  const n = daysBetween(today, date);
  return h(
    'section',
    { class: 'card next', 'aria-labelledby': 'next-title' },
    h('h2', { id: 'next-title', class: 'eyebrow' }, t.nextFlagDay),
    h('p', { class: 'next-date' }, h('span', {}, longDate(date)), h('span', { class: 'countdown' }, t.inDays(n))),
    ...list.map((o) =>
      h('div', { class: 'next-item' }, heading(o, 'h3'), badge(o), h('p', { class: 'summary' }, textFor(o).summary)),
    ),
  );
}

function yearList(today: IsoDate): HTMLElement {
  const { year } = parseIso(today);
  const items = occurrencesForYear(year).map((o) =>
    h(
      'li',
      { class: `${o.date < today ? 'past' : ''} ${o.date === today ? 'current' : ''}`.trim() },
      h('time', { datetime: o.date }, shortDate(o.date)),
      h('span', { class: 'name' }, textFor(o).name),
      h('span', { class: `dot dot-${o.category}`, title: t.category[o.category] }),
    ),
  );
  return h(
    'details',
    { class: 'card year' },
    h('summary', {}, t.allFlagDays(year)),
    h(
      'ul',
      { class: 'legend' },
      ...(['official', 'established', 'recommended'] as const).map((cat) =>
        h('li', {}, h('span', { class: `dot dot-${cat}` }), t.category[cat]),
      ),
    ),
    h('ol', { class: 'year-list' }, ...items),
  );
}

let renderedFor: IsoDate | null = null;

function render(): void {
  const today = todayInFinland();
  if (today === renderedFor) return;
  renderedFor = today;

  const status = statusFor(today);
  // Juhannusaattona näytetään huomisen liputuspäivän tiedot, koska liputus alkaa jo illalla.
  const shown = status.today.length > 0 ? status.today : status.eve;
  const shownIds = new Set(shown.map((o) => o.id));
  const next = status.next.some((o) => shownIds.has(o.id)) ? statusFor(status.next[0].date).next : status.next;
  const heroState = shown.length === 0 ? 'no-flag-day' : shown.some((o) => o.halfMast) ? 'is-half-mast' : 'is-flag-day';
  const title = status.today.length > 0 ? t.flagDayToday : status.eve.length > 0 ? t.eveTitle : t.noFlagDay;
  const app = document.getElementById('app')!;

  app.replaceChildren(
    h(
      'header',
      { class: `hero ${heroState}` },
      h('div', { class: 'pole' }, flagSvg('flag')),
      h('p', { class: 'date' }, longDate(today)),
      h('h1', {}, title),
    ),
    h(
      'main',
      {},
      ...shown.map((o, i) => todayCard(o, i === 0)),
      next.length > 0 && nextCard(next, today),
      yearList(today),
    ),
    h('footer', {}, h('p', {}, t.footer), h('p', {}, t.dataNote)),
  );
}

render();
// Päivä voi vaihtua sovelluksen ollessa auki tai taustalla.
document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && render());
setInterval(render, 60_000);

registerSW({ immediate: true });
