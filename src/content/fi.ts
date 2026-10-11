import type { DayContent } from '../i18n/types';

/**
 * Liputuspäivien suomenkieliset tekstit. Tiivistelmät perustuvat suomenkielisen Wikipedian artikkeleihin
 * (linkki näytetään jokaisen päivän yhteydessä). Tekstit ovat omia tiivistelmiä, eivät suoria lainauksia.
 */
export const content: Record<string, DayContent> = {
  kalevala: {
    name: 'Kalevalan päivä',
    theme: 'suomalaisen kulttuurin päivä',
    summary: 'Päivänä juhlitaan kansalliseeposta Kalevalaa ja suomalaista kulttuuria.',
    history:
      'Elias Lönnrot päiväsi Kalevalan ensimmäisen laitoksen esipuheen 28. helmikuuta 1835. Runonkeruumatkoillaan kokoamistaan kansanrunoista Lönnrot muokkasi eepoksen, josta tuli suomalaisen kansallisen identiteetin ja taiteen keskeinen innoittaja.',
  },
  vappu: {
    name: 'Vappu',
    theme: 'suomalaisen työn päivä',
    summary: 'Vappu on työn, kevään ja ylioppilaiden juhla.',
    history:
      'Toinen internationaali päätti vuonna 1889, että 1. toukokuuta vietetään työväen kansainvälisenä mielenosoituspäivänä. Suomessa työväki marssi vappuna ensimmäisen kerran 1890-luvulla. Nykyään vappu on myös kevään ja ylioppilaiden juhla.',
  },
  aitienpaiva: {
    name: 'Äitienpäivä',
    summary: 'Äitienpäivänä kiitetään ja muistetaan äitejä. Toukokuun toisena sunnuntaina vietettävänä päivänä myös jaetaan kunniamerkkejä äideille.',
    history:
      'Nykymuotoinen äitienpäivä syntyi Yhdysvalloissa 1900-luvun alussa Anna Jarvisin aloitteesta. Suomessa äitienpäivää on vietetty 1910-luvun lopulta lähtien, ja vakiintuneesta juhlapäivästä tuli myöhemmin virallinen liputuspäivä.',
  },
  puolustusvoimat: {
    name: 'Puolustusvoimain lippujuhlan päivä',
    summary: 'Puolustusvoimat juhlii lippujuhlaansa marsalkka Mannerheimin syntymäpäivänä.',
    history:
      'Carl Gustaf Emil Mannerheim syntyi 4. kesäkuuta 1867. Hänen 75-vuotispäivänään vuonna 1942 hänelle myönnettiin Suomen marsalkan arvonimi, ja päivästä tuli puolustusvoimien lippujuhlan päivä. Päivänä järjestetään paraateja ja jaetaan ylennyksiä ja kunniamerkkejä.',
  },
  juhannus: {
    name: 'Juhannus',
    theme: 'Suomen lipun päivä',
    summary: 'Juhannuspäivä on keskikesän juhla ja Suomen lipun päivä. Liputus alkaa jo juhannusaattona ja jatkuu läpi valoisan yön.',
    history:
      'Juhannus on alun perin Johannes Kastajan syntymän juhla, joka sulautui vanhempiin keskikesän perinteisiin, kuten kokkojen polttoon. Juhannuspäivää vietetään 20.–26. kesäkuuta osuvana lauantaina. Juhannuspäivä on myös Suomen lipun päivä.',
  },
  isanpaiva: {
    name: 'Isänpäivä',
    summary: 'Isänpäivänä kiitetään ja muistetaan isiä marraskuun toisena sunnuntaina.',
    history:
      'Isänpäivä tuli Suomeen 1900-luvun puolivälin jälkeen ja oli pitkään vakiintunut liputuspäivä. Valtioneuvosto muutti liputusasetusta, ja isänpäivästä tuli virallinen liputuspäivä vuonna 2019 samaan asemaan äitienpäivän kanssa.',
  },
  itsenaisyyspaiva: {
    name: 'Itsenäisyyspäivä',
    summary: 'Itsenäisyyspäivänä juhlitaan Suomen itsenäisyyttä. Liputus päättyy poikkeuksellisesti vasta klo 20.',
    history:
      'Eduskunta hyväksyi senaatin antaman itsenäisyysjulistuksen 6. joulukuuta 1917. Päivää vietetään juhlallisesti ja arvokkaasti, ja siihen kuuluvat esimerkiksi kynttilät ikkunoilla ja presidentin itsenäisyyspäivän vastaanotto.',
  },

  runeberg: {
    name: 'J. L. Runebergin päivä',
    summary: 'Päivänä muistetaan kansallisrunoilija Johan Ludvig Runebergia.',
    history:
      'Runeberg syntyi 5. helmikuuta 1804 Pietarsaaressa. Hänen runonsa Maamme on Suomen kansallislaulun sanoitus, ja Vänrikki Stoolin tarinat on hänen tunnetuimpia teoksiaan. Päivän herkku on Runebergin torttu.',
  },
  canth: {
    name: 'Minna Canthin päivä',
    theme: 'tasa-arvon päivä',
    summary: 'Päivä kunnioittaa kirjailija ja yhteiskunnallinen vaikuttaja Minna Canthia sekä tasa-arvoa.',
    history:
      'Minna Canth syntyi 19. maaliskuuta 1844 Tampereella. Näytelmissään ja kirjoituksissaan hän käsitteli naisten asemaa, köyhyyttä ja yhteiskunnan epäkohtia. Minna Canthin päivä oli ensimmäinen suomalaiselle naiselle omistettu liputuspäivä.',
  },
  agricola: {
    name: 'Mikael Agricolan päivä',
    theme: 'suomen kielen päivä',
    summary: 'Päivänä juhlitaan suomen kieltä ja kirjakielen isää Mikael Agricolaa.',
    history:
      'Agricola kuoli 9. huhtikuuta 1557. Hän julkaisi ensimmäisen suomenkielisen kirjan, aapisen Abckiria, ja käänsi Uuden testamentin suomeksi vuonna 1548. Hänen työnsä loi pohjan suomen kirjakielelle.',
  },
  veteraanipaiva: {
    name: 'Kansallinen veteraanipäivä',
    summary: 'Päivänä kiitetään Suomen sotien veteraaneja.',
    history:
      'Päivämäärä viittaa Lapin sodan päättymiseen 27. huhtikuuta 1945, kun viimeiset saksalaiset joukot poistuivat Suomesta. Kansallista veteraanipäivää on vietetty vuodesta 1987.',
  },
  eurooppa: {
    name: 'Eurooppa-päivä',
    summary: 'Eurooppa-päivänä juhlitaan eurooppalaista yhteistyötä ja rauhaa.',
    history:
      'Ranskan ulkoministeri Robert Schuman esitti 9. toukokuuta 1950 julistuksen, josta Euroopan unionin kehitys sai alkunsa. Suomi liittyi Euroopan unioniin vuonna 1995.',
  },
  snellman: {
    name: 'J. V. Snellmanin päivä',
    theme: 'suomalaisuuden päivä',
    summary: 'Päivänä juhlitaan suomalaisuutta ja muistetaan filosofi ja valtiomies Johan Vilhelm Snellmania.',
    history:
      'Snellman syntyi 12. toukokuuta 1806. Hän ajoi suomen kielen asemaa sivistyksen ja hallinnon kielenä ja vaikutti senaattorina siihen, että Suomi sai oman rahan, markan.',
  },
  kaatuneet: {
    name: 'Kaatuneitten muistopäivä',
    summary: 'Päivänä muistetaan Suomen sodissa kaatuneita.',
    history:
      'Kaatuneitten muistopäivää vietetään toukokuun kolmantena sunnuntaina. Päivänä muistetaan kaikkia Suomen sodissa ja rauhanturvatehtävissä menehtyneitä. Sankarihaudoille lasketaan seppeleitä.',
  },
  leino: {
    name: 'Eino Leinon päivä',
    theme: 'runon ja suven päivä',
    summary: 'Päivänä juhlitaan runoutta ja kesää runoilija Eino Leinon syntymäpäivänä.',
    history:
      'Eino Leino syntyi 6. heinäkuuta 1878 Paltamossa. Hän on yksi suomalaisen runouden merkittävimmistä nimistä, ja hänen tunnetuimpia teoksiaan ovat Helkavirsiä-kokoelmat.',
  },
  luonto: {
    name: 'Suomen luonnon päivä',
    summary: 'Päivänä juhlitaan suomalaista luontoa ja kannustetaan nauttimaan siitä.',
    history:
      'Suomen luonnon päivää vietettiin ensimmäisen kerran Suomen itsenäisyyden juhlavuonna 2017. Päivä on elokuun viimeinen lauantai.',
  },
  sillanpaa: {
    name: 'Miina Sillanpään päivä',
    theme: 'kansalaisvaikuttamisen päivä',
    summary: 'Päivä kunnioittaa Miina Sillanpäätä ja kansalaisvaikuttamista.',
    history:
      'Miina Sillanpää syntyi 1. lokakuuta 1866. Hän oli ensimmäisiä naiskansanedustajia vuonna 1907 ja Suomen ensimmäinen naisministeri vuonna 1926. Hän toimi erityisesti palvelusväen ja yksinhuoltajaäitien aseman parantamiseksi.',
  },
  kivi: {
    name: 'Aleksis Kiven päivä',
    theme: 'suomalaisen kirjallisuuden päivä',
    summary: 'Päivänä juhlitaan suomalaista kirjallisuutta.',
    history:
      'Aleksis Kivi syntyi 10. lokakuuta 1834 Nurmijärvellä. Hänen Seitsemän veljestä -teoksensa on ensimmäinen suomenkielinen romaani, ja häntä pidetään Suomen kansalliskirjailijana.',
  },
  yk: {
    name: 'YK:n päivä',
    summary: 'Päivänä juhlitaan Yhdistyneitä kansakuntia ja kansainvälistä yhteistyötä.',
    history:
      'YK:n peruskirja tuli voimaan 24. lokakuuta 1945. Suomi liittyi YK:hon vuonna 1955 ja on osallistunut muun muassa YK:n rauhanturvatehtäviin.',
  },
  ruotsalaisuus: {
    name: 'Ruotsalaisuuden päivä',
    theme: 'svenska dagen',
    summary: 'Päivänä juhlitaan suomenruotsalaista kulttuuria ja kaksikielisyyttä.',
    history:
      'Päivämäärä on Ruotsin kuninkaan Kustaa II Aadolfin kuolinpäivä Lützenin taistelussa vuonna 1632. Svenska dagenia on vietetty suomenruotsalaisuuden juhlana 1900-luvun alusta lähtien.',
  },
  lapsenoikeudet: {
    name: 'Lapsen oikeuksien päivä',
    summary: 'Päivänä nostetaan esiin lasten oikeudet.',
    history:
      'YK:n yleiskokous hyväksyi lapsen oikeuksien sopimuksen 20. marraskuuta 1989. Sopimus on maailman laajimmin ratifioitu ihmisoikeussopimus, ja Suomi on sitoutunut siihen.',
  },
  sibelius: {
    name: 'Jean Sibeliuksen päivä',
    theme: 'suomalaisen musiikin päivä',
    summary: 'Päivänä juhlitaan suomalaista musiikkia säveltäjä Jean Sibeliuksen syntymäpäivänä.',
    history:
      'Jean Sibelius syntyi 8. joulukuuta 1865 Hämeenlinnassa. Hänen sävellyksensä, kuten Finlandia ja seitsemän sinfoniaa, tekivät hänestä kansainvälisesti tunnetuimman suomalaisen säveltäjän.',
  },

  aalto: {
    name: 'Alvar ja Aino Aallon päivä',
    theme: 'suomalaisen arkkitehtuurin ja muotoilun päivä',
    summary: 'Päivänä juhlitaan suomalaista arkkitehtuuria ja muotoilua.',
    history:
      'Arkkitehti Alvar Aalto syntyi 3. helmikuuta 1898. Hän ja hänen puolisonsa, arkkitehti ja muotoilija Aino Aalto, loivat yhdessä rakennuksia, huonekaluja ja lasiesineitä, jotka tekivät suomalaisesta muotoilusta kansainvälisesti tunnettua.',
  },
  saamelaiset: {
    name: 'Saamelaisten kansallispäivä',
    summary: 'Päivänä juhlitaan saamelaisia, Euroopan unionin alueen ainoaa alkuperäiskansaa.',
    history:
      'Ensimmäinen saamelaisten yhteinen kokous pidettiin Trondheimissa Norjassa 6. helmikuuta 1917. Päivämäärää vietetään saamelaisten kansallispäivänä kaikissa maissa, joissa saamelaisia asuu.',
  },
  romanit: {
    name: 'Romanien kansallispäivä',
    summary: 'Päivänä juhlitaan romanikulttuuria ja romanien historiaa.',
    history:
      'Ensimmäinen maailman romanikongressi pidettiin Lontoossa 8. huhtikuuta 1971. Suomen romanit ovat asuneet maassa 1500-luvulta lähtien.',
  },
  evakot: {
    name: 'Evakkojen liputuspäivä',
    summary: 'Päivänä muistetaan sotien aikana kotiseuduiltaan evakkoon lähteneitä suomalaisia.',
    history:
      'Talvi- ja jatkosodan seurauksena yli 400 000 suomalaista joutui jättämään kotinsa luovutetuilta alueilta, pääasiassa Karjalasta. Heidän asuttamisensa muualle Suomeen oli yksi sodanjälkeisen Suomen suurista ponnistuksista.',
  },
  jansson: {
    name: 'Tove Janssonin päivä',
    theme: 'suomalaisen taiteen päivä',
    summary: 'Päivänä juhlitaan suomalaista taidetta.',
    history:
      'Tove Jansson syntyi 9. elokuuta 1914 Helsingissä. Hän oli kirjailija ja kuvataiteilija, joka loi maailmankuulut Muumit.',
  },

  'election-parliamentary': {
    name: 'Eduskuntavaalit',
    summary: 'Vaalipäivä on virallinen liputuspäivä. Liputus päättyy klo 20, kun äänestys päättyy.',
    history: 'Eduskuntavaaleissa valitaan 200 kansanedustajaa neljän vuoden kaudeksi.',
  },
  'election-municipal': {
    name: 'Kunta- ja aluevaalit',
    summary: 'Vaalipäivä on virallinen liputuspäivä. Liputus päättyy klo 20, kun äänestys päättyy.',
    history: 'Kuntavaaleissa valitaan kuntien valtuustot ja aluevaaleissa hyvinvointialueiden aluevaltuustot.',
  },
  'election-european': {
    name: 'Europarlamenttivaalit',
    summary: 'Vaalipäivä on virallinen liputuspäivä. Liputus päättyy klo 20, kun äänestys päättyy.',
    history: 'Europarlamenttivaaleissa valitaan Suomen edustajat Euroopan parlamenttiin viiden vuoden kaudeksi.',
  },
  'election-presidential': {
    name: 'Presidentinvaali',
    summary: 'Vaalipäivä on virallinen liputuspäivä. Liputus päättyy klo 20, kun äänestys päättyy.',
    history: 'Tasavallan presidentti valitaan suorilla vaaleilla kuuden vuoden toimikaudeksi.',
  },
  'election-inauguration': {
    name: 'Tasavallan presidentin virkaanastujaispäivä',
    summary: 'Presidentin virkaanastujaispäivä on virallinen liputuspäivä.',
    history: 'Vastavalittu presidentti aloittaa toimikautensa vaalia seuraavan maaliskuun 1. päivänä.',
  },
};
