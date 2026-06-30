import express from 'express';

const router = express.Router();

const responses = {
  es: {
    greeting: [
      '¡Hola! 👋 Soy el asistente virtual de Camilo. Puedo contarte sobre su experiencia, proyectos, tecnología, dashboards y cómo contactarlo.',
      '¡Hola! Soy el asistente de Camilo. Pregúntame sobre su perfil, repositorios o enfoque en análisis de datos.',
    ],
    projects: [
      'Camilo desarrolla proyectos web con React y Node.js, y también trabaja en soluciones de datos con Python y Power BI. Revisa la sección de proyectos y los dashboards para ver ejemplos.',
      'En el portafolio encontrarás trabajos de frontend, backend y analítica, cada uno con un enlace directo a GitHub.',
    ],
    technologies: [
      'Su stack principal incluye React, Node.js, Python, SQL y Power BI. Usa herramientas modernas para crear dashboards y automatizar reportes.',
      'Camilo trabaja con tecnologías de frontend y backend, además de análisis de datos y visualización para entregar soluciones completas.',
    ],
    experience: [
      'Camilo es Full Stack Developer & Data Analyst. Une desarrollo de software con análisis de datos para entregar productos útiles y decisiones más inteligentes.',
      'Su perfil combina desarrollo web, integración de APIs y analítica de datos con dashboards orientados a resultados.',
    ],
    contact: [
      'Puedes contactar a Camilo en LinkedIn, GitHub o correo. Los enlaces aparecen en el footer del portafolio.',
      'Si quieres hablar con Camilo, usa la opción de LinkedIn, su perfil de GitHub o el correo que aparece al final de la página.',
    ],
    github: [
      'El portafolio está conectado a GitHub para mostrar repositorios. Haz clic en el botón flotante de GitHub o revisa la sección de desarrollo.',
      'Todos los repositorios públicos están disponibles en GitHub, incluyendo proyectos de backend, frontend y análisis de datos.',
    ],
    analytics: [
      'Su trabajo en datos incluye dashboards, KPIs, análisis de negocio y reportes automáticos con Power BI y Python.',
      'Camilo transforma datos en insights accionables mediante dashboards, visualizaciones y automatización de reporting.',
    ],
    help: [
      'Puedo ayudarte con proyectos, tecnologías, experiencia, dashboards y contacto. Pregunta por ejemplo “qué proyectos tienes” o “qué tecnologías usas”.',
      'Puedes preguntarme por sus proyectos, su stack técnico, sus dashboards o cómo contactarlo.',
    ],
    thanks: [
      'De nada. Si quieres, puedo seguir hablando sobre proyectos, tecnologías o dashboards.',
      'Con gusto. Si tienes otra pregunta sobre el portafolio, estoy listo para responderla.',
    ],
    default: [
      'Interesante pregunta. Explora las secciones del portafolio para conocer más sobre el trabajo de Camilo.',
      'No estoy seguro de eso, pero puedo ayudarte con proyectos, tecnología, dashboards o contacto.',
    ],
  },
  en: {
    greeting: [
      'Hello! 👋 I am Camilo’s virtual assistant. I can tell you about his experience, projects, technology, dashboards and how to contact him.',
      'Hi there! Ask me about Camilo’s profile, GitHub repositories, or data analytics work.',
    ],
    projects: [
      'Camilo builds web projects with React and Node.js, and also works on data solutions with Python and Power BI. Check the projects and dashboards sections for examples.',
      'You’ll find frontend, backend and analytics work in the portfolio, each with a direct GitHub link.',
    ],
    technologies: [
      'His main stack includes React, Node.js, Python, SQL and Power BI. He also uses modern tools for dashboard creation and reporting automation.',
      'Camilo works with frontend and backend technologies plus data analysis and visualization to deliver complete solutions.',
    ],
    experience: [
      'Camilo is a Full Stack Developer & Data Analyst. He combines software development with data analytics to deliver useful products and smarter decisions.',
      'His profile blends web development, API integration and data analysis with dashboards to support business decisions.',
    ],
    contact: [
      'You can contact Camilo via LinkedIn, GitHub or email. The links are available in the footer of the portfolio.',
      'If you want to reach out to Camilo, use the LinkedIn button, the GitHub profile or the email shown at the bottom of the page.',
    ],
    github: [
      'The portfolio is connected to GitHub to show repositories. Click the floating GitHub button or review the projects section.',
      'All public repositories are available on GitHub, including backend, frontend and data projects.',
    ],
    analytics: [
      'His data work includes dashboards, KPIs, business analysis and reporting automation with Power BI and Python.',
      'Camilo turns data into actionable insights through dashboards, visualizations and automatic reporting.',
    ],
    help: [
      'I can help with information about projects, technologies, experience, dashboards and contact. Try asking “show me your projects” or “what technologies do you use?”.',
      'Feel free to ask about his projects, tech stack, dashboards, or how to get in touch.',
    ],
    thanks: [
      'You’re welcome. I can also answer more questions about his projects or tech stack.',
      'Glad to help. If you have another question about the portfolio, I’m here.',
    ],
    default: [
      'Interesting question. Explore the portfolio sections to learn more about Camilo’s work.',
      'I’m not sure about that, but I can help with projects, technology, dashboards or contact information.',
    ],
  }
};

