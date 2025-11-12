import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import ReviewsPage from './components/pages/ReviewsPage';
import HowToUsePage from './components/pages/HowToUsePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import ContactPage from './components/pages/ContactPage';
import FloatingLogo from './components/FloatingLogo';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <Navigation />
        <FloatingLogo />
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