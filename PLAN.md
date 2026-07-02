# Plan de trabajo — Portfolio Gimena Coradello

Snapshot del estado del proyecto y próximos pasos para retomar.

---

## Estado actual

### Archivos del sitio
- `index.html` — Portfolio principal (single page)
- `style.css` — Design system + tema dark
- `app.js` — Theme toggle, smooth scroll, reveal, lightbox, mobile menu
- `preview.html` — Página de selección de fotos (228 thumbs con checkboxes)
- `composite/GI.pdf` — Composite oficial de Gimena
- `Design.md` — Design system tokens
- `projectbrief.md` — Brief de Stitch
- `vercel.json` — Config deploy Vercel (cache + security headers)
- `.gitignore` — Excluye model/ raw, webp viejos, screenshots de preview

### Fotos
- `img/model/` (367 MB — NO en repo, ignorado por .gitignore) — originales
- `img/sessions/` (34 MB) — fotos optimizadas a webp 1600px q82
  - `date-ross/` 78 fotos
  - `full-contrast/` 27 fotos
  - `magazine/` 29 fotos
  - `retrato/` 53 fotos
  - `tbn/` 18 fotos
  - `pasarela/` 8 fotos (Vexa Gaia + Mer Evequoz)
  - `composite-extra/` 15 fotos (polaroids DSC sueltas)

### Datos de Gimena (fuente: composite/GI.pdf)
```
ALTURA: 1.60    PECHO: 79    CINTURA: 63    CADERA: 89
OJOS: Marrones  CALZADO: 38  CABELLO: Castaño  PIEL: Trigueña
```
Contacto:
- WhatsApp: `+54 9 2477 34-7673` → `wa.me/5492477347673`
- Instagram: `@gimecoradello` (sin underscore, confirmado)
- Email: `gimecoradello@gmail.com`

### Selección de fotos YA integrada en index.html
- **Date Ross** (6): 09, 12, 16, 17, 25, 26
- **Magazine Rock Lights** (6): 03, 04, 06, 08, 15, 17
- **Retrato Femenino** (9): 12, 14, 23, 32, 33, 39, 45, 51, 53
- **TBN Club** (6): 01, 03, 04, 07, 10, 12
- **Pasarela Vexa Gaia** (3): 02, 03, 04
- **Total:** 30 fotos en 5 sesiones

### Sesiones NO integradas (para futuro)
- **Full Contrast 2025** (27 fotos en `img/sessions/full-contrast/`) — la usuaria no las marcó porque no se renderizaron en el preview (estaban con `loading="lazy"` y el screenshot fullPage no las levantó)
- **Composite / Polaroids** (15 fotos en `img/sessions/composite-extra/`) — mismo motivo

---

## Decisiones de diseño tomadas

1. **Stack:** HTML + CSS + JS plano
2. **Galería:** bloques por sesión numerados (no masonry)
3. **Estilo:** Neo-Pop Editorial con toggle dark (no light/dark separados como en el brief, sino dual-theme)
4. **Idioma:** Español (Argentina neutro)
5. **Contacto:** WhatsApp + IG + Email (sin formulario)
6. **Deploy:** Vercel (no Netlify)
7. **Tipografía:** Playfair Display (serif) + Hanken Grotesk (sans)
8. **Paleta:** light `#f9f9f9` + dark `#0a0a0a` con acentos neón lime `#e0ff4f` y hot pink `#ff3366`
9. **Shapes:** sharp 0px (sin border-radius)
10. **No shadows**, profundidad por z-index y tonal layering

---

## Estructura del index.html actual

1. **Nav sticky** — `GIMENA` logo, links Portfolio/Sesiones/Medidas/Contacto, theme toggle, botón Booking
2. **Hero** — foto full-bleed + título `Gimena Coradello` en serif 84px + bajada + CTAs + marquee `Gimena · Selected Works 2026`
3. **Sobre mí** — cita destacada + 2 columnas
4. **Portfolio / Sesiones** — 5 sesiones numeradas (01-05) con grids de 3/6/9 fotos asimétricos
5. **Campañas & Colaboraciones** — lista grande con hover (fullContrast 2025, harmony 2024, Vexa Gaia, Marie Claire, TBN Club, PH Producción)
6. **Créditos & Press** — 5 links a créditos de photographers (Marie Claire, TBN Club, Luca Canete PH, Vero Russo, Arte y Moda) con hover reveal
7. **Composite** — foto de perfil + grilla 2×4 con datos reales
8. **Contacto** — ¿Trabajamos juntos? + CTAs WhatsApp/IG/Email
9. **Footer** — copyright + links
10. **Lightbox** — fullscreen con ←/→/ESC

