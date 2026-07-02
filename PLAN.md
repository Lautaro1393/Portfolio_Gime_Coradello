# Plan de trabajo — Portfolio Gimena Coradello

Snapshot del estado del proyecto y próximos pasos para retomar.

Última actualización: después del commit `04f2f45 fix: hero cara visible + hover sombra stitch + lime light legible`.

---

## Estado actual (post-commit db1d603)

### Archivos en el repo
- `index.html` — Portfolio principal (single page, 7 sesiones)
- `style.css` — Design system + dual theme (light + dark)
- `app.js` — Theme toggle, smooth scroll, reveal, lightbox, mobile menu
- `preview.html` — Página de selección de fotos (228 thumbs con checkboxes)
- `composite/GI.pdf` — Composite oficial de Gimena
- `Design.md` — Design system tokens
- `projectbrief.md` — Brief de Stitch
- `vercel.json` — Config deploy Vercel (cache + security headers)
- `links.md` — Links a photographers y press
- `PLAN.md` — Este archivo
- `.gitignore` — Excluye `img/model/`, capturas de preview, etc.
- `node_modules/`, `package.json` — Trackeados por commits anteriores (no los tocamos)

### Fotos en el repo (`img/sessions/`, 34 MB total)
| Carpeta | Cantidad |
|---|---|
| `date-ross/` | 78 |
| `full-contrast/` | 27 |
| `magazine/` | 29 |
| `retrato/` | 53 |
| `tbn/` | 18 |
| `pasarela/` | 8 (Vexa Gaia + Mer Evequoz) |
| `composite-extra/` | 15 (polaroids DSC sueltas) |
| **Total** | **228 fotos webp** |

`img/model/` (367 MB, originales) NO está en el repo, ignorado.

### Datos de Gimena (fuente: composite/GI.pdf)
```
ALTURA: 1.60    PECHO: 79    CINTURA: 63    CADERA: 89
OJOS: Marrones  CALZADO: 38  CABELLO: Castaño  PIEL: Trigueña
```
Contacto:
- WhatsApp: `+54 9 2477 34-7673` → `wa.me/5492477347673`
- Instagram: `@gimecoradello` (sin underscore, confirmado)
- Email: `gimecoradello@gmail.com`

### Estructura del index.html actual

1. **Nav sticky** — `GIMENA` logo, links Portfolio/Sesiones/Medidas/Contacto, theme toggle (sol/luna), botón Booking
2. **Hero** — foto a la izquierda + título `Gimena Coradello` en serif 84px + bajada + CTAs + marquee
3. **Sobre mí** — cita destacada + 2 columnas
4. **Portfolio / Sesiones** — 7 sesiones numeradas con grids de 3/6/9 fotos
5. **Campañas & Colaboraciones** — lista grande con hover
6. **Créditos & Press** — 5 links a photographers
7. **Composite** — foto de perfil + grilla 2×4 con datos
8. **Contacto** — ¿Trabajamos juntos? + CTAs
9. **Footer** — copyright + links
10. **Lightbox** — fullscreen con teclado

### Orden actual de las 7 sesiones
| # | Sesión | Fotos |
|---|---|---|
| 01 | Full Contrast 2025 | 9 |
| 02 | Magazine Rock Lights | 6 |
| 03 | Retrato Femenino | 9 |
| 04 | TBN Club | 6 |
| 05 | Pasarela · Vexa Gaia | 3 |
| 06 | Date Ross | 6 |
| 07 | Composite / Casting | 6 |
| | **Total** | **45 fotos** |

### Decisiones de diseño tomadas
1. **Stack:** HTML + CSS + JS plano
2. **Galería:** bloques por sesión numerados
3. **Estilo:** dual-theme (light `#f9f9f9` + dark `#0a0a0a`)
4. **Idioma:** Español (Argentina neutro)
5. **Contacto:** WhatsApp + IG + Email
6. **Deploy:** Vercel
7. **Tipografía:** Playfair Display (serif) + Hanken Grotesk (sans)
8. **Paleta:** neón lime `#e0ff4f` + hot pink `#ff3366` como acentos
9. **Shapes:** sharp 0px
10. **No shadows**, profundidad por z-index y tonal layering

