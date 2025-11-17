import { MapPin, DollarSign, Clock } from 'lucide-react';

const tableData = [
  {
    kota: 'Bandung',
    data: [
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Hummingbird Eatery & Space',
        alamat: 'Jl. Progo No.16, Citarum, Kota Bandung',
        harga: '50k – 100k',
        deskripsi: 'Tempat cozy dengan suasana hangat dan cocok untuk ngopi santai dan hangout bareng teman',
      },
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Ruang Lapang',
        alamat: 'Greenforest Resort, Parongpong, Jawa Barat',
        harga: '75k – 150k',
        deskripsi: 'Cafe dengan ruang terbuka dan suasana lapang, cocok untuk ngopi santai atau kumpul bareng teman',
      },
      {
        kategori: 'Wisata',
        nama: 'Dago Dreampark',
        alamat: 'Jl. Dago Giri No 2.2, Lembang, Jawa Barat',
        harga: '90k',
        deskripsi: 'Wisata alam dengan berbagai wahana dan pemandangan hijau yang asri',
      },
      {
        kategori: 'Wisata',
        nama: 'Farm House Susu Lembang',
        alamat: 'Jl. Raya Lembang No.108, Lembang, Bandung',
        harga: '35k',
        deskripsi: 'Taman wisata bernuansa pedesaan Eropa dengan aneka spot foto unik'
      },
    ],
  },
  {
    kota: 'Malang',
    data: [
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Pasar Klojen',
        alamat: 'Jl. Cokroaminoto, Klojen, Malang',
        harga: '10k – 25k',
        deskripsi: 'Kuliner lengkap dan jajanan hingga makanan berat',
      },
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Bakso Cak Man',
        alamat: 'Jl. Semeru No.24, Klojen, Malang',
        harga: '15k – 30k',
        deskripsi: 'Bakso legendaris dengan sistem self-service',
      },
      {
        kategori: 'Wisata',
        nama: 'Kampoeng Heritage Kajoetangan',
        alamat: 'Jl. Basuki Rahmad Gg. 4, Klojen, Malang',
        harga: '5k',
        deskripsi: 'Kampung heritage estetik, tiket 5k + free postcard',
      },
      {
        kategori: 'Wisata',
        nama: 'Tumpak Sewu',
        alamat: 'Pronojiwo, Lumajang',
        harga: '40k',
        deskripsi: 'Air terjun eksotis dengan pemandangan spektakuler',
      },
    ],
  },
  {
    kota: 'Maluku',
    data: [
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Cafe Kayu Manies',
        alamat: 'Jl. Sam Ratulangi No.125, Maluku',
        harga: '50k – 100k',
        deskripsi: 'Cafe dengan interior kayu, suasana hangat, buka sampai tengah malam',
      },
      {
        kategori: 'Kuliner/Hangout',
        nama: 'Lateri Beach Restaurant',
        alamat: 'Jl. Wolter Mongensidi No. 5, Ambon',
        harga: '50k – 250k',
        deskripsi: 'Restoran seafood dengan view pantai Lateri, cocok untuk sunset dinner romantis',
      },
      {
        kategori: 'Wisata',
        nama: 'Pulau Dodola',
        alamat: 'Morotai, Maluku Utara',
        harga: 'Gratis',
        deskripsi: 'Pulau eksotis dengan pasir putih yang menghubungkan dua pulau saat air surut',
      },
      {
        kategori: 'Wisata',
        nama: 'Goa Hawang',
        alamat: 'Desa Hukurila, Ambon',
        harga: 'Gratis',
        deskripsi: 'Goa alami dengan kolam air jernih, cocok untuk berenang dan eksplorasi alam'
      },
    ],
  },
  {
    kota: 'Bali',
    data: [],
  },
];

function DestinationTable({ kota, data }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
      {/* Nama kota di atas tabel */}
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-100 text-center">
  <h3 className="text-2xl font-bold text-[#6C4332] uppercase tracking-wide font-poppins">
    {kota}
  </h3>
</div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="burnt-cocoa-bg text-white">
              <th className="px-6 py-4 text-left font-semibold">Kategori</th>
              <th className="px-6 py-4 text-left font-semibold">Nama Lokasi</th>
              <th className="px-6 py-4 text-left font-semibold">Alamat</th>
              <th className="px-6 py-4 text-left font-semibold">Range Harga</th>
              <th className="px-6 py-4 text-left font-semibold">Deskripsi</th>
  );
}

export default function TopListTable() {
  return (
    <section id="top-list" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Top Recommendations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top List Must Visit</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated list of the most popular and must-visit destinations across Indonesian cities.
          </p>
        </div>

        {/* Render multiple tables */}
        {tableData.map((table, index) => (
          <DestinationTable key={index} kota={table.kota} data={table.data} />
        ))}

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<MapPin size={24} className="text-white" />} title="Verified Locations" desc="All destinations are personally verified and recommended by travel experts." />
          <FeatureCard icon={<DollarSign size={24} className="text-white" />} title="Best Prices" desc="Find the most affordable options with transparent pricing information." />
          <FeatureCard icon={<Clock size={24} className="text-white" />} title="Operating Hours" desc="Check complete operating schedules to plan your perfect trip." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="burnt-cocoa-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
