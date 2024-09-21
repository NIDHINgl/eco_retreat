import React from 'react';

const VideoSection = () => (
  <section id="video" className="py-16 px-4 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-10">Watch Our Retreat in Action</h2>
    <div className="max-w-4xl mx-auto">
      <div className="relative pb-9/16 h-0 overflow-hidden max-w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Ho9ND8ywmLI"
          title="SR Eco Retreat Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
    </div>
  </section>
);

export default VideoSection;
