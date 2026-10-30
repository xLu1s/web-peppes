/**
 * NAP y contenidos editables.
 * Solo datos públicos del brief (30 oct 2026). No añadir precios ni nombres del equipo.
 */

const base = import.meta.env.BASE_URL;

export const origin = "https://xlu1s.github.io";

export function href(path = ""): string {
  if (path.startsWith("#")) return `${base}${path}`;
  const hashAt = path.indexOf("#");
  const frag = hashAt >= 0 ? path.slice(hashAt) : "";
  const raw = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const clean = raw.replace(/^\/+|\/+$/g, "");
  const url = clean ? `${base}${clean}/` : base;
  return `${url}${frag}`;
}

export function asset(path: string): string {
  return `${base}${path.replace(/^\/+/, "")}`;
}

export function absolute(path: string): string {
  return `${origin}${asset(path)}`;
}

export function pageUrl(path = ""): string {
  return `${origin}${href(path)}`;
}

export const site = {
  name: "Pepe's Coffee & Co.",
  shortName: "Pepe's",
  description:
    "Cafetería, cervecería y vinos en la Alameda de Alcoy (Alcoi). Café, desayunos, bocadillos y cañas. Llama al 865 71 47 91.",
  locale: "es_ES",
  email: "pepescoffeeco@gmail.com",
  phoneDisplay: "865 71 47 91",
  phoneTel: "+34865714791",
  address: {
    street: "Av. Alameda Camilo Sesto, 62",
    postalCode: "03803",
    locality: "Alcoi",
    localityAlt: "Alcoy",
    region: "Alicante",
    country: "ES",
    neighborhood: "l'Eixample",
  },
  geo: {
    lat: 38.702425,
    lng: -0.476738,
  },
  social: {
    instagram: {
      handle: "@pepes_coffee_co",
      url: "https://www.instagram.com/pepes_coffee_co/",
    },
    facebook: {
      handle: "PepesCoffeeCo",
      url: "https://www.facebook.com/PepesCoffeeCo",
    },
  },
} as const;

export const maps = {
  embed: `https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&hl=es&z=16&output=embed`,
  search:
    "https://www.google.com/maps/search/?api=1&query=Pepe%27s%20Coffee%20%26%20Co.%20Alcoi",
  directions: `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`,
};

export const rating = {
  line: "≈ 4,5 ★ en Google · unas 843 reseñas",
  note: "Cifra aproximada de fichas públicas (30 oct 2026). No leída en directo en Google Maps.",
};

export const hours = {
  rows: [
    { days: "Lunes a sábado", time: "8:00 – 22:00" },
    { days: "Domingo", time: "8:00 – 15:00" },
  ],
  disclaimer:
    "Este es el horario que más se repite en las fichas públicas (Google, copiado en octubre de 2026). Facebook publica otro: lunes a sábado de 8:00 a 15:00 y de 18:30 a 22:00, domingo cerrado. Una reseña de agosto de 2025 avisó de que el horario de Google no era correcto. Si vienes con la hora justa, llama.",
  busy: "Según Google, el rato más lleno suele ser el viernes y el sábado de 18:00 a 21:00.",
};

