import { Check, X, Zap, Building2, Crown, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Parfait pour les petites cliniques',
      monthlyPrice: '150.000',
      annualPrice: '350.000',
      secondYearPrice: '150.000',
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      popular: false,
      features: [
        'Jusqu\'à 3 médecins',
        'Gestion des consultations',
        'Dossiers patients numériques',
        'Caisse et facturation',
        '50 Go de stockage',
        'Support email',
      ],
      notIncluded: [
        'Laboratoire',
        'Pharmacie avancée',
        'Application mobile',
      ],
    },
    {
      name: 'Professional',
      description: 'La solution complète pour cliniques',
      monthlyPrice: '250.000',
      annualPrice: '350.000',
      secondYearPrice: '150.000',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      features: [
        'Jusqu\'à 10 médecins',
        'Toutes les fonctionnalités Starter',
        'Gestion du laboratoire',
        'Gestion de la pharmacie',
        'Application mobile',
        '200 Go de stockage',
        'Support prioritaire 24/7',
        'Formation du personnel',
      ],
      notIncluded: [
        'Nombre illimité de médecins',
        'API personnalisée',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Pour les grands établissements',
      monthlyPrice: 'Sur mesure',
      annualPrice: 'Sur mesure',
      secondYearPrice: 'Sur mesure',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Utilisateurs illimités',
        'Toutes les fonctionnalités Professional',
        'Multi-sites',
        'API complète',
        'Personnalisation avancée',
        'Stockage illimité',
        'Gestionnaire de compte dédié',
        'Formation sur site',
        'SLA garanti 99.9%',
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: 'Que comprend la première année ?',
      answer: 'La première année comprend la licence complète du logiciel, la formation initiale de votre équipe, le support technique et toutes les mises à jour. Le tarif de 350.000 XOF couvre l\'ensemble de ces services pour 12 mois.',
    },
    {
      question: 'Pourquoi le tarif change à partir de la deuxième année ?',
      answer: 'À partir de la deuxième année, le tarif passe à 150.000 XOF car les coûts de mise en place initiale et de formation sont déjà couverts. Vous continuez à bénéficier du support, des mises à jour et de toutes les fonctionnalités.',
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, aucun frais caché. Nos tarifs incluent tout : licence, support, mises à jour, stockage cloud et formation. Vous payez uniquement le montant annoncé.',
    },
    {
      question: 'Puis-je changer de forfait en cours d\'année ?',
      answer: 'Oui, vous pouvez upgrader votre forfait à tout moment. La différence de tarif sera calculée au prorata pour la période restante.',
    },
    {
      question: 'Proposez-vous une période d\'essai ?',
      answer: 'Oui, nous offrons une démonstration complète de 30 jours pour que vous puissiez tester toutes les fonctionnalités avant de vous engager.',
    },
    {
      question: 'Le paiement mensuel est-il possible ?',
      answer: 'Oui, nous proposons des plans de paiement mensuels. Cependant, le paiement annuel offre des conditions avantageuses avec notre tarif préférentiel.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium animate-slideDown">
            Tarification Simple & Transparente
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Choisissez le plan qui vous{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              correspond
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fadeIn">
            Tarif spécial lancement : 350.000 XOF la première année, puis seulement 150.000 XOF/an
          </p>

          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-lg animate-fadeIn">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annuel
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensuel
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Le plus populaire
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {billingCycle === 'annual' ? (
                      <div>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">{plan.annualPrice}</span>
                          <span className="text-gray-600">XOF</span>
                        </div>
                        <p className="text-sm text-gray-600">1ère année</p>
                        <div className="mt-3 p-3 bg-emerald-50 rounded-lg">
                          <p className="text-sm font-medium text-emerald-700">
                            Puis {plan.secondYearPrice} XOF/an à partir de la 2ème année
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-gray-900">{plan.monthlyPrice}</span>
                          <span className="text-gray-600">XOF/mois</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Commencer maintenant
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="space-y-4">
                    <p className="font-semibold text-gray-900">Inclus :</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-semibold text-gray-900 mt-6">Non inclus :</p>
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <HelpCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur nos tarifs</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'un plan personnalisé ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Contactez notre équipe pour discuter de vos besoins spécifiques et obtenir un devis sur mesure
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
