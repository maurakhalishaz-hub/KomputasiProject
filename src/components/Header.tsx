import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="burnt-cocoa-bg p-2 rounded-lg">
              <MapPin size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl burnt-cocoa">Must Visit Indonesia</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:burnt-cocoa transition-colors text-gray-700">Home</a>
            <a href="#Bandung" className="hover:burnt-cocoa transition-colors text-gray-700">Bandung</a>
            <a href="#Malang" className="hover:burnt-cocoa transition-colors text-gray-700">Malang</a>
            <a href="#Maluku" className="hover:burnt-cocoa transition-colors text-gray-700">Maluku</a>
           <a href="#Bali" className="hover:burnt-cocoa transition-colors text-gray-700">Bali</a> 
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#home" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Home</a>
            <a href="#Bandung" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bandung</a>
            <a href="#Malang" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Malang</a>
            <a href="#Maluku" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Maluku</a>
            <a href="#Bali" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bali</a>
          </nav>
        )}
      </div>
    </header>
  );
}
