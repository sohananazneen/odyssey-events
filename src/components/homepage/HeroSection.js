const HeroSection = () => {
  return (
    <div
      className="hero min-h-[70vh] lg:min-h-[85vh] relative"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1740370253630-046865db59e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold text-white">
            Odyssey Events
          </h1>
          <p className="mb-5 text-lg md:text-xl text-gray-200">
            Discover extraordinary events across Bangladesh. From corporate
            summits to music festivals.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary btn-lg">Explore Events</button>
            <button className="btn btn-outline btn-lg text-white">
              Host Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
