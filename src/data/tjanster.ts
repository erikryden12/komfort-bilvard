export type Tjanst = {
  slug: string;
  num: string;
  title: string;
  shortDesc: string;
  metaDesc: string;
  hero: string;
  intro: string;
  included: { heading: string; text: string }[];
  why: string[];
  faq: { q: string; a: string }[];
};

export const tjanster: Tjanst[] = [
  {
    slug: "rekonditionering",
    num: "01",
    title: "Rekonditionering",
    shortDesc: "Komplett invändig och utvändig behandling. Din bil återfår nybilskänslan.",
    metaDesc: "Professionell rekonditionering i Örebro. KOM-FORT Bilvård utför komplett rekond – invändigt och utvändigt. Boka online eller ring 076-194 35 19.",
    hero: "Rekonditionering i Örebro",
    intro: "Rekonditionering är den mest kompletta bilvårdsbehandlingen vi erbjuder. Vi går igenom bilen från topp till tå – utvändigt polerar och skyddar vi lacken, rengör hjulinfattningar och glas, och invändigt kemtvättar vi klädsel, mattor och alla ytor. Resultatet är en bil som känns och luktar ny igen.",
    included: [
      { heading: "Utvändig tvätt & avfettning", text: "Noggrann handtvätt med pH-neutrala medel. Alla ytor avfettas och förbereds för efterföljande behandlingar." },
      { heading: "Lackpolering", text: "Maskinpolering som tar bort lätta repor, oxidering och matt yta. Lacken återfår sitt djup och sin glans." },
      { heading: "Lackvård & skydd", text: "Vi applicerar ett skyddsvax eller keramisk försegling som skyddar lacken mot smuts, vatten och UV-strålning." },
      { heading: "Rengöring av hjul & däck", text: "Hjulinfattningar och däck rengörs grundligt och behandlas med skyddsprodukter." },
      { heading: "Invändig kemtvätt", text: "Klädsel, mattor och takklädsel rengörs med professionell kemtvättsutrustning. Fläckar och lukt försvinner." },
      { heading: "Rengöring av alla ytor", text: "Dashboard, dörrar, luftventiler och alla plastdetaljer rengörs och behandlas med ett skyddande medel." },
    ],
    why: [
      "Höjer bilens andrahandsvärde markant",
      "Vi använder enbart professionella produkter av hög kvalitet",
      "Aldrig automattvättar – handarbete hela vägen",
      "Över 10 års erfarenhet av bilvård i Örebro",
    ],
    faq: [
      { q: "Hur lång tid tar en rekonditionering?", a: "En komplett rekond tar vanligtvis 4–8 timmar beroende på bilens storlek och skick. Vi bokar in bilen för hela dagen." },
      { q: "Hur ofta bör man rekonditionera sin bil?", a: "Vi rekommenderar en komplett rekond en gång per år, gärna inför sommaren eller efter vintern." },
      { q: "Vad kostar en rekonditionering?", a: "Priset varierar beroende på bilens storlek och skick. Kontakta oss för en kostnadsfri offert." },
    ],
  },
  {
    slug: "polering",
    num: "02",
    title: "Polering",
    shortDesc: "Maskinpolering som tar bort repor och oxidering. Lacken återfår sitt djup och glans.",
    metaDesc: "Lackpolering och maskinpolering i Örebro. Vi tar bort repor, swirls och oxidering. KOM-FORT Bilvård – ring 076-194 35 19.",
    hero: "Lackpolering i Örebro",
    intro: "Med åren samlar bilens lack på sig repor, swirl-märken och oxidering som gör att lacken ser matt och sliten ut. Vår maskinpolering är den effektivaste metoden för att återställa lacken till ursprungligt skick – utan att måla om. Vi arbetar med professionella maskiner och polermedel anpassade efter just din bils lack.",
    included: [
      { heading: "Lackanalys", text: "Vi mäter lackens tjocklek och bedömer skicket innan vi börjar. På så sätt vet vi exakt vilket polerprogram som ger bäst resultat." },
      { heading: "Tvåstegspolering", text: "Steg 1 tar bort djupare repor och oxidering. Steg 2 förfinar ytan och ger lacken maximalt djup och glans." },
      { heading: "Enstegspolering", text: "För lack i gott skick räcker ofta ett poleringsteg för att ta bort swirl-märken och ge lacken nytt liv." },
      { heading: "Finishing & skydd", text: "Efter polering applicerar vi alltid ett lager skyddsvax eller keramisk försegling för att bevara resultatet." },
    ],
    why: [
      "Tar bort upp till 80–90% av repor och swirl-märken",
      "Kostar en bråkdel av en omlackering",
      "Professionella maskiner ger resultat som inte går att uppnå för hand",
      "Resultatet håller längre med rätt eftervård",
    ],
    faq: [
      { q: "Kan alla repor tas bort med polering?", a: "Repor som bara sitter i klarlacket kan i de flesta fall tas bort helt. Repor som gått igenom till grundfärgen eller plåten kräver däremot lackning." },
      { q: "Försvinner lacken av polering?", a: "Polering tar bort ett mycket tunt lager lack. Vi mäter alltid lacktjockleken innan för att säkerställa att det finns marginal. Med professionell polering är det helt säkert." },
      { q: "Hur länge håller resultatet?", a: "Med rätt eftervård och ett skyddande lackförsegling håller resultatet i 1–2 år." },
    ],
  },
  {
    slug: "lackskydd",
    num: "03",
    title: "Lackskydd",
    shortDesc: "Keramiskt lackskydd som skyddar lacken mot väder, smuts och UV-strålar.",
    metaDesc: "Keramiskt lackskydd och lackförsegling i Örebro. Skydda din bil mot väder, smuts och repor. KOM-FORT Bilvård – ring 076-194 35 19.",
    hero: "Keramiskt Lackskydd i Örebro",
    intro: "Keramiskt lackskydd är den mest avancerade och långvariga skyddsbehandlingen för din bils lack. Ett keramiskt skikt binder kemiskt till lacken och skapar en hård, hydrofob yta som stöter bort vatten, smuts och kemikalier. Bilen blir betydligt enklare att hålla ren och lacken skyddas mot UV-strålning, oxidering och lätta repor i flera år.",
    included: [
      { heading: "Lackförberedelse", text: "Lacken poleras och avfettas noggrant innan applicering. En ren och slät yta är avgörande för att det keramiska skiktet ska fästa optimalt." },
      { heading: "Keramisk applicering", text: "Vi applicerar det keramiska skiktet för hand med professionell teknik. Produkterna vi använder håller på marknaden i 2–5 år." },
      { heading: "Härdning", text: "Det keramiska skiktet behöver tid att härda. Vi informerar om vad du bör tänka på de första dagarna efter behandlingen." },
      { heading: "Glasbehandling (tillval)", text: "Vi kan även applicera ett hydrofob glasbehandling som gör att vatten perlar bort från rutorna vid körning." },
    ],
    why: [
      "Skyddar lacken i 2–5 år med rätt underhåll",
      "Extremt enkel att hålla ren – smuts fastnar inte",
      "Skyddar mot UV-strålning som annars bryter ned lacken",
      "Ökar bilens andrahandsvärde",
    ],
    faq: [
      { q: "Vad skiljer keramiskt skydd från vanligt vax?", a: "Vax sitter på ytan och tvättas bort efter några månader. Keramiskt skydd binder kemiskt till lacken och håller i flera år. Det ger även ett hårdare och mer reptåligt skikt." },
      { q: "Behöver bilen förberedas inför keramiskt skydd?", a: "Ja, för bästa resultat bör lacken poleras och avfettas grundligt före applicering. Vi tar hand om hela förberedelsen." },
      { q: "Kan man applicera keramiskt skydd på en ny bil?", a: "Absolut – faktum är att det är optimalt att skydda en ny bil direkt innan lacken hinner samla på sig repor och föroreningar." },
    ],
  },
  {
    slug: "biltvatt",
    num: "04",
    title: "Biltvätt",
    shortDesc: "Noggrann handtvätt med professionella produkter. Aldrig automattvättar som repar lacken.",
    metaDesc: "Professionell handtvätt av bil i Örebro. Skonsam tvätt som inte repar lacken. KOM-FORT Bilvård – ring 076-194 35 19.",
    hero: "Professionell Biltvätt i Örebro",
    intro: "En professionell handtvätt är något helt annat än en automatisk biltvätt. Automattvättar använder hårda borstar som repar lacken och lämnar swirl-märken. Vi tvättar alltid för hand med mjuka tvätthandskar, pH-neutrala schampon och metoder som skyddar lacken. Varje tvätt utförs med samma omsorg som om det vore vår egen bil.",
    included: [
      { heading: "Förblötläggning & avfettning", text: "Vi börjar med att blötlägga bilen och lösa upp grovsmuts och insekter med skonsamma avfettningsmedel." },
      { heading: "Tvåhinkstvätt", text: "Vi använder tvåhinkmetoden – en hink med tvålvatten och en sköljhink – för att minimera risken att smuts förs tillbaka till lacken." },
      { heading: "Hjul & hjulhus", text: "Hjul och hjulhus tvättas separat med dedikerade produkter för bäst resultat." },
      { heading: "Avtorkning & finish", text: "Bilen torkas med mjuka mikrofiberdukar och avslutas med ett snabbvax för extra glans och skydd." },
    ],
    why: [
      "Handtvätt skadar aldrig lacken – automattvättar gör det alltid",
      "Professionella produkter ger ett resultat du märker",
      "Vi tar oss tid – ingen bil behandlas i en fart",
      "Perfekt som underhåll mellan rekonditioneringar",
    ],
    faq: [
      { q: "Varför är handtvätt bättre än automatisk biltvätt?", a: "Automattvättar har hårda borstar och starka kemikalier som sliter på lacken och skapar repor över tid. Handtvätt med rätt teknik och produkter är alltid skonsamt mot lacken." },
      { q: "Hur ofta bör man tvätta bilen?", a: "Det beror på hur du kör och var du bor. En månatlig tvätt är en bra tumregel för att hålla lacken i gott skick." },
      { q: "Ingår invändig städning?", a: "Standard biltvätt avser utvändigt. Invändig städning bokas som ett tillägg eller som del av en rekonditionering." },
    ],
  },
  {
    slug: "invandig-rekond",
    num: "05",
    title: "Invändig Rekond",
    shortDesc: "Kemtvätt av klädsel och mattor, rengöring av alla ytor. Fräscht och rent.",
    metaDesc: "Invändig rekonditionering och kemtvätt av bil i Örebro. Vi tar bort fläckar, lukt och smuts på djupet. KOM-FORT Bilvård – ring 076-194 35 19.",
    hero: "Invändig Rekond i Örebro",
    intro: "Bilens interiör tar på sig smuts, fläckar och lukt som vanlig dammsugning inte kan ta bort. Vår invändiga rekonditionering går på djupet – vi kemtvättar klädsel, mattor och tak, rengör alla plastdetaljer och ytor, och behandlar läder om det finns. Resultatet är ett interiör som luktar och känns nytt.",
    included: [
      { heading: "Grundlig dammsugning", text: "Mattor, sätesklyftor och alla svåråtkomliga ställen dammsugits noggrant som första steg." },
      { heading: "Kemtvätt av mattor & klädsel", text: "Med professionell ångtvätts- och kemtvättsutrustning tar vi bort inbyggd smuts, fläckar och bakterier från tyg och heltäckningsmattor." },
      { heading: "Läderbehandling (om aktuellt)", text: "Lädersäten rengörs med pH-neutrala läderrengöringsmedel och behandlas sedan med ett skyddande och mjukgörande läderserum." },
      { heading: "Rengöring av alla ytor", text: "Dashboard, dörrsidor, mittkonsol, luftventiler och alla plastdetaljer rengörs och behandlas med ett skyddande medel som motverkar blekning." },
      { heading: "Glasputsning invändigt", text: "Invändiga rutor putsas med glasrengöringsmedel för maximal sikt och ett rent intryck." },
    ],
    why: [
      "Tar bort lukt från mat, husdjur och fukt",
      "Förlänger livslängden på klädsel och mattor",
      "Professionell utrustning når djupare än hemma",
      "Viktigt för allergikers välmående i bilen",
    ],
    faq: [
      { q: "Kan ni ta bort husdjurslukt?", a: "Ja, i de flesta fall. Vi använder enzymatiska rengöringsmedel som bryter ned luktmolekylerna på djupet, snarare än att bara maskera dem." },
      { q: "Hur lång tid tar invändig rekond?", a: "2–4 timmar beroende på bilens storlek och hur smutsig den är. Vi rekommenderar att du lämnar bilen hos oss för dagen." },
      { q: "Hur länge måste bilen luftas efter kemtvätt?", a: "Vi luftar bilen ordentligt efter behandlingen. Du kan köra hem direkt, men lämna gärna dörrar och fönster öppna ytterligare någon timme om möjligt." },
    ],
  },
];

export function getTjanstBySlug(slug: string): Tjanst | undefined {
  return tjanster.find((t) => t.slug === slug);
}
