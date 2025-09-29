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
    { name: 'Hôtellerie', path: '/hotellerie' },
    { name: 'Beauté & Bien-être', path: '/beaute' },
    { name: 'Agriculture & Espaces verts', path: '/agriculture' },
    { name: 'Service & Entretien', path: '/service-entretien' }
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