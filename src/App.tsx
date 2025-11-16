function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'maluku' | 'malang' | 'bali' | 'bandung'>('home');

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
          if (city === 'Maluku') setCurrentPage('maluku');
          else if (city === 'Malang') setCurrentPage('malang');
          else if (city === 'Bali') setCurrentPage('bali');
          else if (city === 'Bandung') setCurrentPage('bandung');
        }}
      />
      <TopListTable />
      <FeatureSection />
      <Footer />
    </div>
  );
}