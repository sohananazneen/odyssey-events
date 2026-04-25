import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-[60vh] md:min-h-[80vh] lg:min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl md:text-6xl font-bold text-gray-900">
              Odyssey Events
            </h1>
            <p className="mb-5 text-lg md:text-xl text-gray-700">
              Discover extraordinary events across Bangladesh. From corporate
              summits to music festivals, find and book your next unforgettable
              experience with us.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary btn-lg">Explore Events</button>
              <button className="btn btn-outline btn-lg">Host Event</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
