import { HelpCircle, Search, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqCategories = [
    {
      id: 'general',
      name: 'Questions Générales',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Qu\'est-ce que Medika ?',
          answer: 'Medika est une solution complète de gestion médicale développée par Afritech. Elle permet aux établissements de santé de digitaliser leurs opérations, de la gestion des consultations à la pharmacie, en passant par le laboratoire, la caisse et les dossiers patients numériques.',
        },
        {
          question: 'Pour qui est destiné Medika ?',
          answer: 'Medika s\'adresse à tous les établissements de santé : cliniques privées, cabinets médicaux, hôpitaux, centres de santé, laboratoires d\'analyses, et pharmacies. Notre solution s\'adapte aux petites structures comme aux grands établissements.',
        },
        {
          question: 'Medika est-il disponible sur mobile ?',
          answer: 'Oui, Medika dispose d\'applications mobiles pour iOS et Android, permettant aux médecins et au personnel de santé d\'accéder aux informations patients et de gérer leurs activités en déplacement.',
        },
        {
          question: 'Dans quels pays Medika est-il disponible ?',
          answer: 'Medika est actuellement disponible dans 15 pays d\'Afrique, principalement en Afrique de l\'Ouest. Nous sommes en expansion continue et prévoyons d\'étendre notre couverture à d\'autres régions du continent.',
        },
      ],
    },
    {
      id: 'pricing',
      name: 'Tarification',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Combien coûte Medika ?',
          answer: 'Le tarif de Medika est de 350.000 XOF pour la première année, incluant la licence, la formation, le support et toutes les fonctionnalités. À partir de la deuxième année, le tarif annuel passe à 150.000 XOF.',
        },
        {
          question: 'Que comprend le tarif de la première année ?',
          answer: 'La première année comprend : la licence complète du logiciel, l\'installation et la configuration, la formation initiale de votre équipe (sur site ou en ligne), le support technique illimité, toutes les mises à jour, et l\'hébergement cloud sécurisé.',
        },
        {
          question: 'Pourquoi le prix change-t-il après la première année ?',
          answer: 'Le tarif de la première année inclut les coûts de mise en place initiale, la formation approfondie et l\'accompagnement renforcé. À partir de la deuxième année, ces coûts n\'existent plus, d\'où la réduction à 150.000 XOF qui couvre la maintenance, le support et les mises à jour.',
        },
        {
          question: 'Y a-t-il des frais cachés ?',
          answer: 'Non, absolument aucun frais caché. Nos tarifs sont tout compris : licence, hébergement, support, mises à jour, formation et stockage cloud. Vous ne paierez que le montant annoncé.',
        },
        {
          question: 'Puis-je payer mensuellement ?',
          answer: 'Oui, nous proposons des plans de paiement mensuels pour faciliter votre trésorerie. Contactez notre équipe commerciale pour discuter des modalités de paiement adaptées à votre situation.',
        },
        {
          question: 'Proposez-vous une période d\'essai ?',
          answer: 'Oui, nous offrons une démonstration complète gratuite de 30 jours pour que vous puissiez tester toutes les fonctionnalités de Medika avant de prendre votre décision.',
        },
      ],
    },
    {
      id: 'features',
      name: 'Fonctionnalités',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Quelles sont les principales fonctionnalités de Medika ?',
          answer: 'Medika offre : gestion des consultations et rendez-vous, dossiers patients numériques, espace médecins avec prescriptions électroniques, gestion du laboratoire, gestion de la pharmacie, caisse et facturation, tableaux de bord et rapports, et bien plus encore.',
        },
        {
          question: 'Peut-on personnaliser Medika selon nos besoins ?',
          answer: 'Oui, Medika est hautement configurable. Vous pouvez adapter les formulaires, créer des modèles de documents, paramétrer les workflows, et personnaliser l\'interface. Pour des besoins spécifiques importants, nous proposons également des développements sur mesure.',
        },
        {
          question: 'Medika gère-t-il plusieurs sites ?',
          answer: 'Oui, avec le forfait Enterprise, Medika peut gérer plusieurs établissements connectés, avec synchronisation des données, gestion centralisée et rapports consolidés.',
        },
        {
          question: 'Les données peuvent-elles être exportées ?',
          answer: 'Oui, vous pouvez exporter vos données à tout moment dans différents formats (Excel, PDF, CSV). Vos données vous appartiennent et restent accessibles en permanence.',
        },
      ],
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Mes données sont-elles sécurisées ?',
          answer: 'Oui, absolument. Medika utilise un chiffrement de niveau militaire (AES-256), des sauvegardes automatiques quotidiennes, une authentification multi-facteurs, et est hébergé dans des centres de données certifiés ISO 27001.',
        },
        {
          question: 'Êtes-vous conforme au RGPD ?',
          answer: 'Oui, Medika est entièrement conforme au Règlement Général sur la Protection des Données (RGPD). Nous respectons tous les droits des patients : consentement, accès, rectification, effacement et portabilité des données.',
        },
        {
          question: 'Que se passe-t-il en cas de panne ?',
          answer: 'Nos serveurs ont un taux de disponibilité de 99.9%. En cas de problème, nous avons des systèmes de redondance et de basculement automatique. De plus, des sauvegardes sont effectuées toutes les heures pour garantir la récupération de vos données.',
        },
        {
          question: 'Qui a accès à mes données ?',
          answer: 'Seuls les utilisateurs autorisés de votre établissement ont accès à vos données. Nous ne consultons jamais vos données médicales sauf avec votre autorisation explicite dans le cadre du support technique.',
        },
      ],
    },
    {
      id: 'technical',
      name: 'Questions Techniques',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Quelle connexion Internet est nécessaire ?',
          answer: 'Medika fonctionne avec une connexion Internet standard. Nous recommandons au minimum une connexion ADSL de 2 Mbps. Pour les zones avec une connexion limitée, certaines fonctionnalités peuvent fonctionner en mode hors ligne avec synchronisation ultérieure.',
        },
        {
          question: 'Sur quels appareils fonctionne Medika ?',
          answer: 'Medika fonctionne sur ordinateurs (Windows, Mac, Linux) via navigateur web, et sur smartphones/tablettes (iOS et Android) via nos applications mobiles. Aucune installation logicielle n\'est nécessaire pour la version web.',
        },
        {
          question: 'Puis-je utiliser Medika avec mon matériel médical existant ?',
          answer: 'Oui, Medika peut s\'intégrer avec de nombreux équipements médicaux (automates de laboratoire, ECG, tensiomètres connectés, etc.) via des protocoles standards (HL7, DICOM). Contactez-nous pour vérifier la compatibilité avec votre matériel.',
        },
        {
          question: 'Comment se passe la migration de mon ancien système ?',
          answer: 'Notre équipe vous accompagne dans la migration de vos données depuis votre ancien système. Nous importons vos dossiers patients, historiques et autres données importantes. La migration est planifiée pour minimiser les interruptions.',
        },
      ],
    },
    {
      id: 'support',
      name: 'Support & Formation',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Quel type de support proposez-vous ?',
          answer: 'Nous offrons un support complet : assistance par téléphone et email, chat en ligne pendant les heures ouvrables, base de connaissances et documentation en ligne, et interventions sur site si nécessaire.',
        },
        {
          question: 'Comment se déroule la formation ?',
          answer: 'La formation initiale dure généralement 2-3 jours et peut être effectuée sur site ou en ligne. Nous formons vos équipes à l\'utilisation de tous les modules, et fournissons des guides et tutoriels vidéo. Des formations complémentaires sont disponibles à tout moment.',
        },
        {
          question: 'Le support est-il inclus dans le tarif ?',
          answer: 'Oui, le support technique est entièrement inclus dans votre abonnement annuel, sans limite d\'interventions. Vous pouvez nous contacter autant de fois que nécessaire.',
        },
        {
          question: 'Dans quelle langue le support est-il disponible ?',
          answer: 'Notre support est disponible en français principalement, mais également en anglais. Nous nous adaptons aux besoins linguistiques de chaque pays où nous opérons.',
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 mx-auto shadow-xl animate-fadeIn">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Questions{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn">
            Trouvez rapidement les réponses à vos questions sur Medika
          </p>

          <div className="relative max-w-2xl mx-auto animate-fadeIn">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  openCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`${openCategory && openCategory !== category.id ? 'hidden' : ''}`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <category.icon className="w-8 h-8 text-emerald-600" />
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <span className="text-emerald-600 transform group-open:rotate-180 transition-transform">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 animate-fadeIn">
              <p className="text-xl text-gray-600">Aucune question ne correspond à votre recherche.</p>
              <p className="text-gray-500 mt-2">Essayez avec d'autres mots-clés ou contactez notre support.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-xl text-gray-600">Notre équipe est là pour vous aider</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center animate-fadeInUp">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chat en ligne</h3>
              <p className="text-gray-600 text-sm mb-4">Discutez avec notre équipe</p>
              <button className="text-emerald-600 font-medium hover:underline">Démarrer un chat</button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">support@afritech.tg</p>
              <a href="mailto:support@afritech.tg" className="text-emerald-600 font-medium hover:underline">Envoyer un email</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600 text-sm mb-4">+228 XX XX XX XX</p>
              <a href="tel:+228XXXXXXXX" className="text-emerald-600 font-medium hover:underline">Nous appeler</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
