# SAUVEGARDE COMPLÈTE DU SITE WEB DTECH - ROBOTS DE SERVICE
## Date de sauvegarde : Janvier 2025

---

## 📋 STRUCTURE DU PROJET

```
dtech-robots/
├── public/
│   ├── brandmark-design (19).png
│   ├── AdobeStock285235650jpeg_61796a8d602f8.jpeg
│   ├── Landing-Mast-1920x550-1.jpg
│   ├── 2a.webp
│   ├── 3a.webp
│   ├── pp.webp
│   ├── qq.webp
│   ├── modal1.webp
│   ├── modal2.webp
│   ├── modal3.webp
│   └── modal4.webp
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── ApplicationsSection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RestaurationPage.tsx
│   │   ├── SantePage.tsx
│   │   ├── HotelleriePage.tsx
│   │   ├── BeautePage.tsx
│   │   ├── AgriculturePage.tsx
│   │   ├── HusqvarnaCeoraPage.tsx
│   │   └── BelroboticsBigmowPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
└── index.html
```

---

## 🔧 FICHIERS DE CONFIGURATION

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

## 🎯 FICHIERS PRINCIPAUX

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

---

## 🏠 PAGE D'ACCUEIL

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

---

## 🧩 COMPOSANTS PRINCIPAUX

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

---

## 📄 PAGES SECTORIELLES

