import { Activity, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Activity className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Medika
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/')
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/features"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/features')
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              Fonctionnalités
            </Link>
            <Link
              to="/pricing"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/pricing')
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              Tarifs
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about')
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              À propos
            </Link>
            <button className="ml-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Demander une démo
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive('/') ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/features"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive('/features') ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Fonctionnalités
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive('/pricing') ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Tarifs
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive('/about') ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              À propos
            </Link>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Demander une démo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
