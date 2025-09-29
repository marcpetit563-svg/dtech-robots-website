import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft } from 'lucide-react';

const AutoManucurePage = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('precision');
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  // Images du produit
  const productImages = [
    '/65c2c349a5acf1be9240b710_10B_PR_Image_Page14_noshadow_update.png',
    '/nn65bb3f43735d6335fc0a6f0f_home_device.png',
    '/65c107374dcf667a141bc927_Copy of 10B_PR_Image_Page7 2.png',
    '/3.jpg'
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
    precision: {
      title: 'Précision millimétrique',
      image: '/modal1.webp',
      content: 'Technologie de pointe avec capteurs haute précision pour un façonnage et un limage parfait des ongles. Chaque mouvement est calculé au millimètre près pour un résultat professionnel.'
    },
    hygiene: {
      title: 'Hygiène maximale',
      image: '/modal2.webp',
      content: 'Système de stérilisation UV intégré et changement automatique des outils pour chaque client. Respect des normes d\'hygiène les plus strictes du secteur de la beauté.'
    },
    intelligence: {
      title: 'Intelligence artificielle',
      image: '/modal3.webp',
      content: 'IA avancée qui analyse la forme naturelle de vos ongles et adapte automatiquement le traitement. Reconnaissance des types d\'ongles et personnalisation des soins.'
    },
    automation: {
      title: 'Automatisation complète',
      image: '/modal4.webp',
      content: 'Processus 100% automatisé du retrait du vernis au séchage final. Aucune intervention humaine nécessaire, garantissant une expérience client unique et relaxante.'
    },
    customization: {
      title: 'Personnalisation avancée',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Large choix de couleurs et de finitions. Possibilité de créer des motifs personnalisés et de sauvegarder les préférences clients pour les visites suivantes.'
    }
  };

  const tabOrder = ['precision', 'hygiene', 'intelligence', 'automation', 'customization'];

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
            <span className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-base font-medium tracking-wide">
              Manucure Automatique
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">NailPro Perfect</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              NailPro Perfect
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
                            image === '/65bb3f43345f8bb10b2a1c8d_home_app.jpg' || image === '/65c107374dcf667a141bc927_Copy of 10B_PR_Image_Page7 2.png'
                              ? 'object-contain transform scale-75' 
                              : 'object-contain'
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
                    alt="NailPro Perfect"
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Video - Full width spanning thumbnails + main image */}
            <div className="w-full flex-1">
              <div className="h-[500px] bg-white overflow-hidden">
                <img
                  src="/65c11502b34dfdea8e4ed6fa_Figure (1).jpg"
                  alt="NailPro Perfect - Figure technique"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex flex-col justify-between h-full" style={{ gap: '20px' }}>
            {/* Titre compact */}
            <div className="bg-pink-50 px-6 py-4 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 leading-[1.1] tracking-wide">
                  NailPro<br />
                  Perfect
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">4 990,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-pink-500 pl-3 leading-[1.4] tracking-wide">CARACTÉRISTIQUES</h3>
              <div className="space-y-1">
                <div className="flex items-center text-base text-gray-800 leading-[1.5] font-medium tracking-wide">
                  <span className="text-pink-500 mr-3 text-lg">✔</span>
                  Retrait du vernis
                </div>
                <div className="flex items-center text-base text-gray-800 leading-[1.5] font-medium tracking-wide">
                  <span className="text-pink-500 mr-3 text-lg">✔</span>
                  Gestion des cuticules
                </div>
                <div className="flex items-center text-base text-gray-800 leading-[1.5] font-medium tracking-wide">
                  <span className="text-pink-500 mr-3 text-lg">✔</span>
                  Façonnage & limage
                </div>
                <div className="flex items-center text-base text-gray-800 leading-[1.5] font-medium tracking-wide">
                  <span className="text-pink-500 mr-3 text-lg">✔</span>
                  Application de vernis
                </div>
                <div className="flex items-center text-base text-gray-800 leading-[1.5] font-medium tracking-wide">
                  <span className="text-pink-500 mr-3 text-lg">✔</span>
                  Séchage rapide
                </div>
              </div>
              <button
                onClick={() => openModal('precision')}
                className="text-pink-600 text-base hover:underline mt-3 inline-block transition-colors duration-200 leading-[1.5] font-medium tracking-wide"
              >
                → Voir toutes les caractéristiques
              </button>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-3">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Machine NailPro Perfect</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Station de stérilisation UV</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit d'outils automatiques</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Système de séchage intégré</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Interface tactile intuitive</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit de maintenance complet</div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-pink-600 text-white py-4 px-6 font-semibold text-lg hover:bg-pink-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] tracking-wide">
              + COMMANDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide">
            Révolutionnez votre institut de beauté avec le NailPro Perfect, la première machine entièrement automatisée pour des manucures parfaites. 
            Grâce à son intelligence artificielle avancée et ses capteurs de précision, elle offre une expérience client unique sans aucune intervention humaine. 
            Du retrait du vernis au séchage final, chaque étape est optimisée pour un résultat professionnel constant.
          </p>
          <button className="text-pink-600 hover:underline font-medium text-base tracking-wide">
            Afficher plus
          </button>
        </div>

        {/* Product Information Sections */}
        <div className="mt-12 space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide">
              Caractéristiques
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button 
              onClick={() => setIsSpecificationsOpen(!isSpecificationsOpen)}
              className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 text-base tracking-wide flex items-center justify-between"
            >
              <span>Spécifications</span>
              <span className="text-2xl font-bold">
                {isSpecificationsOpen ? '−' : '+'}
              </span>
            </button>
            {isSpecificationsOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Capacité</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm font-medium text-gray-900 mb-2">NAILPRO PERFECT PROFESSIONAL</div>
                        <div className="text-sm text-gray-600 mb-3">Réf. : AM-100-2025</div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Clients par heure:</span>
                          <span className="font-medium">6-8 clients</span>
                          <span className="text-gray-600">Temps de traitement:</span>
                          <span className="font-medium">8-12 minutes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Poids:</span>
                          <span className="font-medium">85 kg</span>
                          <span className="text-gray-600">Longueur:</span>
                          <span className="font-medium">120 cm</span>
                          <span className="text-gray-600">Largeur:</span>
                          <span className="font-medium">80 cm</span>
                          <span className="text-gray-600">Hauteur:</span>
                          <span className="font-medium">150 cm</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Alimentation</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Tension:</span>
                          <span className="font-medium">220-240V</span>
                          <span className="text-gray-600">Fréquence:</span>
                          <span className="font-medium">50/60 Hz</span>
                          <span className="text-gray-600">Puissance:</span>
                          <span className="font-medium">1500W</span>
                          <span className="text-gray-600">Consommation:</span>
                          <span className="font-medium">0.8 kWh/jour</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Étapes automatisées:</span>
                          <span className="font-medium">5 étapes complètes</span>
                          <span className="text-gray-600">Couleurs disponibles:</span>
                          <span className="font-medium">120+ couleurs</span>
                          <span className="text-gray-600">Stérilisation:</span>
                          <span className="font-medium">UV-C intégrée</span>
                          <span className="text-gray-600">Interface:</span>
                          <span className="font-medium">Écran tactile 15"</span>
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
              <span>Accessoires liés</span>
              <span className="text-2xl font-bold">
                {isAccessoriesOpen ? '−' : '+'}
              </span>
            </button>
            {isAccessoriesOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Kit Vernis Premium</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : KVP-120-2025</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Collection de 120 couleurs de vernis haute qualité pour la machine.
                      </p>
                      <div className="text-lg font-bold text-pink-600">899,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Outils de Rechange</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : OR-SET-2025</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Set complet d'outils de rechange pour maintenance préventive.
                      </p>
                      <div className="text-lg font-bold text-pink-600">299,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Lampe UV Supplémentaire</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : LUV-36W-2025</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Lampe UV de rechange 36W pour séchage optimal des vernis.
                      </p>
                      <div className="text-lg font-bold text-pink-600">149,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Kit Nettoyage Pro</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : KNP-2025</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Produits de nettoyage spécialisés pour l'entretien de la machine.
                      </p>
                      <div className="text-lg font-bold text-pink-600">79,00 €</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-12 flex gap-4">
          <button className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-200 text-base tracking-wide">
            Formation Incluse
          </button>
          <button className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-200 text-base tracking-wide">
            Garantie 3 ans
          </button>
        </div>

        {/* Other Beauty Robots */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Autres robots beauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de soins du visage</h3>
              <p className="text-gray-600 text-sm">
                Solutions automatisées pour les soins esthétiques du visage
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de coiffure</h3>
              <p className="text-gray-600 text-sm">
                Coupe et coiffage automatisés avec précision millimétrique
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de massage</h3>
              <p className="text-gray-600 text-sm">
                Massages thérapeutiques personnalisés par intelligence artificielle
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
                <div className="text-sm text-gray-500 mb-1">NailPro Perfect</div>
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
                          ? 'border-pink-500 text-pink-600 bg-pink-50'
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

export default AutoManucurePage;