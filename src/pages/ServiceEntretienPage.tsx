import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, Clock, Users, ArrowRight, CheckCircle, Settings, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

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

const ServiceEntretienPage = () => {
  const [activeTab, setActiveTab] = useState('nettoyage');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const nettoyageProducts = [
    {
      id: 1,
      name: 'Keenon Robotics - Kleenbot C30',
      price: '8 700,00 €',
      image: '/robbo zoom 3.png',
      features: [
        'Désinfection UV',
        'Programmation flexible',
        'Normes HACCP',
        'Nettoyage profond'
      ],
      description: 'Solution de nettoyage automatisée conforme aux normes HACCP les plus strictes.',
      link: '/service-entretien/robot-nettoyage-restaurant'
    },
    {
      id: 2,
      name: 'PUDU CC1',
      price: '9 800,00 €',
      image: '/1.png',
      features: [
        'Navigation SLAM',
        'Nettoyage 3-en-1',
        'Autonomie 6h',
        'Contrôle mobile'
      ],
      description: 'Robot de nettoyage compact avec navigation SLAM et système de nettoyage 3-en-1.',
      link: '/service-entretien/pudu-cc1'
    },
    {
      id: 3,
      name: 'SPARKOZ TN70',
      price: '33 899,00 €',
      image: '/TN10sebotics.png',
      features: [
        'Navigation IA avancée',
        'Aspiration 30 000 Pa',
        'Autonomie 12h',
        'Désinfection UV'
      ],
      description: 'Robot de nettoyage industriel avec navigation IA avancée et système de désinfection intégré.',
      link: '/service-entretien/sparkoz-tn70'
    },
    {
      id: 4,
      name: 'SPARKOZ TN10',
      price: '12 500,00 €',
      image: '/TN10sebotics.png',
      features: [
        'Navigation LiDAR',
        'Nettoyage 4-en-1',
        'Autonomie 5h',
        'Mode manuel'
      ],
      description: 'Robot de nettoyage compact avec navigation LiDAR et système 4-en-1.',
      link: '/service-entretien/sparkoz-tn10'
    }
  ];

  const maintenanceProducts = [
    {
      id: 1,
      name: 'Assistant Technique Mobile',
      price: '15 500,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Diagnostic intelligent',
        'Outils intégrés',
        'Base de données',
        'Assistance à distance'
      ],
      description: 'Assistant robotique mobile pour support technique et diagnostic intelligent.',
      link: '/service-entretien/assistant-technique-mobile'
    },
    {
      id: 2,
      name: 'Robot Inspection Qualité',
      price: '22 800,00 €',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Vision artificielle',
        'Mesures précises',
        'Conformité normes',
        'Traçabilité complète'
      ],
      description: 'Robot d\'inspection qualité avec vision artificielle pour contrôles automatisés.',
      link: '/service-entretien/robot-inspection-qualite'
    },
    {
      id: 3,
      name: 'Station Service Automatique',
      price: '28 200,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Maintenance automatique',
        'Réparations mineures',
        'Gestion pièces',
        'Suivi performance'
      ],
      description: 'Station de service automatique pour maintenance et réparations mineures.',
      link: '/service-entretien/station-service-automatique'
    },
    {
      id: 4,
      name: 'Robot Calibrage Précision',
      price: '24 800,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Calibrage automatique',
        'Mesures précises',
        'Certification ISO',
        'Traçabilité complète'
      ],
      description: 'Robot de calibrage automatique avec mesures haute précision et certification ISO.',
      link: '/service-entretien/robot-calibrage-precision'
    }
  ];

  const nettoyageAdvantages = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Nettoyage professionnel',
      description: 'Solutions de nettoyage adaptées à tous les environnements'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Autonomie totale',
      description: 'Fonctionnement 24h/24 sans intervention humaine'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Hygiène garantie',
      description: 'Respect des normes sanitaires les plus strictes'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Productivité accrue',
      description: 'Libération du personnel pour tâches à valeur ajoutée'
    }
  ];

  const maintenanceAdvantages = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Maintenance préventive',
      description: 'Anticipation des pannes et optimisation des performances'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Disponibilité maximale',
      description: 'Réduction des temps d\'arrêt et continuité de service'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sécurité renforcée',
      description: 'Interventions sécurisées dans tous les environnements'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expertise technique',
      description: 'Support spécialisé et formation du personnel'
    }
  ];

  const tabs = [
    { id: 'nettoyage', label: 'Robot nettoyeur autonome', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'maintenance', label: 'Maintenance & Inspection', icon: <Wrench className="h-5 w-5" /> }
  ];

  // Navigation du carrousel
  const handleNextCard = () => {
    const products = activeTab === 'nettoyage' ? nettoyageProducts : maintenanceProducts;
    setCurrentCardIndex((prev) => (prev + 1) % products.length);
    pauseCarousel();
  };

  const handlePrevCard = () => {
    const products = activeTab === 'nettoyage' ? nettoyageProducts : maintenanceProducts;
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

  return (
    <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)', minHeight: '100vh' }}>
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
                    ? tab.id === 'maintenance'
                      ? 'border-gray-600 text-gray-600 bg-gray-50'
                      : 'border-orange-600 text-orange-600 bg-orange-50'
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
            backgroundImage: activeTab === 'nettoyage' 
              ? 'url(/acueuill netoyeur.png)' 
              : 'url(https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'nettoyage' ? 'bg-orange-600' : 'bg-gray-600'
              }`}>
                {activeTab === 'nettoyage' ? '🧹 Nettoyage intelligent' : '🔧 Maintenance intelligente'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'nettoyage' ? (
                  <>
                    Robots
                    <span className="block text-orange-400">Nettoyage</span>
                  </>
                ) : (
                  <>
                    Solutions
                    <span className="block text-gray-400">Maintenance</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'nettoyage' 
                  ? 'Révolutionnez le nettoyage avec nos robots autonomes professionnels'
                  : 'Optimisez la maintenance de vos équipements avec nos robots intelligents'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'nettoyage' 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon gris en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100/30 via-slate-200/40 to-slate-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'nettoyage' ? (
                    <>
                      Nos Robots Nettoyage
                    </>
                  ) : (
                    <>
                      Nos Solutions Maintenance
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'nettoyage' 
                    ? 'Découvrez notre gamme de robots nettoyeurs autonomes pour tous les environnements professionnels'
                    : 'Découvrez notre gamme de robots pour optimiser la maintenance de vos équipements'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'nettoyage' ? nettoyageProducts : maintenanceProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'nettoyage'
                            ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                activeTab === 'nettoyage' ? 'bg-orange-600' : 'bg-gray-600'
              } bg-opacity-90 backdrop-blur-sm`}>
                {currentCardIndex + 1} / {activeTab === 'nettoyage' ? nettoyageProducts.length : maintenanceProducts.length}
              </div>
            </div>
            
            {/* Flèches de navigation */}
            <button
              onClick={handlePrevCard}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'nettoyage'
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={handleNextCard}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'nettoyage'
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div 
              className={`cylinder-track ${!isCarouselPaused ? 'rotating' : ''}`}
              style={{
                transform: `rotateY(${-currentCardIndex * 72}deg)`,
                animationPlayState: isCarouselPaused ? 'paused' : 'running'
              }}
              onMouseEnter={pauseCarousel}
            >
              {(activeTab === 'nettoyage' ? nettoyageProducts : maintenanceProducts).map((product, index) => (
                <div key={`${product.id}-${index}`} className="cylinder-card">
                  <ProductCard product={product} activeTab={activeTab} />
                </div>
              ))}
            </div>
            
            {/* Indicateur de pause */}
            {isCarouselPaused && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg ${
                  activeTab === 'nettoyage' ? 'bg-orange-600' : 'bg-gray-600'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'nettoyage' 
                ? 'Pourquoi choisir nos robots nettoyage ?' 
                : 'Pourquoi choisir nos solutions maintenance ?'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'nettoyage'
                ? 'Des avantages concrets pour transformer le nettoyage de vos espaces'
                : 'Des avantages concrets pour optimiser la maintenance de vos équipements'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'nettoyage' ? nettoyageAdvantages : maintenanceAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'nettoyage'
                    ? 'bg-orange-100 group-hover:bg-orange-600 group-hover:text-white'
                    : 'bg-gray-100 group-hover:bg-gray-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'nettoyage'
                      ? 'text-orange-600 group-hover:text-white'
                      : 'text-gray-600 group-hover:text-white'
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
        activeTab === 'nettoyage' 
          ? 'bg-gradient-to-r from-orange-600 to-orange-700' 
          : 'bg-gradient-to-r from-gray-600 to-gray-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'nettoyage' 
              ? 'Prêt à automatiser votre nettoyage ?' 
              : 'Prêt à optimiser votre maintenance ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'nettoyage' ? 'text-orange-100' : 'text-gray-100'
          }`}>
            {activeTab === 'nettoyage'
              ? 'Contactez nos experts pour découvrir comment nos robots peuvent transformer votre nettoyage'
              : 'Contactez nos experts pour découvrir comment nos robots peuvent optimiser votre maintenance'
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
          product.image === '/robbo zoom 3.png' || product.image === '/1.png'
            ? 'bg-white' 
            : 'bg-gradient-to-br from-gray-50 to-gray-100'
        }`}>
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full transition-transform duration-300 hover:scale-110 ${
              product.image === '/robbo zoom 3.png' 
                ? 'object-contain transform scale-75' 
               : product.image === '/TN10sebotics.png'
               ? 'object-contain transform scale-75'
               : product.image === '/TN10-vorne.webp'
               ? 'object-contain transform scale-75'
               : product.image === '/1.png'
               ? 'object-contain transform scale-90'
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
                activeTab === 'nettoyage' ? 'text-orange-600' : 'text-gray-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className={`w-full text-white py-2 px-3 font-medium transition-all duration-300 flex items-center justify-center group text-xs mt-auto shadow-md hover:shadow-lg ${
            activeTab === 'nettoyage' 
              ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' 
              : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
          }`}
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceEntretienPage;