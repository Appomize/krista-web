import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../lib/data';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ContactSection = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
    datetime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceNames = useMemo(() => ({
    haircut: 'Haircuts & Styling',
    color: 'Color & Highlights',
    keratin: 'Keratin & Smoothening',
    spa: 'Hair Spa & Treatments',
    bridal: 'Bridal & Party Makeup',
    grooming: "Men's Grooming",
    other: 'Other'
  }), []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    const serviceName = serviceNames[formData.service] || formData.service;
    const message = `Hello! I'd like to book an appointment at Krista Salon.\n\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Service: ${serviceName}\n` +
      `Preferred Date & Time: ${formData.datetime || 'Flexible'}\n` +
      (formData.message ? `Message: ${formData.message}\n` : '');
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', service: '', datetime: '', message: '' });
    }, 5000);
  }, [formData, serviceNames]);

  const handleChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const contactItems = useMemo(() => [
    { icon: MapPin, label: 'Address', value: contactInfo.address },
    { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}` },
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Clock, label: 'Hours', value: contactInfo.hours }
  ], []);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-neutral-100 to-amber-50/50 dark:from-neutral-900 dark:to-neutral-950"
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
            Get In Touch
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mt-2">
            Book Your Appointment
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
            Ready to transform your look? Fill in the form and we&apos;ll call or WhatsApp you to confirm your slot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Contact Details
            </h3>

            <div className="space-y-4 mb-8">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('https') ? '_blank' : undefined}
                        rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl h-48 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d80.3314!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzU5LjYiTiA4MMKwMTknNTMuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krista Salon Location"
                className="absolute inset-0"
              />
              <div className="absolute bottom-2 right-2">
                <a
                  href="https://maps.google.com/?q=26.4499,80.3314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-neutral-700 transition-colors shadow-md"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  Request Sent!
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">
                  We&apos;ll call or WhatsApp you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-neutral-700 dark:text-neutral-300">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="mt-1.5 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-neutral-700 dark:text-neutral-300">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    required
                    className="mt-1.5 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-neutral-700 dark:text-neutral-300">Service *</Label>
                  <Select onValueChange={(value) => handleChange('service', value)} required>
                    <SelectTrigger className="mt-1.5 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Haircuts & Styling</SelectItem>
                      <SelectItem value="color">Color & Highlights</SelectItem>
                      <SelectItem value="keratin">Keratin & Smoothening</SelectItem>
                      <SelectItem value="spa">Hair Spa & Treatments</SelectItem>
                      <SelectItem value="bridal">Bridal & Party Makeup</SelectItem>
                      <SelectItem value="grooming">Men&apos;s Grooming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="datetime" className="text-neutral-700 dark:text-neutral-300">Preferred Date & Time</Label>
                  <Input
                    id="datetime"
                    type="text"
                    placeholder="e.g., Tomorrow 3 PM"
                    value={formData.datetime}
                    onChange={(e) => handleChange('datetime', e.target.value)}
                    className="mt-1.5 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-neutral-700 dark:text-neutral-300">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests?"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    className="mt-1.5 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg shadow-amber-600/20"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Booking
                </Button>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  We&apos;ll call or WhatsApp you to confirm your slot.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
