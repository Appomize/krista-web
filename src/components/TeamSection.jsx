import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SectionContainer from './SectionContainer';
import { team } from '../lib/data';

const TeamSection = React.memo(() => {
  const memoizedTeam = useMemo(() => team, []);
  return (
    <SectionContainer id="team">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm"
        >
          Meet The Experts
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mt-2">
          Our Stylists
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
          Our talented team of stylists and makeup artists are here to make you look and feel amazing.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {memoizedTeam.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={400}
                height={500}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-amber-600 dark:text-amber-500">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
