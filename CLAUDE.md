# Web Municipal — José C. Paz

## Propósito del proyecto

Sitio web municipal orientado al **vecino** (no institucional). El objetivo es que los vecinos consulten rápidamente servicios de salud, oficinas de trámites, transporte y espacios verdes del municipio de José C. Paz, Provincia de Buenos Aires, Argentina.

---

## Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | ^15.3.2 | Framework (App Router, SSG) |
| TypeScript | ^5 | Tipado estricto |
| Tailwind CSS | ^3.4 | Estilos |
| lucide-react | latest | Íconos |
| clsx + tailwind-merge | latest | Clases condicionales (`cn()`) |

**Sin base de datos.** Todos los datos son archivos JSON estáticos en `src/data/`.  
**Sin shadcn/ui** instalado realmente — se usan primitivos de Radix UI directamente donde hace falta.

El proyecto **no se creó con `create-next-app`** porque la carpeta tiene un espacio en el nombre (`web municipio`). Todos los archivos de configuración fueron creados manualmente.

---

## Paleta de colores (Tailwind)

```
primary:   #1a5276  (azul municipal, escala 50–900)
secondary: #1e8449  (verde, escala 50–900)
```

Usar `text-primary-600`, `bg-primary-50`, etc.

---

## Estructura de archivos

```
src/
├── app/
│   ├── layout.tsx              ← Navbar + Footer globales, fuente Inter
│   ├── page.tsx                ← Home (hero + 6 accesos rápidos)
│   ├── globals.css             ← Solo 3 directivas Tailwind (@tailwind base/components/utilities)
│   ├── salud/
│   │   ├── page.tsx            ← Listado con filtros (Server Component + Suspense)
│   │   └── [id]/page.tsx       ← Detalle de efector (SSG via generateStaticParams)
│   ├── oficinas/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── tramites/page.tsx
│   ├── transporte/page.tsx
│   └── espacios-verdes/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← "use client", sticky, hamburger móvil (estado local, sin Sheet)
│   │   ├── Footer.tsx
│   │   └── PageHeader.tsx      ← Header reutilizable con color, icono y subtítulo
│   ├── salud/
│   │   ├── FacilityCard.tsx    ← Card estilo inmobiliaria (foto grande, teléfono grande, horario)
│   │   ├── FacilityFilters.tsx ← "use client", filtros via useSearchParams (URL-driven)
│   │   └── EmergencyBadge.tsx
│   ├── oficinas/
│   │   └── OfficeCard.tsx
│   ├── tramites/
│   │   └── TramitesFilters.tsx ← "use client"
│   └── shared/
│       ├── HoursDisplay.tsx    ← Tabla de 7 días, resalta hoy
│       ├── PhoneLink.tsx       ← <a href="tel:"> con formato
│       └── MapLink.tsx
│
├── lib/
│   ├── utils.ts                ← cn(), getTodaySchedule(), FACILITY_TYPE_LABELS, etc.
│   └── data/
│       ├── salud.ts            ← getAllFacilities(), getFacilityById(), getAllZones(), getAllSpecialties()
│       ├── oficinas.ts
│       ├── tramites.ts
│       ├── transporte.ts
│       └── espacios.ts
│
├── data/                       ← JSONs estáticos (fuente de verdad)
│   ├── salud.json
│   ├── oficinas.json
│   ├── tramites.json
│   ├── transporte.json
│   └── espacios.json
│
└── types/
    └── index.ts                ← Todas las interfaces TypeScript del proyecto
```

---

## Tipos TypeScript (src/types/index.ts)

