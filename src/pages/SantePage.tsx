import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Zap, Users, ArrowRight, CheckCircle, Activity, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';

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

const SantePage = () => {
  const [activeTab, setActiveTab] = useState('logistique');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Navigation du carrousel
  const handleNextCard = () => {
    const products = activeTab === 'logistique' ? logistiqueProducts : hygieneProducts;
    setCurrentCardIndex((prev) => (prev + 1) % products.length);
    pauseCarousel();
  };

  const handlePrevCard = () => {
    const products = activeTab === 'logistique' ? logistiqueProducts : hygieneProducts;
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

  const logistiqueProducts = [
    {
      id: 1,
      name: 'Robot Livraison Médicale',
      price: '28 999,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Compartiments sécurisés',
        'Contrôle température',
        'Traçabilité RFID',
        'Navigation autonome'
      ],
      description: 'Robot de livraison médicale avec compartiments sécurisés et contrôle de température pour médicaments.',
      link: '/sante/robot-livraison-medicale'
    },
    {
      id: 2,
      name: 'Assistant Transport Patients',
      price: '32 500,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Transport sécurisé',
        'Confort optimal',
        'Surveillance vitale',
        'Interface médicale'
      ],
      description: 'Robot assistant pour transport de patients avec surveillance des signes vitaux intégrée.',
      link: '/sante/assistant-transport-patients'
    },
    {
      id: 3,
      name: 'Robot Gestion Stocks Pharma',
      price: '24 800,00 €',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Gestion automatisée',
        'Inventaire temps réel',
        'Dates péremption',
        'Dispensation sécurisée'
      ],
      description: 'Solution robotique pour gestion automatisée des stocks pharmaceutiques avec traçabilité complète.',
      link: '/sante/robot-gestion-stocks-pharma'
    },
    {
      id: 4,
      name: 'Coursier Hospitalier Intelligent',
      price: '19 200,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Livraison inter-services',
        'Planification optimisée',
        'Sécurité renforcée',
        'Suivi temps réel'
      ],
      description: 'Robot coursier pour transport inter-services avec planification intelligente des tournées.',
      link: '/sante/coursier-hospitalier-intelligent'
    }
  ];

  const hygieneProducts = [
    {
      id: 1,
      name: 'Robot Désinfection UV-C Pro',
      price: '35 999,00 €',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Technologie UV-C',
        'Efficacité 99.9%',
        'Sécurité intégrée',
        'Programmation flexible'
      ],
      description: 'Robot de désinfection UV-C pour élimination de 99.9% des pathogènes et virus hospitaliers.',
      link: '/sante/robot-desinfection-uvc-pro'
    },
    {
      id: 2,
      name: 'Station Lavage Mains Automatique',
      price: '18 500,00 €',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Lavage automatique',
        'Détection présence',
        'Produits adaptés',
        'Suivi compliance'
      ],
      description: 'Station automatique de lavage des mains avec suivi de compliance et produits adaptés.',
      link: '/sante/station-lavage-mains-automatique'
    },
    {
      id: 3,
      name: 'Robot Nettoyage Blocs Opératoires',
      price: '42 800,00 €',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Nettoyage stérilisant',
        'Protocoles stricts',
        'Validation processus',
        'Traçabilité complète'
      ],
      description: 'Robot spécialisé pour nettoyage et stérilisation des blocs opératoires selon protocoles stricts.',
      link: '/sante/robot-nettoyage-blocs-operatoires'
    }
  ];

  const logistiqueAdvantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sécurité maximale',
      description: 'Transport sécurisé avec traçabilité complète'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Efficacité optimale',
      description: 'Optimisation des flux et réduction des délais'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Libération personnel',
      description: 'Personnel médical concentré sur les soins'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Qualité des soins',
      description: 'Amélioration globale de la prise en charge'
    }
  ];

  const hygieneAdvantages = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Désinfection totale',
      description: 'Élimination de 99.9% des pathogènes'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sécurité patients',
      description: 'Réduction drastique des infections nosocomiales'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automatisation',
      description: 'Processus automatisés et standardisés'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Conformité normes',
      description: 'Respect strict des protocoles sanitaires'
    }
  ];

  const tabs = [
    { id: 'logistique', label: 'Logistique Médicale', icon: <Activity className="h-5 w-5" /> },
    { id: 'hygiene', label: 'Hygiène & Désinfection', icon: <Stethoscope className="h-5 w-5" /> }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)', minHeight: '100vh' }}>
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
                    ? tab.id === 'logistique'
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-cyan-600 text-cyan-600 bg-cyan-50'
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
            backgroundImage: activeTab === 'logistique' 
              ? 'url(https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1920)' 
              : 'url(https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse ${
                activeTab === 'logistique' ? 'bg-blue-600' : 'bg-cyan-600'
              }`}>
                {activeTab === 'logistique' ? '🏥 Logistique intelligente' : '🧼 Hygiène avancée'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {activeTab === 'logistique' ? (
                  <>
                    Robots
                    <span className="block text-blue-400">Logistique</span>
                  </>
                ) : (
                  <>
                    Solutions
                    <span className="block text-cyan-400">Hygiène</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {activeTab === 'logistique' 
                  ? 'Optimisez la logistique médicale avec nos robots intelligents et sécurisés'
                  : 'Garantissez une hygiène parfaite avec nos solutions de désinfection avancées'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  activeTab === 'logistique' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-cyan-600 text-white hover:bg-cyan-700'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8 py-8">
              {/* Léger effet néon bleu en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-200/40 to-blue-100/30 blur-xl"></div>
              
              {/* Titre normal */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {activeTab === 'logistique' ? (
                    <>
                      Nos Robots Logistique
                    </>
                  ) : (
                    <>
                      Nos Solutions Hygiène
                    </>
                  )}
                </h2>
                
                {/* Description normale */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {activeTab === 'logistique' 
                    ? 'Découvrez notre gamme de robots pour optimiser la logistique hospitalière'
                    : 'Solutions avancées pour une hygiène et désinfection parfaites en milieu médical'
                  }
                </p>
                
                {/* Quick Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                    {(activeTab === 'logistique' ? logistiqueProducts : hygieneProducts).map((product, index) => (
                      <Link
                        key={product.id}
                        to={product.link}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          activeTab === 'logistique'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
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
                activeTab === 'logistique' ? 'bg-blue-600' : 'bg-cyan-600'
              } bg-opacity-90 backdrop-blur-sm`}>
                {currentCardIndex + 1} / {(activeTab === 'logistique' ? logistiqueProducts : hygieneProducts).length}
              </div>
            </div>
            
            {/* Flèches de navigation */}
            <button
              onClick={handlePrevCard}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'logistique'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-700 text-white'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={handleNextCard}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                activeTab === 'logistique'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-700 text-white'
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
              {(activeTab === 'logistique' ? logistiqueProducts : hygieneProducts).map((product, index) => (
                <div key={`${product.id}-${index}`} className="cylinder-card">
                  <ProductCard product={product} activeTab={activeTab} />
                </div>
              ))}
            </div>
            
            {/* Indicateur de pause */}
            {isCarouselPaused && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg ${
                  activeTab === 'logistique' ? 'bg-blue-600' : 'bg-cyan-600'
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'logistique' 
                ? 'Pourquoi choisir nos robots logistique ?' 
                : 'Avantages de nos solutions hygiène'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'logistique'
                ? 'Des avantages concrets pour transformer la logistique de votre établissement'
                : 'Une révolution technologique pour l\'hygiène et la sécurité sanitaire'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'logistique' ? logistiqueAdvantages : hygieneAdvantages).map((advantage, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  activeTab === 'logistique'
                    ? 'bg-blue-100 group-hover:bg-blue-600 group-hover:text-white'
                    : 'bg-cyan-100 group-hover:bg-cyan-600 group-hover:text-white'
                }`}>
                  <div className={`transition-colors duration-300 ${
                    activeTab === 'logistique'
                      ? 'text-blue-600 group-hover:text-white'
                      : 'text-cyan-600 group-hover:text-white'
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
        activeTab === 'logistique' 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
          : 'bg-gradient-to-r from-cyan-600 to-cyan-700'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {activeTab === 'logistique' 
              ? 'Prêt à optimiser votre logistique ?' 
              : 'Prêt à révolutionner votre hygiène ?'
            }
          </h2>
          <p className={`text-xl mb-8 leading-relaxed ${
            activeTab === 'logistique' ? 'text-blue-100' : 'text-cyan-100'
          }`}>
            {activeTab === 'logistique'
              ? 'Contactez nos experts pour découvrir comment nos robots peuvent optimiser votre logistique médicale'
              : 'Découvrez comment nos solutions peuvent garantir une hygiène parfaite dans votre établissement'
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
          'bg-gradient-to-br from-gray-50 to-gray-100'
        }`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute top-2 right-2">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-gray-900 font-bold text-xs">{product.price}</span>
          </div>
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
                activeTab === 'logistique' ? 'text-blue-600' : 'text-cyan-600'
              }`} />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={product.link}
          className={`w-full text-white py-2 px-3 font-medium transition-all duration-300 flex items-center justify-center group text-xs mt-auto shadow-md hover:shadow-lg ${
            activeTab === 'logistique' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
              : 'bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800'
          }`}
        >
          Voir les détails
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default SantePage;