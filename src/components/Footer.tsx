import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    activite: '',
    entreprise: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Obtenez un devis personnalisé pour intégrer nos robots de service 
                dans votre environnement professionnel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">contact@dtech-robots.fr</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Paris, France</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Demander un devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Secteur d'activité
                  </label>
                  <select
                    name="activite"
                    value={formData.activite}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    <option value="restauration">Restauration</option>
                    <option value="hotellerie">Hôtellerie</option>
                    <option value="beaute">Beauté & Bien-être</option>
                    <option value="agriculture">Agriculture & Espaces verts</option>
                    <option value="service-entretien">Service & Entretien</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 resize-none"
                    placeholder="Décrivez vos besoins spécifiques..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
                >
                  Envoyer la demande →
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded text-gray-900 flex items-center justify-center font-bold mr-3">
                  D
                </div>
                <span className="text-xl font-bold">DTECH</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Pionniers dans la robotique de service. Nous concevons et développons des solutions robotiques 
                innovantes pour transformer les entreprises.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +33 1 23 45 67 89
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  dtech@robots.fr
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Paris, France
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Page d'accueil</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Secteurs d'activité</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Nos produits</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Conseil & Audit</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Installation & Formation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Maintenance & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Support technique</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">CGV</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 DTECH. Tous droits réservés. | Conditions générales | Politique de confidentialité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;