import React, { useMemo } from 'react';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { contactInfo } from '../lib/data';

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = useMemo(() => [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, label: 'WhatsApp' }
  ], []);

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-serif font-bold text-white">Krista</span>
              <span className="text-sm text-amber-500 font-medium tracking-wider uppercase">Salon</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Premium unisex salon in Kanpur for all your hair and beauty needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-neutral-400 text-sm">
              {contactInfo.address}
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              {contactInfo.hours}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {contactInfo.name}. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Kanpur
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