const intentKeywords = {
  greeting: [
    { keywords: ['hola', 'hello', 'hi', 'hey', 'buenas', 'buenos', 'saludos'], weight: 2 },
  ],
  projects: [
    { keywords: ['proyecto', 'proyectos', 'project', 'projects', 'trabajo', 'work', 'portfolio', 'caso', 'case', 'demo', 'example'], weight: 2 },
    { keywords: ['repo', 'repositorio', 'github', 'code', 'codigo', 'source'], weight: 1.8 },
  ],
  technologies: [
    { keywords: ['tecnologia', 'tecnologías', 'technology', 'tech', 'stack', 'herramienta', 'tool', 'lenguaje', 'language', 'framework', 'frameworks', 'react', 'node', 'python', 'power bi', 'sql', 'javascript', 'typescript'], weight: 2 },
  ],
  experience: [
    { keywords: ['experiencia', 'experience', 'quien', 'who', 'perfil', 'profile', 'sobre', 'about', 'resume', 'cv', 'background'], weight: 2 },
  ],
  contact: [
    { keywords: ['contacto', 'contact', 'email', 'correo', 'linkedin', 'hablar', 'talk', 'contactame', 'reach out', 'contactar'], weight: 2 },
  ],
  github: [
    { keywords: ['github', 'git', 'repo', 'repositorio', 'codigo', 'code', 'source', 'perfil'], weight: 2 },
  ],
  analytics: [
    { keywords: ['analytics', 'data', 'datos', 'dashboard', 'dashboards', 'kpi', 'bi', 'power bi', 'sql', 'insight', 'insights', 'report', 'reportes', 'visualización', 'visualizacion'], weight: 2 },
  ],
  help: [
    { keywords: ['ayuda', 'help', 'que puedes hacer', 'what can you do', 'puedes ayudarme', 'can you help', 'assist'], weight: 2 },
  ],
  thanks: [
    { keywords: ['gracias', 'thanks', 'thank you', 'te agradezco', 'muchas gracias'], weight: 2 },
  ],
};

function normalizeText(message) {
  return (message || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getRandomReply(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function detectIntent(message) {
  const normalized = normalizeText(message);
  const scores = Object.fromEntries(Object.keys(intentKeywords).map((intent) => [intent, 0]));

  for (const [intent, entries] of Object.entries(intentKeywords)) {
    for (const entry of entries) {
      for (const keyword of entry.keywords) {
        if (normalized.includes(keyword)) {
          scores[intent] += entry.weight;
        }
      }
    }
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [bestIntent, bestScore] = ranked[0];
  return bestScore >= 1 ? bestIntent : 'default';
}

export function buildReply(message, lang = 'es') {
  const normalizedLanguage = lang === 'en' ? 'en' : 'es';
  const sanitized = (message || '').trim().slice(0, 500);
  const intent = detectIntent(sanitized);
  const replyList = responses[normalizedLanguage][intent] || responses[normalizedLanguage].default;
  const baseReply = Array.isArray(replyList) ? getRandomReply(replyList) : replyList;

  if (intent === 'default') {
    const suggestion = normalizedLanguage === 'en'
      ? 'Try asking about projects, technologies, analytics or contact information.'
      : 'Prueba preguntando por proyectos, tecnologías, analítica o información de contacto.';

    return `${baseReply}\n\n${suggestion}`;
  }

  return baseReply;
}

router.post('/', (req, res) => {
  try {
    const { message, lang = 'es' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensaje requerido' });
    }

    const sanitized = message.trim().slice(0, 500);
    const intent = detectIntent(sanitized);
    const language = lang === 'en' ? 'en' : 'es';
    const reply = buildReply(sanitized, language);

    setTimeout(() => {
      res.json({
        reply,
        intent,
        timestamp: new Date().toISOString(),
      });
    }, 250 + Math.random() * 400);

  } catch (error) {
    console.error('Chat error:', error.message);
    res.status(500).json({ error: 'Error en el chatbot' });
  }
});

export default router;
