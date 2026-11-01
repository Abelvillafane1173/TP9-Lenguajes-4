import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Nosotros from './components/Nosotros';
import Booking from './components/Booking';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/reservacion" element={<Booking />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
