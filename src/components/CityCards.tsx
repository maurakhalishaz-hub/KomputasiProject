import { ArrowRight, MapPin } from 'lucide-react';

const cities = [
  {
    id: 1,
    name: 'Bandung',
    description: 'City of Flowers and Cool Breeze',
    image: 'https://radio.umn.ac.id/storage/cover_images/BpHzkc5f8iIEyWtV95H1rjoJrY2dFXaDoRZWI40N.png',
  },
  {
    id: 2,
    name: 'Malang',
    description: 'Historic City of East Java',
    image: 'https://images.pexels.com/photos/1770560/pexels-photo-1770560.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    name: 'Maluku',
    description: 'Spice Islands Paradise',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    name: 'Bali',
    description: 'Island of Gods and Culture',
    image: 'https://images.pexels.com/photos/1619798/pexels-photo-1619798.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

interface CityCardsProps {
  onCityClick?: (cityName: string) => void;
}

export default function CityCards({ onCityClick }: CityCardsProps) {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-2">Explore Destinations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Next Adventure
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover four incredible Indonesian cities, each offering unique cultural experiences and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer fade-in"
              onClick={() => onCityClick?.(city.name)}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                <p className="text-sm text-gray-200 mb-4">{city.description}</p>
                <button className="inline-flex items-center gap-2 burnt-cocoa-bg px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-all transform opacity-0 group-hover:opacity-100 w-fit text-white">
                  Explore
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
