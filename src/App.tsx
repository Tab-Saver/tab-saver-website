import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import ReviewsPage from './components/pages/ReviewsPage';
import HowToUsePage from './components/pages/HowToUsePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import ContactPage from './components/pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}