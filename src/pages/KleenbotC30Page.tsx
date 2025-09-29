import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft } from 'lucide-react';

const KleenbotC30Page = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('haccp');
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  // Images du produit
  const productImages = [
    '/robbo zoom 3.png',
    '/robbo zoom 2.png',
    '/robbo zoom 5.png',
    '/robbo zoom 4.png'
  ];

  // Animation automatique du carrousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveImageIndex((prevIndex) => 
          prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, productImages.length]);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  // Données des caractéristiques
  const characteristics = {
    haccp: {
      title: 'Conformité HACCP',
      image: '/modal1.webp',
      content: 'Respecte toutes les normes HACCP pour l\'industrie alimentaire. Système de nettoyage et désinfection conforme aux exigences sanitaires les plus strictes des restaurants et cuisines professionnelles.'
    },
    uv: {
      title: 'Désinfection UV-C',
      image: '/modal2.webp',
      content: 'Technologie de désinfection UV-C intégrée qui élimine 99.9% des bactéries, virus et micro-organismes. Système de sécurité automatique pour protéger le personnel pendant le fonctionnement.'
    },
    navigation: {
      title: 'Navigation intelligente',
      image: '/modal3.webp',
      content: 'Système de navigation avancé avec capteurs LiDAR et caméras pour éviter les obstacles et optimiser les parcours de nettoyage. Cartographie automatique des espaces de travail.'
    },
    programming: {
      title: 'Programmation flexible',
      image: '/modal4.webp',
      content: 'Interface intuitive permettant de programmer des cycles de nettoyage personnalisés selon vos besoins. Planification automatique pour les heures creuses et nettoyage d\'urgence disponible.'
    },
    deep: {
      title: 'Nettoyage profond',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Système de nettoyage multi-étapes avec aspiration, lavage et séchage. Brosses rotatives et jets haute pression pour un nettoyage en profondeur de tous types de sols.'
    }
  };

  const tabOrder = ['haccp', 'uv', 'navigation', 'programming', 'deep'];

  // Gestion de la modale
  const openModal = (tabId: string) => {
    setActiveTab(tabId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Gestion des touches
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = tabOrder.indexOf(activeTab);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabOrder.length - 1;
        setActiveTab(tabOrder[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = tabOrder.indexOf(activeTab);
        const nextIndex = currentIndex < tabOrder.length - 1 ? currentIndex + 1 : 0;
        setActiveTab(tabOrder[nextIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeTab]);

  // Focus trap
  useEffect(() => {
    if (isModalOpen) {
      const modal = document.querySelector('[role="dialog"]');
      const focusableElements = modal?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Arrow */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/service-entretien" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Retour à Service & Entretien</span>
          </Link>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Secteurs d'activité
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link to="/service-entretien" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Service & Entretien
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-base font-medium tracking-wide">
              Robot nettoyeur autonome
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Keenon Robotics - Kleenbot C30</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              Keenon Robotics - Kleenbot C30
            </div>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div className="flex flex-col space-y-4">
            <div className="flex gap-4">
              {/* Thumbnail Carousel */}
              <div 
                className="w-28 h-[500px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative h-full overflow-hidden">
                  <div 
                    className={`flex flex-col gap-2 transition-transform duration-1000 ease-linear ${
                      !isPaused ? 'animate-scroll-vertical' : ''
                    }`}
                    style={{
                      transform: `translateY(-${activeImageIndex * 120}px)`
                    }}
                  >
                    {/* Duplicate images for infinite scroll */}
                    {[...productImages, ...productImages].map((image, index) => (
                      <div
                        key={index}
                        className={`w-28 h-28 bg-transparent overflow-hidden cursor-pointer transition-all duration-200 ${
                          index % productImages.length === activeImageIndex
                            ? 'opacity-100'
                            : 'opacity-60 hover:opacity-80'
                        }`}
                        onClick={() => handleThumbnailClick(index % productImages.length)}
                      >
                        <img
                          src={image}
                          alt={`Vue ${(index % productImages.length) + 1}`}
                          className={`w-full h-full ${
                            image === '/robbo zoom 3.png' 
                              ? 'object-contain transform scale-75' 
                              : image === '/robbo zoom 2.png'
                              ? 'object-contain transform scale-75'
                             : image === '/robbo zoom 5.png'
                             ? 'object-contain transform scale-75'
                             : image === '/robbo zoom 4.png'
                             ? 'object-contain transform scale-75'
                              : 'object-cover'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="flex-1">
                <div className="h-[500px] bg-white overflow-hidden mb-4">
                  <img
                    src={productImages[activeImageIndex]}
                    alt="Keenon Robotics - Kleenbot C30"
                    className={`w-full h-full transition-opacity duration-300 ${
                      productImages[activeImageIndex] === '/robbo zoom 3.png' 
                        ? 'object-contain transform scale-75' 
                        : productImages[activeImageIndex] === '/robbo zoom 2.png'
                        ? 'object-contain transform scale-75'
                       : productImages[activeImageIndex] === '/robbo zoom 5.png'
                       ? 'object-contain transform scale-75'
                       : productImages[activeImageIndex] === '/robbo zoom 4.png'
                       ? 'object-contain transform scale-75'
                        : 'object-cover'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Video - Full width spanning thumbnails + main image */}
            <div className="w-full flex-1">
              <div className="h-[500px] bg-black overflow-hidden relative">
                <iframe
                  src="https://www.youtube.com/embed/nHcg64XRxks?start=50"
                  title="Keenon Robotics - Kleenbot C30 - Vidéo de démonstration"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex flex-col justify-between h-full" style={{ gap: '20px' }}>
            {/* Titre compact */}
            <div className="bg-orange-50 px-6 py-4 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 leading-[1.1] tracking-wide">
                  Keenon Robotics<br />
                  Kleenbot<br />
                  C30
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">8 700,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-orange-500 pl-3 leading-[1.4] tracking-wide">POINTS FORTS</h3>
              <div className="space-y-2">
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Nettoyage 3-en-1 : balaye, aspire et dépoussière
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Autonomie jusqu'à 10 h selon le mode
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Largeur de nettoyage 61 cm
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Puissance d'aspiration 19 000 Pa (puissance d\'aspiration)
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Navigation intelligente avec détection d'obstacles
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Recharge automatique
                </div>
              </div>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Keenon Robotics Kleenbot C30 → KR-C30-2025</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Station de charge automatique</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Système de désinfection UV-C</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit de brosses professionnelles</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Réservoir de produits nettoyants</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Interface de programmation</div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-orange-600 text-white py-4 px-6 font-semibold text-lg hover:bg-orange-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] mt-auto tracking-wide">
              + ORDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <div className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide space-y-4">
            <p>
              Le Keenon Kleenbot C30 est un robot de nettoyage professionnel conçu pour automatiser l'entretien des sols dans les environnements exigeants.
              Compact et puissant, il combine balayage, aspiration et dépoussiérage pour offrir un nettoyage complet, fiable et régulier.
            </p>
            <p>
              Avec une autonomie pouvant atteindre 2 500 m² par charge complète, une largeur de nettoyage de 61 cm et une aspiration de 19 000 Pa, le C30 garantit des performances professionnelles tout en réduisant le besoin de main-d'œuvre.
            </p>
            <p>
              Grâce à sa navigation intelligente et à son application mobile, il peut créer des cartes, exécuter des tâches automatiquement et être suivi à distance. Son système de recharge automatique assure une productivité continue.
            </p>
          </div>
          
          {/* Application Domains */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Domaines d'application</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Restaurants et hôtels
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Centres commerciaux et aéroports
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Bureaux, banques et bibliothèques
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Hôpitaux et usines
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide col-span-1 md:col-span-2">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Tout autre environnement intérieur à fort passage
              </div>
            </div>
          </div>
          
        </div>
        {/* Product Information Sections */}
        <div className="mt-12 space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsCharacteristicsOpen(!isCharacteristicsOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Fonctionnalités principales</span>
              <span className="text-2xl font-bold">
                {isCharacteristicsOpen ? '−' : '+'}
              </span>
            </button>
            {isCharacteristicsOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="space-y-4">
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Nettoyage multifonction 3-en-1
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Interface intuitive et conviviale
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Navigation agile avec protection de sécurité
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Retour automatique à la station de recharge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsSpecificationsOpen(!isSpecificationsOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Fiche technique</span>
              <span className="text-2xl font-bold">
                {isSpecificationsOpen ? '−' : '+'}
              </span>
            </button>
            {isSpecificationsOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="font-semibold text-gray-800">Dimensions (L × P × H) :</span>
                            <div className="text-gray-700 ml-2">49 × 52 × 75 cm (sans balai latéral)</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Poids :</span>
                            <div className="text-gray-700 ml-2">35 kg (avec batterie)</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Vitesse maximale :</span>
                            <div className="text-gray-700 ml-2">0,8 m/s</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Temps de charge :</span>
                            <div className="text-gray-700 ml-2">5 à 6 h</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Efficacité de nettoyage :</span>
                            <div className="text-gray-700 ml-2">600 m²/h</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Largeur de nettoyage max. :</span>
                            <div className="text-gray-700 ml-2">61 cm</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Aspiration maximale :</span>
                            <div className="text-gray-700 ml-2">19 000 Pa</div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <span className="font-semibold text-gray-800">Autonomie :</span>
                          <div className="ml-2 mt-2 space-y-1">
                            <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                              <span className="text-gray-700">Balayage & aspiration :</span>
                              <span className="font-medium text-green-600">jusqu'à 6 h</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                              <span className="text-gray-700">Dépoussiérage :</span>
                              <span className="font-medium text-blue-600">jusqu'à 10 h</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Options & accessoires</span>
              <span className="text-2xl font-bold">
                {isAccessoriesOpen ? '−' : '+'}
              </span>
            </button>
            {isAccessoriesOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Brosses supplémentaires</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Kit de brosses de rechange pour différents types de sols et applications.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Réservoirs additionnels</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Réservoirs supplémentaires pour étendre l'autonomie de nettoyage.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border col-span-1 md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">Modules logiciels avancés (cartographie, suivi)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Logiciels avancés pour cartographie détaillée, suivi en temps réel et analyses de performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Buttons */}

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white shadow-2xl max-w-7xl w-full max-h-[98vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex justify-between items-start p-8 border-b border-gray-200">
              <div>
                <div className="text-sm text-gray-500 mb-1">Kleenbot C30</div>
                <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
                  Caractéristiques <span className="text-gray-500">(5)</span>
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex h-[80vh] border-t-0">
              {/* Tabs */}
              <div className="w-2/5">
                <nav className="flex flex-col" role="tablist" aria-label="Caractéristiques">
                  {tabOrder.map((tabId) => (
                    <button
                      key={tabId}
                      onClick={() => setActiveTab(tabId)}
                      className={`px-8 py-6 text-lg font-medium text-left border-r-2 transition-colors duration-200 ${
                        activeTab === tabId
                          ? 'border-orange-500 text-orange-600 bg-orange-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                      role="tab"
                      aria-selected={activeTab === tabId}
                      id={`tab-${tabId}`}
                      aria-controls={`tabpanel-${tabId}`}
                    >
                      {characteristics[tabId as keyof typeof characteristics].title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Right content - Tab panels */}
              <div className="w-3/5 p-10 overflow-y-auto border-l border-gray-200">
                {tabOrder.map((tabId) => (
                  <div
                    key={tabId}
                    role="tabpanel"
                    id={`tabpanel-${tabId}`}
                    aria-labelledby={`tab-${tabId}`}
                    className={activeTab === tabId ? 'block' : 'hidden'}
                  >
                    <div className="space-y-6">
                      <img
                        src={characteristics[tabId as keyof typeof characteristics].image}
                        alt={characteristics[tabId as keyof typeof characteristics].title}
                        className="w-full h-96 object-cover"
                      />
                      <h3 className="text-3xl font-bold text-gray-900">
                        {characteristics[tabId as keyof typeof characteristics].title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {characteristics[tabId as keyof typeof characteristics].content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KleenbotC30Page;