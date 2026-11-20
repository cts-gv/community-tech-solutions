import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InternetSlowPage from './pages/InternetSlowPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/internet-slow" element={<InternetSlowPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<LegalPage pageKey="terms" />} />
          <Route path="/privacy" element={<LegalPage pageKey="privacy" />} />
          <Route path="/consumer-health-data" element={<LegalPage pageKey="consumerHealthData" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
