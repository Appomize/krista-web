import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contactInfo, services, reviews } from '../lib/data';

const SEO = () => {
  // Calculate average rating
  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Krista Salon",
    "image": "https://kristasalon.com/og-image.jpg",
    "@id": "https://kristasalon.com",
    "url": "https://kristasalon.com",
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Mall Road, Near Civil Lines",
      "addressLocality": "Kanpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "208001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4499,
      "longitude": 80.3314
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.slice(0, 5).map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.review
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hair and Beauty Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "BeautySalon",
            "name": "Krista Salon"
          }
        },
        "price": service.price,
        "priceCurrency": "INR"
      }))
    },
    "sameAs": [
      "https://www.facebook.com/kristasalon",
      "https://www.instagram.com/kristasalon",
      "https://wa.me/919876543210"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Kanpur"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Krista Salon",
    "url": "https://kristasalon.com",
    "logo": "https://kristasalon.com/logo512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.phone,
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/kristasalon",
      "https://www.instagram.com/kristasalon"
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kristasalon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://kristasalon.com#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://kristasalon.com#contact"
      }
    ]
  };

  // FAQ Schema (for common questions)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Krista Salon offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Krista Salon offers hair cuts, styling, hair coloring, highlights, keratin treatment, hair smoothening, hair spa, bridal makeup, party makeup, and men's grooming services in Kanpur."
        }
      },
      {
        "@type": "Question",
        "name": "What are the salon timings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Krista Salon is open daily from 10:00 AM to 8:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Krista Salon located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Krista Salon is located at 123, Mall Road, Near Civil Lines, Kanpur, Uttar Pradesh - 208001."
        }
      },
      {
        "@type": "Question",
        "name": "How to book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book an appointment by calling +91-9876543210, WhatsApp us, or fill the contact form on our website."
        }
      },
      {
        "@type": "Question",
        "name": "Does Krista Salon offer bridal makeup services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Krista Salon offers complete bridal makeup packages including engagement looks, mehendi, and pre-bridal facials."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;

