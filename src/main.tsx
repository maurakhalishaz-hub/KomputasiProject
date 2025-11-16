import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bandung from './pages/Bandung';
import Malang from './pages/Malang';
import Maluku from './pages/Maluku';
import Bali from './pages/Bali';

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#6B4028] flex items-center justify-center">
            {/* logo / icon */}
          </div>
          <span className="text-2xl font-semibold text-[#6B4028]">
            Must Visit Indonesia
          </span>
        </div>

        <nav className="flex gap-10 text-lg text-slate-700">
          <Link to="/">Home</Link>
          <Link to="/bandung">Bandung</Link>
          <Link to="/malang">Malang</Link>
          <Link to="/maluku">Maluku</Link>
          <Link to="/bali">Bali</Link>
        </nav>
      </header>

      {/* ISI HALAMAN */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bandung" element={<Bandung />} />
        <Route path="/malang" element={<Malang />} />
        <Route path="/maluku" element={<Maluku />} />
        <Route path="/bali" element={<Bali />} />
      </Routes>
    </>
  );
}

export default App;