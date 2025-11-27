import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = React.memo(({ children, id, className = '', dark = false }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-16 md:py-24 ${dark ? 'bg-neutral-900' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
});

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
