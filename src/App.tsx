import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CityCards />
      <TopListTable />
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

import { useRef } from 'react';

function Home() {
  const topListRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onExploreClick={() => {
        topListRef.current?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <CityCards />
      <div ref={topListRef}>
        <TopListTable />
      </div>
      <FeatureSection />
      <Footer />
    </div>
  );
}


export default App;