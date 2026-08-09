/**
 * Copy de la Guía del Dealer, en los dos idiomas.
 *
 * El inglés NO es traducción literal del español: los dos se escribieron
 * aparte con el mismo contenido. Si cambia uno, revise el otro a mano.
 *
 * Regla de lenguaje: la publicación es automática. En ningún texto puede
 * aparecer que alguien revise, apruebe o confirme un anuncio. Los verbos
 * de publicación van en pasado y en tercera persona.
 */

/** Reemplace estos dos valores por los reales antes de salir a producción. */
export const CONTACT = {
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "contact@1987marketing.com",
};

export type Vehicle = {
  name: string;
  vin: string;
  miles: string;
  price: string;
  stock: string;
  lot: string;
  msgs: number;
  time: string;
  question: string;
  /** qué campos de la ficha se resaltan al armar la respuesta */
  pull: Array<"miles" | "price">;
  /** la respuesta; <mark> marca el dato que salió del inventario */
  answer: string;
};

export const VEHICLES: Record<Lang, Vehicle[]> = {
  es: [
    {
      name: "2017 Honda CR-V EX",
      vin: "2HKRW2H85HH612094",
      miles: "84,320",
      price: "$13,900",
      stock: "1147",
      lot: "Woodbridge, VA",
      msgs: 6,
      time: "9:14 a.m.",
      question: "¿Todavía está disponible?",
      pull: ["miles", "price"],
      answer:
        "Sí, disponible. <mark>84,320</mark> millas, <mark>$13,900</mark>, está en Woodbridge.",
    },
    {
      name: "2015 Nissan Altima 2.5 S",
      vin: "1N4AL3AP7FC418860",
      miles: "112,640",
      price: "$8,450",
      stock: "1152",
      lot: "Manassas, VA",
      msgs: 4,
      time: "11:02 a.m.",
      question: "How many miles does it have?",
      pull: ["miles"],
      answer: "It has <mark>112,640</mark> miles. Clean title, in Manassas.",
    },
    {
      name: "2019 GMC Sierra 1500",
      vin: "3GTU2NEC1KG184773",
      miles: "61,905",
      price: "$27,300",
      stock: "1160",
      lot: "Hyattsville, MD",
      msgs: 9,
      time: "4:37 p.m.",
      question: "¿Cuál es el precio y dónde está?",
      pull: ["price"],
      answer: "<mark>$27,300</mark>. Está en el lote de Hyattsville, MD.",
    },
  ],
  en: [
    {
      name: "2017 Honda CR-V EX",
      vin: "2HKRW2H85HH612094",
      miles: "84,320",
      price: "$13,900",
      stock: "1147",
      lot: "Woodbridge, VA",
      msgs: 6,
      time: "9:14 a.m.",
      question: "Is this still available?",
      pull: ["miles", "price"],
      answer:
        "Yes, still available. <mark>84,320</mark> miles, <mark>$13,900</mark>, it's in Woodbridge.",
    },
    {
      name: "2015 Nissan Altima 2.5 S",
      vin: "1N4AL3AP7FC418860",
      miles: "112,640",
      price: "$8,450",
      stock: "1152",
      lot: "Manassas, VA",
      msgs: 4,
      time: "11:02 a.m.",
      question: "¿Cuántas millas tiene?",
      pull: ["miles"],
      answer: "Tiene <mark>112,640</mark> millas. Título limpio, está en Manassas.",
    },
    {
      name: "2019 GMC Sierra 1500",
      vin: "3GTU2NEC1KG184773",
      miles: "61,905",
      price: "$27,300",
      stock: "1160",
      lot: "Hyattsville, MD",
      msgs: 9,
      time: "4:37 p.m.",
      question: "What's the price and where is it?",
      pull: ["price"],
      answer: "<mark>$27,300</mark>. It's at the Hyattsville, MD lot.",
    },
  ],
};

export type Lang = "es" | "en";

/**
 * Tipo compartido por los dos idiomas. Anotarlo (en vez de `as const`) hace
 * que `COPY[lang]` tenga un solo tipo y que `.map()` sobre does/rules compile.
 */
