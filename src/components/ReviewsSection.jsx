import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../lib/data';

const ReviewsSection = React.memo(() => {
  const memoizedReviews = useMemo(() => reviews, []);
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mt-2">
            Clients Love Krista
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
            Hear from our happy customers who keep coming back for more.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoizedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-amber-500/30" />
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    {review.name}
                  </p>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-neutral-300 dark:text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