export const nav = [
  { href: "/carta", label: "Carta" },
  { href: "#el-local", label: "El local" },
  { href: "#galeria", label: "Galería" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#donde", label: "Dónde" },
] as const;

export const menu = [
  {
    id: "cafes",
    name: "Cafés",
    intro: "Espresso, café con leche y latte. Es de lo que más hablan las reseñas.",
    image: "images/cafe-leche.jpg",
    imageAlt: "Café con leche en una mesa de mármol.",
    imageW: 1000,
    imageH: 750,
    items: [
      { name: "Espresso", text: "Café solo." },
      { name: "Café con leche", text: "El que sale, una y otra vez, en las reseñas." },
      { name: "Latte", text: "Con latte art." },
    ],
    note: "Otros cafés del local.",
  },
  {
    id: "desayunos",
    name: "Desayunos y tostadas",
    intro: "Desayunos y tostadas con pan crujiente y buen aceite.",
    image: "images/desayuno-mesa.jpg",
    imageAlt: "Tostadas, tortilla y café con leche en una mesa del local.",
    imageW: 1000,
    imageH: 1333,
    items: [
      { name: "Desayunos", text: "Lo que piden por la mañana." },
      { name: "Tostadas", text: "Pan crujiente y buen aceite." },
    ],
  },
  {
    id: "dulces",
    name: "Dulces",
    intro: "Coca, bizcocho y tarta.",
    items: [
      { name: "Coca", text: "La mencionan en las reseñas. El tipo está por confirmar." },
      { name: "Bizcocho / tarta", text: "Dulce para acompañar el café." },
    ],
    note: "El tipo de coca.",
  },
  {
    id: "bocadillos",
    name: "Bocadillos y tapas",
    intro: "Bocadillos, también para cenar, y algo de tapeo.",
    items: [
      { name: "Bocadillos", text: "Muy elogiados. También para cenar." },
      { name: "Tapas / aperitivo", text: "Tapeo y aperitivo." },
    ],
  },
  {
    id: "canas",
    name: "Cañas y cerveza",
    intro: "Por la tarde la terraza se llena.",
    image: "images/terraza-acera.webp",
    imageAlt: "Mesas y sombrillas en la acera de la Alameda.",
    imageW: 580,
    imageH: 327,
    items: [{ name: "Cañas / cerveza", text: "Cañas en la terraza, por la tarde." }],
  },
  {
    id: "vinos",
    name: "Vinos y copas",
    intro: "Cafetería, cervecería y selección de vinos: así se presentan.",
    image: "images/barra-tazas-4.jpg",
    imageAlt: "Tazas de rayas en la barra, con la cafetera al fondo.",
    imageW: 1080,
    imageH: 810,
    items: [
      { name: "Selección de vinos", text: "Figura así en su Facebook." },
      { name: "Copas", text: "Copas y aperitivo." },
    ],
  },
] as const;

export const reviews = [
  {
    quote:
      "Un referente para tomar café en Alcoy. Tiene dos terrazas, un interior muy acogedor, y un equipo de lo más simpático y eficiente. Además del rico café que ponen también es un buen lugar para tomarse unas cañas o lo que quieras; la prueba está en que la terraza se llena casi todas las tardes. Un 10!",
    author: "Julio Carbajal",
    meta: "5★ · Google",
  },
  {
    quote:
      "Si te gusta el buen café, este es tu sitio. Café estupendo, personal muy amable y atento, tostadas con pan crujiente y buen aceite. Sin duda, un lugar TOP!",
    author: "Mauro Fuster",
    meta: "5★ · Google",
  },
  {
    quote:
      "Local encantador, con una decoración preciosa y cuidando el detalle. Desayunos y servicio excepcional",
    author: "ELISABET",
    meta: "5★ · Google",
  },
  {
    quote: "Tot molt bé. Atenció, ambient, producte. Recomanable",
    author: "Reseña en Google",
    meta: "en valenciano",
  },
] as const;

export const gallery = [
  {
    src: "images/fachada-maps.jpg",
    width: 1000,
    height: 1333,
    alt: "Fachada negra de Pepe's en la Alameda, con el toldo y la banderola del teckel.",
    caption: "La fachada",
  },
  {
    src: "images/interior-bici.jpg",
    width: 1000,
    height: 1333,
    alt: "Interior con la bici blanca en la pared de ladrillo y un café en primer plano.",
    caption: "Dentro",
  },
  {
    src: "images/barra-tazas-4.jpg",
    width: 1080,
    height: 810,
    alt: "Tres tazas de rayas verdes, naranjas y azules en la barra de mármol.",
    caption: "La barra",
  },
  {
    src: "images/terraza-desayuno.jpg",
    width: 1000,
    height: 1778,
    alt: "Café y tostada en la terraza, con la servilletera de Pepe's.",
    caption: "La terraza",
  },
  {
    src: "images/desayuno-mesa.jpg",
    width: 1000,
    height: 1333,
    alt: "Tostadas, tortilla y café con leche en una mesa de mármol.",
    caption: "Para desayunar",
  },
  {
    src: "images/cafe-leche.jpg",
    width: 1000,
    height: 750,
    alt: "Café con leche en una taza blanca sobre mármol.",
    caption: "Café con leche",
  },
  {
    src: "images/tostada-zumo.jpg",
    width: 1000,
    height: 1333,
    alt: "Tostada y zumo de naranja en una mesa del local.",
    caption: "Tostada",
  },
  {
    src: "images/bici.jpg",
    width: 1000,
    height: 750,
    alt: "Bicicleta blanca colgada en la pared de ladrillo.",
    caption: "La bici",
  },
  {
    src: "images/barra-tazas-1.jpg",
    width: 1080,
    height: 810,
    alt: "Tazas de rayas en la barra, con el local al fondo.",
    caption: "Tazas",
  },
  {
    src: "images/barra-tazas-2.jpg",
    width: 1080,
    height: 810,
    alt: "Otra vista de las tazas de rayas en la barra de mármol.",
    caption: "En la barra",
  },
  {
    src: "images/barra-tazas-3.jpg",
    width: 1080,
    height: 810,
    alt: "Tazas de colores sobre la barra, con la cafetera detrás.",
    caption: "Más tazas",
  },
  {
    src: "images/flatlay.jpg",
    width: 1080,
    height: 1920,
    alt: "Cuatro tazas vistas desde arriba: grano, café molido, espresso y un latte con corazón.",
    caption: "De grano a taza",
  },
  {
    src: "images/latte-art.jpg",
    width: 640,
    height: 1136,
    alt: "Latte con espuma en la barra de mármol.",
    caption: "Latte",
  },
  {
    src: "images/cuadro-teckel.jpg",
    width: 1000,
    height: 1333,
    alt: "Cuadro de un teckel en la pared del local, junto a una figura del perro.",
    caption: "El teckel",
  },
  {
    src: "images/terraza-acera.webp",
    width: 580,
    height: 327,
    alt: "Mesas y sombrillas en la acera de la Alameda.",
    caption: "En la acera",
  },
] as const;

export const media = {
  logo: "images/logo.jpg",
  logoWidth: 350,
  logoHeight: 381,
  fachada: "images/fachada-maps.jpg",
  fachadaWidth: 1000,
  fachadaHeight: 1333,
  heroPoster: "images/flatlay.jpg",
  heroPosterWidth: 1080,
  heroPosterHeight: 1920,
};

export function cafeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    alternateName: ["Pepe's", "Cafetería Pepe's"],
    description:
      "Cafetería, cervecería y selección de vinos en la Alameda de Alcoi (Alcoy).",
    url: pageUrl(),
    image: [
      absolute(media.fachada),
      absolute("images/interior-bici.jpg"),
      absolute("images/terraza-desayuno.jpg"),
      absolute(media.heroPoster),
    ],
    telephone: site.phoneTel,
    email: site.email,
    servesCuisine: ["Café", "Desayunos", "Bocadillos", "Cerveza", "Vinos"],
    hasMenu: pageUrl("/carta"),
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [site.social.instagram.url, site.social.facebook.url],
    inLanguage: "es",
  };
}

export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Carta de ${site.name}`,
    url: pageUrl("/carta"),
    inLanguage: "es",
    hasMenuSection: menu.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      description: section.intro,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.text,
      })),
    })),
  };
}
