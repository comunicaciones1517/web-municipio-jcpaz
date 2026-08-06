# Cómo continuar este proyecto desde otra PC / cuenta

Este archivo es una guía rápida para retomar el trabajo del sitio web municipal
de José C. Paz desde otra computadora. Para el detalle técnico completo
(estructura de carpetas, tipos, decisiones de arquitectura, errores conocidos)
ver [CLAUDE.md](./CLAUDE.md) — este archivo se enfoca en **cuentas, hosting y
estado actual**.

---

## 1. Dónde vive el código

- **Repositorio GitHub:** https://github.com/comunicaciones1517/web-municipio-jcpaz
- **Cuenta de GitHub:** `comunicaciones1517`
- **Rama principal:** `main` (es la única rama; no hay `dev` ni ramas de feature)
- **Remote configurado en este repo local:**
  ```
  origin  https://github.com/comunicaciones1517/web-municipio-jcpaz.git
  ```

### Para clonarlo en la otra PC

```bash
git clone https://github.com/comunicaciones1517/web-municipio-jcpaz.git
cd web-municipio-jcpaz
npm install
npm run dev
```

⚠️ **Importante sobre permisos:** para poder hacer `git push` necesitás estar
autenticado con la cuenta `comunicaciones1517` (o ser colaborador del repo).
Si en la otra PC vas a usar una sesión de Claude Code distinta, iniciá sesión
en GitHub (`gh auth login` o credenciales guardadas) con esa misma cuenta antes
de pushear.

---

## 2. Dónde está publicado (hosting)

- **Sitio en producción:** https://dircomjcp.com.ar
- **Hosting:** GitHub Pages (gratuito), sirviendo el build estático (`next build`
  con `output: "export"`) generado desde este mismo repo
- **URL nativa de GitHub Pages (sin dominio propio):**
  https://comunicaciones1517.github.io/web-municipio-jcpaz
- **DNS / dominio:** `dircomjcp.com.ar` está administrado en **Cloudflare**,
  con un registro que apunta a GitHub Pages. El archivo `public/CNAME` (con el
  contenido `dircomjcp.com.ar`) es lo que le dice a GitHub Pages qué dominio
  propio usar.
- **Deploy:** completamente automático. Cada `git push` a `main` dispara un
  GitHub Action (`.github/workflows/deploy.yml`) que corre `npm run build` y
  publica el resultado en GitHub Pages. No hay que hacer nada manual para
  deployar — con pushear alcanza.
- **Node.js en el workflow:** `node-version: 24` (tiene que coincidir con la
  versión usada para generar `package-lock.json`; si algún día falla el build
  en CI con errores de módulos, revisar esto primero).

---

## 3. Estado actual del proyecto (al 05/08/2026)

Resumen de lo último que se hizo, de más reciente a más antiguo:

- **Home page rediseñada:**
  - Slider (`HeroSlider.tsx`) con 3 diapositivas animadas (transición suave +
    swipe táctil): Salud, Dirección General de Rentas, App Municipal.
  - Sección "¿Qué necesitás?" con 6 cards chicas (Salud, Oficinas,
    Dependencias, Rentas, Ordenanza Fiscal, Calendario Fiscal).
  - App Municipal como card ancha aparte, debajo.
  - Navbar con "Dirección de Comunicaciones" agregado a la izquierda.
- **Sección de Salud desbloqueada al público** (antes tenía un gate de
  mantenimiento `?ver=jcp2026`, ya se sacó — `PreviewGate` fue eliminado).
- **Datos de salud actualizados con información oficial** (PDFs reales de la
  Secretaría de Salud), reemplazando placeholders genéricos:
  - 8 hospitales con horarios, especialidades y secciones desplegables reales.
  - 23 Centros de Atención Primaria (CAPS) con horarios y especialidades
    reales (control de niño sano, obstetricia, salud mental, etc.).
  - Se eliminaron todos los teléfonos `02320` de los efectores de salud
    (confirmados como no funcionales) y se reemplazaron por celulares/WhatsApp
    cuando el PDF los tenía.
  - Se agregó Dirección General de Zoonosis y una barra informativa de
    Libreta Sanitaria.
  - Se eliminó Hospital Duhau (a pedido) y una entrada duplicada de SAME.
- **Nueva guía de trámite:** "Servicio de Sepelio" (Desarrollo Social) en
  `/tramites/servicio-sepelio`.
- **Fix de mapas:** la página de detalle de Oficinas no tenía el mapa de
  Google Maps embebido (solo un link); ahora usa el mismo iframe que Salud y
  Dependencias.
- **Cards de Salud/Dependencias:** ahora la foto también es clickeable para
  entrar al detalle (antes solo el botón "Ver información completa").

### Regla importante para futuras ediciones
Los números de teléfono `02320` de los **efectores de salud** (hospitales y
CAPS) confirmados por el usuario como no funcionales. Si se agregan más datos
desde PDFs oficiales: usar el celular/WhatsApp del PDF si lo tiene, o no poner
teléfono si no lo tiene. Esta regla NO aplica a otras dependencias del
municipio (ej. Servicio de Sepelio sí tiene un 02320 real y funcional).

---

## 4. Archivos locales que NO están en el repositorio

Estas carpetas/archivos existen en esta PC pero **no están versionados en
git** (son material de referencia usado durante las últimas sesiones, PDFs
oficiales que se fueron cargando para actualizar los datos de salud). Si los
necesitás en la otra PC, copialos manualmente (USB, Drive, etc.) — no van a
aparecer con `git clone`:

- `CAPS/` — PDFs de horarios y especialidades de los Centros de Salud
- `HOSPITALES/` — PDFs de cada hospital + capturas de WhatsApp
- `Captura de pantalla 2026-05-22 124122.png`
- `edificios a corregir.xlsx`

También hay cambios sin commitear en `.claude/launch.json` y
`.claude/settings.local.json` (configuración local del entorno de Claude
Code, no afecta el sitio).

---

## 5. Pendientes conocidos

- Reemplazar datos de ejemplo en `oficinas.json`, `tramites.json`,
  `transporte.json`, `espacios.json` con datos reales (siguen con placeholders).
- Agregar página de detalle para espacios verdes (`/espacios-verdes/[id]`).
- SEO: `sitemap.xml` y `robots.txt`.
- Favicon y `opengraph-image` propios del municipio.
- Ts. Obras en tributos todavía no tiene página ni link.
- Botones de Rentas y Digesto en `/tramites/rentas` todavía no tienen links.

---

## 6. Comandos más usados

```bash
npm run dev       # Desarrollo local en localhost:3000
npm run build     # Build de producción (lo mismo que corre el CI)
npx tsc --noEmit  # Chequear TypeScript sin compilar
```

Ver [CLAUDE.md](./CLAUDE.md) para errores conocidos (EPERM en Windows, puerto
3000 ocupado, problemas con `basePath`, etc.) y la estructura completa del
proyecto.