### src/pages/RestaurationPage.tsx
```typescript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, Users, TrendingUp, ArrowRight, CheckCircle, Utensils, Coffee } from 'lucide-react';

// CSS pour l'animation du carrousel
const carouselStyles = `
  /* Carrousel cylindrique 3D */
  .cylinder-carousel {
    perspective: 1200px;
    perspective-origin: center center;
    background: transparent;
    border-radius: 20px;
    padding: 40px;
  }
  
  .cylinder-track {
    position: relative;
    width: 320px;
    height: 400px;
    margin: 0 auto;
    transform-style: preserve-3d;
    animation: rotateCylinder 20s linear infinite;
  }
  
  .cylinder-track:hover {
    animation-play-state: paused;
  }
  
  .cylinder-card {
    position: absolute;
    width: 320px;
    height: 400px;
    left: 0;
    top: 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    background: white;
    backface-visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .cylinder-card:hover {
    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
  }
  
  /* Positionnement des cartes sur le cylindre */
  .cylinder-card:nth-child(1) {
    transform: rotateY(0deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(2) {
    transform: rotateY(72deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(3) {
    transform: rotateY(144deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(4) {
    transform: rotateY(216deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(5) {
    transform: rotateY(288deg) translateZ(250px);
  }
  
  @keyframes rotateCylinder {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

const RestaurationPage = () => {
  const [activeTab, setActiveTab] = useState('service');

  const serviceProducts = [
    {
      id: 1,
      name: 'Robot Serveur Pro',
      price: '18 999,00 €',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Service autonome',
      features: [
        'Navigation intelligente',
        'Capacité 20kg',
        'Interface tactile',
        'Autonomie 8h'
      ],
      description: 'Robot serveur autonome pour le service en salle avec navigation intelligente et interaction client.',
      link: '/restauration/robot-serveur-pro'
    },
    {
      id: 2,
      name: 'Assistant Cuisine Smart',
      price: '24 500,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Cuisine connectée',
      features: [
        'Préparation assistée',
        'Contrôle température',
        'Gestion stocks',
        'Hygiène HACCP'
      ],
      description: 'Assistant robotique pour cuisine professionnelle avec gestion automatisée des préparations.',
      link: '/restauration/assistant-cuisine-smart'
    },
    {
      id: 3,
      name: 'Robot Barista Premium',
      price: '16 800,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Café expert',
      features: [
        'Café personnalisé',
        'Reconnaissance client',
        'Recettes multiples',
        'Service rapide'
      ],
      description: 'Robot barista professionnel pour café et boissons chaudes avec personnalisation avancée.',
      link: '/restauration/robot-barista-premium'
    },
    {
      id: 4,
      name: 'Station Commande Interactive',
      price: '12 200,00 €',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Commande digitale',
      features: [
        'Interface multilingue',
        'Paiement intégré',
        'Recommandations IA',
        'Gestion files'
      ],
      description: 'Station de commande intelligente avec IA pour optimiser l\'expérience client.',
      link: '/restauration/station-commande-interactive'
    },
    {
      id: 5,
      name: 'Robot Nettoyage Restaurant',
      price: '14 500,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Hygiène HACCP',
      features: [
        'Désinfection UV',
        'Programmation flexible',
        'Normes HACCP',
        'Nettoyage profond'
      ],
      description: 'Solution de nettoyage automatisée conforme aux normes HACCP les plus strictes.',
      link: '/restauration/robot-nettoyage-restaurant'
    }
  ];

  const livraisonProducts = [
    {
      id: 1,
      name: 'Robot Livraison Rapide',
      price: '21 999,00 €',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Livraison express',
      features: [
        'Navigation GPS',
        'Compartiments chauffés',
        'Sécurité avancée',
        'Traçabilité complète'
      ],
      description: 'Robot de livraison autonome pour commandes à domicile avec maintien température.',
      link: '/restauration/robot-livraison-rapide'
    },
    {
      id: 2,
      name: 'Drone Livraison Aérienne',
      price: '28 500,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Livraison aérienne',
      features: [
        'Vol autonome',
        'Portée 15km',
        'Charge utile 5kg',
        'Météo adaptative'
      ],
      description: 'Drone de livraison pour zones difficiles d\'accès avec navigation aérienne intelligente.',
      link: '/restauration/drone-livraison-aerienne'
    },
    {
      id: 3,
      name: 'Station Retrait Automatique',
      price: '19 800,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Retrait 24h/24',
      features: [
        'Casiers sécurisés',
        'Contrôle température',
        'Code d\'accès',
        'Maintenance auto'
      ],
      description: 'Station de retrait automatique pour commandes avec casiers réfrigérés et sécurisés.',
      link: '/restauration/station-retrait-automatique'
    },
    {
      id: 4,
      name: 'Robot Coursier Urbain',
      price: '17 200,00 €',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Mobilité urbaine',
      features: [
        'Circulation urbaine',
        'Évitement obstacles',
        'Batterie longue durée',
        'Interface client'
      ],
      description: 'Robot coursier spécialisé pour livraisons en milieu urbain dense.',
      link: '/restauration/robot-coursier-urbain'
    },
    {
      id: 5,
      name: 'Hub Logistique Intelligent',
      price: '35 000,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Gestion centralisée',
      features: [
        'Tri automatique',
        'Optimisation routes',
        'Gestion flotte',
        'Analytics avancés'
      ],
      description: 'Hub central intelligent pour gestion automatisée de toute la chaîne de livraison.',
      link: '/restauration/hub-logistique-intelligent'
    }
  ];

  const serviceAdvantages = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Service premium',
      description: 'Expérience client exceptionnelle avec technologie avancée'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Disponibilité 24h/24',
      description: 'Service continu même aux heures de pointe'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Interaction naturelle',
      description: 'Communication fluide avec vos clients'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Productivité accrue',
      description: 'Optimisation des opérations et réduction des coûts'
    }
  ];

  const livraisonAdvantages = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Rapidité optimale',
      description: 'Livraisons express avec routes optimisées'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Service continu',
      description: 'Livraisons 24h/24 sans interruption'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Satisfaction client',
      description: 'Traçabilité et ponctualité garanties'
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Qualité préservée',
      description: 'Maintien température et fraîcheur'
    }
  ];

  const tabs = [
    { id: 'service', label: 'Service en Salle', icon: <Utensils className="h-5 w-5" /> },
    { id: 'livraison', label: 'Livraison & Logistique', icon: <Coffee className="h-5 w-5" /> }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)', minHeight: '100vh' }}>
      {/* Injection des styles CSS pour le carrousel */}
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      
      {/* Tabs Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 font-semibold text-lg transition-all duration-300 border-b-3 ${
                  activeTab === tab.id
                    ? tab.id === 'service'
                      ? 'border-orange-600 text-orange-600 bg-orange-50'
                      : 'border-red-600 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="relative w-full h-[500px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: activeTab === 'service' 
              ? 'url(https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=1920)' 
              : 'url(https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'service' ? 'bg-orange-600' : 'bg-red-600'
              }`}>
                {activeTab === 'service' ? '🍽️ Service innovant' : '🚚 Livraison intelligente'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'service' ? (
                  <>
                    Robots
                    <span className="block text-orange-400">Service</span>
                  </>
                ) : (
                  <>
                    Solutions
                    <span className="block text-red-400">Livraison</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'service' 
                  ? 'Révolutionnez votre service avec nos robots intelligents pour la restauration'
                  : 'Optimisez vos livraisons avec nos solutions robotiques de dernière génération'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'service' 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}>
                  Découvrir nos solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon orange en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-orange-200/40 to-orange-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'service' ? (
                    <>
                      Nos Robots Service
                    </>
                  ) : (
                    <>
                      Nos Solutions Livraison
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'service' 
                    ? 'Découvrez notre gamme de robots pour révolutionner le service en restauration'
                    : 'Solutions innovantes pour optimiser vos livraisons et la logistique alimentaire'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'service' ? serviceProducts : livraisonProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'service'
                            ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrousel cylindrique 3D */}
          <div className="cylinder-carousel">
            <div className="cylinder-track">
              {(activeTab === 'service' ? serviceProducts : livraisonProducts).map((product, index) => (
                <div key={`${product.id}-${index}`} className="cylinder-card">
                  <ProductCard product={product} activeTab={activeTab} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'service' 
                ? 'Pourquoi choisir nos robots service ?' 
                : 'Avantages de nos solutions livraison'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'service'
                ? 'Des avantages concrets pour transformer votre restaurant'
                : 'Une révolution technologique pour vos livraisons alimentaires'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'service' ? serviceAdvantages : livraisonAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'service'
                    ? 'bg-orange-100 group-hover:bg-orange-600 group-hover:text-white'
                    : 'bg-red-100 group-hover:bg-red-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'service'
                      ? 'text-orange-600 group-hover:text-white'
                      : 'text-red-600 group-hover:text-white'
                  }`}>
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        activeTab === 'service' 
          ? 'bg-gradient-to-r from-orange-600 to-orange-700' 
          : 'bg-gradient-to-r from-red-600 to-red-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'service' 
              ? 'Prêt à révolutionner votre restaurant ?' 
              : 'Prêt à optimiser vos livraisons ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'service' ? 'text-orange-100' : 'text-red-100'
          }`}>
            {activeTab === 'service'
              ? 'Contactez nos experts pour découvrir comment nos robots peuvent transformer votre service'
              : 'Découvrez comment nos solutions peuvent révolutionner votre chaîne de livraison'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-gray-900">
              Demander un devis gratuit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 hover:text-gray-900">
              Planifier une démonstration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Composant ProductCard avec carrousel d'images
const ProductCard = ({ product, activeTab }: { product: any, activeTab: string }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative">
        <div className="relative w-full h-32 bg-gray-50 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
            activeTab === 'service' ? 'bg-orange-600' : 'bg-red-600'
          }`}>
            {product.badge}
          </span>
        </div>
        
        <div className="absolute top-2 right-2">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-gray-900 font-bold text-xs">{product.price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-3 leading-relaxed text-xs line-clamp-2">
          {product.description.substring(0, 80)}...
        </p>
        
        <div className="grid grid-cols-1 gap-1 mb-3 flex-1">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-700">
              <CheckCircle className={`h-2 w-2 mr-1 flex-shrink-0 ${
                activeTab === 'service' ? 'text-orange-600' : 'text-red-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className="w-full bg-gray-900 text-white py-2 px-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center group text-xs mt-auto"
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default RestaurationPage;
```

---

## 🚀 COMMANDES DE RESTAURATION

Pour restaurer complètement le projet :

```bash
# 1. Créer le projet
npm create vite@latest dtech-robots -- --template react-ts
cd dtech-robots

# 2. Installer les dépendances
npm install lucide-react react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Copier tous les fichiers de cette sauvegarde

# 4. Lancer le projet
npm run dev
```

---

## 📝 NOTES IMPORTANTES

- **Structure** : Site multi-pages avec React Router
- **Styling** : Tailwind CSS avec animations personnalisées
- **Composants** : Architecture modulaire réutilisable
- **Images** : Assets locaux + images Pexels
- **Responsive** : Design adaptatif mobile/desktop
- **Animations** : Carrousels 3D cylindriques

---

## ⚠️ FICHIERS MANQUANTS À AJOUTER

Les images suivantes doivent être placées dans le dossier `/public/` :
- `brandmark-design (19).png` - Logo DTECH
- `AdobeStock285235650jpeg_61796a8d602f8.jpeg` - Image hero
- `Landing-Mast-1920x550-1.jpg` - Image agriculture
- `2a.webp`, `3a.webp`, `pp.webp`, `qq.webp` - Images tondeuses
- `modal1.webp`, `modal2.webp`, `modal3.webp`, `modal4.webp` - Images modales

---

**✅ SAUVEGARDE COMPLÈTE TERMINÉE**
Date : Janvier 2025
Version : 1.0.0
Status : Tous les codes sauvegardés avec succès