import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GithubButton from '../Buttons/GithubButton';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const el = document.getElementById('dev-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-gradient-orb orb-3" />
        <div className="hero-grid" />
      </div>

      <Container className="hero-container">
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col lg={10} xl={8} className="text-center">
            {/* Greeting */}
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('hero.greeting')}
            </motion.p>

            {/* Name */}
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('hero.name')}
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="gradient-text-dev">Full Stack Developer</span>
              {' & '}
              <span className="gradient-text-data">Data Analyst</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <button
                className="hero-cta-primary"
                onClick={scrollToProjects}
                id="hero-cta-primary"
              >
                {t('hero.cta_primary')}
              </button>
              <GithubButton
                variant="secondary"
                label={t('hero.cta_secondary')}
                url="https://github.com/KamiloVelasquez"
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
