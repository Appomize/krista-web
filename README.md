# Krista Salon - Premium Unisex Salon Website

A modern, responsive website for Krista Salon - a premium unisex salon located in Kanpur, Uttar Pradesh. Built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark mode support
- 💇 **Service Showcase** - Display of all salon services with pricing
- 🎁 **Special Offers** - Highlight current promotions and deals
- 📸 **Gallery** - Interactive image gallery with lightbox view
- ⭐ **Customer Reviews** - Testimonials from satisfied clients
- 👥 **Team Section** - Meet the expert stylists
- 📞 **Contact & Booking** - Easy appointment booking form
- 📱 **Mobile Optimized** - Fully responsive with mobile sticky CTA
- 🌙 **Dark Mode** - Toggle between light and dark themes

## Services Offered

- Haircuts & Styling
- Color & Highlights
- Keratin & Smoothening
- Hair Spa & Treatments
- Bridal & Party Makeup
- Men's Grooming

## Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **CRACO** - Build configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── OffersSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── MobileStickyCTA.jsx
│   ├── lib/
│   │   ├── data.js          # Mock data
│   │   ├── ThemeContext.js   # Theme management
│   │   └── utils.js          # Utility functions
│   ├── hooks/
│   │   └── use-toast.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── craco.config.js
```

## Customization

### Update Contact Information

Edit `src/lib/data.js` to update:
- Contact details (phone, email, address)
- Business hours
- Social media links

### Modify Services & Offers

Update the `services` and `offers` arrays in `src/lib/data.js`

### Change Colors & Branding

Modify the color scheme in:
- `tailwind.config.js` - Theme colors
- `src/index.css` - CSS variables

## Deployment

The build folder can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

## License

© 2024 Krista Salon. All rights reserved.

## Contact

**Krista Salon**
- Address: 123, Mall Road, Near Civil Lines, Kanpur, Uttar Pradesh - 208001
- Phone: +91-9876543210
- Email: hello@kristasalon.com
- Hours: 10:00 AM – 8:00 PM (All Days)
