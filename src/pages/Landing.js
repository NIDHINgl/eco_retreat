import React from 'react';
import Home from './Home';
import CustomerReviews from '../components/CustomerReviews';
import Details from './Details';
import VideoSection from './VideoSection';


const Landing = () => {

  return (
    <div>
    <main>
      <Home />
      <Details />
      <VideoSection />
      <CustomerReviews />
    </main>
  </div>
  );
};

export default Landing;
