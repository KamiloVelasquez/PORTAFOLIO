import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import GithubIconButton from '../Buttons/GithubIconButton';
import '../../styles/dev-theme.css';

// Colores por lenguaje (como en GitHub)
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  R: '#198CE7',
};

function DevSection({ repos = [], loading = false }) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="dev-environment section-padding" id="dev-section">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title display-5 fw-bold mb-3">
            {t('dev_section.title')}
          </h2>
          <p className="text-secondary fs-5">
            {t('dev_section.subtitle')}
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-secondary">{t('dev_section.no_repos')}</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Row className="g-4">
              {repos.map((repo) => (
                <Col key={repo.id} md={6} lg={4}>
                  <motion.div variants={cardVariants} className="dev-card p-4 h-100 d-flex flex-column">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="fw-bold mb-0 text-white font-mono" style={{ fontSize: '0.95rem' }}>
                        {repo.name}
                      </h5>
                      {repo.language && (
                        <span className="language-badge d-flex align-items-center gap-1">
                          <span
                            className="d-inline-block rounded-circle"
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: languageColors[repo.language] || '#06d6a0'
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-secondary mb-3 flex-grow-1" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {repo.description || `Repositorio de ${repo.language || 'tecnología diversa'} con enfoque práctico.`}
                    </p>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="badge"
                            style={{
                              background: 'rgba(6, 214, 160, 0.08)',
                              color: '#06d6a0',
                              fontSize: '0.7rem',
                              fontWeight: 500,
                              padding: '3px 8px',
                              borderRadius: '6px',
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats & Button */}
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="d-flex gap-3">
                        <span className="stat-item">
                          <FaStar /> {repo.stargazers_count}
                        </span>
                        <span className="stat-item">
                          <FaCodeBranch /> {repo.forks_count}
                        </span>
                      </div>
                      <GithubIconButton url={repo.html_url} label={t('dev_section.view_repo')} />
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

export default DevSection;
