import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/Products';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
