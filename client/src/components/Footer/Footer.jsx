import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div className="footer-brand">
              <span className="brand-brackets">&lt;</span>
              <span className="brand-text">CV</span>
              <span className="brand-brackets">/&gt;</span>
            </div>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="footer-social">
              <a
                href="https://github.com/KamiloVelasquez"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/juan-camilo-velasquez-y"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:camilo.velasquez@est.iudigital.edu.co"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <p className="footer-text">
              © {currentYear} Camilo Velásquez. {t('footer.rights')}
            </p>
            <p className="footer-built">
              {t('footer.built_with').replace('❤️', '')} <FaHeart className="heart-icon" /> React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
