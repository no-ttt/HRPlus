import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ForCompanies from './pages/ForCompanies';
import ForTalents from './pages/ForTalents';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/HRPlus">
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/for-talents" element={<ForTalents />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
