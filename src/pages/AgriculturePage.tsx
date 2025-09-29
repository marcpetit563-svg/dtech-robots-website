import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Shield, Clock, ArrowRight, CheckCircle, Scissors, Droplets, Wind, Target, ChevronLeft, ChevronRight } from 'lucide-react';

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

const AgriculturePage = () => {
  const [activeTab, setActiveTab] = useState('tondeuses');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Navigation du carrousel
  const handleNextCard = () => {
    const products = activeTab === 'tondeuses' ? tondeusesProducts : dronesProducts;
    setCurrentCardIndex((prev) => (prev + 1) % products.length);
    pauseCarousel();
  };

  const handlePrevCard = () => {
    const products = activeTab === 'tondeuses' ? tondeusesProducts : dronesProducts;
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

  const tondeusesProducts = [
    {
      id: 0,
      name: 'Husqvarna Automower® 520',
      price: '2 899,00 €',
      images: ['/t5201.webp', '/3a.webp', '/qq.webp', '/pp.webp'],
      features: [
        'Jusqu\'à 2 200 m²',
        'Pentes jusqu\'à 45%',
        'GPS assisté',
        'Connectivité Bluetooth'
      ],
      description: 'Robot tondeuse intelligent pour jardins résidentiels avec navigation GPS assistée et connectivité avancée.',
      link: '/agriculture/husqvarna-automower-520'
    },
    {
      id: 1,
      name: 'Husqvarna CEORA® 546 EPOS®',
      price: '21 999,00 €',
      images: ['/3a.webp', '/qq.webp', '/pp.webp', '/2a.webp'],
      features: [
        'Navigation par satellite',
        'Tonte systématique',
        'Interface professionnelle',
        'Jusqu\'à 70 000 m²'
      ],
      description: 'Robot tondeuse 100% autonome (sans pilote) avec technologie EPOS®. Capable de tondre jusqu\'à 70 000 m² avec une précision parfaite, sans câble périphérique.',
      link: '/agriculture/tondeuses-autonomes'
    },
    {
      id: 2,
      name: 'Belrobotics BigMow',
      price: 'Sur devis',
      images: ['/qq.webp', '/3a.webp', '/pp.webp'],
      features: [
        'Jusqu\'à 5 hectares',
        'Robustesse extrême',
        'Maintenance simplifiée',
        'Connectivité avancée'
      ],
      description: 'Solution robuste pour l\'entretien de grandes surfaces avec une efficacité maximale.',
      link: '/agriculture/belrobotics-bigmow'
    },
    {
      id: 3,
      name: 'Husqvarna Automower® 435X AWD',
      price: '4 999,00 €',
      images: ['/2a.webp', '/3a.webp', '/qq.webp'],
      features: [
        'Traction intégrale',
        'Pentes jusqu\'à 70%',
        'GPS intégré',
        'Jusqu\'à 3 500 m²'
      ],
      description: 'Robot tondeuse 4 roues motrices pour terrains difficiles et pentes importantes.',
      link: '/agriculture/husqvarna-435x-awd'
    }
  ];

  const dronesProducts = [
    {
      id: 1,
      name: 'DJI Agras T40',
      price: '15 999,00 €',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Réservoir 40L',
        'Pulvérisation intelligente',
        'Cartographie 3D',
        'Jusqu\'à 25 ha/h'
      ],
      description: 'Drone pulvérisateur professionnel avec système de pulvérisation haute précision pour l\'agriculture moderne.',
      link: '/agriculture/dji-agras-t40'
    },
    {
      id: 2,
      name: 'XAG P100 Pro',
      price: '18 500,00 €',
      image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Intelligence artificielle',
        'Détection obstacles',
        'Pulvérisation variable',
        'Autonomie 18 min'
      ],
      description: 'Drone agricole avec IA intégrée pour une pulvérisation optimisée et respectueuse de l\'environnement.',
      link: '/agriculture/xag-p100-pro'
    },
    {
      id: 3,
      name: 'Yamaha FAZER R',
      price: '22 000,00 €',
      image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Capacité 32L',
        'GPS RTK',
        'Résistant aux intempéries',
        'Formation incluse'
      ],
      description: 'Drone pulvérisateur haut de gamme conçu pour les professionnels exigeants.',
      link: '/agriculture/yamaha-fazer-r'
    }
  ];

  const tondeusesAdvantages = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Tonte précise',
      description: 'Coupe uniforme et régulière pour un gazon parfait'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Autonomie totale',
      description: 'Fonctionnement 24h/24 sans intervention humaine'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sécurité avancée',
      description: 'Capteurs intelligents et protection antivol'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Écologique',
      description: 'Zéro émission et fonctionnement silencieux'
    }
  ];

  const dronesAdvantages = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Précision extrême',
      description: 'Pulvérisation ciblée avec réduction de 30% des produits'
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: 'Rapidité',
      description: 'Traitement jusqu\'à 25 hectares par heure'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: 'Économie',
      description: 'Réduction significative de la consommation d\'eau'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Efficacité',
      description: 'Intervention rapide et programmable'
    }
  ];

  const tabs = [
    { id: 'tondeuses', label: 'Tondeuses Autonomes', icon: <Scissors className="h-5 w-5" /> },
    { id: 'drones', label: 'Drones Pulvérisateurs', icon: <Droplets className="h-5 w-5" /> }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #f0f9f4 50%, #ecfdf5 100%)', minHeight: '100vh' }}>
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
                    ? tab.id === 'tondeuses'
                      ? 'border-green-600 text-green-600 bg-green-50'
                      : 'border-blue-600 text-blue-600 bg-blue-50'
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
            backgroundImage: activeTab === 'tondeuses' 
              ? 'url(/Landing-Mast-1920x550-1.jpg)' 
              : 'url(https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: activeTab === 'tondeuses' ? 'left center' : 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'tondeuses' ? 'bg-green-600' : 'bg-blue-600'
              }`}>
                {activeTab === 'tondeuses' ? '🌱 Nouvelle génération' : '🚁 Technologie avancée'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'tondeuses' ? (
                  <>
                    Tondeuses
                    <span className="block text-green-400">Autonomes</span>
                  </>
                ) : (
                  <>
                    Drones
                    <span className="block text-blue-400">Pulvérisateurs</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'tondeuses' 
                  ? 'Révolutionnez l\'entretien de vos espaces verts avec nos robots tondeuses intelligents'
                  : 'Optimisez vos traitements agricoles avec nos drones pulvérisateurs de précision'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'tondeuses' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Découvrir nos produits
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #f0f9f4 50%, #ecfdf5 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon vert en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-green-200/40 to-green-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'tondeuses' ? (
                    <>
                      Nos Robots Tondeuses
                    </>
                  ) : (
                    <>
                      Nos Drones Pulvérisateurs
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'tondeuses' 
                    ? 'Découvrez notre gamme de robots tondeuses professionnels, conçus pour tous types de terrains et surfaces'
                    : 'Solutions de pulvérisation aérienne pour une agriculture de précision et respectueuse de l\'environnement'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'tondeuses' ? tondeusesProducts : dronesProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'tondeuses'
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
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

          {activeTab === 'tondeuses' ? (
            <div className="cylinder-carousel relative">
              {/* Compteur de cartes */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg bg-green-600 bg-opacity-90 backdrop-blur-sm">
                  {currentCardIndex + 1} / {tondeusesProducts.length}
                </div>
              </div>
              
              {/* Flèches de navigation */}
              <button
                onClick={handlePrevCard}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-green-600 hover:bg-green-700 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={handleNextCard}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-green-600 hover:bg-green-700 text-white"
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
                {tondeusesProducts.map((product, index) => (
                  <div key={`${product.id}-${index}`} className="cylinder-card">
                    <ProductCard product={product} activeTab={activeTab} />
                  </div>
                ))}
              </div>
              
              {/* Indicateur de pause */}
              {isCarouselPaused && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg bg-green-600">
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
          ) : (
            <div className="cylinder-carousel relative">
              {/* Compteur de cartes */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg bg-blue-600 bg-opacity-90 backdrop-blur-sm">
                  {currentCardIndex + 1} / {dronesProducts.length}
                </div>
              </div>
              
              {/* Flèches de navigation */}
              <button
                onClick={handlePrevCard}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={handleNextCard}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-blue-600 hover:bg-blue-700 text-white"
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
                {dronesProducts.map((product, index) => (
                  <div key={`${product.id}-${index}`} className="cylinder-card">
                    <ProductCard product={product} activeTab={activeTab} />
                  </div>
                ))}
              </div>
              
              {/* Indicateur de pause */}
              {isCarouselPaused && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg bg-blue-600">
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
          )}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #f0f9f4 50%, #ecfdf5 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'tondeuses' 
                ? 'Pourquoi choisir nos robots tondeuses ?' 
                : 'Avantages des drones pulvérisateurs'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'tondeuses'
                ? 'Des avantages concrets pour transformer l\'entretien de vos espaces verts'
                : 'Une révolution technologique pour l\'agriculture moderne et durable'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'tondeuses' ? tondeusesAdvantages : dronesAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'tondeuses'
                    ? 'bg-green-100 group-hover:bg-green-600 group-hover:text-white'
                    : 'bg-blue-100 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'tondeuses'
                      ? 'text-green-600 group-hover:text-white'
                      : 'text-blue-600 group-hover:text-white'
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
        activeTab === 'tondeuses' 
          ? 'bg-gradient-to-r from-green-600 to-green-700' 
          : 'bg-gradient-to-r from-blue-600 to-blue-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'tondeuses' 
              ? 'Prêt à automatiser vos espaces verts ?' 
              : 'Prêt à moderniser votre agriculture ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'tondeuses' ? 'text-green-100' : 'text-blue-100'
          }`}>
            {activeTab === 'tondeuses'
              ? 'Contactez nos experts pour une étude personnalisée de vos besoins et découvrez la solution robotique adaptée à vos espaces'
              : 'Découvrez comment nos drones peuvent optimiser vos rendements tout en réduisant l\'impact environnemental'
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
        <div className={`relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100`}>
          <img 
            src={activeTab === 'tondeuses' ? product.images[0] : product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
                activeTab === 'tondeuses' ? 'text-green-600' : 'text-blue-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className={`w-full text-white py-2 px-3 font-medium transition-all duration-300 flex items-center justify-center group text-xs mt-auto shadow-md hover:shadow-lg ${
            activeTab === 'tondeuses' 
              ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
          }`}
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default AgriculturePage;