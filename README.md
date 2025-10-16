# Raj Saffron & Nuts - Premium Website

A modern, mobile-friendly React website built with Vite for Raj Saffron & Nuts, showcasing premium saffron and flavored nuts with a luxurious design.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI/UX** - Premium gold and brown color scheme with elegant typography
- **Smooth Animations** - Fade-in effects and hover animations
- **Interactive Navigation** - Fixed navbar with smooth scrolling
- **Product Showcase** - Beautiful product cards with hover effects
- **Mobile Menu** - Hamburger menu for mobile devices
- **Premium Feel** - Luxury design elements throughout
- **Fast Performance** - Built with Vite for lightning-fast development and build

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Add your images:**
   - Place your images in the `public/` folder
   - Follow the naming convention in `public/IMAGE_INSTRUCTIONS.txt`
   - Required images: logo.png, hero.jpg, about.jpg, product1-6.jpg

3. **Start development server:**
```bash
npm run dev
```

4. **Open your browser:**
   - The app will open at `http://localhost:5173`

## 📁 Project Structure

```
raj-saffron-nuts-brand/
├── public/                 # Static assets (images go here)
│   └── IMAGE_INSTRUCTIONS.txt
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🖼️ Adding Your Images

Place these images in the `public/` folder:

1. **logo.png** - Your company logo
2. **hero.jpg** - Main hero section image (1200x800px recommended)
3. **about.jpg** - About section image (800x600px recommended)
4. **product1.jpg** - Premium Kashmiri Saffron
5. **product2.jpg** - Honey Roasted Cashews
6. **product3.jpg** - Salted Almonds
7. **product4.jpg** - Spicy Peri Peri Cashews
8. **product5.jpg** - Caramelized Walnuts
9. **product6.jpg** - Mixed Dry Fruits

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

## 🎨 Color Scheme

```css
--primary-gold: #D4AF37;
--dark-gold: #B8941F;
--deep-brown: #2C1810;
--light-cream: #FFF8E7;
--soft-cream: #FAF6ED;
--text-dark: #1A1A1A;
--text-light: #666;
```

## 🛠️ Available Scripts

### `npm run dev`
Starts the development server with hot module replacement.

### `npm run build`
Builds the app for production to the `dist/` folder.

### `npm run preview`
Preview the production build locally.

## 🎯 Customization

### Update Contact Information
Edit `src/components/Contact.jsx`:
- Phone number
- Email address
- Location

### Modify Products
Edit the `products` array in `src/components/Products.jsx`:
- Product names
- Prices
- Descriptions
- Categories
- Badges

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
    --primary-gold: #D4AF37;
    /* ... other colors ... */
}
```

### Update Content
- **Hero text:** `src/components/Hero.jsx`
- **Features:** `src/components/Features.jsx`
- **About section:** `src/components/About.jsx`
- **Footer:** `src/components/Footer.jsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/raj-saffron-nuts-brand",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with Grid & Flexbox
- **Google Fonts** - Playfair Display & Poppins
- **Modern JavaScript** - ES6+ features

## 📱 Mobile Features

- Touch-friendly navigation
- Hamburger menu
- Optimized images
- Responsive layouts
- Fast loading times

## 🐛 Troubleshooting

### Images not showing?
- Check that images are in the `public/` folder
- Verify filenames match exactly (case-sensitive)
- Check file extensions (.jpg, .png)

### Development server not starting?
- Ensure Node.js is installed
- Run `npm install` to install dependencies
- Check if port 5173 is available

### Build fails?
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for any syntax errors in components

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review component files for examples
- Consult Vite documentation: https://vitejs.dev/

## 📝 License

© 2025 Raj Saffron & Nuts. All rights reserved.

## 🙏 Credits

Built with:
- React
- Vite
- Love ❤️

---

**Made with premium ingredients, just like our products! 🌟**
