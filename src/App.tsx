import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CityCards from './components/CityCards';
import TopListTable from './components/TopListTable';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Maluku from './pages/Maluku';
import Bali from './pages/Bali';
import Bandung from './pages/Bandung';
import Malang from './pages/Malang';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'maluku' | 'malang' | 'bali' | 'bandung'>('home');

  if (currentPage === 'maluku') return <Maluku />;
if (currentPage === 'malang') return <Malang />;
if (currentPage === 'bali') return <Bali />;
if (currentPage === 'bandung') return <Bandung />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
     <CityCards onCityClick={(city) => {
        if (city === 'Maluku') {
          setCurrentPage('maluku');
        }
      }} />
      <TopListTable />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
