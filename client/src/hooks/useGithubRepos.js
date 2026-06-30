import { useState, useEffect } from 'react';
import { fetchGithubRepos } from '../services/githubService';

export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        setLoading(true);
        const data = await fetchGithubRepos();
        if (!cancelled) {
          setRepos(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => { cancelled = true; };
  }, []);

  // Separar repos por tipo (dev vs data)
  const devRepos = repos.filter(r => {
    const lang = (r.language || '').toLowerCase();
    const topics = (r.topics || []).map(t => t.toLowerCase());
    const isData = ['python', 'r', 'jupyter notebook'].includes(lang) ||
      topics.some(t => ['data', 'analytics', 'power-bi', 'dashboard', 'machine-learning', 'ml', 'data-science'].includes(t));
    return !isData;
  });

  const dataRepos = repos.filter(r => {
    const lang = (r.language || '').toLowerCase();
    const topics = (r.topics || []).map(t => t.toLowerCase());
    return ['python', 'r', 'jupyter notebook'].includes(lang) ||
      topics.some(t => ['data', 'analytics', 'power-bi', 'dashboard', 'machine-learning', 'ml', 'data-science'].includes(t));
  });

  return { repos, devRepos, dataRepos, loading, error };
}
