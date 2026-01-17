import { Shield, Lock, Key, Eye, Database, CheckCircle, FileCheck, UserCheck, AlertTriangle, Cloud, RefreshCw, Activity } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Chiffrement de bout en bout',
      description: 'Toutes vos données sont chiffrées avec les protocoles les plus avancés (AES-256) lors du stockage et du transfert. Vos informations médicales sont protégées par des algorithmes cryptographiques de niveau militaire.',
    },
    {
      icon: Key,
      title: 'Authentification sécurisée',
      description: 'Système d\'authentification multi-facteurs (2FA) pour tous les utilisateurs. Contrôle d\'accès basé sur les rôles (RBAC) pour garantir que chaque utilisateur n\'accède qu\'aux données nécessaires à sa fonction.',
    },
    {
      icon: Eye,
      title: 'Audit et traçabilité',
      description: 'Journalisation complète de toutes les actions effectuées dans le système. Chaque consultation, modification ou accès aux dossiers patients est enregistré avec horodatage et identification de l\'utilisateur.',
    },
    {
      icon: Database,
      title: 'Sauvegarde automatique',
      description: 'Sauvegardes automatiques toutes les heures avec conservation pendant 90 jours. Possibilité de restauration à tout moment. Stockage redondant sur plusieurs centres de données pour garantir la disponibilité.',
    },
    {
      icon: Cloud,
      title: 'Infrastructure sécurisée',
      description: 'Hébergement dans des centres de données certifiés ISO 27001 avec pare-feu applicatifs, détection d\'intrusion et protection contre les attaques DDoS. Surveillance 24/7 par notre équipe de sécurité.',
    },
    {
      icon: RefreshCw,
      title: 'Mises à jour de sécurité',
      description: 'Déploiement automatique des correctifs de sécurité sans interruption de service. Notre équipe surveille en permanence les nouvelles vulnérabilités et applique les correctifs rapidement.',
    },
  ];

  const compliance = [
    {
      icon: FileCheck,
      title: 'Conformité RGPD',
      description: 'Respect total du Règlement Général sur la Protection des Données',
      details: [
        'Consentement explicite des patients',
        'Droit d\'accès et de rectification',
        'Droit à l\'oubli',
        'Portabilité des données',
        'Notification des violations sous 72h',
      ],
    },
    {
      icon: UserCheck,
      title: 'Normes médicales',
      description: 'Conformité aux standards internationaux de santé',
      details: [
        'HL7 pour l\'échange de données médicales',
        'DICOM pour l\'imagerie médicale',
        'ICD-10 pour le codage des diagnostics',
        'Secret médical garanti',
        'Conservation légale des dossiers',
      ],
    },
    {
      icon: Shield,
      title: 'Certifications',
      description: 'Certifications et audits de sécurité',
      details: [
        'ISO 27001 (Sécurité de l\'information)',
        'ISO 27018 (Protection des données cloud)',
        'Audits de sécurité trimestriels',
        'Tests de pénétration annuels',
        'Conformité HIPAA (sur demande)',
      ],
    },
  ];

  const securityPractices = [
    {
      title: 'Contrôle d\'accès strict',
      items: [
        'Authentification multi-facteurs obligatoire',
        'Gestion des sessions avec timeout automatique',
        'Politique de mots de passe renforcée',
        'Révocation instantanée des accès',
        'Séparation des environnements (dev/prod)',
      ],
    },
    {
      title: 'Protection des données',
      items: [
        'Chiffrement AES-256 au repos',
        'TLS 1.3 pour les communications',
        'Anonymisation des données de test',
        'Destruction sécurisée des données obsolètes',
        'Prévention des fuites de données (DLP)',
      ],
    },
    {
      title: 'Surveillance et réponse',
      items: [
        'Monitoring 24/7 des systèmes',
        'Détection d\'anomalies par IA',
        'Plan de réponse aux incidents',
        'Équipe de sécurité dédiée',
        'Alertes en temps réel',
      ],
    },
    {
      title: 'Formation et sensibilisation',
      items: [
        'Formation à la sécurité pour tous les utilisateurs',
        'Guides de bonnes pratiques',
        'Sensibilisation au phishing',
        'Documentation sécurité complète',
        'Support sécurité dédié',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 mx-auto shadow-xl animate-fadeIn">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Sécurité &{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Conformité
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn">
            La sécurité de vos données médicales est notre priorité absolue. Medika intègre les plus hauts standards de protection et de conformité.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conformité et Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medika respecte toutes les réglementations en vigueur et possède les certifications nécessaires
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Pratiques de Sécurité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète et multicouche de la sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{practice.title}</h3>
                <ul className="space-y-4">
                  {practice.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl animate-fadeIn">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Signalement de vulnérabilité</h3>
                <p className="text-gray-600 mb-4">
                  Vous avez découvert une faille de sécurité ? Nous prenons très au sérieux la sécurité de notre plateforme et de vos données.
                </p>
                <p className="text-gray-600 mb-4">
                  Merci de nous signaler toute vulnérabilité de manière responsable à :{' '}
                  <a href="mailto:security@afritech.tg" className="text-emerald-600 font-semibold hover:underline">
                    security@afritech.tg
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  Nous nous engageons à répondre dans les 48 heures et à corriger toute vulnérabilité critique dans les 72 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <Activity className="w-16 h-16 mx-auto mb-6 text-emerald-100" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des questions sur la sécurité ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Notre équipe de sécurité est disponible pour répondre à toutes vos questions
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Contactez notre équipe sécurité
          </button>
        </div>
      </section>
    </div>
  );
}
