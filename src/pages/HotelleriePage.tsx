import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Star, Clock, Smile, ArrowRight, CheckCircle, Users, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

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

const HotelleriePage = () => {
  const [activeTab, setActiveTab] = useState('accueil');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Navigation du carrousel
  const handleNextCard = () => {
    const products = activeTab === 'accueil' ? accueilProducts : serviceProducts;
    setCurrentCardIndex((prev) => (prev + 1) % products.length);
    pauseCarousel();
  };

  const handlePrevCard = () => {
    const products = activeTab === 'accueil' ? accueilProducts : serviceProducts;
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

  const accueilProducts = [
    {
      id: 1,
      name: 'Robot Concierge Premium',
      price: '22 999,00 €',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interface multilingue',
        'Reconnaissance faciale',
        'Services personnalisés',
        'Base de données clients'
      ],
      description: 'Robot concierge intelligent pour accueil personnalisé et assistance 24h/24 avec reconnaissance faciale.',
      link: '/hotellerie/robot-concierge-premium'
    },
    {
      id: 2,
      name: 'Assistant Check-in Automatique',
      price: '18 500,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Enregistrement automatique',
        'Scan documents',
        'Remise clés digitales',
        'Gestion réservations'
      ],
      description: 'Station automatique pour check-in rapide avec scan de documents et remise de clés digitales.',
      link: '/hotellerie/assistant-checkin-automatique'
    },
    {
      id: 3,
      name: 'Guide Touristique Interactif',
      price: '16 800,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Informations locales',
        'Recommandations IA',
        'Réservations activités',
        'Cartes interactives'
      ],
      description: 'Robot guide touristique avec IA pour recommandations personnalisées et réservations d\'activités.',
      link: '/hotellerie/guide-touristique-interactif'
    }
  ];

  const serviceProducts = [
    {
      id: 1,
      name: 'Robot Room Service Deluxe',
      price: '25 999,00 €',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Navigation autonome',
        'Compartiments sécurisés',
        'Interaction client',
        'Livraison discrète'
      ],
      description: 'Robot de room service haut de gamme pour livraison autonome en chambre avec discrétion maximale.',
      link: '/hotellerie/robot-room-service-deluxe'
    },
    {
      id: 2,
      name: 'Assistant Bagagerie Smart',
      price: '19 800,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Transport sécurisé',
        'Suivi GPS',
        'Capacité 50kg',
        'Interface client'
      ],
      description: 'Robot assistant pour transport de bagages avec suivi GPS et sécurisation maximale.',
      link: '/hotellerie/assistant-bagagerie-smart'
    },
    {
      id: 3,
      name: 'Robot Nettoyage Chambres',
      price: '21 500,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Nettoyage complet',
        'Désinfection UV',
        'Programmation flexible',
        'Rapport qualité'
      ],
      description: 'Solution robotique pour nettoyage professionnel des chambres avec désinfection UV intégrée.',
      link: '/hotellerie/robot-nettoyage-chambres'
    }
  ];

  const accueilAdvantages = [
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Expérience premium',
      description: 'Accueil personnalisé et mémorable pour chaque client'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Disponibilité 24h/24',
      description: 'Service continu sans interruption jour et nuit'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Personnalisation',
      description: 'Services adaptés aux préférences de chaque client'
    },
    {
      icon: <Hotel className="h-8 w-8" />,
      title: 'Image moderne',
      description: 'Positionnement technologique et innovant'
    }
  ];

  const serviceAdvantages = [
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'Service efficace',
      description: 'Optimisation des opérations et réduction des délais'
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: 'Satisfaction client',
      description: 'Amélioration de l\'expérience et du confort'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Productivité',
      description: 'Libération du personnel pour tâches à valeur ajoutée'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Qualité constante',
      description: 'Standard de service uniforme et fiable'
    }
  ];

  const tabs = [
    { id: 'accueil', label: 'Accueil & Réception', icon: <Users className="h-5 w-5" /> },
    { id: 'service', label: 'Service & Conciergerie', icon: <Bell className="h-5 w-5" /> }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 50%, #d8b4fe 100%)', minHeight: '100vh' }}>
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
                    ? tab.id === 'accueil'
                      ? 'border-purple-600 text-purple-600 bg-purple-50'
                      : 'border-indigo-600 text-indigo-600 bg-indigo-50'
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
            backgroundImage: activeTab === 'accueil' 
              ? 'url(https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=1920)' 
              : 'url(https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'accueil' ? 'bg-purple-600' : 'bg-indigo-600'
              }`}>
                {activeTab === 'accueil' ? '🏨 Accueil innovant' : '🛎️ Service premium'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'accueil' ? (
                  <>
                    Robots
                    <span className="block text-purple-400">Accueil</span>
                  </>
                ) : (
                  <>
                    Solutions
                    <span className="block text-indigo-400">Service</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'accueil' 
                  ? 'Révolutionnez l\'accueil de vos clients avec nos robots intelligents'
                  : 'Optimisez vos services hôteliers avec nos solutions robotiques avancées'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'accueil' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 50%, #d8b4fe 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon violet en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-purple-200/40 to-purple-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'accueil' ? (
                    <>
                      Nos Robots Accueil
                    </>
                  ) : (
                    <>
                      Nos Solutions Service
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'accueil' 
                    ? 'Découvrez notre gamme de robots pour transformer l\'accueil de votre hôtel'
                    : 'Solutions innovantes pour optimiser tous vos services hôteliers'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'accueil' ? accueilProducts : serviceProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'accueil'
                            ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                            : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
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
                activeTab === 'accueil' ? 'bg-purple-600' : 'bg-indigo-600'
              } bg-opacity-90 backdrop-blur-sm`}>
                {currentCardIndex + 1} / {(activeTab === 'accueil' ? accueilProducts : serviceProducts).length}
              </div>
            </div>
            
            {/* Flèches de navigation */}
            <button
              onClick={handlePrevCard}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'accueil'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={handleNextCard}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'accueil'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
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
              {(activeTab === 'accueil' ? accueilProducts : serviceProducts).map((product, index) => (
                <div key={`${product.id}-${index}`} className="cylinder-card">
                  <ProductCard product={product} activeTab={activeTab} />
                </div>
              ))}
            </div>
            
            {/* Indicateur de pause */}
            {isCarouselPaused && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg ${
                  activeTab === 'accueil' ? 'bg-purple-600' : 'bg-indigo-600'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 50%, #d8b4fe 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'accueil' 
                ? 'Pourquoi choisir nos robots accueil ?' 
                : 'Avantages de nos solutions service'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'accueil'
                ? 'Des avantages concrets pour transformer l\'expérience de vos clients'
                : 'Une révolution technologique pour l\'hôtellerie moderne'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'accueil' ? accueilAdvantages : serviceAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'accueil'
                    ? 'bg-purple-100 group-hover:bg-purple-600 group-hover:text-white'
                    : 'bg-indigo-100 group-hover:bg-indigo-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'accueil'
                      ? 'text-purple-600 group-hover:text-white'
                      : 'text-indigo-600 group-hover:text-white'
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
        activeTab === 'accueil' 
          ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
          : 'bg-gradient-to-r from-indigo-600 to-indigo-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'accueil' 
              ? 'Prêt à révolutionner votre accueil ?' 
              : 'Prêt à moderniser vos services ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'accueil' ? 'text-purple-100' : 'text-indigo-100'
          }`}>
            {activeTab === 'accueil'
              ? 'Contactez nos experts pour découvrir comment nos robots peuvent transformer l\'expérience client'
              : 'Découvrez comment nos solutions peuvent optimiser tous vos services hôteliers'
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
            src={product.image} 
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
                activeTab === 'accueil' ? 'text-purple-600' : 'text-indigo-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className={`w-full text-white py-2 px-3 font-medium transition-all duration-300 flex items-center justify-center group text-xs mt-auto shadow-md hover:shadow-lg ${
            activeTab === 'accueil' 
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' 
              : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800'
          }`}
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default HotelleriePage;