```typescript
// Días y horarios
type DayOfWeek = "lunes"|"martes"|"miercoles"|"jueves"|"viernes"|"sabado"|"domingo"
interface DaySchedule { day: DayOfWeek; open: string; close: string }

// Salud
type FacilityType = "hospital_publico"|"hospital_privado"|"centro_de_salud"|"clinica"
interface HealthFacility {
  id: string; name: string; type: FacilityType
  address: string; zone: string
  phones: string[]; emergencyPhone?: string
  hasEmergencyRoom: boolean
  hours: DaySchedule[]
  specialties: string[]; services: string[]
  mapLink: string; coordinates?: { lat: number; lng: number }
  photo?: string; photos?: string[]
  website?: string; notes?: string; comoLlegar?: string[]
}

// Oficinas
interface MunicipalOffice {
  id: string; name: string; address: string; zone: string
  phone: string; hours: DaySchedule[]; tramites: string[]
  mapLink: string; notes?: string
}

// Trámites online
type TramiteCategory = "documentacion"|"habilitaciones"|"beneficios_sociales"|"infraestructura"|"salud"|"educacion"|"transporte"
interface OnlineTramite {
  id: string; title: string; category: TramiteCategory
  description: string; requiredDocuments: string[]
  link: string; estimatedTime: string; isNew?: boolean
}

// Transporte
interface BusLine {
  id: string; lineNumber: string; operator: string
  routeDescription: string; keyStops: string[]
  frequency: string; schedule: { weekdays: string; saturday: string; sunday: string }
  mapLink?: string
}

// Espacios verdes
type EspacioType = "parque"|"plaza"|"polideportivo"|"espacio_deportivo"|"reserva"
interface EspacioVerde {
  id: string; name: string; type: EspacioType
  address: string; zone: string; amenities: string[]
  hours?: string; mapLink: string; area?: string
}
```

---

## Estado actual de los datos

### `src/data/salud.json` — ⚠️ DATOS REALES (solo 2 efectores)
Los placeholders fueron eliminados. Solo hay datos reales:

1. **Hospital Dr. Alberto Duhau** (`hospital-duhau-jose-c-paz`)  
   - Tipo: `hospital_privado` | Guardia 24h  
   - Dirección: Gral. Lavalle 2066, José C. Paz  
   - Teléfonos: (02320) 43-1951 / (011) 15-2120-1600  
   - Website: https://www.hospitalduhau.com.ar  
   - Foto: www.hospitalduhau.com.ar (HTTP)  
   - 13 especialidades, 8 servicios, 5 líneas de transporte

2. **Hospital Oftalmológico Municipal "Juan Domingo Perón"** (`hospital-oftalmologico-jose-c-paz`)  
   - Tipo: `hospital_publico` | Guardia 24h  
   - Dirección: Av. Hipólito Yrigoyen 3028 esq. Artigas, José C. Paz  
   - Teléfonos: (02320) 44-5449 / (02320) 44-5983  
   - Foto: intendenciasba.com.ar (panorámica del edificio, HTTPS)  
   - 8 especialidades oftalmológicas, 14 servicios, 5 líneas de transporte

**Para agregar más efectores:** copiar la estructura de cualquiera de los dos en `salud.json` y agregar el dominio de las fotos a `next.config.ts` si es externo.

### `src/data/oficinas.json` — datos de ejemplo (6 oficinas)
### `src/data/tramites.json` — datos de ejemplo (12 trámites)
### `src/data/transporte.json` — datos de ejemplo (6 líneas)
### `src/data/espacios.json` — datos de ejemplo (7 espacios)

---

## Decisiones de arquitectura importantes

### Filtros en URL (no en estado)
`/salud` y `/tramites` usan `searchParams` de Next.js para filtrar en servidor. Los Client Components (`FacilityFilters`, `TramitesFilters`) leen/escriben la URL con `useSearchParams` + `useRouter`. Los filtros son compartibles como links.

### Server Components por defecto
Solo son Client Components los que usan hooks o eventos:
- `Navbar.tsx` (estado del menú móvil)
- `FacilityFilters.tsx` y `TramitesFilters.tsx` (useSearchParams)

### FacilityCard — div wrapper, no Link
El outer wrapper de la card es `<div>`, **no `<Link>`**, porque la card contiene `<a href="tel:">` para los teléfonos. Anidar `<a>` dentro de `<Link>` es HTML inválido. El botón "VER MÁS" al final sí es un `<Link>`.

### Google Maps embed (sin API key)
```
https://maps.google.com/maps?q=DIRECCIÓN,ZONA,Buenos+Aires,Argentina&hl=es&z=16&output=embed
```
Se usa siempre la dirección textual (NO las coordenadas), porque las coordenadas del JSON pueden estar desactualizadas.

