import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Robots serveurs',
      description: 'Robots autonomes spécialisés pour la livraison de repas et boissons.',
      image: '/home2.webp',
      features: [
        'Navigation autonome',
        'Interface tactile',
        'Plateau amovible',
        'Sécurité renforcée'
      ]
    },
    {
      id: 2,
      title: 'Robots de livraison',
      description: 'Solutions robotisées avancées pour optimiser les services logistiques et administratifs.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Livraison précise',
        'Sécurité sanitaire',
        'Composants IP',
        'Planification intelligente'
      ]
    },
    {
      id: 3,
      title: 'Robots de nettoyage',
      description: 'Nettoyage professionnel autonome pour tous types d\'environnements.',
      image: 'https://images.pexels.com/photos/4792365/pexels-photo-4792365.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Nettoyage complet',
        'Système avancé',
        'Programmation flexible',
        'Maintenance simple'
      ]
    },
    {
      id: 4,
      title: 'Robots d\'accueil',
      description: 'Accueil intelligent et interaction naturelle avec vos visiteurs.',
      image: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Reconnaissance vocale',
        'Navigation',
        'Écran informatif',
        'Interaction naturelle'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre gamme de robots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions robotiques avancées pour optimiser vos opérations et améliorer 
            l'expérience de vos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
           <div key={product.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <ExternalLink className="h-5 w-5 text-white bg-black bg-opacity-50 rounded p-1" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200">
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;