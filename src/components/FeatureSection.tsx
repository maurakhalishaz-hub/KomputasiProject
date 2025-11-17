import { Palmtree, Users, MapPin, Shield } from 'lucide-react';

const features = [
  {
    icon: Palmtree,
    title: 'Exotic Destinations',
    description: 'Discover hidden gems and iconic landmarks across Indonesia\'s most beautiful regions.',
  },
  {
    icon: Users,
    title: 'Local Experiences',
    description: 'Connect with authentic Indonesian culture and meet local communities.',
  },
  {
    icon: MapPin,
    title: 'Easy Navigation',
    description: 'Comprehensive guides with detailed maps and directions to every destination.',
  },
  {
    icon: Shield,
    title: 'Safe Travel',
    description: 'Trusted recommendations with safety tips for every location.',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold burnt-cocoa uppercase tracking-wide mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Indonesia Like Never Before
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We provide comprehensive travel guides, honest reviews, and expert recommendations to help you make the most of your Indonesian adventure. From budget tips to luxury experiences, we have everything you need.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start hover:translate-x-2 transition-transform">
                    <div className="burnt-cocoa-bg p-3 rounded-lg flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://www.rajaampat.indonesia-tourism.com/images/rajaampat.jpg"
              alt="Indonesia Experience"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 burnt-cocoa-bg rounded-2xl p-6 text-white shadow-lg max-w-xs">
              <p className="text-3xl font-bold mb-2">10K+</p>
              <p className="text-sm">Happy travelers have explored Indonesia with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
