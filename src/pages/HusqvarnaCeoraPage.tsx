import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft } from 'lucide-react';

const HusqvarnaCeoraPage = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('schema');
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  // Images du produit (utilisation d'images Pexels pour la démonstration)
  const productImages = [
    '/3a.webp',
    '/qq.webp',
    '/pp.webp',
    '/2a.webp'
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
    schema: {
      title: 'Schéma de tonte sélectionnable',
      image: '/modal1.webp',
      content: 'Améliorez le rendu final du gazon en modifiant le motif de tonte. Grâce à la technologie EPOS™, la tondeuse peut fonctionner en lignes parallèles et créer divers motifs, tels que des losanges, des triangles et des damiers.'
    },
    security: {
      title: 'Feux de sécurité',
      image: '/modal3.webp',
      content: 'Les feux sécurité à LED économes en énergie offrent une visibilité dans l\'obscurité et la lumière du jour pour un travail sûr. Les feux peuvent être réglés sur des configurations fixes ou clignotantes et selon différents programmes.'
    },
    interface: {
      title: 'Interface utilisateur professionnelle',
      image: '/modal2.webp',
      content: 'Interface adaptée à une utilisation professionnelle, c\'est-à-dire avec tous les réglages et commandes gérés à distance via l\'application pour smartphone Husqvarna Fleet Services ou via un PC/une tablette. Commandes sur le produit ; témoin d\'état à LED et fonctionnalité DÉMARRAGE/ARRÊT. Simplifie l\'utilisation pour les utilisateurs inexpérimentés et minimise la gravité de l\'impact sur le produit en cas de vandalisme.'
    },
    detection: {
      title: 'Détection/évitement d\'objet',
      image: '/modal4.webp',
      content: 'Pour la sécurité et la réduction des temps d\'arrêt, des capteurs intégrés utilisant la technologie à ultrasons aident le produit à détecter ou à éviter les objets. Le mode de détection réduit la vitesse et atténue les collisions ; le mode de prévention réduit la vitesse et permet un arrêt avant l\'objet.'
    },
    emissions: {
      title: 'Faibles émissions de carbone',
      image: 'https://images.pexels.com/photos/8566469/pexels-photo-8566469.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'En choisissant ce produit, vous pouvez être sûr qu\'il produit moins d\'émissions de carbone pendant son utilisation active qu\'un produit à essence traditionnel. Ce produit à batterie n\'émet pas de CO2 pendant son utilisation, tout en offrant la puissance et la qualité que vous attendez d\'un produit Husqvarna. Cependant, il est important de noter que les émissions de CO2 sont générées à d\'autres étapes du cycle de vie du produit, telles que la production, le chargement et l\'élimination en fin de vie.'
    }
  };

  const tabOrder = ['schema', 'security', 'interface', 'detection', 'emissions'];

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
            to="/agriculture" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Retour aux tondeuses autonomes</span>
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
            <Link to="/agriculture" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Agriculture & Espaces verts
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            </span>
            <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-base font-medium tracking-wide">
              Tondeuses autonomes
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Husqvarna CEORA® 546 EPOS®</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              Husqvarna CEORA® 546 EPOS®
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
                    alt="Husqvarna CEORA® 546 EPOS®"
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Video - Full width spanning thumbnails + main image */}
            <div className="w-full flex-1">
              <div className="h-[500px] bg-black overflow-hidden relative">
                <iframe
                  src="https://www.youtube.com/embed/FTqxsvaJq-I"
                  title="Husqvarna CEORA® 546 EPOS® - Vidéo de démonstration"
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
            <div className="bg-green-50 px-6 py-4 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 leading-[1.1] tracking-wide">
                  Husqvarna<br />
                  CEORA®<br />
                  546 EPOS®
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">21 999,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-green-500 pl-3 leading-[1.4] tracking-wide">CARACTÉRISTIQUES</h3>
              <div className="space-y-2">
                <button
                  onClick={() => openModal('schema')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Schéma de tonte sélectionnable
                </button>
                <button
                  onClick={() => openModal('security')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Feux de sécurité
                </button>
                <button
                  onClick={() => openModal('interface')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Interface utilisateur professionnelle
                </button>
              </div>
              <button
                onClick={() => openModal('schema')}
                className="text-green-600 text-base hover:underline mt-4 inline-block transition-colors duration-200 leading-[1.5] font-medium tracking-wide"
              >
                → Voir toutes les caractéristiques
              </button>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Husqvarna CEORA® 546 EPOS® → 970 46 72-01</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Carter de coupe</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Station de charge</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Station de référence</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Brosse de roue</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Support plat</div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-green-600 text-white py-4 px-6 font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] mt-auto tracking-wide">
              + ORDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide">
            Modèle robotisé fiable et performant pour tous les surfaces étendues, doté de la technologie Husqvarna EPOS®. Avec une tonte systématique haute précision sans limites à l'intérieur d'une zone virtuelle définie par satellite. Grâce à la technologie EPOS®, aucun câble périphérique n'est nécessaire et grâce aux grandes roues, les entreprises ou les municipalités. Dans la forêt.
          </p>
          <button className="text-green-600 hover:underline font-medium text-base tracking-wide">
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
                        <div className="text-sm font-medium text-gray-900 mb-2">CEORA 546 EPOS Europe ROBOTIC LAWN MOWER</div>
                        <div className="text-sm text-gray-600 mb-3">Réf. : 970 46 79‑01</div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Temps d'utilisation maximale:</span>
                          <span className="font-medium">24 h</span>
                          <span className="text-gray-600">Suit le câble guide:</span>
                          <span className="font-medium">Virtual transport path</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dimensions hors tout</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Poids:</span>
                          <span className="font-medium">38 kg</span>
                          <span className="text-gray-600">Longueur du produit:</span>
                          <span className="font-medium">67 cm</span>
                          <span className="text-gray-600">Largeur du produit:</span>
                          <span className="font-medium">72 cm</span>
                          <span className="text-gray-600">Hauteur du produit:</span>
                          <span className="font-medium">44 cm</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Données relatives au produit</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Code couleur:</span>
                          <span className="font-medium">Orange</span>
                          <span className="text-gray-600">Indice de protection (code IP):</span>
                          <span className="font-medium">IPX5</span>
                          <span className="text-gray-600">Type de batterie:</span>
                          <span className="font-medium">Lion</span>
                          <span className="text-gray-600">Capacité de la batterie:</span>
                          <span className="font-medium">49 Ah</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Système de coupe</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Hauteur de coupe, mini-maxi max:</span>
                          <span className="font-medium">70 mm</span>
                          <span className="text-gray-600">Hauteur de coupe, mini-maxi min:</span>
                          <span className="font-medium">20 mm</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contrôle</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Interface utilisateur:</span>
                          <span className="font-medium">Professional User Interface/App</span>
                          <span className="text-gray-600">Interface utilisateur:</span>
                          <span className="font-medium">None</span>
                          <span className="text-gray-600">Connectivité:</span>
                          <span className="font-medium">Données cellulaires - Kit Connect, Bluetooth®</span>
                          <span className="text-gray-600">Contrôle via application:</span>
                          <span className="font-medium">Husqvarna Fleet Services</span>
                          <span className="text-gray-600">Intégration Smart Home:</span>
                          <span className="font-medium">Oui</span>
                          <span className="text-gray-600">Mise à jour du logiciel:</span>
                          <span className="font-medium">FOTA</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Sécurité</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-600">Suivi GPS en cas de vol:</span>
                          <span className="font-medium">Oui</span>
                          <span className="text-gray-600">Code PIN:</span>
                          <span className="font-medium">Oui</span>
                          <span className="text-gray-600">Alarme:</span>
                          <span className="font-medium">Oui</span>
                          <span className="text-gray-600">Capteur de soulèvement:</span>
                          <span className="font-medium">Oui</span>
                          <span className="text-gray-600">Capteur d'inclinaison:</span>
                          <span className="font-medium">Oui</span>
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
                      <h4 className="font-semibold text-gray-900 mb-2">Station de référence EPOS</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 970 47 10-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Station de référence pour la technologie EPOS permettant une navigation précise par satellite.
                      </p>
                      <div className="text-lg font-bold text-green-600">1 299,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Kit de fixation EPOS</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 970 47 11-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Kit de fixation pour installation sécurisée de la station de référence EPOS.
                      </p>
                      <div className="text-lg font-bold text-green-600">199,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Lames de rechange</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 574 47 68-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Set de 9 lames de rechange haute qualité pour une coupe optimale.
                      </p>
                      <div className="text-lg font-bold text-green-600">49,90 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Kit de nettoyage</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 574 47 69-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Kit complet pour l'entretien et le nettoyage de votre robot tondeuse.
                      </p>
                      <div className="text-lg font-bold text-green-600">79,90 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Garage de protection</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 574 47 70-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Abri de protection contre les intempéries pour votre robot tondeuse.
                      </p>
                      <div className="text-lg font-bold text-green-600">299,00 €</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Kit Connect</h4>
                      <div className="text-sm text-gray-600 mb-2">Réf. : 967 62 37-01</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Module de connectivité cellulaire pour contrôle à distance via l'application.
                      </p>
                      <div className="text-lg font-bold text-green-600">399,00 €</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-12 flex gap-4">
          <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-base tracking-wide">
            Station EPOS
          </button>
          <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-base tracking-wide">
            Kit de fixation EPOS
          </button>
        </div>

        {/* Other Agricultural Robots */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Autres robots agricoles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de désherbage</h3>
              <p className="text-gray-600 text-sm">
                Solutions autonomes pour l'élimination des mauvaises herbes
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de pulvérisation</h3>
              <p className="text-gray-600 text-sm">
                Application précise de traitements phytosanitaires
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Robots de récolte</h3>
              <p className="text-gray-600 text-sm">
                Automatisation de la récolte pour différentes cultures
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
                <div className="text-sm text-gray-500 mb-1">CEORA® 546 EPOS®</div>
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
                          ? 'border-green-500 text-green-600 bg-green-50'
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

export default HusqvarnaCeoraPage;