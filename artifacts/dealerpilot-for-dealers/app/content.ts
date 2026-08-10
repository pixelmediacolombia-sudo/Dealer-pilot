/**
 * Copy de la Guía del Dealer, en los dos idiomas.
 *
 * El inglés NO es traducción literal del español: los dos se escribieron
 * aparte con el mismo contenido. Si cambia uno, revise el otro a mano.
 *
 * Regla de lenguaje: los tres canales publican solos — Marketplace, los
 * mensajes y la página comercial (esta última en el horario programado).
 * En ningún texto puede aparecer que alguien revise, apruebe o confirme un
 * anuncio. Los verbos de publicación van en pasado y en tercera persona.
 */

/** Reemplace estos dos valores por los reales antes de salir a producción. */
export const CONTACT = {
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "contact@1987marketing.com",
};

export type Lang = "es" | "en";

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

/** Una de las cosas que ocurren solas, con la extensión y el canal que la hacen. */
export type DoesRow = {
  name: string;
  text: string;
  meta: readonly (readonly [string, string])[];
};

/** Una de las secciones del producto, con lo que hay adentro. */
export type SystemRow = {
  name: string;
  promise: string;
  items: readonly string[];
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
  does: readonly DoesRow[];

  systemLabel: string;
  systemTitle: string;
  systemLead: string;
  system: readonly SystemRow[];

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

    doesLabel: "Lo que pasa solo",
    doesTitle: "Cuatro cosas, sin que usted abra Facebook",
    does: [
      {
        name: "Publica",
        text: "Toma el vehículo de la cola, arma la descripción, la categoría y el precio con las fotos y los datos que ya están en su inventario, abre Marketplace y lo publica. Si Facebook pide verificación o corta la sesión, se detiene y avisa en vez de forzar.",
        meta: [
          ["Extensión", "DealerPilot AI Publisher"],
          ["Canal", "Facebook Marketplace del vendedor"],
        ],
      },
      {
        name: "Contesta",
        text: "Reconoce quién escribe, de qué vehículo habla y qué está preguntando, y responde con el millaje, el precio, la ubicación y el financiamiento que dice su inventario. Contesta en español o en inglés, según le escriban, y escala a teléfono cuando el comprador está listo.",
        meta: [
          ["Extensión", "DealerPilot Messenger AI"],
          ["Canal", "Conversaciones de Marketplace"],
        ],
      },
      {
        name: "Publica en su página",
        text: "Convierte un vehículo del inventario en publicación de su página comercial, con el texto y hasta diez fotos preparadas, y la sube en el horario que usted dejó programado.",
        meta: [
          ["Extensión", "DealerPilot Page Publisher"],
          ["Canal", "Meta Business Suite"],
        ],
      },
      {
        name: "Retira",
        text: "Cuando el carro pasa a vendido en el inventario, el anuncio sale del aire. Usted deja de recibir mensajes por una unidad que ya no tiene en el lote.",
        meta: [
          ["Motor", "Cola de publicación"],
          ["Canal", "Todos"],
        ],
      },
    ],

    systemLabel: "El sistema completo",
    systemTitle: "Ocho pantallas, una sola operación",
    systemLead:
      "No necesita aprender palabras técnicas. Cada pantalla responde una pregunta concreta del día del lote.",
    system: [
      {
        name: "Centro de mando",
        promise: "Abre el día sabiendo qué necesita atención.",
        items: [
          "Prioridades del día",
          "Alertas y actividad reciente",
          "Estado de los motores del sistema",
        ],
      },
      {
        name: "Inventario",
        promise: "Su feed entra solo y se mantiene al día.",
        items: [
          "Importa su feed XML o CSV",
          "Se sincroniza cada 24 horas",
          "Salud del feed y estado por unidad",
          "Varios lotes en la misma cuenta",
        ],
      },
      {
        name: "Marketplace",
        promise: "Una cola que trabaja sola, de anuncio armado a anuncio arriba.",
        items: [
          "Descripción, categoría y precio",
          "Sugerencia de enganche",
          "Lotes programados por día y hora",
          "Reintenta si Facebook falla",
          "Control de los anuncios activos",
        ],
      },
      {
        name: "Estudio de fotos",
        promise: "Las fotos salen parejas sin que nadie las edite.",
        items: [
          "Puntaje de calidad por foto",
          "Fondo removido y foto de producto",
          "Portada elegida y galería ordenada",
        ],
      },
      {
        name: "Ventas y compradores",
        promise: "Cada mensaje llega con el vehículo y el historial pegados.",
        items: [
          "Conversaciones reunidas por comprador",
          "Intención del mensaje y calificación",
          "Puntaje de lead y próximo paso",
        ],
      },
      {
        name: "Dealer DNA",
        promise: "Todo lo que sale suena como su lote.",
        items: [
          "Tono y forma de hablar",
          "Programas de financiamiento",
          "Reglas y datos de la tienda",
        ],
      },
      {
        name: "Inteligencia de mercado",
        promise: "Qué carro conviene publicar primero, y cuál todavía no.",
        items: [
          "Oportunidad de 0 a 100 por vehículo",
          "Doce señales de demanda",
          "Bloqueo de anuncios duplicados",
        ],
      },
      {
        name: "Conexiones y ajustes",
        promise: "Se da cuenta de que algo está caído antes que usted.",
        items: [
          "Estado de la extensión y del feed",
          "Ubicaciones y lotes del dealer",
          "Feed de Meta para anuncios de inventario",
        ],
      },
    ],

    rulesLabel: "Lo que usted pone",
    rulesTitle: "Usted no publica. Usted decide cómo se publica",
    rulesLead:
      "Se configura una vez y de ahí en adelante todo lo que sale a Marketplace respeta esas reglas.",
    rules: [
      ["Precio mínimo", "Nunca sale un anuncio por debajo de su piso"],
      ["Tono", "Escribe y contesta como habla su lote"],
      ["Horario", "A qué horas publica, a qué horas contesta"],
      ["Lo que no se dice", "Temas que quedan fuera de la conversación"],
      ["Ubicaciones", "De cuál de sus lotes sale cada carro"],
      ["Financiamiento", "Qué programas se mencionan y cuáles no"],
    ],

    notLabel: "Importante",
    notTitle: "Lo que no hace",
    not: [
      "No inventa datos. Si el dato no está en su inventario, no lo dice.",
      "No publica el mismo carro dos veces ni lo pone a competir contra sus propios anuncios.",
      "No borra su inventario cuando el feed llega vacío o roto: se detiene y deja todo como estaba.",
      "No mezcla los canales. El Marketplace del vendedor y la página comercial van por rutas separadas.",
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

    doesLabel: "What happens on its own",
    doesTitle: "Four things, without you opening Facebook",
    does: [
      {
        name: "Posts",
        text: "Pulls the vehicle off the queue, writes the description, picks the category and the price from the photos and numbers already in your inventory, opens Marketplace, and posts it. If Facebook asks for verification or drops the session, it stops and reports instead of forcing anything.",
        meta: [
          ["Extension", "DealerPilot AI Publisher"],
          ["Channel", "The seller's Facebook Marketplace"],
        ],
      },
      {
        name: "Answers",
        text: "Recognizes who is writing, which vehicle they mean, and what they're asking, then replies with the mileage, price, location, and financing your inventory actually holds. It answers in English or Spanish, whichever they write in, and moves to a phone call when the buyer is ready.",
        meta: [
          ["Extension", "DealerPilot Messenger AI"],
          ["Channel", "Marketplace conversations"],
        ],
      },
      {
        name: "Posts to your page",
        text: "Turns an inventory vehicle into a business-page post with the caption and up to ten photos prepared, and puts it up on the schedule you set.",
        meta: [
          ["Extension", "DealerPilot Page Publisher"],
          ["Channel", "Meta Business Suite"],
        ],
      },
      {
        name: "Takes it down",
        text: "The moment the car is marked sold in your inventory, the listing comes off. You stop getting messages about a car that already left the lot.",
        meta: [
          ["Engine", "Publishing queue"],
          ["Channel", "All"],
        ],
      },
    ],

    systemLabel: "The whole system",
    systemTitle: "Eight screens, one operation",
    systemLead:
      "No technical vocabulary to learn. Each screen answers one concrete question from a day on the lot.",
    system: [
      {
        name: "Command center",
        promise: "Open the day knowing what needs attention.",
        items: ["Today's priorities", "Alerts and recent activity", "Status of the system's engines"],
      },
      {
        name: "Inventory",
        promise: "Your feed comes in on its own and stays current.",
        items: [
          "Imports your XML or CSV feed",
          "Syncs every 24 hours",
          "Feed health and per-unit status",
          "Several lots on one account",
        ],
      },
      {
        name: "Marketplace",
        promise: "A queue that works on its own, from written listing to live listing.",
        items: [
          "Description, category, and price",
          "Suggested down payment",
          "Batches scheduled by day and hour",
          "Retries when Facebook fails",
          "Control of what's currently live",
        ],
      },
      {
        name: "Photo studio",
        promise: "Photos come out even without anyone editing them.",
        items: [
          "Quality score per photo",
          "Background removed, product shot",
          "Cover chosen, gallery ordered",
        ],
      },
      {
        name: "Sales and buyers",
        promise: "Every message arrives with the vehicle and the history attached.",
        items: [
          "Conversations grouped by buyer",
          "Message intent and qualification",
          "Lead score and next step",
        ],
      },
      {
        name: "Dealer DNA",
        promise: "Everything that goes out sounds like your lot.",
        items: ["Tone and turns of phrase", "Financing programs", "Store rules and details"],
      },
      {
        name: "Market intelligence",
        promise: "Which car is worth posting first, and which one isn't yet.",
        items: [
          "Opportunity 0 to 100 per vehicle",
          "Twelve demand signals",
          "Duplicate listings blocked",
        ],
      },
      {
        name: "Connections and settings",
        promise: "It notices something is down before you do.",
        items: [
          "Extension and feed status",
          "Dealer lots and locations",
          "Meta feed for inventory ads",
        ],
      },
    ],

    rulesLabel: "What you set",
    rulesTitle: "You don't post. You set how it posts",
    rulesLead:
      "You set it once, and from then on everything that reaches Marketplace follows those rules.",
    rules: [
      ["Price floor", "No listing ever goes out below your floor"],
      ["Tone", "It writes and answers the way your lot talks"],
      ["Hours", "When it posts, when it answers"],
      ["Off limits", "Subjects that stay out of the conversation"],
      ["Locations", "Which of your lots each car comes from"],
      ["Financing", "Which programs get mentioned and which don't"],
    ],

    notLabel: "Important",
    notTitle: "What it does not do",
    not: [
      "It does not make up numbers. If it isn't in your inventory, it doesn't say it.",
      "It does not post the same car twice or put it up against your own listings.",
      "It does not wipe your inventory when a feed comes back empty or broken: it stops and leaves everything as it was.",
      "It does not mix the channels. The seller's Marketplace and the business page run on separate tracks.",
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
