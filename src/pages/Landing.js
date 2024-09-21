import React, { useState, useEffect } from 'react';
import Home from './Home';
import Accommodations from './Accommodations';
import Activities from './Activities';
import MapSection from './MapSection';
import VideoSection from './VideoSection';


const Landing = () => {

  return (
    <div>
    {/* <Header /> */}
    <main>
      <Home />
      <Accommodations />
      <Activities />
      <VideoSection />
      <MapSection />
    </main>
    {/* <Footer /> */}
  </div>
  );
};

export default Landing;
