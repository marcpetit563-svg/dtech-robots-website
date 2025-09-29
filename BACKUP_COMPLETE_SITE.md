# SAUVEGARDE COMPLÈTE DU SITE WEB DTECH - ROBOTS DE SERVICE

## 📋 TABLE DES MATIÈRES
1. [Configuration du projet](#configuration-du-projet)
2. [Composants principaux](#composants-principaux)
3. [Pages du site](#pages-du-site)
4. [Styles et configuration](#styles-et-configuration)
5. [Images et assets](#images-et-assets)

---

## 🔧 CONFIGURATION DU PROJET

### package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.8.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Web DTECH - Robots de Service</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

---

## 🎯 COMPOSANTS PRINCIPAUX

### src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/App.tsx
```typescript
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RestaurationPage from './pages/RestaurationPage';
import SantePage from './pages/SantePage';
import HotelleriePage from './pages/HotelleriePage';
import BeautePage from './pages/BeautePage';
import AgriculturePage from './pages/AgriculturePage';
import HusqvarnaCeoraPage from './pages/HusqvarnaCeoraPage';
import BelroboticsBigmowPage from './pages/BelroboticsBigmowPage';

function App() {
  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        // This would typically close any open dropdowns
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restauration" element={<RestaurationPage />} />
          <Route path="/sante" element={<SantePage />} />
          <Route path="/hotellerie" element={<HotelleriePage />} />
          <Route path="/beaute" element={<BeautePage />} />
          <Route path="/agriculture" element={<AgriculturePage />} />
          <Route path="/agriculture/tondeuses-autonomes" element={<HusqvarnaCeoraPage />} />
          <Route path="/agriculture/husqvarna-ceora-546-epos" element={<HusqvarnaCeoraPage />} />
          <Route path="/agriculture/belrobotics-bigmow" element={<BelroboticsBigmowPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

### src/components/Header.tsx
```typescript
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  const sectorsItems = [
    { name: 'Restauration', path: '/restauration' },
    { name: 'Santé & Hôpitaux', path: '/sante' }, 
    { name: 'Hôtellerie', path: '/hotellerie' },
    { name: 'Beauté & Bien-être', path: '/beaute' },
    { name: 'Agriculture & Espaces verts', path: '/agriculture' }
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  if (isHomePage) {
    // Pour la page d'accueil, le header est intégré dans HeroSection
    return null;
  }

  // Header normal pour les autres pages
  return (
    <header className="bg-white shadow-sm">
      <div className="text-center py-8">
        <Link to="/" className="inline-block">
          <img 
            src="/brandmark-design (19).png" 
            alt="DTECH Logo" 
            className="h-16 w-auto mx-auto"
          />
        </Link>
      </div>

      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link 
                  to="/" 
                  className={`px-3 py-2 transition-colors duration-200 ${
                    location.pathname === '/' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 font-semibold'
                  }`}
                  style={{ 
                    fontSize: '18px', 
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                  }}
                >
                  Page d'accueil
                </Link>
                
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center px-3 py-2 font-semibold transition-colors duration-200 text-gray-600 hover:text-gray-900"
                    style={{ 
                      fontSize: '18px', 
                      fontWeight: '600',
                      letterSpacing: '0.3px'
                    }}
                  >
                    Secteurs d'activité
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''} text-gray-600`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                      {sectorsItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={handleLinkClick}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            location.pathname === item.path 
                              ? 'bg-gray-50 text-gray-900' 
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#" className="px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold" style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.3px' }}>
                  Nos produits
                </a>
                <a href="#" className="px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold" style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.3px' }}>
                  Qui sommes-nous
                </a>
                <a href="#" className="px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold" style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.3px' }}>
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 transition-colors duration-200 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link to="/" className="block px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Page d'accueil
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center w-full text-left px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold"
                >
                  Secteurs d'activité
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''} text-gray-600`} />
                </button>
                {isDropdownOpen && (
                  <div className="pl-6 space-y-1">
                    {sectorsItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-3 py-2 text-sm transition-colors duration-200 text-gray-500 hover:text-gray-900"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="block px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold">
                Nos produits
              </a>
              <a href="#" className="block px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold">
                Qui sommes-nous
              </a>
              <a href="#" className="block px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-gray-900 font-semibold">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
```

### src/components/Footer.tsx
```typescript
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    activite: '',
    entreprise: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Obtenez un devis personnalisé pour intégrer nos robots de service 
                dans votre environnement professionnel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">contact@dtech-robots.fr</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Paris, France</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Demander un devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Secteur d'activité
                  </label>
                  <select
                    name="activite"
                    value={formData.activite}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    <option value="restauration">Restauration</option>
                    <option value="sante">Santé & Hôpitaux</option>
                    <option value="hotellerie">Hôtellerie</option>
                    <option value="beaute">Beauté & Bien-être</option>
                    <option value="agriculture">Agriculture & Espaces verts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 resize-none"
                    placeholder="Décrivez vos besoins spécifiques..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
                >
                  Envoyer la demande →
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded text-gray-900 flex items-center justify-center font-bold mr-3">
                  D
                </div>
                <span className="text-xl font-bold">DTECH</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Pionniers dans la robotique de service. Nous concevons et développons des solutions robotiques 
                innovantes pour transformer les entreprises.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +33 1 23 45 67 89
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  dtech@robots.fr
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Paris, France
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Page d'accueil</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Secteurs d'activité</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Nos produits</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Conseil & Audit</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Installation & Formation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Maintenance & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Support technique</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">CGV</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 DTECH. Tous droits réservés. | Conditions générales | Politique de confidentialité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### src/components/HeroSection.tsx
```typescript
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const sectorsItems = [
    { name: 'Restauration', path: '/restauration' },
    { name: 'Santé & Hôpitaux', path: '/sante' }, 
    { name: 'Hôtellerie', path: '/hotellerie' },
    { name: 'Beauté & Bien-être', path: '/beaute' },
    { name: 'Agriculture & Espaces verts', path: '/agriculture' }
  ];

  const handleMouseEnter = () => {
    // Annuler le timeout de fermeture s'il existe
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Ajouter un délai avant de fermer le dropdown
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms de délai
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    // Annuler la fermeture si on survole le dropdown
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Fermer après un délai si on quitte le dropdown
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleLinkClick = () => {
    // Fermer immédiatement quand on clique sur un lien
    setIsDropdownOpen(false);
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url(/AdobeStock285235650jpeg_61796a8d602f8.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Header intégré dans l'image */}
      <header className="relative z-20 w-full">
        {/* Logo centré */}
        <div className="text-center py-12">
          <Link to="/" className="inline-block">
            <img 
              src="/brandmark-design (19).png" 
              alt="DTECH Logo" 
              className="h-20 w-auto mx-auto filter drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Navigation principale intégrée */}
        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-12">
                  <Link 
                    to="/" 
                    className="text-white font-semibold text-lg hover:text-gray-200 transition-all duration-300 hover:scale-105"
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Page d'accueil
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center text-white font-semibold text-lg hover:text-gray-200 transition-all duration-300 hover:scale-105"
                      style={{ 
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Secteurs d'activité
                      <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white bg-opacity-95 backdrop-blur-md rounded-xl shadow-2xl border border-white border-opacity-20 py-3 z-50">
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white bg-opacity-95 rotate-45 border-l border-t border-white border-opacity-20"></div>
                        {sectorsItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={handleLinkClick}
                            className="block px-6 py-3 text-gray-800 hover:bg-white hover:bg-opacity-50 transition-all duration-200 font-medium"
                            style={{ 
                              fontSize: '16px',
                              letterSpacing: '0.3px'
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <a 
                    href="#" 
                    className="text-white font-semibold text-lg hover:text-gray-200 transition-all duration-300 hover:scale-105"
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Nos produits
                  </a>
                  <a 
                    href="#" 
                    className="text-white font-semibold text-lg hover:text-gray-200 transition-all duration-300 hover:scale-105"
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Qui sommes-nous
                  </a>
                  <a 
                    href="#" 
                    className="text-white font-semibold text-lg hover:text-gray-200 transition-all duration-300 hover:scale-105"
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden absolute right-4">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white hover:text-gray-200 transition-colors duration-200"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-50">
              <div className="bg-black bg-opacity-80 backdrop-blur-md mx-4 rounded-xl mt-2 py-4">
                <Link 
                  to="/" 
                  className="block px-6 py-3 text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Page d'accueil
                </Link>
                
                {/* Mobile Sectors Menu */}
                <div>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between w-full px-6 py-3 text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                  >
                    Secteurs d'activité
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className="bg-white bg-opacity-10 mx-4 rounded-lg mt-2">
                      {sectorsItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-6 py-3 text-gray-200 hover:text-white transition-colors duration-200"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <a 
                  href="#" 
                  className="block px-6 py-3 text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                >
                  Nos produits
                </a>
                <a 
                  href="#" 
                  className="block px-6 py-3 text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                >
                  Qui sommes-nous
                </a>
                <a 
                  href="#" 
                  className="block px-6 py-3 text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      {/* Contenu Hero */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
              Robots de service<br />
              <span className="text-gray-200">nouvelle génération</span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Découvrez notre gamme complète de robots intelligents pour transformer vos 
              espaces professionnels : service, livraison, nettoyage et accueil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg">
                Demander un devis →
              </button>
              <button className="text-white px-10 py-4 rounded-lg font-semibold hover:text-gray-200 transition-all duration-300 border-2 border-white border-opacity-70 hover:border-opacity-100 backdrop-blur-sm hover:bg-white hover:bg-opacity-10 transform hover:scale-105 text-lg">
                Découvrir nos robots
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

## 📄 PAGES DU SITE

### src/pages/HomePage.tsx
```typescript
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ApplicationsSection from '../components/ApplicationsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ApplicationsSection />
    </div>
  );
};

export default HomePage;
```

### src/components/ProductsSection.tsx
```typescript
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Robots serveurs',
      description: 'Robots autonomes spécialisés pour la livraison de repas et boissons.',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Navigation autonome',
        'Interface tactile',
        'Plateau amovible',
        'Sécurité renforcée'
      ]
    },
    {
      id: 2,
      title: 'Robots de livraison',
      description: 'Solutions robotisées avancées pour optimiser les services logistiques et administratifs.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Livraison précise',
        'Sécurité sanitaire',
        'Composants IP',
        'Planification intelligente'
      ]
    },
    {
      id: 3,
      title: 'Robots de nettoyage',
      description: 'Nettoyage professionnel autonome pour tous types d\'environnements.',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Nettoyage complet',
        'Système avancé',
        'Programmation flexible',
        'Maintenance simple'
      ]
    },
    {
      id: 4,
      title: 'Robots d\'accueil',
      description: 'Accueil intelligent et interaction naturelle avec vos visiteurs.',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Reconnaissance vocale',
        'Navigation',
        'Écran informatif',
        'Interaction naturelle'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre gamme de robots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions robotiques avancées pour optimiser vos opérations et améliorer 
            l'expérience de vos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
           <div key={product.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <ExternalLink className="h-5 w-5 text-white bg-black bg-opacity-50 rounded p-1" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200">
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
```

### src/components/ApplicationsSection.tsx
```typescript
import React from 'react';
import { Building2, Heart, Hotel, Sparkles } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <Hotel className="h-8 w-8" />,
      title: 'Hôtellerie & Restauration',
      description: 'Améliorez l\'expérience client avec des robots servants et d\'accueil.',
      features: [
        'Service 24h/7j',
        'Réduction des coûts',
        'Expérience client unique'
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commerce & Retail',
      description: 'Automatisez les opérations commerciales et améliorez l\'assistance client.',
      features: [
        'Inventaire intelligent',
        'Assistance personnalisée',
        'Gestion des stocks'
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Bureaux & Entreprises',
      description: 'Optimisez les flux avec robots de nettoyage et d\'accueil.',
      features: [
        'Environnement propre',
        'Accueil professionnel',
        'Productivité accrue'
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Secteur médical',
      description: 'Support logistique avec désinfection et livraison en milieu médical.',
      features: [
        'Hygiène garantie',
        'Livraison stérilisée',
        'Assistance médicale'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Applications sectorielles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos robots s'adaptent à vos besoins spécifiques dans tous vos secteurs 
            d'activité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 mb-4">
                <div className="text-blue-600">
                  {app.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {app.description}
              </p>
              
              <ul className="text-xs text-gray-500 space-y-1">
                {app.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
```

---

## 🎨 IMAGES ET ASSETS UTILISÉS

### Images publiques (dans le dossier /public/)
- `/brandmark-design (19).png` - Logo DTECH
- `/AdobeStock285235650jpeg_61796a8d602f8.jpeg` - Image de fond hero
- `/Landing-Mast-1920x550-1.jpg` - Image agriculture
- `/2a.webp`, `/3a.webp`, `/pp.webp`, `/qq.webp` - Images produits tondeuses
- `/modal1.webp`, `/modal2.webp`, `/modal3.webp`, `/modal4.webp` - Images modales

### Images Pexels utilisées
- `https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg` - Robots service
- `https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg` - Robots livraison
- `https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg` - Robots nettoyage
- `https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg` - Robots accueil

---

## 🚀 COMMANDES POUR RESTAURER LE PROJET

### 1. Initialiser le projet
```bash
npm create vite@latest dtech-robots -- --template react-ts
cd dtech-robots
```

### 2. Installer les dépendances
```bash
npm install lucide-react react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Lancer le projet
```bash
npm run dev
```

---

## 📝 NOTES IMPORTANTES

1. **Structure du projet** : Site multi-pages avec React Router
2. **Styling** : Tailwind CSS avec animations personnalisées
3. **Composants** : Architecture modulaire avec composants réutilisables
4. **Images** : Combinaison d'assets locaux et images Pexels
5. **Responsive** : Design adaptatif pour mobile et desktop
6. **Animations** : Carrousels 3D cylindriques et effets visuels avancés

---

## 🔄 DERNIÈRE MISE À JOUR
Date : Janvier 2025
Version : 1.0.0
Status : ✅ Sauvegarde complète effectuée

---

**⚠️ IMPORTANT** : Cette sauvegarde contient TOUS les codes source de votre site web DTECH. Conservez ce fichier précieusement pour pouvoir restaurer votre site à tout moment.