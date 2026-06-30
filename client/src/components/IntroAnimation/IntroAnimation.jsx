import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './IntroAnimation.css';

function IntroAnimation({ onComplete }) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState(0); // 0: logo, 1: text, 2: exit

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="intro-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="intro-content">
            {/* Animated Code Brackets */}
            <motion.div
              className="intro-brackets"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <span className="bracket left">&lt;</span>
              <motion.span
                className="intro-slash"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                CV
              </motion.span>
              <span className="bracket right">/&gt;</span>
            </motion.div>

            {/* Name & Title */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  className="intro-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="intro-name">Camilo Velásquez</h1>
                  <p className="intro-title">{t('hero.title')}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading bar */}
            <motion.div
              className="intro-loader"
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Background particles */}
          <div className="intro-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="intro-particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  y: Math.random() * window.innerHeight - 200,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 1.5,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;
