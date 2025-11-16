import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

type HeaderProps = {
  onNavigate: (page: 'home' | 'maluku' | 'malang' | 'bali' | 'bandung') => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dan Judul */}
          <div className="flex items-center gap-2">
            <div className="burnt-cocoa-bg p-2 rounded-lg">
              <MapPin size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl burnt-cocoa">Must Visit Indonesia</span>
          </div>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => onNavigate('home')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Home</button>
            <button onClick={() => onNavigate('bandung')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Bandung</button>
            <button onClick={() => onNavigate('malang')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Malang</button>
            <button onClick={() => onNavigate('maluku')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Maluku</button>
            <button onClick={() => onNavigate('bali')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Bali</button>
          </nav>

          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigasi Mobile */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Home</button>
            <button onClick={() => { onNavigate('bandung'); setIsOpen(false); }} className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bandung</button>
            <button onClick={() => { onNavigate('malang'); setIsOpen(false); }} className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Malang</button>
            <button onClick={() => { onNavigate('maluku'); setIsOpen(false); }} className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Maluku</button>
            <button onClick={() => { onNavigate('bali'); setIsOpen(false); }} className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bali</button>
          </nav>
        )}
      </div>
    </header>
  );
}