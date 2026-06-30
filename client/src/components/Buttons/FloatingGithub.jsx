import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingGithub.css';

function FloatingGithub({ url = 'https://github.com/KamiloVelasquez' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="floating-github" id="floating-github">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="floating-github-tooltip"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            GitHub Profile
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-github-btn"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <FaGithub />
      </motion.a>
    </div>
  );
}

export default FloatingGithub;
