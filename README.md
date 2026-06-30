# Portafolio de Camilo Velásquez

Portafolio profesional desarrollado con React + Vite en el frontend y Node.js + Express en el backend. El proyecto incluye una presentación personal, secciones de proyectos, integración con GitHub y un chatbot interactivo.

## Descripción del proyecto

Este portafolio está pensado para mostrar:

- Perfil profesional y habilidades
- Proyectos de desarrollo full stack
- Repositorios públicos de GitHub
- Un chatbot de ayuda en español e inglés
- Diseño responsive y con modo claro/oscuro

## Tecnologías utilizadas

### Frontend
- React
- React DOM
- Vite
- Bootstrap
- React Bootstrap
- Framer Motion
- i18next
- Sass

### Backend
- Node.js
- Express
- CORS
- dotenv

## Estructura del proyecto

```text
PORTAFOLIO/
├── client/                  # Aplicación frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── i18n/            # Traducciones
│   │   ├── services/        # Servicios de API
│   │   └── styles/          # Estilos y temas
│   ├── package.json
│   └── tsconfig.json
├── server/                  # Servidor backend
│   ├── routes/              # Rutas API
│   ├── index.js             # Punto de entrada del servidor
│   └── package.json
├── package.json             # Scripts principales del proyecto
└── README.md
```

## Requisitos previos

Asegúrate de tener instalado:

- Node.js 18 o superior
- npm 9 o superior

## Instalación

Desde la raíz del proyecto, ejecuta:

```bash
npm install
npm run install:all
```

Esto instalará las dependencias del proyecto raíz, del frontend y del backend.

Si al ejecutar el frontend aparece un error indicando que faltan `react` o `react-dom`, instala las dependencias del cliente con:

```bash
cd client
npm install react react-dom
```

## Variables de entorno

El backend utiliza un archivo `.env` dentro de la carpeta `server`.

Ejemplo:

```env
PORT=3001
CLIENT_URL=http://localhost:5173
GITHUB_USERNAME=kamilovelasquez
GITHUB_TOKEN=
```

### Descripción de variables

- `PORT`: Puerto donde escucha el backend
- `CLIENT_URL`: URL permitida para peticiones CORS desde el frontend
- `GITHUB_USERNAME`: Usuario de GitHub para consultar repositorios
- `GITHUB_TOKEN`: Token opcional para aumentar límites de la API de GitHub

## Ejecución del proyecto

### Ejecutar frontend y backend juntos

Desde la raíz:

```bash
npm run dev
```

Esto iniciará:

- Frontend en http://localhost:5173
- Backend en http://localhost:3001

### Ejecutar por separado

#### Frontend

```bash
cd client
npm run dev
```

#### Backend

```bash
cd server
npm run dev
```

## Scripts disponibles

### Desde la raíz

```bash
npm run dev
npm run build
npm run start
npm run install:all
```

### Desde `client`

```bash
npm run dev
npm run build
npm run preview
```

### Desde `server`

```bash
npm run dev
npm run start
```

## Funcionalidades principales

- Animación de bienvenida
- Navegación con secciones del portafolio
- Integración con GitHub para mostrar repositorios
- Chatbot con respuestas predefinidas en español e inglés
- Diseño adaptable a distintos dispositivos

## Endpoints del backend

- `GET /api/health`: Verifica que el backend esté activo
- `GET /api/github/repos`: Obtiene repositorios públicos del usuario
- `GET /api/github/profile`: Obtiene datos básicos del perfil de GitHub
- `POST /api/chat`: Envía mensajes al chatbot

## Notas importantes

- Si el frontend no logra comunicarse con el backend, verifica que el servidor esté activo en el puerto `3001`.
- Si ves un error de React faltante en el frontend, asegúrate de haber instalado `react` y `react-dom` en la carpeta `client`.
- En Windows PowerShell, puede ser necesario permitir scripts de ejecución para npm si aparece un error relacionado con políticas de ejecución.

## Autor

Camilo Velásquez