---

## Cambios pendientes solicitados por el usuario

Pedidos en orden de mención (ordené la prioridad según criterio técnico):

### ✅ PRIORIDAD 1 — Hero más imponente + paleta más colorida (RESUELTO)

**Implementado en commits `8d9d89b` y `04f2f45`:**
- Dark como default, light como override
- Hero full-bleed 100vh con `full-contrast-04` (foto colorida, Gimena con remera verde contra pared rosa+verde)
- Texto superpuesto a la izquierda con overlay gradient
- `object-position: center 28%` + padding-top extra para que la cara no quede tapada
- Tipografía: "MODELO INDEPENDIENTE · BUENOS AIRES" en lime/serif, "Gimena Coradello" en serif enorme, bajada
- CTAs: lime sólido + ghost light
- Zoom cinematográfico sutil (animación 14s)
- Números de sesión en lime outlined (filled en light)
- Block-shadow Stitch en fotos: 8px lime/pink, crece a 12px en hover + foto se desplaza
- Hover en logo GIMENA: lime en dark / pink en light
- Light theme con `--secondary: #3d5c00` y `--tertiary: #d60043` para contraste AA

---

### 🟡 PRIORIDAD 2 — Cambiar foto del hero (sub-cambio del #1)

**Contexto:** Este pedido quedó implícito dentro del cambio #1. La foto actual (`date-ross-09`) es buena pero no es la más imponente para el hero. El usuario quiere una que "se vea más grande" — eso se resuelve con el rediseño del layout (full-bleed), no solo cambiando la foto.

**Si el rediseño del hero (#1) ya implica elegir una nueva imagen, este punto se resuelve junto.**

---

### 🟢 PRIORIDAD 3 — Deploy a Vercel (no bloqueado por el resto)

**Por qué:** No tiene dependencias técnicas con los cambios visuales. Es un paso operativo.

- [ ] Crear cuenta en vercel.com con GitHub
- [ ] Importar repo `Lautaro1393/Portfolio_Gime_Coradello`
- [ ] Vercel detecta sitio estático, no necesita build command
- [ ] Output dir: `.` (raíz)
- [ ] Verificar headers de `vercel.json`
- [ ] Dominio custom: opcional (gimenacoradello.com)

---

### 🟢 PRIORIDAD 4 — SEO y Open Graph

- [x] Meta description y OG basic
- [ ] Crear OG image (1200×630) — usar una de las fotos del portfolio
- [ ] Crear favicon real (.svg con la G serif)
- [ ] Agregar structured data (Person schema para Gimena)
- [ ] Sitemap.xml
- [ ] robots.txt

---

### 🟢 PRIORIDAD 5 — Performance final

- [ ] Verificar Lighthouse > 90 P/A/BP/SEO
- [ ] Preload del hero
- [ ] Probar en mobile 360px y 768px

---

### 🟢 PRIORIDAD 6 — Accesibilidad

- [x] Skip link
- [x] ARIA labels
- [x] Focus visible
- [x] prefers-reduced-motion
- [ ] Verificar contraste con tool (WebAIM)
- [ ] Probar con screen reader

---

## Cómo retomar

1. Decidir los tradeoffs del cambio #1 (default theme, nivel de color, layout del hero)
2. Yo ejecuto el rediseño
3. Validamos en Chrome (light + dark + mobile)
4. Commit + push
5. Deploy a Vercel

---

## Bugs conocidos / cosas a chequear

1. **El script del `<head>` que setea theme corre antes del CSS** — funciona, anti-flash
2. **El lightbox de sesión** — funciona con teclado (←/→/ESC) y click
3. **Reveal on scroll** — solo aplica a items debajo del fold (mejor UX, no flash)
4. **Marquee duplicado** — CSS animation infinite, 40s, respeta `prefers-reduced-motion`
5. **Mobile menu** — burger animado, abre/colapsa
