# 🚀 PORTAFOLIO CAMILO VELÁSQUEZ — ROADMAP DE DESARROLLO (VERSIÓN PRO)

## 🎯 Objetivo

Construir una aplicación web profesional, interactiva y diferenciadora que represente un perfil híbrido entre desarrollo de software y analítica de datos.

---

# 🧭 METODOLOGÍA DE TRABAJO

⚠️ IMPORTANTE:

* NO avanzar a la siguiente fase sin responder las preguntas de validación
* Cada fase debe ser aprobada antes de ejecutar código
* Enfocarse en calidad, no velocidad

---

# 🧩 FASE 0 — DEFINICIÓN FINAL DEL PRODUCTO

## Objetivo

Alinear completamente el concepto antes de diseñar o programar.

## Validar:

* [ ] Mensaje principal del portafolio
* [ ] Diferenciador (doble ambiente)
* [ ] Nivel de interactividad
* [ ] Público objetivo

## Preguntas obligatorias:

1. ¿Quieres que el cambio entre ambientes (Dev / Data) sea:

   * A) Scroll
   * B) Botón toggle
   * C) Experiencia tipo “viaje” (animación completa)

2. ¿Qué pesa más en tu perfil?

   * A) Desarrollo
   * B) Analítica
   * C) Balance 50/50

3. ¿Quieres que la IA (chat) sea:

   * A) Flotante simple
   * B) Parte central de la experiencia

---

# 🎨 FASE 1 — DISEÑO UX/UI (WIREFRAME)

## Objetivo

Definir cómo se verá y se sentirá la experiencia.

## Entregables:

* Estructura de navegación
* Wireframe de:

  * Home
  * Ambiente Dev
  * Ambiente Data
* Flujo de usuario

## Integración UX clave (GitHub):

* Botón principal en Hero:
  👉 “Ver mis proyectos”
* Botón secundario:
  👉 “Explorar código”
* Botones por proyecto:
  👉 “Ver repositorio”
* Botón flotante persistente (ícono GitHub)

⚠️ IMPORTANTE:
No saturar la interfaz. Distribuir estratégicamente.

## Preguntas obligatorias:

1. ¿Prefieres navegación:

   * A) Scroll vertical
   * B) Secciones tipo app

2. ¿Quieres una animación inicial (intro)?

   * Sí / No

3. ¿El botón principal del Hero debe decir:

   * A) Ver mis proyectos
   * B) Explorar mi código
   * C) Otro (definir)

---

# ⚙️ FASE 2 — ARQUITECTURA DEL PROYECTO

## Objetivo

Definir estructura técnica antes de programar.

## Stack:

* Frontend: React
* Animaciones: Framer Motion
* Backend: Node.js (opcional)
* Hosting: Vercel

## Integración GitHub:

* Enlaces directos a perfil
* Preparación para consumo de API de GitHub (opcional)

## Estructura base:

/src
/components
/buttons
GithubButton.jsx
GithubIconButton.jsx
FloatingGithub.jsx
/pages
/hooks
/services
/styles
/i18n

## Preguntas obligatorias:

1. ¿Quieres consumir la API de GitHub?

   * Sí (repos dinámicos)
   * No (links manuales)

2. ¿Quieres backend desde el inicio?

   * Sí
   * No

---

# 💻 FASE 3 — DESARROLLO FRONTEND

## Objetivo

Construir la interfaz principal.

## Componentes clave:

* Navbar bilingüe
* Hero section
* Switch Dev/Data
* Secciones dinámicas
* Chatbot UI

## 🔘 Implementación de botones GitHub

### 1. Botón principal (Hero)

* CTA principal
* Animación hover
* Redirección al perfil

### 2. Botón secundario

* Estilo outline elegante
* Orientado a reclutadores técnicos

### 3. Botones por proyecto

* Uno por cada proyecto
* Acceso directo a repositorio

### 4. Botón flotante

* Ícono minimalista
* Siempre visible
* UX elegante

## Requisitos:

* Responsive
* Animaciones fluidas
* Microinteracciones en botones

## Preguntas obligatorias:

1. ¿Quieres usar:

   * CSS
   * Tailwind
   * Styled Components

2. Nivel de animación:

   * Medio
   * Alto (cinematográfico)

3. ¿Quieres efecto especial en botones?

   * Glow
   * Elevación
   * Ripple

---

# 🌐 FASE 4 — INTERNACIONALIZACIÓN

## Objetivo

Soporte bilingüe dinámico.

## Implementación:

* i18n (react-i18next)
* Traducción de botones (incluidos los de GitHub)
* Cambio dinámico sin recarga

## Preguntas obligatorias:

1. Idioma por defecto:

   * Español
   * Inglés

---

# 🤖 FASE 5 — INTEGRACIÓN DE IA

## Objetivo

Agregar chatbot interactivo.

## Funcionalidades:

* Explicar proyectos (puede redirigir a GitHub)
* Responder sobre tecnologías
* Guiar al usuario dentro del portafolio

## Preguntas obligatorias:

1. ¿El bot debe recomendar proyectos con links a GitHub?

   * Sí / No

---

# 📊 FASE 6 — INTEGRACIÓN POWER BI

## Objetivo

Mostrar dashboards interactivos.

## Preguntas obligatorias:

1. ¿Quieres relacionar dashboards con repositorios?

   * Sí (más pro)
   * No

---

# 🔐 FASE 7 — SEGURIDAD

## Objetivo

Aplicar buenas prácticas.

## Implementación:

* Protección de enlaces externos
* Uso de rel="noopener noreferrer"
* Manejo seguro de APIs

---

# 🚀 FASE 8 — DEPLOY

## Objetivo

Publicar el proyecto.

## Plataforma:

* Vercel

## Implementación:

* Optimización
* SEO
* Performance

---

# 🧠 FASE 9 — MEJORAS AVANZADAS

## GitHub PRO:

* Mostrar repos automáticamente
* Contador de proyectos
* Últimos commits
* Integración visual con proyectos

---

# ✅ RESULTADO FINAL

Una web:

* Profesional
* Diferente
* Interactiva
* Con integración real de GitHub
* Lista para reclutadores

---

# ⚠️ REGLA FINAL

No avanzar sin validar cada fase.

---
