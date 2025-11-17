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
    name: 'Nasi Lemak Jasa Ayah',
    address: 'Jl. Cokroaminoto, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111,
    mapsLink: ' https://maps.app.goo.gl/pR8Cma3g5DqZUwL97',
    description: 'Nasi Lemak khas Malaysia dengan pilihan lauk yang beragam, start from 12k.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.tLIx8FQobRAxSpoyacywEgHaFr?pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Pasar Klojen”',
    address: 'Jl. Cokroaminoto, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111',
    mapsLink: ' https://maps.app.goo.gl/ZBpzxymUdrRi2MN87',
    description: 'Kuliner berbagai macam dari jajanan pasar hingga makan berat ada disini.',
    image: ' https://tse4.mm.bing.net/th/id/OIP.ZZF1YXNOkZekn_jvHzexJgHaE8?pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Bakso Cah Toha',
    address: ' Jl. Semeru No.24, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65126',
    mapsLink: ' https://maps.app.goo.gl/3ppFvfhbX6pR453e6',
    description: 'Bakso khas malang yang legendaris dengan layanan self service.',
    image: ' https://tse3.mm.bing.net/th/id/OIP.FA-ByLEWnYE38LFwFqQaKwHaJQ?pid=Api&P=0&h=180',
  },
];

const touristAttractions: Location[] = [
  {
    id: 1,
    name: 'VIP:Virtual Immersive Park',
    address: ' Jl. Jatim Park II, Temas, Kec. Batu, Kota Batu, Jawa Timur 65315',
    mapsLink: ' https://maps.app.goo.gl/XoM3ajS4Leb3FjrCA',
    description: 'Wahan baru di Jatim Park 2 yang menawarkan konsep dunia virtual .',
    image: ' https://tse3.mm.bing.net/th/id/OIP.b_5yzsIsoNanb8A3JhCG3gHaE8?pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Kajoetangan Heritage',
    address: ' Jl. Jenderal Basuki Rachmad Gg.4, Kauman, Kec. Klojen, Kota Malang, Jawa Timuer 65119',
    mapsLink: ' https://maps.app.goo.gl/YwN7V3MPGVV6qdnp6',
    description: 'Perkampungan di tengah Kota Malang yang aestetik dan instagramable. Tiket masuk 5k/orang dan free postcard',
    image: ' https://tse2.mm.bing.net/th/id/OIP.ZGXzKmK4fQi7W4LgKF_K-gHaJ4?pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Kampung Warna Warni',
    address: ' Jl. Ir. H. Juanda No.RT.7, RT.09/RW.2, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur 65127',
    mapsLink: ' https://maps.app.goo.gl/29wADXLZFFDLw67R7',
    description: 'Salah satu ikon wisata Kota Malang dengan ciri khas bangun yang berwana warni. Tiket masuk 5k/orang',
    image: ' https://i.pinimg.com/736x/e6/09/4f/e6094fb00e0ce5048f10587a8ba03cca.jpg',
  },
  {
    id: 4,
    name: 'Tumpak Sewu',
    address: ' Jl. Raya Dampit-Lumajang, Besukcukit, Sidomulyo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374',
    mapsLink: ' https://maps.app.goo.gl/n6MkQbhWmTcnKPEt9',
    description: 'Air terjun eksotis untuk para penyuka alam. Tiket masuk 40k/orang.',
    image: ' https://tse1.mm.bing.net/th/id/OIP.kQDElIpjp8j7U67vBWtWZgHaE8?pid=Api&P=0&h=180',
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
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">Kota Apel dengan Pesona Gunung yang Menawan</p>
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
              Nikmati berbagai kuliner otentik dan temukan spot santai dengan atmosfer nyaman yang membuat waktumu di Malang makin seru.
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
              Kunjungi berbagai tempat wisata yang menakjubkan dan nikmati panorama alam Malang yang menggabungkan ketenangan dan keindahan.
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
