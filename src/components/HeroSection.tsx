import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="fade-in">
          <p className="text-lg md:text-xl font-medium mb-4 text-gray-100">Feel The Experience</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Must Visit Indonesia
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Explore the most beautiful and iconic destinations across Indonesia. From pristine beaches to ancient temples and majestic mountains.
          </p>

          <button className="inline-flex items-center gap-2 burnt-cocoa-bg px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-white">
            Explore Now
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all">
            <p className="text-3xl font-bold">4</p>
            <p className="text-sm">Cities</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm">Destinations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all">
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm">Verified</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all">
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