### Imágenes externas — `<img>` puro, no `<Image>` de Next.js
Las fotos de hospitales usan `<img>` (no el componente `<Image>` de Next.js) para evitar la restricción de `remotePatterns`. `next.config.ts` tiene configurados los dominios de Duhau e Intendencias BA por si se necesita el componente `<Image>` en el futuro.

---

## Errores conocidos y sus soluciones

### EPERM: operation not permitted (.next\trace) — Windows
Ocurre cuando un proceso `node` anterior sigue corriendo y bloquea el caché.
```powershell
Get-Process node | Stop-Process -Force
Remove-Item -Recurse -Force .next
npm run dev
```

### Puerto 3000 en uso
```powershell
netstat -ano | findstr :3000
Stop-Process -Id <PID> -Force
```

### TypeScript: "Set can only be iterated with --downlevelIteration"
En los archivos `lib/data/*.ts`, usar `Array.from(new Set(...))` en lugar de `[...new Set(...)]`.

### CSS: "@apply border-border" — clase inexistente
`globals.css` solo tiene las 3 directivas de Tailwind. No usar `@apply` con clases de shadcn/ui que no estén definidas.

### basePath y NEXT_PUBLIC_BASE_PATH — deben ser siempre consistentes
`next.config.ts` tiene `basePath` Y `NEXT_PUBLIC_BASE_PATH` ambos condicionales a `NODE_ENV === "production"`:
```ts
basePath: process.env.NODE_ENV === "production" ? "/web-municipio-jcpaz" : "",
env: { NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/web-municipio-jcpaz" : "" }
```
**Nunca poner `basePath` fijo y `NEXT_PUBLIC_BASE_PATH` condicional** (o viceversa): en dev, las imágenes locales usan `${NEXT_PUBLIC_BASE_PATH}/foto.jpg` y si `basePath` está activo pero la variable es vacía, Next.js sirve los archivos estáticos bajo `/web-municipio-jcpaz/salud/...` pero la `<img>` busca en `/salud/...` → imagen rota.

---

## Comandos

```bash
npm run dev      # Desarrollo en localhost:3000
npm run build    # Build de producción (verifica errores TS + genera 17 páginas estáticas)
npx tsc --noEmit # Solo verificar TypeScript sin compilar
```

### Build esperado (17 páginas, 0 errores)
```
/                        ○ Static
/salud                   ƒ Dynamic (filtros via searchParams)
/salud/[id]              ● SSG (2 rutas: hospital-duhau, hospital-oftalmologico)
/oficinas                ○ Static
/oficinas/[id]           ● SSG (6 rutas)
/tramites                ƒ Dynamic
/transporte              ○ Static
/espacios-verdes         ○ Static
```

---

## Layout de página de detalle (/salud/[id])

```
┌─────────────────────────────────────────┐
│  Hero rojo degradado                    │
│  [← Volver] Foto portada               │
│  Badge tipo | Badge Guardia 24h         │
│  Nombre del hospital                    │
│  📍 Dirección — Zona                   │
└─────────────────────────────────────────┘
┌──────────────┬──────────────────────────┐
│  Contacto    │  Especialidades          │
│  (teléfonos, │  (pills azules)          │
│   guardia,   │                          │
│   dirección) │                          │
└──────────────┴──────────────────────────┘
┌──────────────┬──────────────────────────┐
│  Horario de  │  Servicios disponibles   │
│  atención    │  (lista con bullets)     │
│  (tabla 7d)  │                          │
└──────────────┴──────────────────────────┘
┌─────────────────────────────────────────┐
│  Google Maps embed (ancho completo)     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Cómo llegar en transporte público      │
│  (ítems numerados con badge amarillo)   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Notas (banner amarillo, si hay)        │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Sitio web oficial (botón, si hay)      │
└─────────────────────────────────────────┘
```

---

## Próximos pasos sugeridos

- [ ] Reemplazar datos de ejemplo en `oficinas.json`, `tramites.json`, `transporte.json`, `espacios.json` con datos reales del municipio
- [ ] Agregar más efectores de salud reales (centros de salud CESAC, clínicas)
- [ ] Agregar página de detalle para espacios verdes (`/espacios-verdes/[id]`)
- [ ] SEO: `sitemap.xml` y `robots.txt`
- [ ] Favicon y `opengraph-image` propios del municipio
