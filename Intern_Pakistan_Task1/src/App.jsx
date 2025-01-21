import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InternshipListingsPage from './pages/InternshipListingsPage';
import InternshipDetailsPage from './pages/InternshipDetailsPage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/internships" element={<InternshipListingsPage />} />
        <Route path="/internship-details" element={<InternshipDetailsPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
