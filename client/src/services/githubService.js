import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function fetchGithubRepos() {
  try {
    const response = await axios.get(`${API_URL}/github/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repos:', error);
    // Fallback: repos de ejemplo si el servidor no está disponible
    return getFallbackRepos();
  }
}

export async function fetchGithubProfile() {
  try {
    const response = await axios.get(`${API_URL}/github/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

function getFallbackRepos() {
  return [
    {
      id: 1,
      name: 'portfolio-web',
      description: 'Mi portafolio profesional construido con React y Node.js',
      html_url: 'https://github.com/KamiloVelasquez/portfolio-web',
      language: 'JavaScript',
      stargazers_count: 12,
      forks_count: 3,
      updated_at: new Date().toISOString(),
      topics: ['react', 'nodejs', 'portfolio'],
    },
    {
      id: 2,
      name: 'data-analysis-toolkit',
      description: 'Herramientas de análisis de datos con Python y Power BI',
      html_url: 'https://github.com/KamiloVelasquez/data-analysis-toolkit',
      language: 'Python',
      stargazers_count: 8,
      forks_count: 2,
      updated_at: new Date().toISOString(),
      topics: ['python', 'data-analysis', 'power-bi'],
    },
    {
      id: 3,
      name: 'api-rest-express',
      description: 'API RESTful construida con Express.js y MongoDB',
      html_url: 'https://github.com/KamiloVelasquez/api-rest-express',
      language: 'JavaScript',
      stargazers_count: 15,
      forks_count: 5,
      updated_at: new Date().toISOString(),
      topics: ['express', 'mongodb', 'rest-api'],
    },
    {
      id: 4,
      name: 'dashboard-ventas',
      description: 'Dashboard interactivo de ventas con visualizaciones avanzadas',
      html_url: 'https://github.com/KamiloVelasquez/dashboard-ventas',
      language: 'Python',
      stargazers_count: 6,
      forks_count: 1,
      updated_at: new Date().toISOString(),
      topics: ['power-bi', 'dashboard', 'analytics'],
    },
    {
      id: 5,
      name: 'ecommerce-fullstack',
      description: 'Plataforma e-commerce completa con React, Node.js y PostgreSQL',
      html_url: 'https://github.com/KamiloVelasquez/ecommerce-fullstack',
      language: 'TypeScript',
      stargazers_count: 20,
      forks_count: 7,
      updated_at: new Date().toISOString(),
      topics: ['react', 'nodejs', 'postgresql', 'ecommerce'],
    },
    {
      id: 6,
      name: 'ml-predictions',
      description: 'Modelos de machine learning para predicción de tendencias',
      html_url: 'https://github.com/KamiloVelasquez/ml-predictions',
      language: 'Python',
      stargazers_count: 10,
      forks_count: 4,
      updated_at: new Date().toISOString(),
      topics: ['machine-learning', 'python', 'scikit-learn'],
    },
  ];
}
