import { MapPin, DollarSign, Clock } from 'lucide-react';

const tableData = [
  {
    kota: 'Bandung',
    data: [],
  },
  {
    kota: 'Malang',
    data: [],
  },
  {
    kota: 'Maluku',
    data: [],
  },
  {
    kota: 'Bali',
    data: [],
  },
  {
    kota: 'Jakarta',
    data: [],
  },
];

function DestinationTable({ kota, data }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="burnt-cocoa-bg text-white">
              <th className="px-6 py-4 text-left font-semibold">Kota</th>
              <th className="px-6 py-4 text-left font-semibold">Nama Tempat</th>
              <th className="px-6 py-4 text-left font-semibold">Alamat</th>
              <th className="px-6 py-4 text-left font-semibold">Range Harga</th>
              <th className="px-6 py-4 text-left font-semibold">Waktu Operasional</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <MapPin size={32} className="text-gray-400" />
                    <p>Data destination untuk {kota} sedang dipersiapkan</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{kota}</td>
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.alamat}</td>
                  <td className="px-6 py-4">{item.harga}</td>
                  <td className="px-6 py-4">{item.jam}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-50 border-t border-gray-200 px-6 py-4">
        <p className="text-sm text-gray-600">
          Tabel {kota} akan diisi dengan data destination terpopuler. Informasi termasuk lokasi, harga tiket, dan jam operasional.
        </p>
      </div>
    </div>
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
