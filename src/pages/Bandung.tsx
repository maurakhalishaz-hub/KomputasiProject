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
    name: 'Hummingbird Eatery & Space',
    address: 'Jl. Progo No.16, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115',
    mapsLink: 'https://share.google/kZPTJaPvP8LhafOTJ',
    description: 'Tempat cozy dengan suasana hangat, pas buat ngopi santai dan nongkrong bareng teman.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyQNz1zRwHcTnjMxFpyQomxMxh_3KoYCd0_9B3744mygZHyqG0c92Q0ss252aFsqwgPaymhSngkiPPZ3UE1YgxRwDtb0jaWsOiFam07GdufSdPvfFimy7cQ4wohWd9I02CxDfTi=s1360-w1360-h1020-rw',
  },
  {
    id: 2,
    name: 'Congo Gallery & Cafe',
    address: 'Jl. Ranca Kendal Luhur No.8 Dago, Ciburial, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191',
    mapsLink: 'https://share.google/v4O1a41zX8d6WXsgh',
    description: 'Ruang kreatif yang memadukan seni dan kopi, cocok untuk nongkrong santai atau cari inspirasi.',
    image: : 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz27qZxYN58ViYvHoqn5ylz7oy1xb6EX0I4AKQSTqI4a7IO5oTYeRWxvmCPoy_uPNttlsR8D6eZhqPOuaETnuW06jA3XHuIdKf5deSquotVtiyY2NrIajtmAVUJUmLb3N743Zm1hA=s1360-w1360-h1020-rw',
  },
  {
    id: 3,
    name: 'Ruang Lapang',
    address: 'Greenforest Resort, Cihideung, Parongpong, West Bandung Regency, West Java 40559',
    mapsLink: 'https://share.google/mh1TvulHkja4XaZVy',
    description: 'Cafe dengan ruang terbuka dan suasana lapang, cocok untuk ngopi santai atau kumpul bareng teman.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyevxzg6IzXfEc6TRd2DIReJuKOgrEL88til4rF0zxD-CpAdZpDes2g_GNRGIC6YL0g6RaCsw_tOD56baSUCgjioZMOICXK7gJvquo3YTLmpglo9Ap7JTEK4rKIDMsXfINqsVEm=s1360-w1360-h1020-rw',
  },
  {
    id: 4,
    name: 'Atmosphere Resort Café',
    address: 'Greenforest Resort, Cihideung, Parongpong, West Bandung Regency, West Java 40559',
    mapsLink: 'https://share.google/12QYFUs7IkMOMZeil',
    description: 'Cafe bergaya resort yang nyaman dan sejuk, perfect untuk bersantai sambil menikmati kopi dan suasana alam.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOs8TYJrxUTd9SVpbfULKUgvBb-YoaWoGk5Gs-j=s1360-w1360-h1020-rw',
  },
];

const touristAttractions: Location[] = [
  {
    id: 1,
    name: 'Dago Dreampark',
    address: 'Mekarwangi, Jl. Dago Giri No.Km. 2.2, Pagerwangi, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391',
    mapsLink: 'https://share.google/wg92HpqGfM3maCIMj',
    description: 'Wisata alam dengan berbagai wahana dan pemandangan hijau yang asri, tempat ideal untuk refreshing dan bikin kenangan indah.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx8fSVAfUj6hT26zne0W8Lv7IFIoYSJWuBl13J3CbpCxEKfsLj5YQQkI0wV8si1-l5GorGDpWg4aZLlI26zrHnGvIguVissrruhKfE_TrmlH1n5D6aMJFrmwRUJnzCQw2dcstk=s1360-w1360-h1020-rw',
  },
  {
    id: 2,
    name: 'Dago Bakery punclut',
    address: 'Jl. Pagermaneuh No.57, Pagerwangi, Punclut, Kabupaten Bandung Barat, Jawa Barat 40391',
    mapsLink: 'https://share.google/K8qb7aim0jUrsPmrL',
    description: ' Tempat makan bergaya bakery dengan view alam Punclut yang indah, pas buat makan bareng keluarga atau nongkrong santai',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzEcgqjmYazzqAmkDZJNld_1DmhWfxN4N25NEsppkdvIT8kX_VkgoFF1-N_lrKOZFU5ooOToMqCYvjR1YoULXVO_o-cU0yreMh-3d4Mx4odVEIcSwxTegGE3uH_NxvkAePOUtPerg=s1360-w1360-h1020-rw',
  },
  {
    id: 3,
    name: 'Floating Market Lembang',
    address: 'Jl. Grand Hotel No.33E, Lembang, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391',
    mapsLink: 'https://share.google/z4JoyxyI4fACnxcBM',
    description: 'Tempat wisata kuliner di atas perahu dengan suasana sejuk Lembang, pas buat weekend escape dan hunting kuliner Nusantara',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy60LWKKedlbzXmQ_ewodIJD_CDK9cSlxRQUYKYwKf4yEp4dQZmdGyZq7RHh64NflGVwLw9r1aZJv_oAfAwPcXXtsVnO2hbX_jCpe4pkBdFtYYvP6G7eZTg3W5p3ENUtH5CS6KS=s1360-w1360-h1020-rw',
  },
  {
    id: 4,
    name: 'Farm House Susu Lembang',
    address: 'Jl. Raya Lembang No.108, Gudangkahuripan, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 4039',
    mapsLink: 'https://share.google/Qk3pPgh4rUgv8r3An',
    description: 'Taman wisata bernuansa pedesaan Eropa dengan aneka spot foto unik, cocok untuk weekend escape dan quality time bareng keluarga',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyhySVDBbeAjKPfUV0Gzh9iZohZW0tiaIHm_kRgAV-McyNd-6EoBjuBhmF2HUGthGuXT4ihZkgIv3VaEguSiWeJwr7df0t9Ikx_1WyW_1P7Wy35fZfIiLG_stOyZEo6G4pevzsWug=s1360-w1360-h1020-rw',
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

export default function Bandung () {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Bandung</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">Kota Kembang dengan Sejuknya Alam Pegunungan</p>
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
              Cari tempat terbaik untuk menikmati kuliner lokal dan bersantai dengan suasana yang nyaman di Bandung.
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
              Jangan lewatkan destinasi wisata paling populer dan menakjubkan di Bandung dengan keindahan alam yang tak terlupakan.
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