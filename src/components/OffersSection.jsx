import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { offers } from '../lib/data';
import { Button } from './ui/button';

const OffersSection = React.memo(() => {
  const handleScrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const memoizedOffers = useMemo(() => offers, []);
  return (
    <section
      id="offers"
      className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
              Special Deals
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white">
            Current Offers
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
            Grab these exclusive deals and pamper yourself without breaking the bank.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {memoizedOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-900/50 hover:border-orange-400 dark:hover:border-orange-600 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                {offer.discount}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 pr-24">
                {offer.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {offer.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <span className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">
                  {offer.validTill}
                </span>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleScrollToContact}
                >
                  Claim Offer
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

OffersSection.displayName = 'OffersSection';

export default OffersSection;
