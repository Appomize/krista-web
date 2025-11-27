import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Droplets, Heart, User, ArrowRight } from 'lucide-react';
import SectionContainer from './SectionContainer';
import { services } from '../lib/data';

const iconMap = {
  Scissors: Scissors,
  Palette: Palette,
  Sparkles: Sparkles,
  Droplets: Droplets,
  Heart: Heart,
  User: User
};

const ServicesSection = React.memo(() => {
  const memoizedServices = useMemo(() => services, []);
  
  const handleScrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <SectionContainer id="services">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm"
        >
          Our Services
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mt-2">
          What we do best
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
          From precision haircuts to stunning bridal transformations, we offer a complete range of
          hair and beauty services for everyone.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memoizedServices.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <IconComponent className="w-7 h-7 text-amber-600 dark:text-amber-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-amber-600 dark:text-amber-500 font-semibold">
                  From {service.price}
                </span>
                <button 
                  onClick={handleScrollToContact}
                  className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors"
                >
                  Book now
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
