import { Activity, Calendar, FileText, Pill, DollarSign, Stethoscope, Users, Shield, Clock, TrendingUp, CheckCircle, ArrowRight, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium animate-slideDown">
                Solution de Gestion Médicale Complète
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Digitalisez votre établissement de santé avec{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                  Medika
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Une plateforme tout-en-un pour la gestion des consultations, laboratoire, pharmacie, caisse et dossiers patients numériques. Optimisez votre efficacité opérationnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Démarrer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/pricing"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all hover:shadow-lg text-center"
                >
                  Voir les tarifs
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Établissements</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Patients gérés</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/6281289/pexels-photo-6281289.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Médecin utilisant Medika"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl animate-slideUp">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+45%</div>
                    <div className="text-sm text-gray-600">Productivité</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl animate-slideDown">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">-60%</div>
                    <div className="text-sm text-gray-600">Temps admin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les outils dont vous avez besoin pour gérer efficacement votre établissement de santé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Gestion des Consultations',
                description: 'Planifiez, suivez et gérez toutes vos consultations médicales avec un système de rendez-vous intelligent.',
                color: 'from-emerald-500 to-teal-500',
                bgColor: 'from-emerald-50 to-teal-50',
              },
              {
                icon: FileText,
                title: 'Laboratoire',
                description: 'Gestion complète des analyses avec traçabilité des échantillons et résultats numériques.',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50',
              },
              {
                icon: Pill,
                title: 'Pharmacie',
                description: 'Gestion des stocks, dispensation et alertes automatiques pour les ruptures de stock.',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50',
              },
              {
                icon: DollarSign,
                title: 'Caisse',
                description: 'Système de facturation avec gestion des paiements, assurances et rapports financiers.',
                color: 'from-amber-500 to-orange-500',
                bgColor: 'from-amber-50 to-orange-50',
              },
              {
                icon: Stethoscope,
                title: 'Espace Médecins',
                description: 'Interface dédiée avec accès aux dossiers patients et prescriptions électroniques.',
                color: 'from-teal-500 to-emerald-500',
                bgColor: 'from-teal-50 to-emerald-50',
              },
              {
                icon: Users,
                title: 'Dossier Patient Numérique',
                description: 'Dossier médical électronique complet avec historique et partage sécurisé.',
                color: 'from-rose-500 to-red-500',
                bgColor: 'from-rose-50 to-red-50',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.bgColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-4 transition-all"
            >
              Voir toutes les fonctionnalités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <img
                src="https://images.pexels.com/photos/8376294/pexels-photo-8376294.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Équipe médicale"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-fadeInRight">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Pourquoi choisir Medika ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Sécurité & Conformité',
                    description: 'Vos données sont protégées avec un chiffrement de bout en bout et conformes aux normes RGPD.',
                  },
                  {
                    icon: Clock,
                    title: 'Gain de Temps',
                    description: 'Automatisez vos tâches administratives et concentrez-vous sur vos patients.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Évolutif',
                    description: 'Solution adaptée à toutes les tailles, des petites cliniques aux grands hôpitaux.',
                  },
                  {
                    icon: BarChart,
                    title: 'Analytiques Avancées',
                    description: 'Tableaux de bord et rapports détaillés pour optimiser vos opérations.',
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre établissement ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Rejoignez les centaines d'établissements qui font confiance à Medika pour optimiser leur gestion quotidienne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Demander une démo gratuite
            </button>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
