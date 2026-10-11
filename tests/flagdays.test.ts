import { describe, expect, it } from 'vitest';
import { FLAG_DAYS } from '../src/data/flagdays';
import { content } from '../src/content/fi';
import { todayInFinland } from '../src/lib/dates';
import { occurrencesForYear, resolveRule, statusFor } from '../src/lib/flagdays';

const ruleOf = (id: string) => FLAG_DAYS.find((d) => d.id === id)!.rule;

describe('liikkuvat liputuspäivät', () => {
  it.each([
    [2025, '2025-05-11'],
    [2026, '2026-05-10'],
    [2027, '2027-05-09'],
  ])('äitienpäivä %i', (year, expected) => {
    expect(resolveRule(ruleOf('aitienpaiva'), year)).toBe(expected);
  });

  it.each([
    [2025, '2025-11-09'],
    [2026, '2026-11-08'],
  ])('isänpäivä %i', (year, expected) => {
    expect(resolveRule(ruleOf('isanpaiva'), year)).toBe(expected);
  });

  it.each([
    [2024, '2024-06-22'],
    [2025, '2025-06-21'],
    [2026, '2026-06-20'],
    [2027, '2027-06-26'],
  ])('juhannuspäivä %i', (year, expected) => {
    expect(resolveRule(ruleOf('juhannus'), year)).toBe(expected);
  });

  it('kaatuneitten muistopäivä 2026 on toukokuun 3. sunnuntai', () => {
    expect(resolveRule(ruleOf('kaatuneet'), 2026)).toBe('2026-05-17');
  });

  it('Suomen luonnon päivä 2026 on elokuun viimeinen lauantai', () => {
    expect(resolveRule(ruleOf('luonto'), 2026)).toBe('2026-08-29');
    expect(resolveRule(ruleOf('luonto'), 2025)).toBe('2025-08-30');
  });
});

describe('statusFor', () => {
  it('tunnistaa liputuspäivän', () => {
    const s = statusFor('2026-12-06');
    expect(s.today.map((o) => o.id)).toEqual(['itsenaisyyspaiva']);
    expect(s.today[0].flagTime).toBe('until20');
    expect(s.next[0].id).toBe('sibelius');
  });

  it('kertoo seuraavan liputuspäivän tavallisena päivänä', () => {
    const s = statusFor('2026-10-11');
    expect(s.today).toEqual([]);
    expect(s.next.map((o) => o.id)).toEqual(['yk']);
  });

  it('löytää seuraavan liputuspäivän vuodenvaihteen yli', () => {
    const s = statusFor('2026-12-31');
    expect(s.next[0].date).toBe('2027-02-03');
  });

  it('juhannusaattona liputus alkaa illalla', () => {
    const s = statusFor('2026-06-19');
    expect(s.today).toEqual([]);
    expect(s.eve.map((o) => o.id)).toEqual(['juhannus']);
  });

  it('sisältää vaalipäivät', () => {
    expect(statusFor('2027-04-18').today.map((o) => o.id)).toContain('election-parliamentary');
  });

  it('palauttaa useamman saman päivän liputuspäivän virallinen ensin', () => {
    // 2027: äitienpäivä su 9.5. osuu Eurooppa-päivälle
    const s = statusFor('2027-05-09');
    expect(s.today.map((o) => o.id)).toEqual(['aitienpaiva', 'eurooppa']);
  });
});

describe('data', () => {
  it('jokaisella päivällä on suomenkielinen sisältö', () => {
    for (const year of [2026, 2027, 2029, 2030]) {
      for (const o of occurrencesForYear(year)) expect(content[o.id], o.id).toBeDefined();
    }
  });

  it('id:t ovat yksilöllisiä', () => {
    expect(new Set(FLAG_DAYS.map((d) => d.id)).size).toBe(FLAG_DAYS.length);
  });

  it('kategorioiden lukumäärät: 7 virallista ja 15 vakiintunutta', () => {
    expect(FLAG_DAYS.filter((d) => d.category === 'official')).toHaveLength(7);
    expect(FLAG_DAYS.filter((d) => d.category === 'established')).toHaveLength(15);
  });
});

describe('todayInFinland', () => {
  it('käyttää Suomen aikaa', () => {
    // 22.30 UTC 31.12. on jo uudenvuodenpäivä Suomessa (UTC+2)
    expect(todayInFinland(new Date('2026-12-31T22:30:00Z'))).toBe('2027-01-01');
    // kesäaika UTC+3
    expect(todayInFinland(new Date('2026-06-19T20:59:00Z'))).toBe('2026-06-19');
    expect(todayInFinland(new Date('2026-06-19T21:00:00Z'))).toBe('2026-06-20');
  });
});
