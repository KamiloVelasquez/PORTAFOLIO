import express from 'express';

const router = express.Router();
const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'kamilovelasquez';

// Cache simple en memoria
let reposCache = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

function generateRepoDescription(name, language) {
  const normalized = name.toLowerCase();
  const fallbackMap = {
    'desarrollo-de-software-seguro': 'Proyecto enfocado en seguridad de aplicaciones con buenas prácticas de desarrollo.',
    'node_js': 'Backend en Node.js diseñado para servicios API y manejo de datos.',
    'backend': 'API y lógica de servidor para aplicaciones web escalables.',
    'credismart_react': 'Interfaz React para un producto financiero inteligente.',
    'frameworks_springboot_java_iudigital': 'Aplicación Java con Spring Boot desarrollada como ejercicio académico.',
    'creditsmart': 'Proyecto web para gestión de créditos y soluciones financieras.',
    'actividad_3': 'Ejercicio de programación práctica con enfoque en lógica y estructura.',
    'actividad_2_poo': 'Actividad de programación orientada a objetos en Java.',
  };

  if (fallbackMap[normalized]) {
    return fallbackMap[normalized];
  }

  if (language) {
    return `Repositorio público de ${language} con un enfoque práctico y demostrativo.`;
  }

  return 'Repositorio público con código de proyecto y ejemplos de desarrollo.';
}

// GET /api/github/repos — obtener repos del usuario
router.get('/repos', async (req, res) => {
  try {
    const now = Date.now();

    if (reposCache && (now - cacheTimestamp) < CACHE_TTL) {
      return res.json(reposCache);
    }

    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repos = await response.json();

    const filtered = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || generateRepoDescription(repo.name, repo.language),
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
    }));

    reposCache = filtered;
    cacheTimestamp = now;

    res.json(filtered);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error.message);
    res.status(500).json({ error: 'Error al obtener repositorios de GitHub' });
  }
});

// GET /api/github/profile — obtener perfil del usuario
router.get('/profile', async (req, res) => {
  try {
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const profile = await response.json();

    res.json({
      login: profile.login,
      name: profile.name,
      avatar_url: profile.avatar_url,
      bio: profile.bio,
      public_repos: profile.public_repos,
      followers: profile.followers,
      html_url: profile.html_url,
    });
  } catch (error) {
    console.error('Error fetching GitHub profile:', error.message);
    res.status(500).json({ error: 'Error al obtener perfil de GitHub' });
  }
});

export default router;
