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
  {
    id: 2,
    name: 'Pelangi Cafe',
    address: 'Soa Bali, Ambon',
    mapsLink: 'https://maps.app.goo.gl/uwuALQ3pEq7c2heN6',
    description: 'Cafe cozy dengan harga terjangkau, cocok untuk ngopi sore atau kumpul santai.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lRctAPBEiyFE5C1k5xUyEBSRB7kE8suI9w&s',
  },
  {
    id: 3,
    name: 'Teras Kota Masohi',
    address: 'Masohi, Maluku Tengah',
    mapsLink: 'https://maps.app.goo.gl/nqNvzEqQ6QMFn2MB7',
    description: 'Cafe & resto 24 jam, jadi spot aman untuk nongkrong kapan saja.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gogQ6e17f92SZf6rbPaXDZJtuUc1CeMhwg&s',
  },
  {
    id: 4,
    name: 'Cafe Kayu Manies',
    address: 'Ambon',
    mapsLink: 'https://maps.app.goo.gl/D8qtUJ5FPP1XW85e9',
    description: 'Cafe dengan interior kayu, suasana hangat, buka sampai tengah malam.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmVebchAUvS_iJME1C6Sa6sAGa_KjTmmlUw&s',
  },
  {
    id: 5,
    name: 'Dapor Kole Kole',
    address: 'Ambon',
    mapsLink: 'https://maps.app.goo.gl/qL9CjtsvZgx7UWtf6',
    description: 'Restoran khas Ambon dengan menu ikan bakar, cumi goreng, ayam rica, es kelapa.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5d/9e/a4/img-20170524-134600-largejpg.jpg?w=900&h=500&s=1',
  },
  {
    id: 6,
    name: 'Red Bricks Cafe & Resto',
    address: 'Ambon',
    mapsLink: 'https://maps.app.goo.gl/9wpkuDBqdkeEfiK57',
    description: 'Cafe modern dengan nuansa stylish, cocok untuk hangout malam.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvNSiq3dnXp-Hy1UKWF366qWumO_oxfArDQ&s',
  },
  {
    id: 7,
    name: 'Mamocha Cafe & Resto',
    address: 'Kei Kecil, Maluku Tenggara',
    mapsLink: 'https://maps.app.goo.gl/7hj9yJt4gW98rRzS6',
    description: 'Cafe santai dengan harga menengah, populer di kawasan Kei Kecil.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDVSIlAZuVGpega8oz5eSiAjGjBkTQUUvEA&s',
  },
  {
    id: 8,
    name: 'Lateri Beach Restaurant',
    address: 'Lateri, Ambon',
    mapsLink: 'https://maps.app.goo.gl/BYvQystZCSL1pELE7',
    description: 'Restoran seafood dengan view pantai Lateri, cocok untuk sunset dinner romantis.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/45/2f/f5/new-extension-into-the.jpg?w=900&h=-1&s=1',
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
  {
    id: 2,
    name: 'Pantai Liang',
    address: 'Desa Liang, Ambon',
    mapsLink: 'https://maps.app.goo.gl/CnsrjCFcnYwg8SM49',
    description: 'Pantai cantik dengan pasir putih halus dan air laut jernih, populer untuk snorkeling.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c2/64/6d/liang-beach.jpg?w=1200&h=-1&s=1',
  },
  {
    id: 3,
    name: 'Pantai Ora',
    address: 'Desa Sawai, Seram Utara',
    mapsLink: 'https://maps.app.goo.gl/sxy4EERS6x4mqdQQ6',
    description: 'Destinasi unggulan dengan resort terapung, terkenal dengan keindahan bawah laut.',
    image: 'https://miro.medium.com/1*rS51AvVdrsjm2CXB2jdgYQ.jpeg',
  },
  {
    id: 4,
    name: 'Pulau Bair',
    address: 'Kei Kecil, Maluku Tenggara',
    mapsLink: 'https://maps.app.goo.gl/MSQsMmajuctWEZsn6',
    description: 'Pulau kecil dengan laguna biru jernih, mirip Raja Ampat versi Maluku.',
    image: 'https://statics.indozone.news/local/622c52bd1e161.jpg',
  },
  {
    id: 5,
    name: 'Pulau Dodola',
    address: 'Morotai, Maluku Utara',
    mapsLink: 'https://maps.app.goo.gl/svspJHTSezLUbmCR8',
    description: 'Pulau eksotis dengan pasir putih yang menghubungkan dua pulau saat air surut.',
    image: 'https://getlost.id/wp-content/uploads/2023/02/@satyawinnie.jpg',
  },
  {
    id: 6,
    name: 'Gunung Api Banda',
    address: 'Kepulauan Banda, Maluku',
    mapsLink: 'https://maps.app.goo.gl/sMPQq2TUFCpzJ9iq6',
    description: 'Gunung berapi aktif dengan panorama laut Banda, populer untuk hiking.',
    image: 'https://superlive.id/storage/articles/c3ac6abb-3aea-4e82-aeaa-e58897f83e12.jpg',
  },
  {
    id: 7,
    name: 'Benteng Belgica',
    address: 'Banda Neira, Maluku',
    mapsLink: 'https://maps.app.goo.gl/pWYP25hozFWzjecK7',
    description: 'Benteng peninggalan Belanda abad ke-17, ikon sejarah Banda Neira.',
    image: 'https://asset.kompas.com/crops/kmCDj1_Q6o47G2BoLjhFhM_9Nog=/0x0:843x562/1200x800/data/photo/2022/11/07/63690f257b6ce.jpg',
  },
  {
    id: 8,
    name: 'Museum Siwalima',
    address: 'Taman Makmur, Ambon',
    mapsLink: 'https://maps.app.goo.gl/kWH49jpc4yFq4vuc8',
    description: 'Museum budaya dan sejarah Maluku, menyimpan koleksi etnografi dan artefak lokal.',
    image: 'https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/ambon/museum-siwalima-provinsi-maluku-profile1646390092.png?x-image-process=image/resize,p_100,limit_1/imageslim',
  },
  {
    id: 9,
    name: 'Goa Hawang',
    address: 'Desa Hukurila, Ambon',
    mapsLink: 'https://maps.app.goo.gl/iEvLzEKv8Wvqg5HZ6',
    description: 'Goa alami dengan kolam air jernih, cocok untuk berenang dan eksplorasi alam.',
    image: 'https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/maluku-tenggara/gua-hawang-profile1646371443.png?x-image-process=image/resize,p_100,limit_1/imageslim',
  },
  {
    id: 10,
    name: 'Desa Sawai',
    address: 'Seram Utara, Maluku Tengah',
    mapsLink: 'https://maps.app.goo.gl/fpriKX8HjNLKnm9v6',
    description: 'Desa pesisir dengan panorama laut dan hutan, pintu masuk ke Pantai Ora.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoDa_BAN53S-Hc8UHppfqi2vXcGv5peTzzQ&s',
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

export default function Maluku() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Maluku</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">Pulau Rempah dengan Keindahan Laut yang Memukau</p>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Jelajahi Kuliner Maluku</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rekomendasi Tempat Makan & Hangout
            </h2>
            <p className="text-gray-600 text-lg">
              Cari tempat terbaik untuk menikmati kuliner lokal dan bersantai dengan suasana yang nyaman di Maluku.
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
            <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Jelajahi Alam Maluku</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rekomendasi Tempat Wisata
            </h2>
            <p className="text-gray-600 text-lg">
              Jangan lewatkan destinasi wisata paling populer dan menakjubkan di Maluku dengan keindahan alam yang tak terlupakan.
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
