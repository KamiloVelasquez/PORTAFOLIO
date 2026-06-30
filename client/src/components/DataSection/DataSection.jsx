import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChartLine, FaChartBar, FaChartPie, FaGithub } from 'react-icons/fa';
import GithubIconButton from '../Buttons/GithubIconButton';
import '../../styles/data-theme.css';

// Dashboards mockup data
const dashboards = [
  {
    id: 1,
    title: 'Dashboard ejecutivo',
    titleEn: 'Executive Dashboard',
    description: 'Vista consolidada de KPIs, rendimiento operativo y seguimiento de metas.',
    descriptionEn: 'Consolidated view of KPIs, operational performance and goal tracking.',
    icon: FaChartLine,
    tools: ['Power BI', 'SQL', 'DAX'],
    repoUrl: 'https://github.com/KamiloVelasquez',
    color: '#7b2ff7',
  },
  {
    id: 2,
    title: 'Análisis de negocio',
    titleEn: 'Business Analysis',
    description: 'Segmentación, comportamiento de usuarios y oportunidades de mejora con datos reales.',
    descriptionEn: 'Segmentation, user behavior and improvement opportunities using real data.',
    icon: FaChartBar,
    tools: ['Python', 'Pandas', 'Matplotlib'],
    repoUrl: 'https://github.com/KamiloVelasquez',
    color: '#e040fb',
  },
  {
    id: 3,
    title: 'Automatización y reporting',
    titleEn: 'Automation & Reporting',
    description: 'Flujos de reporting automatizado para ahorrar tiempo y mejorar la trazabilidad.',
    descriptionEn: 'Automated reporting workflows to save time and improve traceability.',
    icon: FaChartPie,
    tools: ['Python', 'SQL', 'Power BI'],
    repoUrl: 'https://github.com/KamiloVelasquez',
    color: '#ffd166',
  },
];

function DataSection() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="data-environment section-padding" id="data-section">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title display-5 fw-bold mb-3">
            {t('data_section.title')}
          </h2>
          <p className="text-secondary fs-5">
            {t('data_section.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4">
            {dashboards.map((dash) => {
              const Icon = dash.icon;
              return (
                <Col key={dash.id} md={6} lg={4}>
                  <motion.div variants={cardVariants} className="data-card p-4 h-100 d-flex flex-column">
                    {/* Dashboard Preview */}
                    <div className="dashboard-preview mb-3">
                      <Icon
                        style={{ fontSize: '3rem', color: dash.color, zIndex: 1, position: 'relative' }}
                      />
                    </div>

                    {/* Title */}
                    <h5 className="fw-bold text-white mb-2">
                      {isEn ? dash.titleEn : dash.title}
                    </h5>

                    {/* Description */}
                    <p className="text-secondary mb-3 flex-grow-1" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {isEn ? dash.descriptionEn : dash.description}
                    </p>

                    {/* Tools */}
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {dash.tools.map((tool) => (
                        <span key={tool} className="data-badge">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Related repo */}
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="text-secondary" style={{ fontSize: '0.8rem' }}>
                        <FaGithub className="me-1" />
                        {t('data_section.related_repo')}
                      </span>
                      <GithubIconButton url={dash.repoUrl} label={t('data_section.view_repo')} />
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default DataSection;
