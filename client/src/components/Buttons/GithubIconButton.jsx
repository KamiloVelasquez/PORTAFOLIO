import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import RippleEffect from '../RippleEffect/RippleEffect';
import './GithubIconButton.css';

function GithubIconButton({ url, label }) {
  const { t } = useTranslation();
  const text = label || t('dev_section.view_repo');

  return (
    <RippleEffect className="github-icon-btn" color="rgba(6,214,160,0.4)">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon-btn-link"
      >
        <FaGithub />
        <span>{text}</span>
      </a>
    </RippleEffect>
  );
}

export default GithubIconButton;
