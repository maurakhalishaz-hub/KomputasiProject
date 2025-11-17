import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="hover:burnt-cocoa transition-colors text-gray-700">Home</Link>
            <Link to="/bandung" className="hover:burnt-cocoa transition-colors text-gray-700">Bandung</Link>
            <Link to="/malang" className="hover:burnt-cocoa transition-colors text-gray-700">Malang</Link>
            <Link to="/maluku" className="hover:burnt-cocoa transition-colors text-gray-700">Maluku</Link>
            <Link to="/bali" className="hover:burnt-cocoa transition-colors text-gray-700">Bali</Link>
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
            <Link to="/" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Home</Link>
            <Link to="/bandung" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bandung</Link>
            <Link to="/malang" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Malang</Link>
            <Link to="/maluku" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Maluku</Link>
            <Link to="/bali" className="py-2 px-4 hover:bg-gray-100 rounded transition-colors">Bali</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
