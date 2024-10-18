import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import AgeVerification from './components/AgeVerification';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {!isVerified && <AgeVerification onVerified={handleVerification} />}
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;