export type Copy = {
  htmlLang: string;
  skip: string;
  mastheadNote: string;
  langLabel: string;
  titleWhite: string;
  titleYellow: string;
  lead: string;
  region: string;
  callLabel: string;
  mailLabel: string;
  stageTitle: string;
  stageAside: string;
  ticketVehicle: string;
  ticketVin: string;
  ticketMiles: string;
  ticketPrice: string;
  ticketStock: string;
  check1: string;
  check2: (n: number) => string;
  check3: string;
  when2: string;
  when3: string;
  stamp: string;
  caption: string;
  doesLabel: string;
  doesTitle: string;
  does: readonly (readonly [string, string])[];
  rulesLabel: string;
  rulesTitle: string;
  rulesLead: string;
  rules: readonly (readonly [string, string])[];
  notLabel: string;
  notTitle: string;
  not: readonly string[];
  closeTitleA: string;
  closeTitleB: string;
  closeLead: string;
  closeCall: string;
  closeMail: string;
  signature: readonly string[];
  footerNote: string;
  footerTag: string;
};

export const COPY: Record<Lang, Copy> = {
  es: {
    htmlLang: "es",
    skip: "Ir al contenido",
    mastheadNote: "Guía del dealer · Virginia y Maryland",
    langLabel: "Idioma",

    titleWhite: "Se publica solo",
    titleYellow: "en Facebook Marketplace",

    lead: "Usted carga el carro una vez. DealerPilot arma el anuncio con sus fotos y sus datos, lo publica en su Facebook Marketplace, contesta los mensajes con lo que dice su inventario, y lo saca del aire cuando el carro se vende.",
    region:
      "Hecho para dealers independientes de carros usados en Virginia y Maryland. En español y en inglés.",

    callLabel: "Pedir acceso · llame",
    mailLabel: "O escriba al correo",

    stageTitle: "Ficha de publicación",
    stageAside: "Inventario de ejemplo",
    ticketVehicle: "Vehículo",
    ticketVin: "VIN",
    ticketMiles: "Millas",
    ticketPrice: "Precio",
    ticketStock: "Stock",
    check1: "Se publicó solo",
    check2: (n: number) => `Contestó ${n} mensajes`,
    check3: "Se retiró al venderse",
    when2: "con datos de arriba",
    when3: "anuncio fuera del aire",
    stamp: "Vendido",
    caption:
      "Cada carro de su lote recorre esto solo: se publica, contesta a los compradores con sus propios datos y sale del aire cuando se vende.",

    doesLabel: "Lo que hace solo",
    doesTitle: "Tres cosas, sin que usted abra Facebook",
    does: [
      [
        "Publica",
        "Arma el anuncio con las fotos, el precio y el millaje que ya están en su inventario, y lo sube a Facebook Marketplace. Usted no escribe la descripción ni llena el formulario.",
      ],
      [
        "Contesta",
        "Responde “¿todavía está disponible?”, el millaje, el precio, la ubicación y el financiamiento con lo que dice su inventario y su ficha de dealer. Contesta en español o en inglés, según le escriban.",
      ],
      [
        "Retira",
        "Cuando el carro pasa a vendido, el anuncio sale del aire. Usted deja de recibir mensajes por una unidad que ya no tiene en el lote.",
      ],
    ],

    rulesLabel: "Lo que usted pone",
    rulesTitle: "Usted no publica. Usted decide cómo se publica",
    rulesLead:
      "Se configura una vez y de ahí en adelante todo lo que sale a Marketplace respeta esas reglas.",
    rules: [
      ["Precio mínimo", "Nunca sale un anuncio por debajo de su piso"],
      ["Tono", "Escribe y contesta como habla su lote"],
      ["Horario", "A qué horas contesta y a qué horas no"],
      ["Lo que no se dice", "Temas que quedan fuera de la conversación"],
      ["Ubicaciones", "De cuál de sus lotes sale cada carro"],
      ["Financiamiento", "Qué programas se mencionan y cuáles no"],
    ],

    notLabel: "Importante",
    notTitle: "Lo que no hace",
    not: [
      "No inventa datos. Si el dato no está en su inventario, no lo dice.",
      "No publica el mismo carro dos veces ni lo pone a competir contra sus propios anuncios.",
      "No toca su página comercial de Facebook. Ese canal va por separado y no se cruza con el Marketplace del vendedor.",
      "No le pide que abra Facebook para publicar. Ese es el punto.",
    ],

    closeTitleA: "Pida acceso ",
    closeTitleB: "para su lote",
    closeLead:
      "Llame o escriba. Le decimos qué necesita para arrancar, cuánto se demora en quedar publicando y con cuántos carros conviene empezar.",
    closeCall: "Llame",
    closeMail: "Correo",
    signature: ["Nombre", "Nombre del lote", "Ciudad"],

    footerNote: "Carros usados · Virginia y Maryland",
    footerTag: "Se publica solo.",
  },

  en: {
    htmlLang: "en",
    skip: "Skip to content",
    mastheadNote: "Dealer guide · Virginia and Maryland",
    langLabel: "Language",

    titleWhite: "It posts itself",
    titleYellow: "on Facebook Marketplace",

    lead: "You enter the car once. DealerPilot builds the listing from your photos and your numbers, posts it to your Facebook Marketplace, answers the messages using what your inventory says, and pulls it down when the car sells.",
    region:
      "Built for independent used-car dealers in Virginia and Maryland. In English and in Spanish.",

    callLabel: "Request access · call",
    mailLabel: "Or send an email",

    stageTitle: "Listing record",
    stageAside: "Sample inventory",
    ticketVehicle: "Vehicle",
    ticketVin: "VIN",
    ticketMiles: "Miles",
    ticketPrice: "Price",
    ticketStock: "Stock",
    check1: "Posted itself",
    check2: (n: number) => `Answered ${n} messages`,
    check3: "Came down when sold",
    when2: "using the data above",
    when3: "listing off Marketplace",
    stamp: "Sold",
    caption:
      "Every car on your lot runs this on its own: it posts, it answers buyers with its own numbers, and it comes down when the car sells.",

    doesLabel: "What it does on its own",
    doesTitle: "Three things, without you opening Facebook",
    does: [
      [
        "Posts",
        "Builds the listing from the photos, price, and mileage already in your inventory, and puts it on Facebook Marketplace. You don't write the description or fill in the form.",
      ],
      [
        "Answers",
        "Handles “is this still available?”, mileage, price, location, and financing using your inventory and your dealer profile. It answers in English or Spanish, whichever the buyer writes in.",
      ],
      [
        "Pulls it down",
        "The moment the car is marked sold, the listing comes off Marketplace. You stop getting messages about a car that already left the lot.",
      ],
    ],

    rulesLabel: "What you set",
    rulesTitle: "You don't post. You set how it posts",
    rulesLead:
      "You set it once, and from then on everything that reaches Marketplace follows those rules.",
    rules: [
      ["Price floor", "No listing ever goes out below your floor"],
      ["Tone", "It writes and answers the way your lot talks"],
      ["Hours", "When it answers and when it stays quiet"],
      ["Off limits", "Subjects that stay out of the conversation"],
      ["Locations", "Which of your lots each car comes from"],
      ["Financing", "Which programs get mentioned and which don't"],
    ],

    notLabel: "Important",
    notTitle: "What it does not do",
    not: [
      "It does not make up numbers. If it isn't in your inventory, it doesn't say it.",
      "It does not post the same car twice or put it up against your own listings.",
      "It does not touch your Facebook business page. That channel runs separately and never crosses the seller's Marketplace.",
      "It does not ask you to open Facebook to publish. That's the whole point.",
    ],

    closeTitleA: "Request access ",
    closeTitleB: "for your lot",
    closeLead:
      "Call or write. We'll tell you what you need to start, how long it takes to be posting, and how many cars to begin with.",
    closeCall: "Call",
    closeMail: "Email",
    signature: ["Name", "Lot name", "City"],

    footerNote: "Used cars · Virginia and Maryland",
    footerTag: "It posts itself.",
  },
};
