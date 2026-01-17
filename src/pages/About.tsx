import { MapPin, Users, Award, Target, Heart, Globe, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient au centre',
      description: 'Nous croyons que chaque patient mérite des soins de qualité. Notre mission est de faciliter l\'accès aux soins en Afrique.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nous développons des solutions innovantes adaptées aux réalités africaines avec les dernières technologies.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec les professionnels de santé pour créer des outils qui leur correspondent.',
    },
    {
      icon: Globe,
      title: 'Impact social',
      description: 'Notre objectif est d\'améliorer l\'accès aux soins de santé pour tous à travers le continent africain.',
    },
  ];

  const team = [
    {
      name: 'Dr. Kofi Mensah',
      role: 'CEO & Co-fondateur',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Médecin et entrepreneur, passionné par la transformation digitale de la santé en Afrique.',
    },
    {
      name: 'Aminata Diallo',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experte en systèmes d\'information de santé avec 15 ans d\'expérience.',
    },
    {
      name: 'Jean-Baptiste Koffi',
      role: 'Directeur Produit',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Spécialiste en UX/UI et gestion de produit, focalisé sur l\'expérience utilisateur.',
    },
    {
      name: 'Fatou Traoré',
      role: 'Directrice Commerciale',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experte en développement commercial avec un réseau étendu dans le secteur de la santé.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Établissements partenaires' },
    { number: '15', label: 'Pays en Afrique' },
    { number: '50K+', label: 'Patients suivis' },
    { number: '99.9%', label: 'Taux de satisfaction' },
  ];

  const milestones = [
    { year: '2020', title: 'Création d\'Afritech', description: 'Lancement de notre entreprise à Lomé, Togo' },
    { year: '2021', title: 'Lancement de Medika', description: 'Première version de notre solution de gestion médicale' },
    { year: '2022', title: 'Expansion régionale', description: 'Déploiement dans 10 pays d\'Afrique de l\'Ouest' },
    { year: '2023', title: '500 établissements', description: 'Plus de 500 cliniques et hôpitaux utilisent Medika' },
    { year: '2024', title: 'Innovation continue', description: 'Lancement de nouvelles fonctionnalités IA' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                À propos d'Afritech
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nous transformons la{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  santé en Afrique
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Afritech est une société togolaise leader dans le développement de solutions numériques innovantes pour le secteur de la santé en Afrique.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fondée en 2020 à Lomé, nous nous engageons à améliorer l'accès aux soins de qualité grâce à la technologie. Notre équipe multidisciplinaire combine expertise médicale, technique et entrepreneuriale pour créer des solutions adaptées aux réalités africaines.
              </p>
            </div>
            <div className="animate-fadeInRight">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Équipe Afritech"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un parcours marqué par l'innovation et l'engagement
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-500"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="text-emerald-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés au service de la santé en Afrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-6">Contactez Afritech</h2>
              <p className="text-xl text-emerald-50 mb-8">
                Vous avez des questions ou souhaitez en savoir plus sur nos solutions ? Notre équipe est à votre écoute.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Siège social</div>
                    <div className="text-emerald-100">Boulevard du 13 Janvier, Lomé, Togo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-emerald-100">+228 XX XX XX XX</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-emerald-100">contact@afritech.tg</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 animate-fadeInRight">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>
                <button className="w-full bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-all hover:shadow-lg">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
