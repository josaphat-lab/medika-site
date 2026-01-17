import { Calendar, FileText, Pill, DollarSign, Stethoscope, Users, Bell, BarChart, Lock, Cloud, Smartphone, Zap, CheckCircle, Activity } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Gestion des Consultations',
      description: 'Système complet de gestion des rendez-vous et consultations médicales',
      features: [
        'Agenda médical intelligent avec vue jour/semaine/mois',
        'Prise de rendez-vous en ligne pour les patients',
        'Rappels automatiques par SMS et email',
        'Gestion des salles et ressources',
        'Historique complet des consultations',
        'Intégration avec le dossier patient',
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Dossier Patient Numérique',
      description: 'Dossier médical électronique complet et sécurisé',
      features: [
        'Fiche patient complète avec photo',
        'Historique médical détaillé',
        'Allergies et antécédents',
        'Documents et imagerie médicale',
        'Courbes de croissance et constantes',
        'Partage sécurisé entre praticiens',
      ],
      image: 'https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Stethoscope,
      title: 'Espace Médecins',
      description: 'Interface professionnelle dédiée aux praticiens',
      features: [
        'Tableau de bord personnalisé',
        'Prescriptions électroniques',
        'Ordonnances pré-enregistrées',
        'Suivi des traitements',
        'Téléconsultation intégrée',
        'Statistiques et performance',
      ],
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Gestion du Laboratoire',
      description: 'Solution complète pour la gestion des analyses médicales',
      features: [
        'Enregistrement des prélèvements',
        'Traçabilité des échantillons',
        'Saisie des résultats numériques',
        'Validation et signature électronique',
        'Impression des bulletins',
        'Intégration des automates',
      ],
      image: 'https://images.pexels.com/photos/8376294/pexels-photo-8376294.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Pill,
      title: 'Pharmacie',
      description: 'Gestion complète de la pharmacie hospitalière',
      features: [
        'Gestion des stocks en temps réel',
        'Suivi des péremptions',
        'Dispensation avec contrôle',
        'Inventaire automatisé',
        'Alertes de rupture de stock',
        'Gestion des fournisseurs',
      ],
      image: 'https://images.pexels.com/photos/5910952/pexels-photo-5910952.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: DollarSign,
      title: 'Caisse & Facturation',
      description: 'Système de gestion financière avancé',
      features: [
        'Facturation automatique',
        'Gestion des assurances et mutuelles',
        'Encaissement multiple (cash, carte, mobile)',
        'Comptabilité en temps réel',
        'Rapports financiers détaillés',
        'Gestion des impayés',
      ],
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-rose-500 to-red-500',
    },
  ];

  const additionalFeatures = [
    {
      icon: Bell,
      title: 'Notifications Intelligentes',
      description: 'Alertes et rappels automatiques pour patients et personnel',
    },
    {
      icon: BarChart,
      title: 'Tableaux de Bord',
      description: 'Statistiques et analytics en temps réel',
    },
    {
      icon: Lock,
      title: 'Sécurité Maximale',
      description: 'Chiffrement des données et conformité RGPD',
    },
    {
      icon: Cloud,
      title: 'Cloud & Sauvegarde',
      description: 'Accès partout avec sauvegarde automatique',
    },
    {
      icon: Smartphone,
      title: 'Application Mobile',
      description: 'Accès mobile pour médecins et patients',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Système rapide et hautement disponible',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium animate-slideDown">
            Fonctionnalités Complètes
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Tout ce dont vous avez besoin pour gérer votre{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              établissement de santé
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn">
            Medika offre une suite complète d'outils pour digitaliser et optimiser tous les aspects de votre gestion médicale
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fadeInLeft`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: `${idx * 50}ms` }}>
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fadeInRight`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Et bien plus encore...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des fonctionnalités additionnelles pour une expérience complète
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <Activity className="w-16 h-16 mx-auto mb-6 text-emerald-100" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez Medika en action
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Demandez une démonstration gratuite et personnalisée de notre solution
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Réserver une démo
          </button>
        </div>
      </section>
    </div>
  );
}
