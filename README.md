# Liputuspäivä

Kevyt PWA-sovellus, joka kertoo, liputetaanko Suomessa tänään ja miksi. Jos tänään ei ole liputuspäivä,
sovellus näyttää seuraavan liputuspäivän. Liputuspäivänä se näyttää päivän tarkoituksen, liputusajan
ja tiivistelmän päivän historiasta.

- Mobile-first, toimii offline-tilassa ja on asennettavissa puhelimen aloitusnäyttöön
- Ei ajonaikaista UI-kehystä: Vite + TypeScript + vite-plugin-pwa (JS noin 9 kB gzip)
- Päivä lasketaan aina Suomen aikaa (Europe/Helsinki)

## Kehitys

```sh
npm install
npm run dev      # kehityspalvelin
npm test         # yksikkötestit (Vitest)
npm run build    # tuotantoversio hakemistoon dist/
npm run icons    # luo PWA-ikonit tiedostosta public/favicon.svg
```

## Rakenne

| Polku | Sisältö |
|---|---|
| `src/data/flagdays.ts` | Liputuspäivät kielineutraaleina sääntöinä sekä vaalipäivät |
| `src/lib/flagdays.ts` | Sääntöjen muunto päivämääriksi, tämän päivän tila ja seuraava liputuspäivä |
| `src/content/fi.ts` | Päivien nimet, kuvaukset ja historiatiivistelmät suomeksi |
| `src/i18n/` | Käyttöliittymän tekstit ja kielen valinta |

## Uuden kielen lisääminen (ruotsi, englanti)

1. Kopioi `src/i18n/fi.ts` → `src/i18n/sv.ts` ja käännä tekstit (`locale: 'sv-FI'`, `wikiLang: 'sv'`).
2. Kopioi `src/content/fi.ts` → `src/content/sv.ts` ja käännä. Wikipedia-linkit käyttävät
   `wiki`-kenttää; muunkielisille artikkeleille lisätään tarvittaessa oma kenttä.
3. Lisää kieli `LOCALES`-taulukkoon tiedostossa `src/i18n/index.ts`.

Kieli valitaan selaimen kieliasetuksen mukaan, ja oletuksena on suomi.

## Datan ylläpito

- **Tarkista lista vuosittain** sisäministeriön sivulta [intermin.fi/liputus](https://intermin.fi/liputus).
  Suositeltuja liputuspäiviä voi tulla lisää tai niistä voi tulla vakiintuneita.
- **Vaalipäivät** lisätään käsin `ELECTIONS`-listaan (lähde: vaalit.fi). Presidentinvaalin mahdollinen
  toinen kierros lisätään, kun se varmistuu.
- Satunnaiset liputussuositukset (esim. valtiovierailut) eivät ole mukana.

## Julkaisu

GitHub Actions julkaisee `main`-haaran automaattisesti GitHub Pagesiin osoitteeseen
`https://dzeidzei.github.io/liputuspaiva/`. Ota käyttöön kerran: **Settings → Pages → Source: GitHub Actions**.