---

## Tareas pendientes (orden de prioridad)

### 1. Agregar Full Contrast y Composite/Polaroids (PRIORIDAD ALTA)
**Por qué:** La usuaria no las marcó porque en `/preview.html` el screenshot fullPage no las renderizó. El preview YA está arreglado (cambié `loading="lazy"` → `loading="eager"`). Hay que pedirle a la usuaria que vuelva a `/preview.html`, scrollee hasta esas dos secciones, marque las que quiera, y mande el JSON actualizado.

**Pasos al retomar:**
1. Pedir a la usuaria que abra `preview.html` en el navegador
2. Que scrollee hasta "Full Contrast 2025" y "Composite / Polaroids" (ahora se ven)
3. Que marque y exporte el JSON
4. Agregar al `index.html` dos nuevos `<article class="session">` con esos datos

### 2. Reemplazar fotos del hero (MEDIA)
**Actual:** `img/HERO_foto_.sin_BGpng.webp` (es la foto con fondo transparente, se ve bien)
**Mejora futura:** considerar usar una de las fotos procesadas con fondo, ej. una de las seleccionadas (date-ross-09) como hero full-bleed.

### 3. Deploy a Vercel (MEDIA)
- [ ] Crear cuenta en vercel.com con GitHub
- [ ] Importar repo `Lautaro1393/Portfolio_Gime_Coradello`
- [ ] Vercel detecta sitio estático, no necesita build command
- [ ] Output dir: `.` (raíz)
- [ ] Verificar headers de `vercel.json`
- [ ] Dominio custom: opcional (gimenacoradello.com)

### 4. SEO y Open Graph (BAJA-MEDIA)
- [x] Meta description y OG basic
- [ ] Crear OG image (1200×630) — puede ser un hero export o un polaroid
- [ ] Crear favicon real (.svg con la G serif)
- [ ] Agregar structured data (Person schema para Gimena)
- [ ] Sitemap.xml
- [ ] robots.txt

### 5. Performance final (BAJA)
- [ ] Lazy load en imágenes del index (ya está, no tocar)
- [ ] Preload del hero
- [ ] Verificar Lighthouse > 90 P/A/BP/SEO
- [ ] Probar en mobile 360px y 768px

### 6. Accesibilidad (BAJA — ya está la base)
- [x] Skip link
- [x] ARIA labels
- [x] Focus visible
- [x] prefers-reduced-motion
- [ ] Verificar contraste con tool (WebAIM)
- [ ] Probar con screen reader

### 7. Git (BAJA)
- [ ] `git add -A`
- [ ] `git commit -m "feat: portfolio completo con selección de fotos y theme toggle"`
- [ ] `git push origin main`

---

## Bugs conocidos / cosas a chequear al retomar

1. **El script del `<head>` que setea theme corre antes del CSS** — está bien, pero verifiqué que el primer paint usa el theme correcto
2. **El lightbox de sesión** — funciona con teclado (←/→/ESC) y click en imagen
3. **El reveal on scroll** — actualmente NO se aplica a los items que ya están en viewport al cargar, solo a los de abajo (mejor UX, antes había flash)
4. **Marquee duplicado** — está con CSS animation infinite, dura 40s. Respeta `prefers-reduced-motion`
5. **Mobile menu** — burger animado, abre/colapsa, oculta al click en link

---

## Comandos útiles

```bash
# Regenerar fotos optimizadas si se agregan más
bash /tmp/opencode/process-photos.sh

# Ver preview en browser
open file:///home/lautaro1393/Code/Portfolio_Gime_Coradello/preview.html

# Ver portfolio
open file:///home/lautaro1393/Code/Portfolio_Gime_Coradello/index.html

# Verificar JS
node --check app.js
```

---

## Próxima sesión — qué hacer primero

1. **Decirle a la usuaria** que las miniaturas de Full Contrast y Composite ahora se ven en `/preview.html` (pedirle que scrollee)
2. Cuando llegue el JSON actualizado → agregar 2 secciones nuevas al index
3. Hacer el primer commit y push
4. (Opcional) Setup Vercel
5. (Opcional) OG image y favicon
