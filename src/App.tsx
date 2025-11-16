function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'bandung' | 'malang' | 'maluku' | 'bali'>('home');

  if (currentPage === 'maluku') return <Maluku />;
  if (currentPage === 'malang') return <Malang />;
  if (currentPage === 'bali') return <Bali />;
  if (currentPage === 'bandung') return <Bandung />;

  return (
    <div className="min-h-screen bg-white">
      {/* kirim fungsi navigasi ke Header */}
      <Header onNavigate={(page) => setCurrentPage(page)} />

      <HeroSection />
      <CityCards
        onCityClick={(city) => {
          if (city === 'Maluku') setCurrentPage('Maluku');
          else if (city === 'Malang') setCurrentPage('Malang');
          else if (city === 'Bali') setCurrentPage('Bali');
          else if (city === 'Bandung') setCurrentPage('Bandung');
        }}
      />
      <TopListTable />
      <FeatureSection />
      <Footer />
    </div>
  );
}