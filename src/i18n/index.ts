import { content as fiContent } from '../content/fi';
import { messages as fiMessages } from './fi';
import type { Locale } from './types';

/**
 * Tuetut kielet. Uusi kieli lisätään luomalla src/i18n/<kieli>.ts ja src/content/<kieli>.ts
 * ja lisäämällä ne tähän taulukkoon.
 */
const LOCALES: Record<string, Locale> = {
  fi: { messages: fiMessages, content: fiContent },
};

export const DEFAULT_LANG = 'fi';

export function pickLang(preferred: readonly string[] = navigator.languages ?? [navigator.language]): string {
  for (const tag of preferred) {
    const base = tag.toLowerCase().split('-')[0];
    if (base in LOCALES) return base;
  }
  return DEFAULT_LANG;
}

export function getLocale(lang: string): Locale {
  return LOCALES[lang] ?? LOCALES[DEFAULT_LANG];
}
