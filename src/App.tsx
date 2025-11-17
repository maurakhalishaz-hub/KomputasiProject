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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bandung" element={<Bandung />} />
          <Route path="/malang" element={<Malang />} />
          <Route path="/maluku" element={<Maluku />} />
          <Route path="/bali" element={<Bali />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;