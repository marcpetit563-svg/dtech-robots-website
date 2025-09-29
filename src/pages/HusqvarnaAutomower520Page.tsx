import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, X, ChevronRight, ArrowLeft, ChevronLeft } from 'lucide-react';

const HusqvarnaAutomower520Page = () => {
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('gps');
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false);
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [currentCharacteristicIndex, setCurrentCharacteristicIndex] = useState(0);

  // Images du produit
  const productImages = [
    '/t5201.webp',
    '/t5202.webp',
    '/t5203.webp',
    '/t5204.webp',
    '/t5205.webp'
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

  // Données des caractéristiques pour le carrousel
  const characteristicsCards = [
    {
      id: 1,
      title: 'GPS assisté',
      image: '/modal1.webp',
      description: 'Navigation GPS pour une tonte précise et efficace',
      details: 'Le système GPS assisté permet une navigation précise et une cartographie automatique de votre jardin pour une tonte optimale.'
    },
    {
      id: 2,
      title: 'Connectivité Bluetooth',
      image: '/modal2.webp',
      description: 'Contrôle via smartphone et application dédiée',
      details: 'Connectivité Bluetooth pour contrôle à distance via l\'application Husqvarna Automower® Connect.'
    },
    {
      id: 3,
      title: 'Pentes jusqu\'à 45%',
      image: '/modal3.webp',
      description: 'Capacité à tondre sur des terrains en pente',
      details: 'Moteurs puissants et adhérence optimisée pour tondre efficacement sur des pentes jusqu\'à 45%.'
    },
    {
      id: 4,
      title: 'Surface jusqu\'à 2200 m²',
      image: '/modal4.webp',
      description: 'Adapté aux jardins de taille moyenne à grande',
      details: 'Conçu pour entretenir efficacement des surfaces jusqu\'à 2200 m² avec une autonomie optimisée.'
    },
    {
      id: 5,
      title: 'Système de coupe X-Line',
      image: '/modal1.webp',
      description: 'Lames rotatives pour une coupe uniforme',
      details: 'Système de coupe X-Line avec lames rotatives pour une coupe uniforme et un mulching naturel.'
    },
    {
      id: 6,
      title: 'Protection antivol',
      image: '/modal2.webp',
      description: 'Sécurité avancée avec alarme et code PIN',
      details: 'Système de sécurité complet avec alarme, code PIN et suivi GPS en cas de vol.'
    },
    {
      id: 7,
      title: 'Capteurs météo',
      image: '/modal3.webp',
      description: 'Adaptation automatique aux conditions météo',
      details: 'Capteurs météo intégrés pour adapter automatiquement les cycles de tonte selon les conditions.'
    },
    {
      id: 8,
      title: 'Retour automatique',
      image: '/modal4.webp',
      description: 'Retour intelligent à la station de charge',
      details: 'Retour automatique à la station de charge quand la batterie est faible, puis reprise de la tonte.'
    },
    {
      id: 9,
      title: 'Installation facile',
      image: '/modal1.webp',
      description: 'Mise en service rapide et intuitive',
      details: 'Installation simplifiée avec guide étape par étape et configuration automatique des paramètres.'
    },
    {
      id: 10,
      title: 'Capteurs de collision',
      image: '/modal2.webp',
      description: 'Détection automatique des obstacles',
      details: 'Capteurs de collision avancés pour éviter les obstacles et protéger la tondeuse et votre jardin.'
    },
    {
      id: 11,
      title: 'Programmation flexible',
      image: '/modal3.webp',
      description: 'Horaires personnalisables selon vos besoins',
      details: 'Programmation flexible avec horaires personnalisables pour s\'adapter à votre mode de vie.'
    },
    {
      id: 12,
      title: 'Mulching intelligent',
      image: '/modal4.webp',
      description: 'Fertilisation naturelle du gazon',
      details: 'Système de mulching qui transforme l\'herbe coupée en engrais naturel pour nourrir votre pelouse.'
    },
    {
      id: 13,
      title: 'Résistance aux intempéries',
      image: '/modal1.webp',
      description: 'Fonctionnement par tous les temps',
      details: 'Conception étanche IPX4 permettant un fonctionnement sûr même sous la pluie.'
    },
    {
      id: 14,
      title: 'Batterie longue durée',
      image: '/modal2.webp',
      description: 'Autonomie optimisée pour grandes surfaces',
      details: 'Batterie lithium-ion haute capacité pour une autonomie prolongée et une charge rapide.'
    },
    {
      id: 15,
      title: 'Mode Spot Cut',
      image: '/modal3.webp',
      description: 'Tonte intensive des zones spécifiques',
      details: 'Mode Spot Cut pour tonte intensive des zones qui nécessitent une attention particulière.'
    },
    {
      id: 16,
      title: 'Capteur de gel',
      image: '/modal4.webp',
      description: 'Protection automatique contre le gel',
      details: 'Capteur de gel intégré qui suspend automatiquement la tonte pour protéger le gazon.'
    },
    {
      id: 17,
      title: 'Roues tout-terrain',
      image: '/modal1.webp',
      description: 'Adhérence optimale sur tous terrains',
      details: 'Roues spécialement conçues pour une adhérence maximale sur terrains humides et en pente.'
    },
    {
      id: 18,
      title: 'Maintenance simplifiée',
      image: '/modal2.webp',
      description: 'Entretien facile et rapide',
      details: 'Conception modulaire facilitant l\'entretien avec accès simplifié aux composants principaux.'
    },
    {
      id: 10,
      title: 'Capteurs de collision',
      image: '/t520m10.webp',
      description: 'Détection automatique des obstacles',
      details: 'Capteurs de collision avancés pour éviter les obstacles et protéger la tondeuse et votre jardin.'
    },
    {
      id: 11,
      title: 'Programmation flexible',
      image: '/t520m11.webp',
      description: 'Horaires personnalisables selon vos besoins',
      details: 'Programmation flexible avec horaires personnalisables pour s\'adapter à votre mode de vie.'
    },
    {
      id: 12,
      title: 'Mulching intelligent',
      image: '/t520m12.webp',
      description: 'Fertilisation naturelle du gazon',
      details: 'Système de mulching qui transforme l\'herbe coupée en engrais naturel pour nourrir votre pelouse.'
    },
    {
      id: 13,
      title: 'Résistance aux intempéries',
      image: '/t520m13.webp',
      description: 'Fonctionnement par tous les temps',
      details: 'Conception étanche IPX4 permettant un fonctionnement sûr même sous la pluie.'
    },
    {
      id: 14,
      title: 'Batterie longue durée',
      image: '/t520m14.webp',
      description: 'Autonomie optimisée pour grandes surfaces',
      details: 'Batterie lithium-ion haute capacité pour une autonomie prolongée et une charge rapide.'
    },
    {
      id: 15,
      title: 'Mode Spot Cut',
      image: '/t520m15.webp',
      description: 'Tonte intensive des zones spécifiques',
      details: 'Mode Spot Cut pour tonte intensive des zones qui nécessitent une attention particulière.'
    },
    {
      id: 16,
      title: 'Capteur de gel',
      image: '/t520m16.webp',
      description: 'Protection automatique contre le gel',
      details: 'Capteur de gel intégré qui suspend automatiquement la tonte pour protéger le gazon.'
    },
    {
      id: 17,
      title: 'Roues tout-terrain',
      image: '/t520m17.webp',
      description: 'Adhérence optimale sur tous terrains',
      details: 'Roues spécialement conçues pour une adhérence maximale sur terrains humides et en pente.'
    },
    {
      id: 18,
      title: 'Maintenance simplifiée',
      image: '/t520m18.webp',
      description: 'Entretien facile et rapide',
      details: 'Conception modulaire facilitant l\'entretien avec accès simplifié aux composants principaux.'
    }
  ];

  // Données des caractéristiques pour la modale
  const characteristics = {
    interface: {
      title: 'Interface utilisateur professionnelle',
      image: '/t520m1.webp',
      content: 'Interface adaptée à une utilisation professionnelle, c\'est-à-dire avec tous les réglages et commandes gérés à distance via l\'application pour smartphone Husqvarna Fleet Services ou via un PC/une tablette. Commandes sur le produit ; témoin d\'état à LED et fonctionnalité DÉMARRAGE/ARRÊT. Simplifie l\'utilisation pour les utilisateurs inexpérimentés et minimise la gravité de l\'impact sur le produit en cas de vandalisme.'
    },
    gps: {
      title: 'Navigation assistée par GPS',
      image: '/t520m2.webp',
      content: 'Un système GPS embarqué établit une carte du jardin, y compris le tracé de la limite et l\'installation des câbles de guidage. L\'Husqvarna Automower® enregistre ensuite les parties du jardin qu\'elle a déjà tondues et adapte son schéma de tonte en conséquence. Ceci permet une couverture optimale de la surface tondue et assure un excellent résultat de coupe.'
    },
    fleet: {
      title: 'Husqvarna Fleet Services™',
      image: '/t520m3.webp',
      content: 'Husqvarna Fleet Services™ vous donne le contrôle total du robot de tonte, et la possibilité de surveiller, contrôler, et analyser l\'ensemble de votre flotte de produits à partir de votre smartphone, tablette ou ordinateur. Vous pouvez avoir une vue générale de l\'état de votre part, l\'emplacement exacte des machines, leur demander de s\'arrêter ou de démarrer la tonte, ou de les ramener à la station de charge en cas d\'intempéries violents. La hauteur de coupe des robots est facilement réglable. Vous recevez également des alarmes et pouvez suivre la position de votre robot en cas de vol, peu importe l\'endroit où vous vous trouvez. Utilisation requise d\'Automower Connect lors de l\'installation d\'un robot EPOS pour une tonte sans fil périphérique'
    },
    guidage: {
      title: 'Triple fil de guidage - BREVETÉ',
      image: '/t520m4.webp',
      content: 'Des triples fils de guidage réduisent le temps de recherche y compris si la zone d\'installation est grande, complexe, ou divisée en plusieurs petites zones.'
    },
    reglage: {
      title: 'Réglage électrique de la hauteur',
      image: '/t520m5.webp',
      content: 'Le réglage électrique de la hauteur de coupe permet de régler facilement la hauteur souhaitée directement depuis l\'application Husqvarna Automower® Connect. Le réglage est également accessible depuis le menu principal de la tondeuse.'
    },
    disque: {
      title: 'Disque de coupe à 5 lames',
      image: '/t520m6.webp',
      content: 'Les disques de coupe des modèles commerciaux, Automower 500-series et CEORA, sont équipés de 5 lames HSS Enhance, ce qui permet d\'obtenir une meilleure performance de coupe. Un plus grand nombre de lames par disque permet d\'obtenir une coupe plus fine et d\'espacer les changements de lames.'
    },
    systeme: {
      title: 'Système de coupe unique',
      image: '/t520m7.webp',
      content: 'L\'Husqvarna Automower® ne coupe qu\'un petit peu à la fois, mais fréquemment, ce qui garantit un gazon beau et sain. Elle est équipée de lames affûtées comme des rasoirs, fabriquées en robuste acier au carbone et montées sur un solide système de disque de tonte. Ceci garantit un fonctionnement efficient et une très faible consommation d\'énergie'
    },
    equilibre: {
      title: 'Contrôle de l\'équilibre',
      image: '/t520m8.webp',
      content: 'Détecte et signale automatiquement si un déséquilibre du système de coupe se produit pour garantir un fonctionnement silencieux et sans problème. Le déséquilibre peut être causé par des lames manquantes, montées en double ou endommagées.'
    },
    terrains: {
      title: 'Maîtrise des terrains difficiles',
      image: '/t520m9.webp',
      content: 'Les grandes roues d\'entraînement offrent une excellente traction, même si la surface est lisse. La tondeuse maîtrise des pentes jusqu\'à 45%.'
    },
    minuterie: {
      title: 'Minuterie adaptative',
      image: '/t520m10.webp',
      content: 'Il ajuste le temps de travail au taux de croissance du gazon, ce qui signifie, que l\'Automower® maximise ses heures de tonte pendant les période de forte croissance du gazon. Par temps ensoleillé et sec ou tard dans la saison, la tondeuse passera moins de temps à tondre, ce qui réduira la sollicitation de la pelouse et de la tondeuse.'
    },
    spirale: {
      title: 'Coupe en spirale',
      image: '/t520m11.webp',
      content: 'Les modes point de tonte et tonte en spirale peuvent être activés pour une tonte efficace dans les zones où l\'herbe est haute. Lorsque la fonction de tonte en spirale est activée, les capteurs du disque de coupe détectent lorsque la tondeuse pénètre dans une zone où l\'herbe est plus haute et suivent alors automatiquement un trajet en spirale. Le point de tonte est un mode permettant de tondre rapidement une zone limitée d\'herbe plus longue. Ceci est particulièrement utile pour traiter les zones telles que sous des meubles de jardin, une fois que l\'on a retiré ces objets. Placez la tondeuse dans la zone souhaitée et choisissez le mode point de tonte. La tondeuse tond en spirales étroites et se remet en mode automatique une fois l\'opération terminée.'
    },
    passages: {
      title: 'Maîtrise automatique de passages',
      image: '/t520m12.webp',
      content: 'L\'Automower® détecte automatiquement les passages étroits et se fraie son chemin même dans les endroits exigus. Son chemin dans le passage varie, afin d\'éviter des traces disgracieuses.'
    },
    stationnement: {
      title: 'Bouton de stationnement sur la station de charge - BREVETÉ',
      image: '/t520m13.webp',
      content: 'Innovation brevetée Husqvarna : bouton de stationnement directement intégré sur la station de charge pour un contrôle facile et immédiat du robot.'
    },
    programmation: {
      title: 'Programmation de la minuterie',
      image: '/t520m14.webp',
      content: 'Minuterie facilement programmable pour définir les temps de travail de votre Automower®'
    },
    protection: {
      title: 'Protection GPS contre les vols',
      image: '/t520m15.webp',
      content: 'Les produits équipés de la technologie Automower Connect®/Husqvarna Fleet Services™ démarrent automatiquement le suivi GPS en temps réel et envoient des notifications sur tous vos appareils. Rend l\'installation de l\'application Automower® plus sûre et réduit le risque de vol.'
    },
    securite: {
      title: 'Capteurs de sécurité',
      image: '/t520m16.webp',
      content: 'Si la Husqvarna Automower® est utilisée correctement, le produit est sûr et fiable. Il est équipé de plusieurs capteurs, dont un arrêt automatique et immédiat de la fonction de coupe si l\'appareil bascule ou est soulevé du sol. La conception du produit garantit que les lames sont positionnées bien loin du bord extérieur du corps de la machine pour une sécurité accrue. Si Automower® rencontre un obstacle, il s\'arrête ou change de direction, assurant ainsi sa mission de tonte.'
    },
    etanche: {
      title: 'Conception étanche',
      image: '/t520m17.webp',
      content: 'Les produits robotisés Husqvarna sont construits sur la base de 30 ans d\'expérience dans des conditions climatiques difficiles, telles que le climat nordique. Ils sont conçus pour fonctionner 24 heures sur 24, 7 jours sur 7, tout au long de la saison de croissance de l\'herbe, avec un entretien et un nettoyage normaux. Le système de coupe unique, avec des lames de rasoir suspendues sur un disque de coupe, garantit un résultat de coupe même par temps de pluie.'
    },
    emissions: {
      title: 'Faibles émissions de carbone',
      image: '/t520m18.webp',
      content: 'En choisissant ce produit, vous pouvez être sûr qu\'il produit moins d\'émissions de carbone pendant son utilisation active qu\'un produit à essence traditionnel. Ce produit à batterie n\'émet pas de CO2 pendant son utilisation, tout en offrant la puissance et la qualité que vous attendez d\'un produit Husqvarna. Cependant, il est important de noter que les émissions de CO2 sont générées à d\'autres étapes du cycle de vie du produit, telles que la production, le chargement et l\'élimination en fin de vie.'
    }
  };

  const tabOrder = ['interface', 'gps', 'fleet', 'guidage', 'reglage', 'disque', 'systeme', 'equilibre', 'terrains', 'minuterie', 'spirale', 'passages', 'stationnement', 'programmation', 'protection', 'securite', 'etanche', 'emissions'];

  // Navigation du carrousel de caractéristiques
  const handleNextCharacteristic = () => {
    const maxIndex = Math.max(0, characteristicsCards.length - 3);
    setCurrentCharacteristicIndex((prev) => Math.min(prev + 3, maxIndex));
  };

  const handlePrevCharacteristic = () => {
    setCurrentCharacteristicIndex((prev) => Math.max(prev - 3, 0));
  };

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
      // Simplified focus management to avoid errors
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
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
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-base font-medium tracking-wide">
              Tondeuses autonomes
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Husqvarna Automower® 520</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-base font-medium tracking-wide">
              Husqvarna Automower® 520
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
                    alt="Husqvarna Automower® 520"
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
                  title="Husqvarna Automower® 520 - Vidéo de démonstration"
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
                  Automower®<br />
                  520
                </h2>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <div className="text-3xl font-bold text-white mb-1 leading-[1.1] tracking-wide">2 899,00 €</div>
              <div className="text-base text-gray-300 leading-[1.4] font-medium tracking-wide">Prix de vente recommandé, TTC inclus</div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white px-6 py-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-3 border-green-500 pl-3 leading-[1.4] tracking-wide">CARACTÉRISTIQUES</h3>
              <div className="space-y-2">
                <button
                  onClick={() => openModal('gps')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Navigation GPS pour une tonte précise et efficace
                </button>
                <button
                  onClick={() => openModal('fleet')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Contrôle via smartphone et application dédiée
                </button>
                <button
                  onClick={() => openModal('terrains')}
                  className="flex items-center text-base text-gray-800 hover:text-green-600 transition-colors duration-200 w-full text-left py-2 leading-[1.5] font-medium tracking-wide"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Capacité à tondre sur des terrains en pente
                </button>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Adapté aux jardins de taille moyenne à grande
                </div>
                <div className="flex items-center text-base text-gray-800 py-2 leading-[1.5] font-medium tracking-wide">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Lames rotatives pour une coupe uniforme
                </div>
              </div>
              <button
                onClick={() => openModal('gps')}
                className="text-green-600 text-base hover:underline mt-4 inline-block transition-colors duration-200 leading-[1.5] font-medium tracking-wide"
              >
                → Voir toutes les caractéristiques
              </button>
            </div>

            {/* Package */}
            <div className="bg-gray-900 text-white px-6 py-5">
              <h3 className="text-base font-semibold mb-4 text-white leading-[1.4] tracking-wide">Contenu du pack</h3>
              <div className="space-y-2 text-base">
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Husqvarna Automower® 520 → 970 52 09-14</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Station de charge</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Câble périphérique (200m)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Piquets de fixation (300 pcs)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Lames de rechange (9 pcs)</div>
                <div className="text-gray-100 leading-[1.5] font-medium tracking-wide">• Kit d'installation complet</div>
              </div>
            </div>

            {/* Bouton de commande */}
            <button className="w-full bg-green-600 text-white py-4 px-6 font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md leading-[1.2] tracking-wide mt-auto">
              + ORDER
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Description du produit</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium tracking-wide">
            L'Husqvarna Automower® 520 est une tondeuse robotisée intelligente conçue pour les jardins résidentiels de taille moyenne à grande. 
            Avec sa navigation GPS assistée et sa connectivité Bluetooth, elle offre une tonte précise et efficace jusqu'à 2200 m². 
            Capable de gérer des pentes jusqu'à 45%, elle s'adapte parfaitement aux terrains difficiles tout en maintenant une coupe uniforme grâce à son système de lames rotatives.
          </p>
          <button className="text-green-600 hover:underline font-medium text-base tracking-wide">
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
                      L'Husqvarna Automower® 520 combine innovation et fiabilité pour offrir une solution de tonte automatisée parfaite pour les jardins résidentiels.
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-green-800 font-medium">
                        🌱 <strong>Écologique :</strong> Fonctionnement 100% électrique sans émissions directes de CO2.
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
                          <span className="font-semibold text-gray-900">Surface de travail :</span>
                          <span className="text-gray-700 ml-2">2200 m²</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Pente maximale :</span>
                          <span className="text-gray-700 ml-2">45%</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Hauteur de coupe :</span>
                          <span className="text-gray-700 ml-2">20-60 mm</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Temps de charge :</span>
                          <span className="text-gray-700 ml-2">60 min</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Autonomie :</span>
                          <span className="text-gray-700 ml-2">240 min</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Niveau sonore :</span>
                          <span className="text-gray-700 ml-2">58 dB(A)</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Largeur de coupe :</span>
                          <span className="text-gray-700 ml-2">24 cm</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Poids :</span>
                          <span className="text-gray-700 ml-2">13,2 kg</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Connectivité :</span>
                          <span className="text-gray-700 ml-2">Bluetooth, GPS</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-900">Protection :</span>
                          <span className="text-gray-700 ml-2">IPX4</span>
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
                <div className="text-sm text-gray-500 mb-1">Automower® 520</div>
                <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
                  Caractéristiques <span className="text-gray-500">(18)</span>
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

export default HusqvarnaAutomower520Page;