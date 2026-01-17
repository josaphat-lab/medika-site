import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">Medika</span>
            </div>
            <p className="text-sm mb-4">
              Solution de gestion médicale complète pour digitaliser votre établissement de santé.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Lomé, Togo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+228 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>contact@afritech.tg</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="hover:text-emerald-400 transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-emerald-400 transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-emerald-400 transition-colors">
                  Sécurité
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Démo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Société</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Afritech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/documentation" className="hover:text-emerald-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Formation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2024 Medika by Afritech. Tous droits réservés. Lomé, Togo.</p>
        </div>
      </div>
    </footer>
  );
}
