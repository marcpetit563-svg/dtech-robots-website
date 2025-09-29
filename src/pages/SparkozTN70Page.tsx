import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft } from 'lucide-react';

const SparkozTN70Page = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('navigation');
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  // Images du produit
  const productImages = [
    '/tn1.webp',
    '/tn2.webp',
    '/tn22.webp',
    '/tn4.webp',
    '/tn5.webp'
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
    navigation: {
      title: 'Navigation laser avancée',
      image: '/modal1.webp',
      content: 'Système de navigation laser LiDAR haute précision pour cartographie automatique et évitement d\'obstacles. Navigation intelligente avec optimisation des parcours de nettoyage.'
    },
    aspiration: {
      title: 'Aspiration haute performance',
      image: '/modal2.webp',
      content: 'Moteur d\'aspiration puissant de 30 000 Pa avec système de filtration HEPA. Collecte efficace de tous types de débris et poussières fines.'
    },
    autonomie: {
      title: 'Autonomie exceptionnelle',
      image: '/modal3.webp',
      content: 'Batterie lithium haute capacité offrant jusqu\'à 12 heures d\'autonomie continue. Retour automatique à la station de charge et reprise du nettoyage.'
    },
    interface: {
      title: 'Interface tactile intuitive',
      image: '/modal4.webp',
      content: 'Écran tactile couleur 12 pouces pour programmation facile. Application mobile pour contrôle à distance et suivi en temps réel.'
    },
    maintenance: {
      title: 'Maintenance simplifiée',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Système de maintenance préventive avec alertes automatiques. Accès facile aux composants pour nettoyage et remplacement des pièces d\'usure.'
    }
  };

  const tabOrder = ['navigation', 'aspiration', 'autonomie', 'interface', 'maintenance'];

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
            <span className="text-gray-900 font-medium">SPARKOZ TN70</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              SPARKOZ TN70
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
                          className={`w-full h-full object-cover ${
                            image === '/TN10-batterie-aufladen.webp' ? 'transform scale-75' : 
                            image === '/tn1.webp' ? 'transform scale-75' : 
                            image === '/tn2.webp' ? 'transform scale-75' : 
                            image === '/tn22.webp' ? 'transform scale-75' : 
                            image === '/tn4.webp' ? 'transform scale-75' : 
                            image === '/tn5.webp' ? 'transform scale-75' : ''
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
                    alt="SPARKOZ TN70"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      productImages[activeImageIndex] === '/TN10-batterie-aufladen.webp' ? 'transform scale-75' : 
                      productImages[activeImageIndex] === '/tn1.webp' ? 'transform scale-75' : 
                      productImages[activeImageIndex] === '/tn2.webp' ? 'transform scale-75' : 
                      productImages[activeImageIndex] === '/tn22.webp' ? 'transform scale-75' : 
                      productImages[activeImageIndex] === '/tn4.webp' ? 'transform scale-75' : 
                      productImages[activeImageIndex] === '/tn5.webp' ? 'transform scale-75' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Video - Full width spanning thumbnails + main image */}
            <div className="w-full flex-1">
              <div className="h-[500px] bg-white overflow-hidden relative">
                <img
                  src="/sparkoz-cloud-1024x501.webp"
                  alt="SPARKOZ TN70 - Interface cloud"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info - Aligned with video */}
          <div className="flex flex-col" style={{ gap: '20px' }}>
            {/* Titre compact */}
            <div className="bg-orange-50 px-6 py-4 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 leading-[1.1] tracking-wide">
                  SPARKOZ<br />
                  TN70
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">33 899,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5" style={{ height: '500px', overflowY: 'auto' }}>
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-orange-500 pl-3 leading-[1.4] tracking-wide">POINTS FORTS</h3>
              <div className="space-y-2">
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Navigation intelligente 360° avec LiDAR (30 m), caméras 3D, ultrasons et capteurs anticollision
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Autonomie élevée : jusqu'à 10 h en dépoussiérage et 3 h en gommage intensif
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Efficacité industrielle : jusqu'à 2040 m²/h
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Réservoirs grande capacité : 70 L (solution) + 50 L (eaux usées)
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Puissance d'appui au sol : 27 kg pour un nettoyage en profondeur
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Large couverture : brosse 51 cm + raclette 81 cm
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Planification autonome et suivi via plateforme cloud intégrée
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Fonctions avancées (en option) : désinfection par brumisateur, contrôle d'ascenseur, enregistreur vidéo
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Polyvalent et robuste : fonctionne sur sols en carrelage, béton, marbre, époxy, bois et vinyle
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Sécurité certifiée : conforme FCC, CE, TÜV SÜD, RoHS, CEI
                </div>
                <div className="flex items-start text-base text-gray-800 py-1 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  Utilisation pratique : interface tactile + conduite manuelle standard
                </div>
              </div>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Robot de nettoyage autonome SPARKOZ TN70</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Chargeur manuel (standard)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit de brosses rotatives industrielles (51 cm)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Ensemble raclette (81 cm)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Réservoir d'eau propre 70 L et réservoir de récupération 50 L</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Interface tactile intégrée + accès plateforme cloud</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Manuel d'utilisation multilingue et kit de maintenance de base</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Câbles et accessoires de recharge</div>
                
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <div className="text-gray-300 text-sm font-semibold mb-2">🛠️ Options disponibles (selon configuration) :</div>
                  <div className="text-gray-200 text-sm leading-[1.4] tracking-wide">• Module de désinfection par brumisateur (6,5 L / 1,2 L/h)</div>
                  <div className="text-gray-200 text-sm leading-[1.4] tracking-wide">• Contrôle d'ascenseur automatisé</div>
                  <div className="text-gray-200 text-sm leading-[1.4] tracking-wide">• Enregistreur vidéo embarqué</div>
                  <div className="text-gray-200 text-sm leading-[1.4] tracking-wide">• Kits de brosses et raclettes supplémentaires</div>
                </div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-orange-600 text-white py-4 px-6 font-semibold text-lg hover:bg-orange-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] tracking-wide mt-auto">
              + ORDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <div className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide space-y-4">
            <p>
              Le SPARKOZ TN70 est un robot de nettoyage industriel autonome de nouvelle génération, spécialement conçu pour les environnements exigeants tels que les entrepôts, les hôpitaux, les aéroports et les centres commerciaux. Équipé d'une technologie de navigation avancée (LiDAR, caméras 3D, ultrasons, algorithmes SLAM), il cartographie et nettoie avec une précision exceptionnelle tout en évitant les obstacles en temps réel.
            </p>
            <p>
              Grâce à son système de brosses puissantes, son aspiration robuste et sa raclette intégrée, il assure un nettoyage en profondeur, même dans les zones à fort trafic. Avec une autonomie pouvant atteindre 10 h et une planification entièrement personnalisable, le TN70 fonctionne sans surveillance humaine, 24/7.
            </p>
          </div>
          
          {/* Application Domains */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">🏢 Domaines d'application</h3>
          </div>
          
          {/* Fiche technique */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">📊 Fiche technique</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Aéroports et gares
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Centres commerciaux et supermarchés
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Écoles, universités et centres de congrès
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Hôpitaux, cliniques et établissements de santé
              </div>
              <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Entrepôts et sites industriels
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
                          Navigation intelligente (LiDAR + caméras 3D TOF + ultrasons)
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Détection et évitement d'obstacles en temps réel
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Nettoyage industriel puissant (brosses, aspiration, pulvérisation et raclette intégrée)
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Planification autonome et retour automatique à la base
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Interface tactile intuitive avec suivi cloud
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Options avancées : désinfection par brumisation, contrôle d'ascenseur, enregistreur vidéo
                        </div>
                        <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                          Conformité internationale (FCC, CE, TÜV SÜD, RoHS, CEI)
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
                            <span className="font-semibold text-gray-800">Dimensions (L × l × H) :</span>
                            <div className="text-gray-700 ml-2">116 × 58 × 121 cm</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Poids brut :</span>
                            <div className="text-gray-700 ml-2">199 kg (sans eau)</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Batterie :</span>
                            <div className="text-gray-700 ml-2">25,6 V – 100 Ah</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Temps de charge :</span>
                            <div className="text-gray-700 ml-2">env. 5–6 h</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Réservoirs :</span>
                            <div className="text-gray-700 ml-2">70 L (solution) / 50 L (récupération)</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Largeur de nettoyage brosse :</span>
                            <div className="text-gray-700 ml-2">51 cm</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Largeur raclette :</span>
                            <div className="text-gray-700 ml-2">81 cm</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Pression au sol :</span>
                            <div className="text-gray-700 ml-2">27 kg (13,2 g/cm²)</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Efficacité max. :</span>
                            <div className="text-gray-700 ml-2">2040 m²/h</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Vitesse max. :</span>
                            <div className="text-gray-700 ml-2">1,2 m/s</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Bruit :</span>
                            <div className="text-gray-700 ml-2">75–80 dB</div>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-gray-800">Capacité de montée :</span>
                            <div className="text-gray-700 ml-2">6 %</div>
                          </div>
                          
                          <div className="md:col-span-2">
                            <span className="font-semibold text-gray-800">Capteurs :</span>
                            <div className="text-gray-700 ml-2">LiDAR (30 m), ultrasons, caméras 3D, capteurs infrarouges, pare-chocs électroniques</div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <span className="font-semibold text-gray-800">Autonomie (batterie 100 Ah) :</span>
                          <div className="ml-2 mt-2 space-y-1">
                            <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                              <span className="text-gray-700">Frottage :</span>
                              <span className="font-medium text-green-600">3 h</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                              <span className="text-gray-700">Dépoussiérage :</span>
                              <span className="font-medium text-blue-600">10 h</span>
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
              <span>Options &amp; accessoires</span>
              <span className="text-2xl font-bold">
                {isAccessoriesOpen ? '−' : '+'}
              </span>
            </button>
            {isAccessoriesOpen && (
              <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Module désinfection par brumisateur</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Module de désinfection par brumisation (6,5 L / 1,2 L/h) pour une hygiène maximale.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Contrôle d'ascenseur automatisé</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Système de contrôle automatisé des ascenseurs pour nettoyage multi-étages.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Enregistreur de véhicule / caméra embarquée</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Système d'enregistrement vidéo et caméra embarquée pour surveillance et traçabilité.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Accessoires de brosses et raclettes</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Kit complet de brosses et raclettes de remplacement pour maintenance optimale.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded border md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">Plateforme cloud de gestion et suivi</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Plateforme cloud complète pour gestion centralisée, suivi en temps réel et analytics avancés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                <div className="text-sm text-gray-500 mb-1">SPARKOZ TN70</div>
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

export default SparkozTN70Page;