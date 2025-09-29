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
    { name: 'Hôtellerie', path: '/hotellerie' },
    { name: 'Beauté & Bien-être', path: '/beaute' },
    { name: 'Agriculture & Espaces verts', path: '/agriculture' },
    { name: 'Service & Entretien', path: '/service-entretien' }
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
        backgroundImage: 'url(/home2.webp)',
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