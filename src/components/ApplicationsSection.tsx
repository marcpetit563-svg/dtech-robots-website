import React from 'react';
import { Building2, Heart, Hotel, Sparkles } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <Hotel className="h-8 w-8" />,
      title: 'Hôtellerie & Restauration',
      description: 'Améliorez l\'expérience client avec des robots servants et d\'accueil.',
      features: [
        'Service 24h/7j',
        'Réduction des coûts',
        'Expérience client unique'
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commerce & Retail',
      description: 'Automatisez les opérations commerciales et améliorez l\'assistance client.',
      features: [
        'Inventaire intelligent',
        'Assistance personnalisée',
        'Gestion des stocks'
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Bureaux & Entreprises',
      description: 'Optimisez les flux avec robots de nettoyage et d\'accueil.',
      features: [
        'Environnement propre',
        'Accueil professionnel',
        'Productivité accrue'
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Secteur médical',
      description: 'Support logistique avec désinfection et livraison en milieu médical.',
      features: [
        'Hygiène garantie',
        'Livraison stérilisée',
        'Assistance médicale'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Applications sectorielles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos robots s'adaptent à vos besoins spécifiques dans tous vos secteurs 
            d'activité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 mb-4">
                <div className="text-blue-600">
                  {app.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {app.description}
              </p>
              
              <ul className="text-xs text-gray-500 space-y-1">
                {app.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;