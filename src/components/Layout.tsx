import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Heart, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Nav Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight uppercase">Sanctuary</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-blue-600",
                      location.pathname === link.path ? "text-blue-600" : "text-gray-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/emergency"
                className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Phone className="w-4 h-4" />
                Emergency
              </Link>
              <Link
                to="/appointment"
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
              >
                Book Appointment
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-900"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/emergency"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-red-600"
            >
              Emergency
            </Link>
            <Link
              to="/appointment"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-black text-white text-center py-3 rounded-xl font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Heart className="text-black w-5 h-5" />
                </div>
                <span className="text-lg font-display font-bold tracking-tight uppercase">Sanctuary</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A sanctuary for healing and growth. Providing world-class healthcare with empathy and precision for over three decades.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg mb-6 italic">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
                <li><Link to="/doctors" className="hover:text-white">Find a Specialist</Link></li>
                <li><Link to="/appointment" className="hover:text-white">Book Appointment</Link></li>
                <li><Link to="/emergency" className="hover:text-white text-red-400">Emergency Care</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg mb-6 italic">Departments</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Oncology</li>
                <li>Pediatrics</li>
                <li>Orthopedics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg mb-6 italic">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Stay updated with our latest health tips and news.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-900 border-none rounded-full py-3 px-6 text-sm focus:ring-1 focus:ring-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-1.5 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Sanctuary Healthcare. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Emergency FAB */}
      <Link
        to="/emergency"
        className="fixed bottom-8 right-8 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all z-40 group"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
}
