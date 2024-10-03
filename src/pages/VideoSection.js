import React from 'react';

const VideoSection = () => (
  <section
    id="video"
    className="py-16 px-4 bg-gray-100"
    style={{
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
    }}
  >
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-serif text-customBlack mb-4">
          Watch Our Retreat in Action
        </h2>
        <div className="w-24 h-1 bg-customAccent mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-sans">
          Experience the beauty and serenity of our retreat through this video.
        </p>
      </div>

      <div className="relative pb-9/16 h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
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
