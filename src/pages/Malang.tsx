import { useState } from 'react';
import { MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Location {
  id: number;
  name: string;
  address: string;
  mapsLink: string;
  description: string;
  image: string;
}

const foodAndHangout: Location[] = [
  {
    id: 1,
    name: 'Wailela Cafe and Resto',
    address: 'Rumah Tiga, Ambon',
    mapsLink: 'https://maps.app.goo.gl/nx4Rgcr4EHxJRz9v5',
    description: 'Cafe & resto populer dengan menu lokal dan suasana hangat, buka hingga malam.',
    image: 'https://wailelacafeandrestoambon.shop/public/media/wailelacafeandrestoambon-shop/4.jpg',
  },
];

const touristAttractions: Location[] = [
  {
    id: 1,
    name: 'Pantai Natsepa',
    address: 'Suli, Maluku Tengah',
    mapsLink: 'https://maps.app.goo.gl/Ho9bZbpo6cs2Q1qk6',
    description: 'Pantai pasir putih terkenal dengan rujak Natsepa, cocok untuk liburan keluarga.',
    image: 'https://cdn.antaranews.com/cache/1200x800/2016/07/20160707Pantai_Natsepa.jpg',
  
  },
];

function LocationCard({ location }: { location: Location }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{location.name}</h3>

        <div className="flex items-start gap-2 mb-3">
          <MapPin size={16} className="burnt-cocoa flex-shrink-0 mt-1" />
          <p className="text-sm text-gray-600 line-clamp-2">{location.address}</p>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-grow">{location.description}</p>

        <div className="flex gap-2 pt-4 border-t border-gray-200">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-1 py-2 text-sm font-semibold burnt-cocoa hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {expanded ? 'Sembunyikan' : 'Selengkapnya'}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <a
            href={location.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 burnt-cocoa-bg text-white py-2 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Google Maps
            <ExternalLink size={16} />
          </a>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
            <p className="leading-relaxed">{location.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Malang() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24">
        <div className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1619798/pexels-photo-1619798.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundAttachment: 'fixed',
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <p className="text-lg md:text-xl font-medium mb-2">Jelajahi Keindahan</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Malang</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">Pulau Rempah dengan Keindahan Laut yang Memukau</p>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Jelajahi Kuliner Malang</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rekomendasi Tempat Makan & Hangout
            </h2>
            <p className="text-gray-600 text-lg">
              Cari tempat terbaik untuk menikmati kuliner lokal dan bersantai dengan suasana yang nyaman di Malang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {foodAndHangout.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Jelajahi Alam Malang</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rekomendasi Tempat Wisata
            </h2>
            <p className="text-gray-600 text-lg">
              Jangan lewatkan destinasi wisata paling populer dan menakjubkan di Malang dengan keindahan alam yang tak terlupakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristAttractions.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
