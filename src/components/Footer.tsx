import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="burnt-cocoa-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <MapPin size={20} />
              </div>
              <span className="font-bold text-lg">Must Visit Indonesia</span>
            </div>
            <p className="text-white/80 text-sm">
              Your ultimate guide to exploring the most beautiful destinations across Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#top-list" className="text-white/80 hover:text-white transition-colors">Top List</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bandung</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Malang</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Maluku</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bali</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-white/80">+62 8124 553 7689</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-white/80">info@mustvisit.id</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-white/80">Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              &copy; 2025 Must Visit Indonesia. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
