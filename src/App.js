import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Activities from './pages/Activities';
import MapSection from './pages/MapSection';

function App() {
  return (
    <div>
    <Header />
    <main>
      <Home />
      <Accommodations />
      <Activities />
      <MapSection />
    </main>
    <Footer />
  </div>
  );
}

export default App;
