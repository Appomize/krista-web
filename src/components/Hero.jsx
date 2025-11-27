import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../lib/data';

const Hero = React.memo(() => {
  const features = useMemo(() => [
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: 'Unisex Salon' },
    { icon: Clock, text: 'Open Daily 10am–8pm' }
  ], []);

  const handleBookAppointment = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  }, []);

  return (
    <section
      id="home"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-neutral-50 to-amber-50/30 dark:from-neutral-950 dark:to-neutral-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm mb-4"
            >
              Krista Salon · Kanpur
            </motion.p>

            {/* Main Heading */}
            <h1 itemProp="headline" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white leading-tight mb-6">
              Best Hair Salon in Kanpur | Krista Salon - Premium Hair, Beauty &{' '}
              <span className="text-amber-600 dark:text-amber-500">Bridal Makeup Services</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
              Experience premium hair styling, coloring, smoothening, and bridal makeup services
              by expert stylists in the heart of Kanpur.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30 transition-all"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700"
                >
                  <feature.icon className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
                  alt="Krista Salon - Premium Hair and Beauty Services"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Trusted by 5000+</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Happy Customers in Kanpur</p>
                  </div>
                </div>
              </motion.div>

              {/* Service Tags */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <p className="text-sm font-medium">Bridal · Color · Hair</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
