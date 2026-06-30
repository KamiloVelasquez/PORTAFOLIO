import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { FaCode, FaGlobe } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId) => {
    setExpanded(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        id="main-navbar"
      >
        <Container>
          <BootstrapNavbar.Brand
            href="#"
            className="navbar-brand-custom"
            onClick={() => scrollToSection('hero')}
          >
            <span className="brand-brackets">&lt;</span>
            <span className="brand-text">CV</span>
            <span className="brand-brackets">/&gt;</span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom">
            <span className="toggler-icon"></span>
          </BootstrapNavbar.Toggle>

          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center gap-1">
              <Nav.Link
                onClick={() => scrollToSection('hero')}
                className="nav-link-custom"
              >
                {t('navbar.home')}
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection('dev-section')}
                className="nav-link-custom"
              >
                {t('navbar.projects')}
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection('data-section')}
                className="nav-link-custom"
              >
                {t('navbar.dashboards')}
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection('footer')}
                className="nav-link-custom"
              >
                {t('navbar.contact')}
              </Nav.Link>

              {/* Language Toggle */}
              <button
                className="lang-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                id="lang-toggle"
              >
                <FaGlobe className="lang-icon" />
                <span>{t('navbar.language')}</span>
              </button>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
}

export default Navbar;
