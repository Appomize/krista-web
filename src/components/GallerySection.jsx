import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionContainer from './SectionContainer';
import { gallery } from '../lib/data';

const GallerySection = React.memo(() => {
  const [selectedImage, setSelectedImage] = useState(null);
  const memoizedGallery = useMemo(() => gallery, []);
  
  const handleImageClick = useCallback((item) => {
    setSelectedImage(item);
  }, []);
  
  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <SectionContainer id="gallery">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm"
        >
          Portfolio
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mt-2">
          Our Work
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
          Browse through our transformations and see the magic our stylists create every day.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memoizedGallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(item)}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width={300}
              height={300}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-medium text-sm">{item.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.label}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                loading="eager"
                decoding="async"
              />
              <p className="text-center text-white mt-4 text-lg font-medium">
                {selectedImage.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
});

GallerySection.displayName = 'GallerySection';

export default GallerySection;
