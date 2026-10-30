# Pepe's Coffee & Co.

Demo estática de la primera web de **Pepe's Coffee & Co.**, cafetería, cervecería y selección de vinos en la Alameda de Alcoy / Alcoi. Hecha con [Astro](https://astro.build), en castellano, solo con datos públicos (brief del 30 oct 2026).

La marca es **Pepe's** (una p). El repo se llama `web-peppes` a propósito.

## Verla en local

```bash
npm ci
npm run dev
```

- Inicio: http://127.0.0.1:4321/web-peppes/
- Carta: http://127.0.0.1:4321/web-peppes/carta/
- Ubicación: http://127.0.0.1:4321/web-peppes/#donde
- Aviso legal, privacidad y cookies: `/web-peppes/aviso-legal/`, `/privacidad/`, `/cookies/`

Build de producción:

```bash
npm ci && npm run build
npm run preview
```

La preview usa el mismo `base` (`/web-peppes`).

## Dónde se edita el NAP

Nombre, dirección, teléfono, email, horario, redes, categorías de la carta y reseñas están en [`src/data/site.ts`](src/data/site.ts). El teléfono publicado es el fijo **865 71 47 91**.

## Qué no está, a propósito

- **WhatsApp.** El 865 es un fijo. No hay botón de WhatsApp hasta que el local confirme un móvil.
- **Precios.** No hay carta publicada. Solo categorías.
- **Nombres** del propietario y del equipo. En la web se dice «el equipo».
- **Historia del nombre** (quién es Pepe). No está publicada.
- **Halloween** como sección fija. Era un evento de un día.
- **«Abierto ahora».** El horario no está confirmado y una reseña avisó de que el de Google fallaba. Se muestra el bloque más citado (lunes a sábado 8:00–22:00, domingo 8:00–15:00) con **[por confirmar]**.
- Reservas online y panel de administración. Fuera de esta v1.

## Horario

El bloque de la home es el de las fichas de Google (octubre 2026). Facebook publica otro (partido, domingo cerrado). Hay que confirmarlo con el local y actualizar Google a la vez que la web.

## Dominio (propuesta, no registrado)

**pepescoffeeco.es** — coincide con el email `pepescoffeeco@gmail.com`. En la comprobación DNS del brief (30 oct 2026, DNS-over-HTTPS, no es un WHOIS) el dominio no resolvía. Eso no garantiza que esté libre: hay que mirarlo en un registrador antes de comprarlo. Esta demo no lo configura; sigue en `https://xlu1s.github.io/web-peppes/`.

## GitHub Pages

El workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) hace `npm ci` y `npm run build` con Node 22 y publica `dist` al hacer push a `main`. En el repositorio, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`astro.config.mjs` lleva `site: https://xlu1s.github.io` y `base: '/web-peppes'`.

## Descripción del repositorio

La descripción de GitHub venía copiada de otro proyecto («Web para hamburguesería don picapoco alcoy»). Hay que dejarla en algo como: **Pepe's Coffee & Co. — cafetería en Alcoy (Alcoi).** Si el cambio automático no queda aplicado, se edita en la página del repo.
