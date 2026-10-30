/**
 * NAP y contenidos editables.
 * Solo datos públicos del brief (30 oct 2026). No añadir precios ni nombres del equipo.
 */

const base = import.meta.env.BASE_URL;

export const origin = "https://xlu1s.github.io";

export function href(path = ""): string {
  if (path.startsWith("#")) return `${base}${path}`;
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${base}${clean}/` : base;
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
    n: "01",
    name: "Cafés",
    text: "Espresso, café con leche y latte art. Es de lo que más se habla en las reseñas.",
  },
  {
    n: "02",
    name: "Desayunos y tostadas",
    text: "Desayunos y tostadas con pan crujiente y buen aceite.",
  },
  {
    n: "03",
    name: "Dulces",
    text: "Coca, bizcocho y tarta.",
    pending: "El tipo de coca, y si es de obrador propio, está por confirmar.",
  },
  {
    n: "04",
    name: "Bocadillos y tapas",
    text: "Bocadillos —también para cenar— y tapas. Salen mucho en las reseñas.",
  },
  {
    n: "05",
    name: "Cañas y cerveza",
    text: "Cañas por la tarde. Las reseñas cuentan que la terraza se llena.",
  },
  {
    n: "06",
    name: "Vinos y copas",
    text: "Selección de vinos, copas y aperitivo, como dicen en su Facebook.",
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
    src: "images/barra-tazas.jpg",
    width: 1080,
    height: 810,
    alt: "Tres tazas de rayas verdes, naranjas y azules en la barra de mármol, con la cafetera al fondo.",
    caption: "La barra",
  },
  {
    src: "images/flatlay.jpg",
    width: 1080,
    height: 1920,
    alt: "Cuatro tazas vistas desde arriba: grano, café molido, espresso y un latte con corazón.",
    caption: "De grano a taza",
  },
] as const;

export const media = {
  logo: "images/logo.jpg",
  logoWidth: 350,
  logoHeight: 381,
  fachada: "images/fachada.webp",
  fachadaWidth: 375,
  fachadaHeight: 500,
  heroVideo: "videos/hero-cup.mp4",
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
      absolute(media.heroPoster),
      absolute("images/barra-tazas.jpg"),
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
    hasMenuSection: menu.map((item) => ({
      "@type": "MenuSection",
      name: item.name,
      description: item.text,
    })),
  };
}
