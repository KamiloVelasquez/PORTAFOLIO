import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import RippleEffect from '../RippleEffect/RippleEffect';
import './GithubButton.css';

function GithubButton({ url = 'https://github.com/KamiloVelasquez', label, variant = 'primary', size = 'md' }) {
  const { t } = useTranslation();
  const text = label || t('hero.cta_secondary');

  return (
    <RippleEffect className={`github-btn github-btn-${variant} github-btn-${size}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn-link"
        id={`github-btn-${variant}`}
      >
        <FaGithub className="github-btn-icon" />
        <span>{text}</span>
      </a>
    </RippleEffect>
  );
}

export default GithubButton;
