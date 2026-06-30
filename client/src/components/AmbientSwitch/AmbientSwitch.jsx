import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaChartBar } from 'react-icons/fa';
import './AmbientSwitch.css';

function AmbientSwitch() {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const leftX = useTransform(scrollYProgress, [0.2, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const dividerScale = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section className="ambient-switch" ref={ref} id="ambient-switch">
      {/* Background transition overlay */}
      <motion.div
        className="ambient-bg-overlay"
        style={{ opacity: bgOpacity }}
      />

      <div className="ambient-content">
        {/* Dev side */}
        <motion.div
          className="ambient-side ambient-dev"
          style={{ x: leftX, opacity: textOpacity }}
        >
          <FaCode className="ambient-icon dev-icon" />
          <h3 className="gradient-text-dev">{t('ambient.dev_title')}</h3>
          <p>{t('ambient.dev_subtitle')}</p>
        </motion.div>

        {/* Center divider */}
        <motion.div
          className="ambient-divider"
          style={{ scaleY: dividerScale, opacity: textOpacity }}
        />

        {/* Data side */}
        <motion.div
          className="ambient-side ambient-data"
          style={{ x: rightX, opacity: textOpacity }}
        >
          <FaChartBar className="ambient-icon data-icon" />
          <h3 className="gradient-text-data">{t('ambient.data_title')}</h3>
          <p>{t('ambient.data_subtitle')}</p>
        </motion.div>
      </div>

      {/* Transition text */}
      <motion.p
        className="ambient-transition-text"
        style={{ y: textY, opacity: textOpacity }}
      >
        {t('ambient.transition_text')}
      </motion.p>
    </section>
  );
}

export default AmbientSwitch;
