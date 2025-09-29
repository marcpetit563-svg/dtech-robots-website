import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Clock, Users, ArrowRight, CheckCircle, Scissors, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

// CSS pour l'animation du carrousel
const carouselStyles = `
  /* Carrousel cylindrique 3D */
  .cylinder-carousel {
    perspective: 1200px;
    perspective-origin: center center;
    background: transparent;
    border-radius: 20px;
    padding: 80px;
  }
  
  .cylinder-track {
    position: relative;
    width: 350px;
    height: 450px;
    margin: 0 auto;
    transform-style: preserve-3d;
  }
  
  .cylinder-track.rotating {
    animation: rotateCylinder 20s linear infinite;
  }
  
  .cylinder-card {
    position: absolute;
    width: 350px;
    height: 450px;
    left: 0;
    top: 0;
    border-radius: 0px;
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
    transform: rotateY(120deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(3) {
    transform: rotateY(240deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(4) {
    transform: rotateY(0deg) translateZ(250px);
  }
  
  .cylinder-card:nth-child(5) {
    transform: rotateY(120deg) translateZ(250px);
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

const BeautePage = () => {
  const [activeTab, setActiveTab] = useState('soins');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Navigation du carrousel
  const handleNextCard = () => {
    const products = activeTab === 'soins' ? soinsProducts : bienEtreProducts;
    setCurrentCardIndex((prev) => (prev + 1) % products.length);
    pauseCarousel();
  };

  const handlePrevCard = () => {
    const products = activeTab === 'soins' ? soinsProducts : bienEtreProducts;
    setCurrentCardIndex((prev) => (prev - 1 + products.length) % products.length);
    pauseCarousel();
  };

  const pauseCarousel = () => {
    setIsCarouselPaused(true);
    setCountdown(10);
    
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsCarouselPaused(false);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Nettoyer le timeout au démontage du composant
  React.useEffect(() => {
    // Reset rotation angle when tab changes
    setCurrentCardIndex(0);
    setIsCarouselPaused(false);
    setCountdown(10);
  }, [activeTab]);

  const soinsProducts = [
    {
      id: 1,
      name: 'NailPro Perfect',
      price: '15 999,00 €',
      image: '/65c2c349a5acf1be9240b710_10B_PR_Image_Page14_noshadow_update.png',
      features: [
        'Retrait du vernis à ongles',
        'Gestion des cuticules',
        'Façonnage et limage',
        'Application de vernis à ongles',
        'Séchage rapide intégré'
      ],
      description: 'Votre manucure complète sans aucune intervention humaine.',
      link: '/beaute/robot-massage-therapeutique'
    },
  ];

  const bienEtreProducts = [
    {
      id: 1,
      name: 'NovaSkin 4D',
      price: '32 999,00 €',
      image: '/1-1B3JPR-42c_500_500.webp',
      features: [
        'Épilation laser 4D',
        'Capteurs intelligents',
        'Traitement personnalisé',
        'Résultats durables'
      ],
      description: 'Technologie révolutionnaire d\'épilation laser 4D avec intelligence artificielle pour des résultats optimaux.',
      link: '/beaute/novaskin-4d'
    }
  ];

  const soinsAdvantages = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Précision parfaite',
      description: 'Soins d\'une précision inégalée grâce à la robotique'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Personnalisation',
      description: 'Traitements adaptés à chaque type de peau et besoin'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Disponibilité 24h/24',
      description: 'Services disponibles à tout moment pour vos clients'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expérience premium',
      description: 'Offrez une expérience unique et luxueuse'
    }
  ];

  const bienEtreAdvantages = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Bien-être optimal',
      description: 'Relaxation profonde avec technologies avancées'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Thérapies innovantes',
      description: 'Approches thérapeutiques de nouvelle génération'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Efficacité prouvée',
      description: 'Résultats mesurables et durables'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Accompagnement',
      description: 'Suivi personnalisé et guidance intelligente'
    }
  ];

  const tabs = [
    { id: 'soins', label: 'Manucure Automatique', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'bienetre', label: 'Technologies d\'épilation', icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)', minHeight: '100vh' }}>
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
                    ? tab.id === 'soins'
                      ? 'border-pink-600 text-pink-600 bg-pink-50'
                      : 'border-purple-600 text-purple-600 bg-purple-50'
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
            backgroundImage: activeTab === 'soins' 
              ? 'url(https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=1920)' 
              : 'url(https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'soins' ? 'bg-pink-600' : 'bg-purple-600'
              }`}>
                {activeTab === 'soins' ? '✨ Innovation beauté' : '🧘 Bien-être avancé'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'soins' ? (
                  <>
                    Robots
                    <span className="block text-pink-400">Beauté</span>
                  </>
                ) : (
                  <>
                    Solutions
                    <span className="block text-purple-400">Bien-être</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'soins' 
                  ? 'Révolutionnez vos soins de beauté avec nos robots intelligents et précis'
                  : 'Créez des expériences de bien-être uniques avec nos technologies avancées'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'soins' 
                    ? 'bg-pink-600 text-white hover:bg-pink-700' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon rose en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-pink-200/40 to-pink-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'soins' ? (
                    <>
                      Nos Robots Beauté
                    </>
                  ) : (
                    <>
                      Nos Solutions Bien-être
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'soins' 
                    ? 'Découvrez notre gamme de robots beauté professionnels pour des soins d\'exception'
                    : 'Solutions innovantes pour créer des espaces de détente et de bien-être uniques'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'soins' ? soinsProducts : bienEtreProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'soins'
                            ? 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
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
          <div className="cylinder-carousel relative">
            {/* Compteur de cartes */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className={`px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg ${
                activeTab === 'soins' ? 'bg-pink-600' : 'bg-purple-600'
              } bg-opacity-90 backdrop-blur-sm`}>
                {currentCardIndex + 1} / {(activeTab === 'soins' ? soinsProducts : bienEtreProducts).length}
              </div>
            </div>
            
            {/* Flèches de navigation */}
            <button
              onClick={handlePrevCard}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'soins'
                  ? 'bg-pink-600 hover:bg-pink-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={handleNextCard}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'soins'
                  ? 'bg-pink-600 hover:bg-pink-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div 
              className={`cylinder-track ${!isCarouselPaused ? 'rotating' : ''}`}
              style={{
                transform: `rotateY(${-currentCardIndex * 120}deg)`,
                animationPlayState: isCarouselPaused ? 'paused' : 'running'
              }}
              onMouseEnter={pauseCarousel}
            >
              {(activeTab === 'soins' ? soinsProducts : bienEtreProducts).map((product, index) => (
                <div key={`${product.id}-${index}`} className="cylinder-card">
                  <ProductCard product={product} activeTab={activeTab} />
                </div>
              ))}
            </div>
            
            {/* Indicateur de pause */}
            {isCarouselPaused && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg ${
                  activeTab === 'soins' ? 'bg-pink-600' : 'bg-purple-600'
                }`}>
                  <div className="flex items-center space-x-2">
                    <span>Carrousel en pause - Reprise dans</span>
                    <div className="bg-white bg-opacity-20 px-2 py-1 rounded text-lg font-bold">
                      {countdown}s
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'soins' 
                ? 'Pourquoi choisir nos robots beauté ?' 
                : 'Avantages de nos solutions bien-être'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'soins'
                ? 'Des avantages concrets pour transformer votre institut de beauté'
                : 'Une révolution technologique pour le bien-être et la relaxation'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'soins' ? soinsAdvantages : bienEtreAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'soins'
                    ? 'bg-pink-100 group-hover:bg-pink-600 group-hover:text-white'
                    : 'bg-purple-100 group-hover:bg-purple-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'soins'
                      ? 'text-pink-600 group-hover:text-white'
                      : 'text-purple-600 group-hover:text-white'
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
        activeTab === 'soins' 
          ? 'bg-gradient-to-r from-pink-600 to-pink-700' 
          : 'bg-gradient-to-r from-purple-600 to-purple-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'soins' 
              ? 'Prêt à révolutionner votre institut ?' 
              : 'Prêt à créer des expériences uniques ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'soins' ? 'text-pink-100' : 'text-purple-100'
          }`}>
            {activeTab === 'soins'
              ? 'Contactez nos experts pour découvrir comment nos robots peuvent transformer vos services de beauté'
              : 'Découvrez comment nos solutions peuvent créer des espaces de bien-être exceptionnels'
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
    <div className="h-full flex flex-col bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <div className={`relative w-full h-48 overflow-hidden ${
          product.image === '/65c2c349a5acf1be9240b710_10B_PR_Image_Page14_noshadow_update.png'
            ? 'bg-white' 
           : product.image === '/1-1B3JPR-42c_500_500.webp'
           ? 'bg-white'
            : 'bg-gradient-to-br from-gray-50 to-gray-100'
        }`}>
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full transition-transform duration-300 hover:scale-110 ${
              product.image === '/65c2c349a5acf1be9240b710_10B_PR_Image_Page14_noshadow_update.png'
                ? 'object-contain transform scale-75'
               : product.image === '/1-1B3JPR-42c_500_500.webp'
               ? 'object-contain transform scale-75'
                : 'object-cover'
            }`}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
      </div>
      
      <div className="p-5 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xs font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 mb-2 leading-relaxed text-xs line-clamp-2">
          {product.description.substring(0, 60)}...
        </p>
        
        <div className="grid grid-cols-1 gap-0.5 mb-3 flex-1">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <CheckCircle className={`h-2 w-2 mr-1.5 flex-shrink-0 ${
                activeTab === 'soins' ? 'text-pink-600' : 'text-purple-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className={`w-full text-white py-2 px-3 font-medium transition-all duration-300 flex items-center justify-center group text-xs mt-auto shadow-md hover:shadow-lg ${
            activeTab === 'soins' 
              ? 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800' 
              : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
          }`}
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default BeautePage;