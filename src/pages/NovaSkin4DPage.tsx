import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft } from 'lucide-react';

const NovaSkin4DPage = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('technology');
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(false);
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isPersonalizationOpen, setIsPersonalizationOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  // Images du produit
  const productImages = [
    '/1-1B3JPR-42c_500_500.webp',
    '/1-1B3JPR-49A_500_500.webp',
    '/1-1B3JRS-4219_500_500.webp',
    '/1-1B3JRT-50F_500_500.webp',
    '/1-1B3JRT-KS_500_500.webp'
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
    technology: {
      title: 'Technologie 4D révolutionnaire',
      image: '/modal1.webp',
      content: 'Technologie d\'épilation laser 4D de dernière génération avec capteurs intelligents qui s\'adaptent automatiquement à votre type de peau et de poils pour des résultats optimaux et durables.'
    },
    sensors: {
      title: 'Capteurs intelligents',
      image: '/modal2.webp',
      content: 'Système de capteurs avancés qui analysent en temps réel la densité, la couleur et l\'épaisseur des poils pour ajuster automatiquement l\'intensité et la fréquence du traitement.'
    },
    personalization: {
      title: 'Traitement personnalisé',
      image: '/modal3.webp',
      content: 'Chaque séance est personnalisée selon votre profil unique. L\'IA intégrée mémorise vos paramètres et optimise progressivement les traitements pour une efficacité maximale.'
    },
    safety: {
      title: 'Sécurité maximale',
      image: '/modal4.webp',
      content: 'Système de sécurité multicouche avec détection automatique des zones sensibles, refroidissement intégré et arrêt d\'urgence pour une utilisation en toute sérénité.'
    },
    results: {
      title: 'Résultats durables',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Épilation définitive avec des résultats visibles dès les premières séances. Réduction de 95% des poils après un cycle complet de traitement, avec une peau lisse et douce durablement.'
    }
  };

  const tabOrder = ['technology', 'sensors', 'personalization', 'safety', 'results'];

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
            to="/beaute" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Retour à Beauté & Bien-être</span>
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
            <Link to="/beaute" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Beauté & Bien-être
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            </span>
            <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-base font-medium tracking-wide">
              Technologies d'épilation
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">NovaSkin 4D</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              NovaSkin 4D
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
                          className="w-full h-full object-contain"
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
                    alt="NovaSkin 4D"
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Video - Full width spanning thumbnails + main image */}
            <div className="w-full flex-1">
              <div className="h-[500px] bg-white overflow-hidden relative">
                <img
                  src="/ad1665221502367737.webp"
                  alt="NovaSkin 4D - Image technique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex flex-col justify-between h-full" style={{ gap: '20px' }}>
            {/* Titre compact */}
            <div className="bg-purple-50 px-6 py-4 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 leading-[1.1] tracking-wide">
                  NovaSkin<br />
                  4D
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">6 900,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-purple-500 pl-3 leading-[1.4] tracking-wide">CARACTÉRISTIQUES</h3>
              <div className="space-y-2">
                <button
                  onClick={() => openModal('technology')}
                  className="flex items-center text-base text-gray-800 hover:text-purple-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Technologie 4D révolutionnaire
                </button>
                <button
                  onClick={() => openModal('sensors')}
                  className="flex items-center text-base text-gray-800 hover:text-purple-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Capteurs intelligents
                </button>
                <button
                  onClick={() => openModal('personalization')}
                  className="flex items-center text-base text-gray-800 hover:text-purple-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Traitement personnalisé
                </button>
              </div>
              <button
                onClick={() => openModal('technology')}
                className="text-purple-600 text-base hover:underline mt-3 inline-block transition-colors duration-200 leading-[1.5] font-medium tracking-wide"
              >
                → Voir toutes les caractéristiques
              </button>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-3">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• NovaSkin 4D</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Système de refroidissement</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Capteurs intelligents</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Interface tactile</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit de sécurité</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Formation incluse</div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-purple-600 text-white py-4 px-6 font-semibold text-lg hover:bg-purple-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] mt-auto tracking-wide">
              + ORDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide">
            Révolutionnez votre institut de beauté avec le NovaSkin 4D, la technologie d'épilation laser 4D la plus avancée. 
            Grâce à ses capteurs intelligents et son système de refroidissement intégré, il offre des traitements personnalisés 
            pour tous types de peau. Résultats durables avec 95% de réduction des poils après traitement complet.
          </p>
          <button className="text-purple-600 hover:underline font-medium text-base tracking-wide">
            Afficher plus
          </button>
        </div>

        {/* Product Information Sections */}
        <div className="mt-12 space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsCharacteristicsOpen(!isCharacteristicsOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Caractéristiques principales</span>
              <span className="text-2xl font-bold">
                {isCharacteristicsOpen ? '−' : '+'}
              </span>
            </button>
            {isCharacteristicsOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-base">
                      Révolutionnez votre institut de beauté avec le NovaSkin 4D, la dernière génération de laser à diode multi-longueurs d'onde.
                      Conçu pour les salons de beauté, spas, cliniques esthétiques et centres médicaux, il allie sécurité, performance et confort.
                    </p>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="text-purple-800 font-medium">
                        ✨ <strong>Résultats durables :</strong> réduction significative de la pilosité pouvant atteindre jusqu'à 95 % après un protocole complet, selon le type de peau et de poil.
                      </p>
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
              <span>Spécifications techniques</span>
              <span className="text-2xl font-bold">
                {isSpecificationsOpen ? '−' : '+'}
              </span>
            </button>
            {isSpecificationsOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded border">
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-900">Type de laser :</span>
                          <span className="text-gray-700 ml-2">Diode</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Longueurs d'onde :</span>
                          <span className="text-gray-700 ml-2">755 nm / 808 nm / 940 nm / 1064 nm</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Écran :</span>
                          <span className="text-gray-700 ml-2">Écran tactile LCD couleur 15 pouces</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Taille du spot :</span>
                          <span className="text-gray-700 ml-2">12 × 20 mm</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Largeur d'impulsion :</span>
                          <span className="text-gray-700 ml-2">réglable de 8 à 685 ms</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Énergie :</span>
                          <span className="text-gray-700 ml-2">réglable de 2 à 120 J/cm²</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Fréquence :</span>
                          <span className="text-gray-700 ml-2">1 – 10 Hz</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Système de refroidissement :</span>
                          <span className="text-gray-700 ml-2">Eau + Air + Semi-conducteur</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Température de la sonde :</span>
                          <span className="text-gray-700 ml-2">0 à -5 °C</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Dimensions :</span>
                          <span className="text-gray-700 ml-2">65 × 75 × 62 cm</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Poids :</span>
                          <span className="text-gray-700 ml-2">53,5 kg</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Alimentation :</span>
                          <span className="text-gray-700 ml-2">AC 110 V / 60 Hz ; AC 220 V / 50 Hz</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Emballage :</span>
                          <span className="text-gray-700 ml-2">Coffret en alliage d'aluminium</span>
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
              onClick={() => setIsPersonalizationOpen(!isPersonalizationOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Personnalisation & Accessoires</span>
              <span className="text-2xl font-bold">
                {isPersonalizationOpen ? '−' : '+'}
              </span>
            </button>
            {isPersonalizationOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="bg-white p-6 rounded border">
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Ajout du logo de votre entreprise</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Choix de la couleur et de l'apparence</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Personnalisation de l'interface utilisateur (langue, design)</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Supports marketing adaptés : affiches, brochures, vidéos, images</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Conception de coques personnalisées</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        <span>Personnalisation des accessoires : pièce à main, écran, poignée, etc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Livraison & Garantie</span>
              <span className="text-2xl font-bold">
                {isDeliveryOpen ? '−' : '+'}
              </span>
            </button>
            {isDeliveryOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="bg-white p-6 rounded border">
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Livraison rapide et sécurisée partout en France et en Europe</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Installation et mise en service disponibles sur demande</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Garantie Premium 3 ans (pièces et main d'œuvre)</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Satisfait ou remboursé pendant 3 mois</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Service après-vente réactif en France avec techniciens agréés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-12 flex gap-4">
          <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 text-base tracking-wide">
            Demander des informations
          </button>
        </div>

        {/* Other Beauty Technologies */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Autres robots beauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de manucure</h3>
              <p className="text-gray-600 text-sm">
                Solutions automatisées pour manucure et soins des ongles
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de massage</h3>
              <p className="text-gray-600 text-sm">
                Massages thérapeutiques personnalisés par intelligence artificielle
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de coiffure</h3>
              <p className="text-gray-600 text-sm">
                Coupe et coiffage automatisés avec précision millimétrique
              </p>
            </div>
          </div>
        </div>
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
                <div className="text-sm text-gray-500 mb-1">NovaSkin 4D</div>
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
                          ? 'border-purple-500 text-purple-600 bg-purple-50'
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

export default NovaSkin4DPage;