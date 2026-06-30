import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function sendChatMessage(message, lang = 'es') {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message, lang });
    return response.data;
  } catch (error) {
    console.error('Chat error:', error);
    return getLocalResponse(message, lang);
  }
}

function normalizeText(message) {
  return (message || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getRandomResponse(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function detectLocalIntent(message) {
  const normalized = normalizeText(message);
  const rules = [
    { intent: 'greeting', keywords: ['hola', 'hello', 'hi', 'hey', 'buenas', 'saludos'] },
    { intent: 'experience', keywords: ['experiencia', 'experience', 'perfil', 'profile', 'sobre', 'about', 'cv', 'resume', 'background'] },
    { intent: 'technologies', keywords: ['tecnologia', 'tecnologias', 'technology', 'tech', 'stack', 'herramienta', 'tool', 'lenguaje', 'language', 'framework', 'react', 'node', 'python', 'power bi', 'sql', 'javascript', 'typescript'] },
    { intent: 'projects', keywords: ['proyecto', 'proyectos', 'project', 'projects', 'trabajo', 'work', 'portfolio', 'repo', 'repositorio', 'github', 'code', 'dashboard', 'dashboards'] },
    { intent: 'contact', keywords: ['contacto', 'contact', 'email', 'correo', 'linkedin', 'hablar', 'talk', 'contactame', 'reach out', 'contactar'] },
    { intent: 'analytics', keywords: ['analytics', 'data', 'datos', 'dashboard', 'dashboards', 'kpi', 'bi', 'power bi', 'sql', 'insight', 'insights', 'report', 'reportes', 'visualizacion', 'visualización'] },
    { intent: 'help', keywords: ['ayuda', 'help', 'que puedes hacer', 'what can you do', 'puedes ayudarme', 'can you help', 'assist'] },
    { intent: 'thanks', keywords: ['gracias', 'thanks', 'thank you', 'te agradezco', 'muchas gracias'] },
  ];

  const matched = rules.find((rule) => rule.keywords.some((word) => normalized.includes(word)));
  return matched?.intent || 'default';
}

function getLocalResponse(message, lang) {
  const responses = {
    es: {
      default: ['Gracias por tu mensaje. Puedo hablarte sobre desarrollo full stack, análisis de datos o los proyectos de Camilo.'],
      greeting: ['¡Hola! 👋 Soy el asistente de Camilo. Pregúntame sobre proyectos, tecnología o experiencia.'],
      experience: ['Camilo combina desarrollo de software con analítica de datos para construir soluciones completas y orientadas a resultados.'],
      technologies: ['Su stack incluye React, Node.js, Python, SQL, Power BI y herramientas modernas de visualización y automatización.'],
      projects: ['Camilo trabaja en proyectos de desarrollo web y análisis de datos. Puedes explorar la sección de desarrollo y la de dashboards para ver ejemplos.'],
      contact: ['Puedes contactar a Camilo a través de LinkedIn, GitHub o correo electrónico. Los enlaces están en el footer del portafolio.'],
      analytics: ['Su trabajo en datos incluye dashboards, KPIs, análisis de negocio y reportes automáticos con Power BI y Python.'],
      help: ['Puedo ayudarte con proyectos, tecnologías, experiencia, dashboards y contacto. Pregunta algo como “muéstrame tus proyectos”.'],
      thanks: ['De nada. Si quieres, puedo seguir hablando sobre sus proyectos o su stack técnico.'],
    },
    en: {
      default: ['Thanks for your message. I can talk about full stack development, data analysis or Camilo\'s projects.'],
      greeting: ['Hello! 👋 I am Camilo\'s assistant. Ask me about projects, technology or experience.'],
      experience: ['Camilo combines software development with data analytics to build complete, clear and results-oriented solutions.'],
      technologies: ['His stack includes React, Node.js, Python, SQL, Power BI and modern visualization and automation tools.'],
      projects: ['Camilo works on web development and data analysis projects. You can explore the development section and the dashboards section to see examples.'],
      contact: ['You can contact Camilo through LinkedIn, GitHub or email. The links are in the portfolio footer.'],
      analytics: ['His data work includes dashboards, KPIs, business analysis and reporting automation with Power BI and Python.'],
      help: ['I can help with projects, technologies, experience, dashboards and contact. Try asking something like “show me your projects”.'],
      thanks: ['You are welcome. If you want, I can keep talking about his projects or technical stack.'],
    },
  };

  const r = responses[lang] || responses.es;
  const intent = detectLocalIntent(message);
  const replyList = r[intent] || r.default;
  return { reply: getRandomResponse(replyList) };
}
