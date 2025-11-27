import React, { useMemo, useCallback } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { contactInfo } from '../lib/data';

const MobileStickyCTA = React.memo(() => {
  const actions = useMemo(() => [
    {
      icon: Phone,
      label: 'Call',
      href: `tel:${contactInfo.phone}`,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      icon: Calendar,
      label: 'Book',
      href: '#contact',
      color: 'bg-amber-600 hover:bg-amber-700'
    }
  ], []);

  const handleContactScroll = useCallback((e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 p-2">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.href.startsWith('https') ? '_blank' : undefined}
            rel={action.href.startsWith('https') ? 'noopener noreferrer' : undefined}
            className={`${action.color} text-white rounded-lg py-3 flex flex-col items-center justify-center transition-colors`}
            onClick={action.href === '#contact' ? handleContactScroll : undefined}
          >
            <action.icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{action.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
});

MobileStickyCTA.displayName = 'MobileStickyCTA';

export default MobileStickyCTA;
