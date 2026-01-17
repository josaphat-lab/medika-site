import { BookOpen, FileText, Video, Download, Code, Users, Zap, Search } from 'lucide-react';
import { useState } from 'react';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Démarrage Rapide',
      icon: Zap,
      content: [
        {
          title: 'Installation et Configuration',
          description: 'Apprenez à installer et configurer Medika pour votre établissement en quelques étapes simples.',
          items: [
            'Création de votre compte administrateur',
            'Configuration des paramètres de base',
            'Ajout des utilisateurs et attribution des rôles',
            'Personnalisation de l\'interface',
            'Premier démarrage et vérifications',
          ],
        },
        {
          title: 'Premiers Pas',
          description: 'Guide pas à pas pour commencer à utiliser Medika efficacement.',
          items: [
            'Créer votre premier dossier patient',
            'Enregistrer une consultation',
            'Effectuer une facturation',
            'Gérer votre agenda',
            'Générer votre premier rapport',
          ],
        },
      ],
    },
    {
      id: 'modules',
      title: 'Modules',
      icon: FileText,
      content: [
        {
          title: 'Gestion des Consultations',
          description: 'Documentation complète sur le module de gestion des consultations et rendez-vous.',
          items: [
            'Configuration de l\'agenda médical',
            'Prise de rendez-vous en ligne et physique',
            'Gestion des salles de consultation',
            'Rappels automatiques aux patients',
            'Historique des consultations',
          ],
        },
        {
          title: 'Dossier Patient Numérique',
          description: 'Guide d\'utilisation du dossier médical électronique.',
          items: [
            'Création et modification de fiches patients',
            'Enregistrement des antécédents médicaux',
            'Gestion des allergies et traitements',
            'Téléchargement de documents médicaux',
            'Partage sécurisé entre praticiens',
          ],
        },
        {
          title: 'Laboratoire',
          description: 'Documentation du module de gestion de laboratoire.',
          items: [
            'Enregistrement des demandes d\'analyses',
            'Gestion des prélèvements',
            'Saisie et validation des résultats',
            'Impression des bulletins d\'analyses',
            'Intégration avec les automates',
          ],
        },
        {
          title: 'Pharmacie',
          description: 'Guide complet pour la gestion de la pharmacie.',
          items: [
            'Gestion du stock de médicaments',
            'Dispensation et contrôle',
            'Suivi des péremptions',
            'Inventaire et réapprovisionnement',
            'Gestion des fournisseurs',
          ],
        },
        {
          title: 'Caisse et Facturation',
          description: 'Documentation du système de facturation et encaissement.',
          items: [
            'Création et édition de factures',
            'Gestion des paiements multiples',
            'Tiers payant et assurances',
            'Remboursements et avoirs',
            'Rapports financiers et comptables',
          ],
        },
      ],
    },
    {
      id: 'tutorials',
      title: 'Tutoriels Vidéo',
      icon: Video,
      content: [
        {
          title: 'Vidéos de Formation',
          description: 'Accédez à notre bibliothèque de tutoriels vidéo pour apprendre visuellement.',
          items: [
            'Introduction à Medika (10 min)',
            'Gestion des patients (15 min)',
            'Module laboratoire en détail (20 min)',
            'Facturation et assurances (12 min)',
            'Rapports et statistiques (8 min)',
          ],
        },
      ],
    },
    {
      id: 'api',
      title: 'API & Intégrations',
      icon: Code,
      content: [
        {
          title: 'Documentation API',
          description: 'Guide complet pour intégrer Medika avec vos systèmes existants.',
          items: [
            'Authentification et tokens d\'accès',
            'Endpoints disponibles',
            'Formats de données (JSON, XML)',
            'Webhooks et notifications',
            'Exemples de code et SDK',
          ],
        },
        {
          title: 'Intégrations',
          description: 'Connectez Medika avec d\'autres outils et équipements.',
          items: [
            'Intégration avec automates de laboratoire',
            'Connexion aux équipements médicaux',
            'Synchronisation avec systèmes comptables',
            'APIs de paiement mobile',
            'Services de messagerie (SMS, Email)',
          ],
        },
      ],
    },
    {
      id: 'admin',
      title: 'Administration',
      icon: Users,
      content: [
        {
          title: 'Gestion des Utilisateurs',
          description: 'Administration des comptes utilisateurs et permissions.',
          items: [
            'Création et modification de comptes',
            'Attribution des rôles et permissions',
            'Gestion des groupes d\'utilisateurs',
            'Audit des actions utilisateurs',
            'Réinitialisation des mots de passe',
          ],
        },
        {
          title: 'Configuration Avancée',
          description: 'Paramètres avancés pour personnaliser Medika.',
          items: [
            'Personnalisation des formulaires',
            'Création de modèles de documents',
            'Configuration des workflows',
            'Paramètres de sécurité',
            'Sauvegardes et restauration',
          ],
        },
      ],
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Guide Utilisateur PDF',
      description: 'Manuel complet en PDF (150 pages)',
      size: '12 MB',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Video,
      title: 'Vidéos de Formation',
      description: 'Collection de 25+ tutoriels vidéo',
      size: '2h 30min',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Documentation API',
      description: 'Guide technique pour développeurs',
      size: '80 pages',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: FileText,
      title: 'Fiches Pratiques',
      description: 'Quick references et aide-mémoire',
      size: '25 fiches',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 mx-auto shadow-xl animate-fadeIn">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Documentation{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Medika
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fadeIn">
              Guides complets, tutoriels et ressources pour maîtriser Medika
            </p>

            <div className="relative max-w-2xl mx-auto animate-fadeIn">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <section.icon className="w-5 h-5" />
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${activeSection !== section.id ? 'hidden' : ''}`}
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <section.icon className="w-10 h-10 text-emerald-600" />
                  {section.title}
                </h2>
              </div>

              <div className="space-y-8">
                {section.content.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 border-b border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {item.items.map((subItem, idx) => (
                          <li key={idx} className="flex items-start gap-3 group cursor-pointer">
                            <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 transition-colors">
                              <span className="text-emerald-600 text-sm font-bold group-hover:text-white">
                                {idx + 1}
                              </span>
                            </div>
                            <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">
                              {subItem}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ressources Téléchargeables</h2>
            <p className="text-xl text-gray-600">Téléchargez nos guides et documentation pour un accès hors ligne</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${resource.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <resource.icon className="w-12 h-12 mb-4 relative z-10" />
                  <h3 className="text-xl font-bold mb-2 relative z-10">{resource.title}</h3>
                  <p className="text-sm opacity-90 relative z-10">{resource.size}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-all group-hover:shadow-md">
                    <Download className="w-5 h-5" />
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-emerald-100" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'aide supplémentaire ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Notre équipe de support est disponible pour vous accompagner dans l'utilisation de Medika
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contacter le support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Réserver une formation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
