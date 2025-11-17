import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';

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

function Home() {
  const topListRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    topListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onExploreClick={handleExploreClick} />
      <CityCards />
      <div ref={topListRef}>
        <TopListTable />
      </div>
      <FeatureSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bandung" element={<Bandung />} />
        <Route path="/malang" element={<Malang />} />
        <Route path="/maluku" element={<Maluku />} />
        <Route path="/bali" element={<Bali />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;